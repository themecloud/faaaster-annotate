document.addEventListener("DOMContentLoaded", function () {
  // Access applicationId and instanceId from PHP
  var locale = appConfig.locale.substring(0, 2);
  var user = appConfig.user;
  var cookie = appConfig.cookie;
  var url =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname;
  var encodedUrl = encodeURIComponent(url);
  var encodedPathName = (
    window.location.host + window.location.pathname
  ).replace(/\//g, "-");

  let annotateMode = true;

  console.log("encodedPathName", encodedPathName);
  // Set cookie if not exists
  if (!cookie) {
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    setCookie("annotate", user, 7);
  }

  // Init body for annotations
  document.body.id = "myCustomId";

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

  // Create sidebar container
  var sidebar = document.createElement("div");
  sidebar.innerHTML +=
    "<div id='sidebar-header'><div id='sidebar-title'><h2>Annotations</h2></div><h4>Sélectionnez du texte pour ajouter un commentaire.<br>Cliquez sur un commentaire ci dessous pour le localiser dans la page.</h4></div><ul id='sidebar-annotations'></ul><div id='annotate-mode'><input type='checkbox' checked id='mySwitch' /><label for='mySwitch' id='mySwitchLabel'>Annotate</label></div>";
  sidebar.id = "annotationSidebar";

  // // Create a list inside the sidebar
  // var list = document.createElement('ul');
  // sidebar.appendChild(list);

  // Append the sidebar to the body
  document.body.appendChild(sidebar);
  // Get the checkbox element
  const mySwitch = document.getElementById("mySwitch");

  // Attach a change event listener to the checkbox
  mySwitch.addEventListener("change", function () {
    // Update the global variable based on the checkbox state
    annotateMode = this.checked;
    console.log("annotateMode state is now:", annotateMode);
  });

  // Initialize recogito.js
  var anno = Recogito.init({
    content: document.getElementById("myCustomId"),
    locale: "auto",
    widgets: [
      { widget: "COMMENT" },
      {
        widget: "TAG",
        vocabulary: ["Place", "Person", "Event", "Organization", "Animal"],
      },
    ],
    // other configuration options
  });

  // Initialize user
  var homeUrl = window.location.protocol + "//" + window.location.host;
  const args = { id: homeUrl + "/" + user, displayName: user };
  console.log("args", args);
  anno.setAuthInfo(args);

  // Function to populate the sidebar with annotations
  function updateSidebar(annotations) {
    var list = document.getElementById("sidebar-annotations");
    list.innerHTML = ""; // Clear existing list items

    annotations.forEach((annotation) => {
      console.log("anno", annotation);
      const modified = annotation.body[0].modified;
      const modifiedDate = new Date(modified);
      const prettyModified = modifiedDate.toLocaleString(locale);
      var listItem = document.createElement("li");
      listItem.dataset.annotationId = annotation.id; // Assign a unique identifier
      list.appendChild(listItem);
      console.log("creator", annotation.body[0].creator);
      var newItem = document.querySelector(
        "[data-annotation-id='" + annotation.id + "'"
      ); //
      var listItem =
        '<div><h3>Click</h3></div><div class="r6o-editor" style="margin-left: 0;opacity: 1; position:relative;width:300px;"><div class="r6o-editor-inner"><div class="r6o-widget comment"><textarea class="r6o-editable-text" placeholder="Add a comment..." disabled="" rows="1" style="overflow: hidden; overflow-wrap: break-word; height: 36px;">' +
        annotation.body[0].value +
        '</textarea><div class="r6o-lastmodified"><span class="r6o-lastmodified-by">' +
        annotation.body[0].creator.name +
        '</span><span class="r6o-lastmodified-at"><time class="" datetime="1704493363444" timeago-id="1343">' +
        prettyModified +
        '</time></span></div><div class="r6o-icon r6o-arrow-down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 940" width="12"><metadata>IcoFont Icons</metadata><title>simple-down</title><glyph glyph-name="simple-down" unicode="" horiz-advx="1000"></glyph><path fill="currentColor" d="M200 392.6l300 300 300-300-85.10000000000002-85.10000000000002-214.89999999999998 214.79999999999995-214.89999999999998-214.89999999999998-85.10000000000002 85.20000000000005z"></path></svg></div></div><div class="r6o-widget comment editable"><textarea class="r6o-editable-text" placeholder="Add a reply..." rows="1" style="overflow: hidden; overflow-wrap: break-word; height: 36px;"></textarea></div><div class="r6o-widget r6o-tag"><div class="r6o-autocomplete"><div><input placeholder="Add tag..."></div><ul></ul></div></div><div class="r6o-footer"><button class="r6o-btn left delete-annotation" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button><button class="r6o-btn outline">Cancel</button><button class="r6o-btn ">Ok</button></div></div></div>';
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
      item.addEventListener("click", function () {
        console.log("item", item);
        scrollToAndHighlight(item.dataset.annotationId);
      });
    });
  }
  function scrollToAndHighlight(annotationId) {
    var pageAnnotation = document.querySelector(
      "[data-id='" + annotationId + "'"
    ); // Get the corresponding page annotation
    console.log("pageAnnotation", pageAnnotation);
    if (pageAnnotation) {
      pageAnnotation.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the annotation

      // Highlight effect
      pageAnnotation.style.backgroundColor = "yellow"; // Example highlight effect

      // Optional: Remove highlight after a delay
      setTimeout(() => {
        pageAnnotation.style.backgroundColor = ""; // Reset background color
      }, 3000); // Duration of highlight in milliseconds
    }
  }

  // Function to generate a unique selector for an element
  function generateSelector(context) {
    console.log("context", context);
    let index, pathSelector, localName;

    if (context == "null") throw "not an dom reference";
    // call getIndex function
    index = getIndex(context);

    while (context.tagName) {
      // selector path

      const className = context.className;
      const idName = context.id;

      pathSelector =
        context.localName +
        (className
          ? !className.includes("r6o-")
            ? `.${className}`
            : ""
          : "") +
        (idName ? `#${idName}` : "") +
        (pathSelector ? ">" + pathSelector : "");

      context = context.parentNode;
    }
    // selector path for nth of type
    pathSelector = pathSelector + `:nth-of-type(${index})`;
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
  function findMostSimilar(target, strings) {
    let mostSimilar = strings[0];
    let minDistance = levenshteinDistance(target, mostSimilar);

    for (const str of strings) {
      const distance = levenshteinDistance(target, str);
      if (distance < minDistance) {
        minDistance = distance;
        mostSimilar = str;
      }
    }

    return mostSimilar;
  }

  // Example usage
  const targetString = "example";
  const stringArray = ["sample", "temple", "apple", "examine"];
  const mostSimilarString = findMostSimilar(targetString, stringArray);

  console.log("Most similar string:", mostSimilarString);

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

  // Optimize annotations
  function optimizeAnnotations(annotations) {
    annotations.forEach((annotation) => {
      var elements = document.querySelectorAll(
        "[data-id='" + annotation.id + "'"
      );
      console.log("elements", elements.length);
      if (elements.length > 1) {
        distance = 1000000000;
        var similarElement = null;
        elements.forEach((element) => {
          console.log("element optimized");
          uniqueSelector = generateSelector(element.parentNode);
          console.log("uniqueSelector", uniqueSelector);
          console.log("elemenyt", element);
          console.log("source content", annotation.target.selector[0].exact);
          console.log("target content", element.textContent);
          if (element.textContent) {
            distance = levenshteinDistance(
              annotation.target.selector[0].exact,
              element.textContent
            );
            console.log("distance", distance);
            if (distance < distance) {
              distance = distance;
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
        similarElement.parentNode.classList.add("r6o-annotation");
        similarElement.parentNode.setAttribute("data-id", annotation.id);
      } else {
        // element.classList.remove("r6o-annotation");
        // element.parentNode.classList.add("r6o-annotation");
        // element.parentNode.setAttribute("data-id", annotation.id);
      }
    });
  }
  // Load existing annotations
  anno
    .loadAnnotations("/wp-json/annotate/v1/annotations?url=" + encodedPathName)
    .then(function (annotations) {
      console.log("annotations loaded", annotations);
      updateSidebar(annotations);
      optimizeAnnotations(annotations);
      setupClickListeners();
    });
  var uniqueSelector = null;
  // Store selected dom path

  document.addEventListener("mousedown", function (event) {
    var clickedElement = event.target; // Get the clicked element
    uniqueSelector = generateSelector(parentElement);
    event.stopPropagation();
    const sidebar = document.getElementById("annotationSidebar");
    if (sidebar.contains(clickedElement)) {
      return;
    }
    var selection = window.getSelection();
    //if(!selection){

    console.log("clickedElement", clickedElement);

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(clickedElement);
    selection.removeAllRanges();
    selection.addRange(range);
  });
  document.addEventListener("mouseup", function (event) {
    console.log("event", event);
    var clickedElement = event.target;

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
  // document.addEventListener('click', function(event) {
  //     //event.stopPropagation();
  //     event.preventDefault();
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

  // });

  // Optimize and store annotations

  anno.on("createAnnotation", function (annotation) {
    console.log("encodedPathName", encodedPathName);
    var commentsData = anno.getAnnotations();
    // find the annotation in the array with the id
    var index = commentsData.findIndex((x) => x.id === annotation.id);
    // update the annotation
    commentsData[index].url = encodedPathName;
    console.log("uniqueSelector", uniqueSelector);
    commentsData[index].selector = uniqueSelector;
    updateSidebar(commentsData);
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

  // Additional event listeners as needed
});
