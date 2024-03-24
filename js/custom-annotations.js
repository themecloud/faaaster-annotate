document.addEventListener("DOMContentLoaded", async function () {

  // Test if page is loaded inside an iframe
  var isIframe = window !== window.top;

  // Test if mobile device
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Test if window width < 768px
  var isSmallScreen = window.innerWidth < 768;

  // Return if mobile device, small screen or iframe
  if(isMobile || isSmallScreen || isIframe) {
    return;
  }

  // Set translations
  const translations = {
    fr: {
      introText: "Laissez des annotations directement sur le site !",
      new: "Nouveau !",
      helpText:
        "Cliquez un bloc de texte pour ajouter un commentaire. Cliquez sur un commentaire ci dessous pour le localiser dans la page.",
      navigate: "Naviguer",
      annotate: "Annoter",
      loginText:
        "Veuillez choisir un identifiant et saisir votre email pour pouvoir annoter le site.",
      username: "Identifiant",
      validate: "Valider",
      days: "j",
      weeks: "s",
    },
    en: {
      introText: "Laissez des annotations directement sur le site !",
      new: "New!",
      helpText:
        "Click text to add a comment. Click on a comment below to locate it on the page.",
      navigate: "Navigate",
      annotate: "Annotate",
      loginText:
        "Please choose a username and enter your email to be able to annotate the site.",
      username: "Username",
      validate: "Validate",
      days: "d",
      weeks: "w",
    },
  };

  // Access applicationId and instanceId from PHP
  var locale = appConfig.locale.substring(3, 5);
  var lang = locale.includes("FR") ? "fr" : "en";
  const wpuser = appConfig.user;
  const wpemail = appConfig.email;
  const wpannotate = appConfig.annotate;
  const disabledStatus = appConfig.disabled;

  var anno = null;
  let annotateblock = false;
  const homeUrl = window.location.protocol + "//" + window.location.host;
  var encodedPathName = (window.location.host + window.location.pathname)
    .replace(/\//g, "-")
    .replace(/\./g, "-");
  var newEncodedPathName = window.location.pathname
    .replace(/\//g, "%%");
  var targetElement = document.body;
  let wpAdminBarHeight = 0;
  if (document.getElementById("wpadminbar")) {
    wpAdminBar = document.getElementById("wpadminbar").getBoundingClientRect();
    wpAdminBarHeight = wpAdminBar.height;
  }

  /****** TIME AGO ******/
  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date); // Difference in milliseconds

    // Convert to minutes, hours, days, weeks, or months
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.ceil(diffDays / 7);
    const diffMonths = Math.ceil(diffDays / 30);

    if (diffMinutes < 60) {
      return `${diffMinutes}m`;
    } else if (diffHours < 24) {
      return `${diffHours}h`;
    } else if (diffDays < 7) {
      return `${diffDays}${translations[lang].days}`;
    } else if (diffWeeks < 4) {
      return `${diffWeeks}${translations[lang].weeks}`;
    } else {
      return `${diffMonths}m`;
    }
  }

  /****** MANAGE COOKIES ******/

  // Function to set cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get cookie
  function getCookieValue(name) {
    // Split document.cookie on semicolons and spaces
    const cookies = document.cookie.split("; ");

    // Look for the cookie with the specified name
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");

      // If the cookie's name matches the provided name, return its value
      if (cookie[0] === name) {
        return cookie[1];
      }
    }

    // If the cookie is not found, return undefined or a default value
    return undefined;
  }

  /****** INIT VARIABLES ******/

  // Get user and annotateMode from cookie
  let faaasterAnnotate = getCookieValue("faaaster-annotate")
    ? JSON.parse(getCookieValue("faaaster-annotate"))
    : { username: undefined, annotateMode: false, showIntro: true, disabled: false };

  // Init user and annotateMode
  let annotateMode =
    wpannotate == "true"
      ? true
      : wpannotate == "false"
        ? false
        : faaasterAnnotate.annotateMode;
  let user = wpuser
    ? wpuser
    : faaasterAnnotate.username
      ? faaasterAnnotate.username
      : false;
  let email = wpemail
    ? wpemail
    : faaasterAnnotate.email
      ? faaasterAnnotate.email
      : false;
  let showIntro = faaasterAnnotate.showIntro ?? true;
  let disabled = disabledStatus == false ? false : faaasterAnnotate.disabled;
  setCookie(
    "faaaster-annotate",
    JSON.stringify({
      username: user,
      email: email,
      annotateMode: annotateMode,
      showIntro: showIntro,
      disabled: disabled,
    }),
    30
  );

  // Init body for annotations
  document.body.id = "myCustomId";

  /******* ADD INTERFACE ******/

  // Add Pointers container
  var pointers = document.createElement("div");
  pointers.id = "faaasterPointers";
  targetElement.appendChild(pointers);

  // Add hover pointer to Pointers
  var hoverPointer = document.createElement("div");
  hoverPointer.id = "hoverPointer";
  hoverPointer.classList.add("hover-pointer");
  pointers.appendChild(hoverPointer);

  // Add Loading overlay
  var loading = document.createElement("div");
  loading.id = "faaasterLoading";

  // Add Login Modal
  var modal = document.createElement("div");
  modal.id = "userModal";
  const modalContent =
    '<div class="faaaster-modal-content"><p>' +
    translations[lang].loginText +
    '</p><form id="loginForm"><label for="username">' +
    translations[lang].username +
    '</label><input type="text" id="username" name="username"><label for="password">Email</label><input type="email" id="email" name="email"><input class="modalButton" type="submit" value="' +
    translations[lang].validate +
    '"></form></div>';
  modal.innerHTML += modalContent;
  targetElement.appendChild(modal);

  // Add Intro Modal
  var introModal = document.createElement("div");
  introModal.id = "introModal";
  const introModalContent =
    '<div class="faaaster-modal-intro"><span class="modal-new">' +
    translations[lang].new +
    '</span><span id="intro-close">&times;</span><span>' +
    translations[lang].introText +
    "</span></div>";
  introModal.innerHTML += introModalContent;
  targetElement.appendChild(introModal);

  // Hide modal if annotateMode or if click close
  var closeIntro = document.getElementById("intro-close");
  closeIntro.addEventListener("click", function () {
    introModal.classList.add("faaaster-hidden");
    showIntro = false;
    setCookie(
      "faaaster-annotate",
      JSON.stringify({
        username: user,
        email: email,
        annotateMode: annotateMode,
        showIntro: false,
        disabled: disabled,
      }),
      30
    );
  });
  if (showIntro === false) {
    introModal.classList.add("faaaster-hidden");
  }

  let form = document.getElementById("loginForm");

  // Hide modal if user set or annotateMode false
  if (!user && annotateMode == true) {
    modal.style.display = "block";
  }

  form.onsubmit = async function (e) {
    e.preventDefault();

    user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    const args = { id: email, displayName: user };
    anno.setAuthInfo(args);
    setCookie(
      "faaaster-annotate",
      JSON.stringify({
        username: user,
        email: email,
        annotateMode: true,
        showIntro: showIntro,
        disabled: disabled,
      }),
      30
    );
    modal.style.display = "none";
    if (user && email) {
      await fetch("/wp-json/annotate/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user, email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("Success:", data);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  // Add ActionBar
  var actionBar = document.createElement("div");
  actionBar.id = "actionBar";
  //const actionBarContent = '<div id="annotateToggle" class="actionBarButton"></div><div id="navigateToggle" class="actionBarButton"></div><div class="actionBarButton" id="shareModal"></div>';
  const actionBarContent =
    '<div id="annotateToggle" class="actionBarButton"></div><div id="navigateToggle" class="actionBarButton"></div><div id="disableToggle" class="actionBarButton"></div>';
  actionBar.innerHTML += actionBarContent;
  targetElement.appendChild(actionBar);

  // Initialize actionBar
  var annotateToggle = document.getElementById("annotateToggle");
  var navigateToggle = document.getElementById("navigateToggle");
  var disableToggle = document.getElementById("disableToggle");
  if (annotateMode) {
    annotateToggle.classList.add("selected");
  } else {
    navigateToggle.classList.add("selected");
  }
  // Function to hide sidebar
  function toggleSidebar() {
    const element = document.getElementById("annotationSidebar");
    if (!element.classList.contains("sideBarHidden")) {
      element.classList.add("sideBarHidden");
    } else {
      element.classList.remove("sideBarHidden");
    }
  }

  // Function to check if an element should trigger anno
  function trigger(element) {
    if (!anno) {
      return false;
    }
    if (document.querySelector(".r6o-editor")) {
      annotateblock = true;
    } else {
      annotateblock = false;
    }
    let hasTextChildren = false;
    for (let i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].nodeType === Node.TEXT_NODE) {
        hasTextChildren = true;
      }
    }

    const textEvent = element.nodeType === Node.TEXT_NODE || hasTextChildren;
    let imageEvent = false;

    // WIP manage images
    // if (element.tagName === 'IMG') {
    //   imageEvent = true;
    // } else {
    //   // Check if clicked element has an image child
    //   for (let i = 0; i < element.childNodes.length; i++) {
    //     if (element.childNodes[i].tagName === "IMG") {
    //       imageEvent = true;
    //     }
    //   }
    // }

    const triggerAnno =
      element.closest(".r6o-editor") !== null
        ? false
        : element.closest("#annotationSidebar") !== null
          ? false
          : element.closest("#wpadminbar") !== null
            ? false
            : element.closest("#actionBar") !== null
              ? false
              : element.closest("#userModal") !== null
                ? false
                : element.closest("#introModal") !== null
                  ? false
                  : element.closest("#faaasterPointers") !== null
                    ? false
                    : annotateblock
                      ? false
                      : textEvent
                        ? true
                        : false;
    const clickThrough =
      element.closest(".r6o-editor") !== null
        ? true
        : element.closest("#annotationSidebar") !== null
          ? true
          : element.closest("#wpadminbar") !== null
            ? true
            : element.closest("#actionBar") !== null
              ? true
              : element.closest("#userModal") !== null
                ? true
                : element.closest("#introModal") !== null
                  ? true
                  : annotateblock
                    ? false
                    : !annotateMode
                      ? true
                      : false;

    // console.log("triggerAnno", triggerAnno, element);
    // console.log("clickThrough", clickThrough);
    // console.log("trigger", triggerAnno);
    return [triggerAnno, clickThrough];
  }

  // function to Create sidebar container
  function createSidebar() {
    var sidebar = document.createElement("div");

    sidebar.innerHTML +=
      "<div id='sidebar-header'><div id='sidebar-title'><h2>Annotations</h2></div><div id='sidebar-help'><h4>" +
      translations[lang].helpText +
      "</h4></div></div><ul id='sidebar-annotations'></ul><div id='annotate-mode'><span class='mySwitchText'>Naviguer</span><input type='checkbox' id='mySwitch' /><label for='mySwitch' id='mySwitchLabel'>" +
      translations[lang].navigate +
      "</label><span class='mySwitchText'>" +
      translations[lang].annotate +
      "</span></div><div id='anno-minimize'><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 256 512' class='jss590' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path></svg></div>";
    sidebar.id = "annotationSidebar";

    // // Create a list inside the sidebar
    // var list = document.createElement('ul');
    // sidebar.appendChild(list);

    // Append the sidebar to the body
    document.body.appendChild(sidebar);

    // Get the checkbox element

    // Attach a change event listener to the checkbox
    const mySwitch = document.getElementById("mySwitch");
    // Check if adsmin bar
    if (document.getElementById("wpadminbar")) {
      sidebar.classList.add("annotationAdmin");
    }
    mySwitch.checked = annotateMode;

    mySwitch.addEventListener("change", function () {
      // Update the global variable based on the checkbox state
      annotateMode = this.checked;
      if (annotateMode == false) {
        // Hide 'r6o-annotation'
        const elements = document.querySelectorAll(".r6o-annotation");
        elements.forEach(function (element) {
          element.classList.replace("r6o-annotation", "r6o-annotation-hidden");
        });
        // Hide 'r6o-pointers'
        const pointers = document.getElementById("faaasterPointers");
        pointers.classList.add("faaaster-hidden");
        console.log("set cookie annotateMode false");
        setCookie(
          "faaaster-annotate",
          JSON.stringify({
            username: user,
            email: email,
            annotateMode: false,
            showIntro: showIntro,
            disabled: disabled,
          }),
          30
        );
        annotateToggle.classList.remove("selected");
        navigateToggle.classList.add("selected");
      } else {
        loading.classList.remove("faaaster-hidden");
        initAnno();
        if (!user) {
          modal.style.display = "block";
        }
        // Show 'r6o-annotation'
        const elements = document.querySelectorAll(".r6o-annotation-hidden");
        elements.forEach(function (element) {
          element.classList.replace("r6o-annotation-hidden", "r6o-annotation");
        });
        // Show 'r6o-pointers'
        const pointers = document.getElementById("faaasterPointers");
        pointers.classList.remove("faaaster-hidden");
        setCookie(
          "faaaster-annotate",
          JSON.stringify({
            username: user,
            email: email,
            annotateMode: true,
            showIntro: showIntro,
            disabled: disabled,
          }),
          30
        );
        annotateToggle.classList.add("selected");
        navigateToggle.classList.remove("selected");
      }
    });

    // Attach a toggle event to anno-minimize
    const annoMinimize = document.getElementById("anno-minimize");
    annoMinimize.addEventListener("click", function () {
      toggleSidebar();
    });
  }

  async function initAnno() {
    targetElement.appendChild(loading);

    // Initialize recogito.js
    anno = Recogito.init({
      content: document.getElementById("myCustomId"),
      locale: locale,
      allowEmpty: true,
      widgets: [
        { widget: "COMMENT" },
        {
          widget: "TAG",
          vocabulary: ["Nouveau", "En cours", "À valider", "Validé"],
        },
      ],
      // other configuration options
    });

    // Initialize user
    const args = { id: homeUrl + "/" + user, displayName: user };
    anno.setAuthInfo(args);
    // console.log("user", user, email);
    if (user && email) {
      await fetch("/wp-json/annotate/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user, email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("Success:", data);
        })
        .catch((error) => console.error("Error:", error));
    }
    let loadPath = newEncodedPathName;
    await fetch("/wp-json/annotate/v1/annotations/?url=" + newEncodedPathName, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        if (data.length == 0) {
          loadPath = encodedPathName;
        }
      })
      .catch((error) => console.error("Error:", error));


    // Load existing annotations
    await anno
      .loadAnnotations(
        "/wp-json/annotate/v1/annotations?url=" + loadPath
      )
      .then(function (annotations) {
        loading.classList.add("faaaster-hidden");
        updateSidebar(annotations);
        optimizeAnnotations(annotations);
        setupClickListeners();
        // Set annotateMode cookie if not exists
        if (annotateMode == false) {
          const mySwitch = document.getElementById("mySwitch");
          mySwitch.checked = false;
          // Dispatch the `change` event
          const changeEvent = new Event("change", {
            bubbles: true,
            cancelable: true,
          });
          mySwitch.dispatchEvent(changeEvent);
        }
      });
    // Optimize and store annotations

    anno.on("createAnnotation", function (annotation) {
      var commentsData = anno.getAnnotations();
      commentsData.sort((a, b) => {
        const dateA = new Date(a.body[0].created);
        const dateB = new Date(b.body[0].created);
        return dateA - dateB; // Ascending order
      });
      commentsData.forEach((object, index) => {
        object.index = index;
      });
      updateSidebar(commentsData);
      optimizeAnnotations(commentsData);
      setupClickListeners();
      fetch("/wp-json/annotate/v1/proxy/?url=" + newEncodedPathName, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentsData),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
      clearSelections();
    });

    anno.on("updateAnnotation", function (annotation) {
      var commentsData = anno.getAnnotations();
      commentsData.sort((a, b) => {
        const dateA = new Date(a.body[0].created);
        const dateB = new Date(b.body[0].created);
        return dateA - dateB; // Ascending order
      });
      commentsData.forEach((object, index) => {
        object.index = index;
      });
      updateSidebar(commentsData);

      optimizeAnnotations(commentsData);
      setupClickListeners();

      fetch("/wp-json/annotate/v1/proxy/?url=" + newEncodedPathName, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentsData),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("Success:", data);
        })
        .catch((error) => console.error("Error:", error));

      clearSelections();
    });
  }
  createSidebar();

  if (annotateMode == true) {
    initAnno();
  } else {
    // Hide 'r6o-annotations'
    const elements = document.querySelectorAll(".r6o-annotation");
    elements.forEach(function (element) {
      element.classList.replace("r6o-annotation", "r6o-annotation-hidden");
    });
    // Hide 'r6o-pointers'
    const pointers = document.getElementById("faaasterPointers");
    pointers.classList.add("faaaster-hidden");
    toggleSidebar();
  }
  // Manage custom cursor

  document.addEventListener("mouseover", function (event) {
    // Check if the target should be triggered
    if (!annotateMode) {
      event.target.removeAttribute("faaaster-annotate");
      return;
    }
    if (trigger(event.target)[0]) {
      // Step 1: Select all elements with the 'faaaster-annotate' attribute
      const elements = document.querySelectorAll("[faaaster-annotate]");

      // Step 2: Iterate through the selected elements
      elements.forEach((el) => {
        // Step 3: Remove the 'faaaster-annotate' attribute from each element
        if (el != event.target) {
          el.removeAttribute("faaaster-annotate");
        }
      });
      event.target.setAttribute("faaaster-annotate", true);
      const element = event.target;

      // Get position and size of the hovered element
      const rect = element.getBoundingClientRect();

      // Check if the annotationElement or any of its parent elements are fixed
      const fixedPosition = isPositionFixed(event.target);

      const pointerElement = document.getElementById("hoverPointer");

      // Set style to position the pointer element at the same place
      pointerElement.style.position = fixedPosition ? "fixed" : "absolute";
      pointerElement.style.left =
        rect.left + (fixedPosition ? 0 : window.scrollX) + "px";
      pointerElement.style.top =
        rect.top +
        (fixedPosition ? 0 : window.scrollY - wpAdminBarHeight) +
        "px";
      pointerElement.style.width = rect.width + "px";
      pointerElement.style.height = rect.height + "px";

      // Add click event listener to the pointer element
      pointerElement.addEventListener("click", function (event) {
        const element = document.querySelector("[faaaster-annotate]");

        // Simulate a mousedown on the annotationElement
        const downEvent = new MouseEvent("mousedown", {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        element.dispatchEvent(downEvent);

        // Simulate a mousedown on the annotationElement
        const upEvent = new MouseEvent("mouseup", {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        element.dispatchEvent(upEvent);
      });
    } else {
      // Remove the class if not hovering over text
      event.target.removeAttribute("faaaster-annotate");
    }
  });

  // Function to populate the sidebar with annotations
  function updateSidebar(annotations) {
    annotations.sort(
      (a, b) => new Date(b.body[0].modified) - new Date(a.body[0].modified)
    );

    var list = document.getElementById("sidebar-annotations");
    list.innerHTML = ""; // Clear existing list items

    annotations.forEach((annotation) => {
      const modified = annotation.body[0].modified;
      const modifiedDate = new Date(modified);
      const prettyModified = modifiedDate.toLocaleString(locale);
      const prettyTimeAgo = timeAgo(modifiedDate);
      var listItem = document.createElement("li");
      listItem.classList.add("sidebar-annotation-container");
      listItem.dataset.annotationId = annotation.id; // Assign a unique identifier
      list.appendChild(listItem);
      var newItem = document.querySelector(
        "[data-annotation-id='" + annotation.id + "'"
      ); //
      var commentsNumber =
        annotation.body.filter((item) => item.purpose === "commenting").length -
        1;
      var tagsNumber =
        annotation.body.filter((item) => item.purpose === "tagging").length ??
        0;
      var listItem =
        '<div class="sidebar-annotation"><div class="sidebar-annotation-content"><span class="sidebar-annotation-index"><span>' +
        annotation.index +
        "</span></span>" +
        annotation.body[0].value +
        '</div><div class="sidebar-annotation-meta"><span class="r6o-lastmodified-by">' +
        annotation.body[0].creator.name +
        '</span><span class="anno-comments-number ' +
        "n" +
        commentsNumber +
        '">' +
        commentsNumber +
        '</span><span class="anno-tags-number ' +
        "n" +
        tagsNumber +
        '">' +
        tagsNumber +
        '</span><span class="r6o-lastmodified-at"><time class="" style="--before-content:' +
        prettyModified +
        '">' +
        prettyTimeAgo +
        "</time></span></div></div>";
      newItem.innerHTML += listItem;
    });
  }
  // Function to scroll and highlight selected annotation
  function setupClickListeners() {
    var sidebarAnnotations = document
      .getElementById("sidebar-annotations")
      .getElementsByTagName("li");
    Array.from(sidebarAnnotations).forEach((item) => {
      item.addEventListener("click", function (event) {
        const closestLi = event.target.closest("li");
        closestLi.classList.add("anno-selected");
        scrollToAndHighlight(item.dataset.annotationId).then(() => {
          const element = document.querySelector(
            '.r6o-annotation[data-id="' + item.dataset.annotationId + '"]'
          );

          // Check if the element exists, then simulate a click
          if (element) {
            element.classList.add("anno-selected");
            element.click();
            var mouseupEvent = new MouseEvent("mouseup", {
              isTrusted: true,
              bubbles: true,
              cancelable: true,
              composer: true,
              detail: 1,
            });
            element.dispatchEvent(mouseupEvent);
          } else {
            // console.log(">>>>>>>>> Element not found");
          }
        });
      });
    });
  }
  function scrollToAndHighlight(annotationId) {
    return new Promise((resolve, reject) => {
      var pageAnnotations = document.querySelectorAll(".r6o-annotation");
      Array.from(pageAnnotations).forEach((annotation) => {
        annotation.classList.remove("anno-selected");
      });

      var pageAnnotation = document.querySelector(
        ".r6o-annotation[data-id='" + annotationId + "'"
      );
      // Get the corresponding page annotation
      if (pageAnnotation) {
        pageAnnotation.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          pageAnnotation.classList.add("anno-selected");
          resolve();
        }, 600);
      } else {
        reject("Annotation not found");
      }
    });
  }

  // Function to find the most similar string
  function levenshteinDistance(a, b) {
    const matrix = [];

    // Initialize the matrix
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // Compute the distance
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }

  // Function to check if an element or any of its parents have position fixed
  function isPositionFixed(element) {
    while (element) {
      if (window.getComputedStyle(element).position === "fixed") {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }

  // Create pointers
  function createAndPositionPointer(annotationElement, index, id) {
    // Create a new element with class 'r6o-pointer'
    const pointerElement = document.createElement("div");
    pointerElement.className = "r6o-pointer";

    // Get position and size of the annotation element
    const rect = annotationElement.getBoundingClientRect();

    // Check if the annotationElement or any of its parent elements are fixed
    const fixedPosition = isPositionFixed(annotationElement);

    // Set style to position the pointer element at the same place
    pointerElement.style.position = fixedPosition ? "fixed" : "absolute";
    pointerElement.style.left =
      rect.left + (fixedPosition ? 0 : window.scrollX) + "px";
    pointerElement.style.top =
      rect.top + (fixedPosition ? 0 : window.scrollY - wpAdminBarHeight) + "px";
    pointerElement.style.width = rect.width + "px";
    pointerElement.style.height = rect.height + "px";
    pointerElement.style.cursor = "pointer";
    pointerElement.setAttribute("pointer-id", id);
    pointerElement.style.setProperty("--after-content", '"' + index + '"');
    // Add click event listener to the pointer element
    pointerElement.addEventListener("click", function (event) {
      const element = document.querySelector(
        ".r6o-annotation[data-id='" +
        event.target.getAttribute("pointer-id") +
        "'"
      );

      // Simulate a mousedown on the annotationElement
      const downEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      element.dispatchEvent(downEvent);

      // Simulate a mouseup on the annotationElement
      const upEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      element.dispatchEvent(upEvent);
    });

    // Append the pointer element to the body
    pointers.appendChild(pointerElement);
  }

  // Optimize annotations new

  function optimizeAnnotations(annotations) {
    annotations.forEach((annotation) => {
      var elements = document.querySelectorAll(
        "[data-id='" + annotation.id + "'"
      );
      elements.forEach((element) => {
        createAndPositionPointer(element, annotation.index, annotation.id);
      });
      elements.forEach((element) => {
        element.style.setProperty(
          "--after-content",
          '"' + annotation.index + '"'
        );
      });
    });
  }

  document.addEventListener(
    "mousedown",
    function (event) {
      if (!annotateMode || event.target.id == hoverPointer) {
        event.stopPropagation();
        return;
      }
      if (trigger(event.target)[0] == true) {
        event.stopPropagation();
        event.preventDefault();
        var clickedElement = event.target;

        // Ovcerwrite selection
        var selection = document.getSelection();
        selection.removeAllRanges();
        var range = document.createRange();
        range.selectNodeContents(clickedElement);
        selection.addRange(range);
        const clonedContents = range.cloneContents();
        const tempDiv = document.createElement("div");
        tempDiv.appendChild(clonedContents);
        event.stopPropagation();
      }
    },
    true
  );
  document.addEventListener(
    "mouseup",
    function (event) {
      // Prevent propagation on interface
      if (
        event.target.closest("#actionBar") ||
        event.target.closest(".r6o-editor") ||
        event.target.classList.contains("sidebar-annotation-container")
      ) {
        event.stopPropagation();
        return;
      }

      // Prevent propagation if annotate mode disabled or hover pointer
      if (!annotateMode || event.target.id == hoverPointer) {
        event.stopPropagation();
        return;
      }

      // Prevent propagation if trigger false and not a pointer nor annotation
      if (
        trigger(event.target)[0] == false &&
        !event.target.classList.contains("r6o-annotation") &&
        !event.target.classList.contains("r6o-pointer")
      ) {
        event.stopPropagation();
      }
    },
    true
  );
  document.addEventListener("mouseup", function (event) {
    if (trigger(event.target)[0] == true) {
      event.stopPropagation();
    }
  });

  document.addEventListener("click", function (event) {
    //alert("click clickthrough", trigger(event.target));
    if (event.target.id == "annotateToggle" && annotateMode == false) {
      navigateToggle.classList.remove("selected");
      event.target.classList.add("selected");
      const newEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      mySwitch.dispatchEvent(newEvent);
      const sideBAr = document.getElementById("annotationSidebar");
      if (sideBAr.classList.contains("sideBarHidden")) {
        sideBAr.classList.remove("sideBarHidden");
      }
    }
    if (event.target.id == "disableToggle") {
      setCookie(
        "faaaster-annotate",
        JSON.stringify({
          username: user,
          email: email,
          annotateMode: false,
          showIntro: false,
          disabled: true,
        }),
        30
      );
      // Get the current URL
      const currentUrl = window.location.href;

      // Create a URL object (to easily manipulate different parts of the URL)
      const url = new URL(currentUrl);

      // Check if the URL has the 't' query parameter
      if (url.searchParams.has('t')) {
          // Remove the 't' query parameter
          url.searchParams.delete('t');

          // Navigate to the URL without the 't' parameter
          window.location.href = url.href;
      } else {
          // If there's no 't' parameter, you can optionally reload the page
          // Or do nothing, depending on your needs
          console.log("Query parameter 't' not found.");
          window.location.reload();
      }

    }
    if (event.target.id == "navigateToggle" && annotateMode == true) {
      annotateToggle.classList.remove("selected");
      event.target.classList.add("selected");
      modal.style.display = "none";
      const newEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });

      mySwitch.dispatchEvent(newEvent);
      const sideBAr = document.getElementById("annotationSidebar");
      if (!sideBAr.classList.contains("sideBarHidden")) {
        sideBAr.classList.add("sideBarHidden");
      }
    }

    if (!annotateMode) {
      return;
    }
    if (
      !annotateblock &&
      !event.target.classList.contains("r6o-annotation") &&
      !event.target.classList.contains("sidebar-annotation-container")
    ) {
      var editors = document.querySelectorAll(".r6o-annotation");
      editors.forEach((element) => {
        element.classList.remove("anno-selected");
      });
      var annos = document.querySelectorAll(".sidebar-annotation-container");
      annos.forEach((element) => {
        element.classList.remove("anno-selected");
      });
    }
    if (!trigger(event.target)[1]) {
      event.preventDefault();
    }
    if (trigger(event.target)[0]) {
      event.preventDefault();
    }
  });
  function clearSelections() {
    const spans = Array.prototype.slice.call(
      document.querySelectorAll(".r6o-selection")
    );
    if (spans) {
      spans.forEach((span) => {
        const parent = span.parentNode;
        parent.insertBefore(document.createTextNode(span.textContent), span);
        parent.removeChild(span);
      });
    }
  }
});
