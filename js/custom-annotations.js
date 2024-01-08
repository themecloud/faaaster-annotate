import { finder } from "@medv/finder";

document.addEventListener("DOMContentLoaded", function () {
  // Access applicationId and instanceId from PHP
  var locale = appConfig.locale.substring(0, 2);
  var user = appConfig.user;
  var userCookie = appConfig.cookie;
  var anno = null;
  let annotateblock = false;
  var url =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname;
  var encodedUrl = encodeURIComponent(url);
  var encodedPathName = (window.location.host + window.location.pathname)
    .replace(/\//g, "-")
    .replace(/\./g, "-");

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
  console.log("cookie annotateMode", getCookieValue("annotateMode"));
  let annotateMode = getCookieValue("annotateMode") ?? true;

  // Set user cookie if not exists
  if (!userCookie) {
    setCookie("annotate", user, 7);
  }

  // Init body for annotations
  document.body.id = "myCustomId";

  /******* FLOATING BUTTON ******/

  // Add interface
  var saveButton = document.createElement("button");
  saveButton.id = "saveCommentButton";
  saveButton.textContent = "Save Comment";

  // Identify the target element where the button will be placed
  var targetElement = document.body; // Replace with your target element's ID

  // Append the button to the target element
  targetElement.appendChild(saveButton);

  // Add click event listener to the button
  saveButton.addEventListener("click", function () {
    anno
      .loadAnnotations("/wp-json/annotate/v1/annotations/")
      .then(function (annotations) {
        console.log("annotations loaded", annotations);
      });
  });

  // Function to hide sidebar
  function toggleSidebar() {
    const element = document.getElementById("annotationSidebar");
    if (!element.classList.contains("sideBarHidden")) {
      console.log("Close SideBar");
      element.classList.add("sideBarHidden");
    } else {
      console.log("Open SideBar");
      element.classList.remove("sideBarHidden");
    }
  }

  // Function to check if an element should trigger anno
  function trigger(element) {
    console.log("anno", anno);
    if (!anno) {
      return false;
    }
    console.log("trigger element", element);
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
    console.log("hasTextChildren", hasTextChildren);
    console.log(
      "SIDEBAR CLICK",
      element.closest("#annotationSidebar") !== null
    );
    const textEvent = element.nodeType === Node.TEXT_NODE || hasTextChildren;
    console.log(" trigger textEvent", textEvent);
    console.log("trigger annotateblock", annotateblock);

    const triggerAnno =
      element.closest(".r6o-editor") !== null
        ? false
        : element.closest("#annotationSidebar") !== null
        ? false
        : element.closest("#wpadminbar") !== null
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
        : annotateblock
        ? false
        : !annotateMode
        ? true
        : false;

    // console.log("triggerAnno", triggerAnno);
    // console.log("clickThrough", clickThrough);
    console.log("trigger", triggerAnno);
    return [triggerAnno, clickThrough];
  }

  // function to Create sidebar container
  function createSidebar() {
    var sidebar = document.createElement("div");

    sidebar.innerHTML +=
      "<div id='sidebar-header'><div id='sidebar-title'><h2>Annotations</h2></div><div id='sidebar-help'><h4>Sélectionnez du texte pour ajouter un commentaire.<br>Cliquez sur un commentaire ci dessous pour le localiser dans la page.</h4><h4 class='anno-refresh'>Refresh</h4></div></div><ul id='sidebar-annotations'></ul><div id='annotate-mode'><span class='mySwitchText'>Naviguer</span><input type='checkbox' id='mySwitch' /><label for='mySwitch' id='mySwitchLabel'>Annotate</label><span class='mySwitchText' style='text-align:right'>Annoter</span></div><div id='anno-minimize'><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 256 512' class='jss590' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path></svg></div>";
    sidebar.id = "annotationSidebar";

    // // Create a list inside the sidebar
    // var list = document.createElement('ul');
    // sidebar.appendChild(list);

    // Append the sidebar to the body
    document.body.appendChild(sidebar);

    // Get the checkbox element

    // Attach a change event listener to the checkbox
    const mySwitch = document.getElementById("mySwitch");
    mySwitch.checked = true;
    // Check if adsmin bar
    if (document.getElementById("wpadminbar")) {
      sidebar.classList.add("annotationAdmin");
    }

    mySwitch.addEventListener("change", function () {
      console.log("test switch", this.checked);
      // Update the global variable based on the checkbox state
      annotateMode = this.checked;
      console.log("annotateMode state is now:", annotateMode);
      if (annotateMode == false) {
        console.log("DESTROY ANNO");
        // Select all elements with the class 'r6o-annotation'
        const elements = document.querySelectorAll(".r6o-annotation");

        // Loop through the NodeList and change the class
        elements.forEach(function (element) {
          element.classList.replace("r6o-annotation", "r6o-annotation-hidden");
        });
        document.cookie = "annotateMode=false; path=/";
      } else {
        // Select all elements with the class 'r6o-annotation'
        const elements = document.querySelectorAll(".r6o-annotation-hidden");

        // Loop through the NodeList and change the class
        elements.forEach(function (element) {
          element.classList.replace("r6o-annotation-hidden", "r6o-annotation");
        });
        document.cookie = "annotateMode=true; path=/";
      }
    });

    // Attach a toggle event to anno-minimize
    const annoMinimize = document.getElementById("anno-minimize");
    annoMinimize.addEventListener("click", function () {
      toggleSidebar();
    });
  }

  function initAnno() {
    console.log("INITIALIZE ANNO");
    // Initialize recogito.js
    anno = Recogito.init({
      content: document.getElementById("myCustomId"),
      locale: locale,
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
    var homeUrl = window.location.protocol + "//" + window.location.host;
    const args = { id: homeUrl + "/" + user, displayName: user };
    console.log("args", args);
    anno.setAuthInfo(args);

    fetch("/wp-json/annotate/v1/annotations/?url=" + encodedPathName, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));

    // Load existing annotations
    anno
      .loadAnnotations(
        "/wp-json/annotate/v1/annotations?url=" + encodedPathName
      )
      .then(function (annotations) {
        console.log("annotations loaded", annotations);
        updateSidebar(annotations);
        optimizeAnnotations(annotations);
        setupClickListeners();
        // Set annotateMode cookie if not exists
        console.log("change switch", getCookieValue("annotateMode"));
        if (getCookieValue("annotateMode") == "false") {
          console.log("switch false");
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
  }
  createSidebar();
  initAnno();
  // Manage custom cursor
  /*
  document.addEventListener("mouseover", function (event) {
    // Check if the target should be triggered
    console.log("cursor trigger", trigger(event.target)[0]);
    if (!annotateMode) {
      return;
    }
    if (trigger(event.target)[0]) {
      console.log("");
      event.target.classList.add("faaaster-annotate");
    } else {
      // Remove the class if not hovering over text
      event.target.classList.remove("faaaster-annotate");
    }
  });
  */
  // Function to populate the sidebar with annotations
  function updateSidebar(annotations) {
    annotations.sort(
      (a, b) => new Date(b.body[0].modified) - new Date(a.body[0].modified)
    );

    var list = document.getElementById("sidebar-annotations");
    list.innerHTML = ""; // Clear existing list items

    annotations.forEach((annotation) => {
      console.log("anno", annotation);
      const modified = annotation.body[0].modified;
      const modifiedDate = new Date(modified);
      const prettyModified = modifiedDate.toLocaleString(locale);
      var listItem = document.createElement("li");
      listItem.classList.add("sidebar-annotation-container");
      listItem.dataset.annotationId = annotation.id; // Assign a unique identifier
      list.appendChild(listItem);
      var newItem = document.querySelector(
        "[data-annotation-id='" + annotation.id + "'"
      ); //
      var commentsNumber = annotation.body.length - 1;
      var listItem =
        commentsNumber > 0
          ? '<div class="sidebar-annotation"><div class="sidebar-annotation-content"><span class="sidebar-annotation-index"><span>' +
            annotation.index +
            "</span></span>" +
            annotation.body[0].value +
            '</div><div class="sidebar-annotation-meta"><span class="r6o-lastmodified-by">' +
            annotation.body[0].creator.name +
            '</span><span class="r6o-lastmodified-at"><time class="" datetime="1704493363444" timeago-id="1343">' +
            prettyModified +
            '</time></span><span class="anno-comments-number">' +
            commentsNumber +
            "</span></div></div>"
          : '<div class="sidebar-annotation"><div class="sidebar-annotation-content"><span class="sidebar-annotation-index"><span>' +
            annotation.index +
            "</span></span>" +
            annotation.body[0].value +
            '</div><div class="sidebar-annotation-meta"><span class="r6o-lastmodified-by">' +
            annotation.body[0].creator.name +
            '</span><span class="r6o-lastmodified-at"><time class="" datetime="1704493363444" timeago-id="1343">' +
            prettyModified +
            "</time></span></div></div>";
      newItem.innerHTML += listItem;
    });
  }
  // Function to scroll and highlight selected annotation
  function setupClickListeners() {
    console.log("listen clicks");
    var sidebarAnnotations = document
      .getElementById("sidebar-annotations")
      .getElementsByTagName("li");
    Array.from(sidebarAnnotations).forEach((item) => {
      item.addEventListener("click", function (event) {
        const closestLi = event.target.closest("li");
        closestLi.classList.add("anno-selected");
        console.log(">>>> CLICK item", item);
        scrollToAndHighlight(item.dataset.annotationId).then(() => {
          console.log("item.dataset.annotationId", item.dataset.annotationId);
          const element = document.querySelector(
            '.r6o-annotation[data-id="' + item.dataset.annotationId + '"]'
          );

          // Check if the element exists, then simulate a click
          if (element) {
            console.log(">>>>>>>>>>>>> Element clicked", element);
            element.click();
            var mouseupEvent = new MouseEvent("mouseup", {
              isTrusted: true,
              bubbles: true, // Indicates whether the event bubbles up through the DOM
              cancelable: true, // Indicates whether the event is cancelable
              composer: true,
              detail: 1,

              // Add more event properties if needed
            });
            element.dispatchEvent(mouseupEvent);
          } else {
            console.log(">>>>>>>>> Element not found");
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
      ); // Get the corresponding page annotation
      console.log("pageAnnotation", pageAnnotation);
      if (pageAnnotation) {
        console.log(">>>>>>>> SCROLL <<<<<<<<<");
        pageAnnotation.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the annotation

        setTimeout(() => {
          pageAnnotation.classList.add("anno-selected");
          resolve();
        }, 1000); // Duration of highlight in milliseconds
        console.log(">>>> RESOLVE <<<<<");
      } else {
        reject("Annotation not found"); // Reject the promise if the element is not found
      }
    });
  }

  // Function to generate a unique selector for an element
  function generateSelector(context) {
    var pathSelector = finder(context);
    console.log(pathSelector);
    // console.log("context", context);
    // let index, pathSelector, localName;

    // if (context == "null") throw "not an dom reference";
    // // call getIndex function
    // index = getIndex(context);

    // while (context.tagName) {
    //   // selector path

    //   const className = context.className;
    //   const idName = context.id;

    //   pathSelector =
    //     context.localName +
    //     (className
    //       ? !className.includes("r6o-")
    //         ? `.${className}`
    //         : ""
    //       : "") +
    //     (idName ? `#${idName}` : "") +
    //     (pathSelector ? ">" + pathSelector : "");

    //   context = context.parentNode;
    // }
    // // selector path for nth of type
    // pathSelector = pathSelector + `:nth-of-type(${index})`;
    return pathSelector;
  }

  // Function to find the most similar string
  // Function to calculate Levenshtein Distance
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

  // get index for nth of type element
  function getIndex(node) {
    let i = 1;
    let tagName = node.tagName;

    while (node.previousSibling) {
      node = node.previousSibling;
      if (
        node.nodeType === 1 &&
        tagName.toLowerCase() == node.tagName.toLowerCase()
      ) {
        i++;
      }
    }
    return i;
  }

  // Optimize annotations new

  function optimizeAnnotations(annotations) {
    annotations.forEach((annotation) => {
      var elements = document.querySelectorAll(
        "[data-id='" + annotation.id + "'"
      );
      console.log(annotation.id, " >> ", elements.length);
      var newElement = document.querySelector(annotation.selector);
      var elementOk = false;
      console.log("NEW ELEMENT", newElement);
      console.log("elementOk", elementOk);
      elements.forEach((element) => {
        console.log("SAME ELEMENT");
        const parentElement = element.parentNode;
        if (parentElement !== newElement) {
          element.classList.remove("r6o-annotation");
          element.setAttribute("data-id", "");
        } else {
          element.style.setProperty(
            "--after-content",
            '"' + annotation.index + '"'
          );
          elementOk = true;
        }
      });
      if (!elementOk) {
        const spanElement = document.createElement("span");
        spanElement.className = "r6o-annotation";
        spanElement.setAttribute("data-id", annotation.id);
        spanElement.style.setProperty(
          "--after-content",
          '"' + annotation.index + '"'
        );
        // Step 3: Move all content of the target element into the <span>
        // This is done by appending the target's child nodes to the span
        while (newElement.firstChild) {
          spanElement.appendChild(newElement.firstChild);
        }

        // Step 4: Append the <span> back into the original element
        newElement.appendChild(spanElement);
        console.log("newElement", newElement);
        //   newElement.classList.add("r6o-annotation");
        //   newElement.setAttribute("data-id", annotation.id);
      }
    });
  }

  // Optimize annotations old
  /*
  function optimizeAnnotations(annotations) {
    annotations.forEach((annotation) => {
      var elements = document.querySelectorAll(
        "[data-id='" + annotation.id + "'"
      );
      console.log(annotation.id, " >> ", elements.length);
      if (elements.length > 1) {
        var distance = 1000000000;
        var similarElement = null;
        elements.forEach((element) => {
          //uniqueSelector = generateSelector(element.parentNode);
          console.log("elemenyt", element);
          element.style.setProperty(
            "--after-content",
            '"' + annotation.index + '"'
          );

          console.log("source content", annotation.target.selector[0].exact);
          console.log("target content", element.textContent);
          if (element.textContent) {
            var elementDistance = levenshteinDistance(
              annotation.target.selector[0].exact,
              element.textContent
            );
            console.log("distance", distance);
            if (elementDistance < distance) {
              console.log("attribute similar");
              distance = elementDistance;
              similarElement = element;
            }
          }
          //   if (uniqueSelector != annotation.selector) {
          //     // remove class r6o-annotation from element
          //     // element.classList.remove("r6o-annotation");
          //   } else {
          //     // remove class r6o-annotation from element
          //     //element.classList.remove("r6o-annotation");
          //     // add class r6o-annotation to parent element
          //     element.parentNode.classList.add("r6o-annotation");
          //     element.parentNode.setAttribute("data-id", annotation.id);
          //   }

          element.classList.remove("r6o-annotation");
        });
        console.log(annotation.id, " >> ", similarElement);
        // similarElement.parentNode.classList.add("r6o-annotation");
        // similarElement.parentNode.setAttribute("data-id", annotation.id);
        similarElement.classList.add("r6o-annotation");
        // similarElement.parentNode.setAttribute("data-id", annotation.id);
      } else {
        // element.classList.remove("r6o-annotation");
        // element.parentNode.classList.add("r6o-annotation");
        // element.parentNode.setAttribute("data-id", annotation.id);
      }
    });
  }
*/
  var uniqueSelector = null;
  // Store selected dom path

  document.addEventListener("mousedown", function (event) {
    console.log("mouseDown trigger", trigger(event.target)[0]);
    if (!annotateMode) {
      event.stopPropagation();
      return;
    }
    if (trigger(event.target)[0] == true) {
      console.log("mouseDown >> TRIGGER");
      event.stopPropagation();
      event.preventDefault();
      var clickedElement = event.target; // Get the clicked element
      console.log("before unique selector");
      uniqueSelector = generateSelector(clickedElement);

      var selection = window.getSelection();
      //if(!selection){

      console.log("clickedElement", clickedElement);
      var range = document.createRange();
      range.selectNodeContents(clickedElement);
      console.log("range", range);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
  document.addEventListener(
    "mouseup",
    function (event) {
      console.log(">>>> MOUSE UP FORCE", event.target);
      if (!annotateMode) {
        event.stopPropagation();
        return;
      }
      if (event.target.classList.contains("sidebar-annotation-container")) {
        console.log("STOP PROPAGATRE CONTAINER");
        event.stopPropagation();
      }
    },
    true
  );
  document.addEventListener("mouseup", function (event) {
    console.log(">>>> MOUSE UP", event.target);
    if (!annotateMode) {
      event.stopPropagation();
      return;
    }

    if (trigger(event.target)[0] == true) {
      console.log(">>>>> STOP PROPAGATION MOUSE UP");
      event.stopPropagation();
    }
    // console.log("event", event);
    // var clickedElement = event.target;
    // var range = document.createRange();
    // range.selectNode(clickedElement);
    // selection.removeAllRanges();
    // selection.addRange(range);
    // var selectedElement = document.querySelector('.r6o-selection');
    // if(selectedElement){
    //     parentElement = selectedElement.parentNode;
    //     parentElement.classList.add('r6o-selection');
    //     uniqueSelector = generateSelector(parentElement);
    //     console.log("uniqueSelector", uniqueSelector);
    //}else{
    // var selection = window.getSelection();
    // var range = document.createRange();
    // console.log("selection", selection);
    // range.selectNode(this);
    // console.log("range", range);
    // // selection.removeAllRanges();                 // Clear any existing selections
    // selection.addRange(range);                   // Add the new range
  });

  document.addEventListener("click", function (event) {
    //alert("click clickthrough", trigger(event.target));
    if (event.target.classList.contains("anno-refresh")) {
      console.log("GET ANNOS", anno.getAnnotations());
    }
    if (!annotateMode) {
      return;
    }
    if (
      !annotateblock &&
      !event.target.classList.contains("r6o-annotation") &&
      !event.target.classList.contains("sidebar-annotation-container")
    ) {
      console.log("UNSELECT");
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
      console.log(">>>>> STOP DEFAULT PROPAGATION CKICKTHROUGH FALSE");
      event.preventDefault();
    }
    if (trigger(event.target)[0]) {
      //     //event.stopPropagation();
      console.log(">>>>> STOP DEFAULT PROPAGATION CLICK TRIGGER TRUE");
      event.preventDefault();
      //     if(! document.querySelector('.r6o-selection')){

      //         var clickedElement = event.target; // Get the clicked element
      //         var selection = window.getSelection();
      //         var range = document.createRange();
      //         range.selectNode(clickedElement);
      //         selection.removeAllRanges();
      //         selection.addRange(range);
      //         // Select the target element where you want to dispatch the event
      //         var targetElement = clickedElement; // Replace with your target element's ID
      //         console.log("targetElement", targetElement);
      //         parentElement = clickedElement.parentNode;
      //         console.log("parentElement", parentElement);
      //         uniqueSelector = generateSelector(parentElement);

      //         // Create a new span element
      //         const mySelection = document.createElement('span');
      //         mySelection.className = 'r6o-selection';  // Set the class for the span

      //         // Move the content of the clicked element into the span
      //         while (targetElement.firstChild) {
      //             mySelection.appendChild(targetElement.firstChild);
      //         }

      //         // Insert the span back into the clicked element
      //         targetElement.appendChild(mySelection);

      //         // Create a mouseup event
      //         var mouseupEvent = new MouseEvent('mouseup', {
      //             isTrusted: true,
      //             bubbles: true,    // Indicates whether the event bubbles up through the DOM
      //             cancelable: true, // Indicates whether the event is cancelable
      //             composer: true,
      //             detail:1,

      //             // Add more event properties if needed
      //         });
      //         console.log("mySelection",targetElement);
      //         targetElement.dispatchEvent(mouseupEvent);
      //         container = targetElement.parentNode;
      //         console.log("container", container);
      //         container.classList.remove('r6o-selection');

      //     }

      //     // Dispatch the event on the target element
    }
  });

  // Optimize and store annotations

  anno.on("createAnnotation", function (annotation) {
    console.log("encodedPathName", encodedPathName);
    console.log("annotation", annotation);
    console.log("get annos", anno.getAnnotations());
    var commentsData = anno.getAnnotations();
    commentsData.sort((a, b) => {
      const dateA = new Date(a.body[0].created);
      const dateB = new Date(b.body[0].created);
      return dateA - dateB; // Ascending order
    });
    commentsData.forEach((object, index) => {
      object.index = index;
    });
    console.log("commentsData", commentsData);
    // find the annotation in the array with the id
    var index = commentsData.findIndex((x) => x.id === annotation.id);
    console.log("index", index, "id", annotation.id);
    // update the annotation
    commentsData[index].url = encodedPathName;
    console.log("uniqueSelector", uniqueSelector);
    commentsData[index].selector = uniqueSelector;
    updateSidebar(commentsData);
    optimizeAnnotations(commentsData);
    setupClickListeners();
    console.log("commentsData", commentsData);
    fetch("/wp-json/annotate/v1/proxy/?url=" + encodedPathName, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentsData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));

    console.log("Annotation created:", annotation);
  });

  anno.on("updateAnnotation", function (annotation) {
    console.log("encodedPathName", encodedPathName);
    var commentsData = anno.getAnnotations();
    commentsData.sort((a, b) => {
      const dateA = new Date(a.body[0].created);
      const dateB = new Date(b.body[0].created);
      return dateA - dateB; // Ascending order
    });
    commentsData.forEach((object, index) => {
      object.index = index;
    });
    console.log("commentsData", commentsData);
    // find the annotation in the array with the id
    var index = commentsData.findIndex((x) => x.id === annotation.id);
    // update the annotation
    commentsData[index].url = encodedPathName;
    console.log("uniqueSelector", uniqueSelector);
    commentsData[index].selector = uniqueSelector;
    updateSidebar(commentsData);
    optimizeAnnotations(commentsData);
    setupClickListeners();
    console.log("commentsData", commentsData);
    fetch("/wp-json/annotate/v1/proxy/?url=" + encodedPathName, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentsData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));

    console.log("Annotation updated:", annotation);
  });

  // Additional event listeners as needed
});
