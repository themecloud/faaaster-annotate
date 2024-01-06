document.addEventListener('DOMContentLoaded', function () {
    // Access applicationId and instanceId from PHP
    var locale = appConfig.locale.substring(0, 2);
    var user = appConfig.user;
    var cookie = appConfig.cookie;
    var url = window.location.protocol + '//' + window.location.host + window.location.pathname;
    var encodedUrl = encodeURIComponent(url);

    // Set cookie if not exists
    if(!cookie){
        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }
        setCookie('annotate', user, 7);
    }

    // Init body for annotations
    document.body.id = 'myCustomId';

    // Add interface
    var saveButton = document.createElement('button');
    saveButton.id = 'saveCommentButton';
    saveButton.textContent = 'Save Comment';

    // Identify the target element where the button will be placed
    var targetElement = document.body; // Replace with your target element's ID

    // Append the button to the target element
    targetElement.appendChild(saveButton);

    // Add click event listener to the button
    saveButton.addEventListener('click', function() {
        anno.loadAnnotations('/wp-json/annotate/v1/annotations/').then(function (annotations) {
            console.log("annotations loaded", annotations);
        });
    });

    // Create sidebar container
    var sidebar = document.createElement('div');
    sidebar.innerHTML += "<h2>Annotations</h2><h4>Sélectionnez du texte pour ajouter un commentaire.<br>Cliquez sur un commentaire ci dessous pour le localiser dans la page.</h4><ul id='sidebar-annotations'></ul>";
    sidebar.id = 'annotationSidebar';


    // // Create a list inside the sidebar
    // var list = document.createElement('ul');
    // sidebar.appendChild(list);

    // Append the sidebar to the body
    document.body.appendChild(sidebar);



    // Initialize recogito.js
    var anno = Recogito.init({
        content: document.getElementById('myCustomId'),
        locale: 'auto',
        widgets: [
            { widget: 'COMMENT' },
            { widget: 'TAG', vocabulary: [ 'Place', 'Person', 'Event', 'Organization', 'Animal' ] }
          ],
        // other configuration options
    });

    // Initialize user
    var homeUrl = window.location.protocol + '//' + window.location.host;
    const args = {id: homeUrl+"/"+user, displayName: user};
    console.log("args", args);
    anno.setAuthInfo(args);

    // Function to populate the sidebar with annotations
    function updateSidebar(annotations) {
        var list = document.getElementById('sidebar-annotations');
        list.innerHTML = ''; // Clear existing list items

        annotations.forEach(annotation => {
            console.log("anno", annotation);
            const modified = annotation.body[0].modified;
            const modifiedDate = new Date(modified);
            const prettyModified = modifiedDate.toLocaleString(locale);
            var listItem = document.createElement('li');
            listItem.dataset.annotationId =  annotation.id; // Assign a unique identifier
            list.appendChild(listItem);
            console.log("creator", annotation.body[0].creator);
            var newItem = document.querySelector("[data-annotation-id='"+annotation.id+"'"); //
            var listItem = '<div class="r6o-editor" style="margin-left: 0;opacity: 1; position:relative;width:300px;"><div class="r6o-editor-inner"><div class="r6o-widget comment"><textarea class="r6o-editable-text" placeholder="Add a comment..." disabled="" rows="1" style="overflow: hidden; overflow-wrap: break-word; height: 36px;">'+ annotation.body[0].value +'</textarea><div class="r6o-lastmodified"><span class="r6o-lastmodified-by">' + annotation.body[0].creator.name + '</span><span class="r6o-lastmodified-at"><time class="" datetime="1704493363444" timeago-id="1343">' + prettyModified + '</time></span></div><div class="r6o-icon r6o-arrow-down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 940" width="12"><metadata>IcoFont Icons</metadata><title>simple-down</title><glyph glyph-name="simple-down" unicode="" horiz-advx="1000"></glyph><path fill="currentColor" d="M200 392.6l300 300 300-300-85.10000000000002-85.10000000000002-214.89999999999998 214.79999999999995-214.89999999999998-214.89999999999998-85.10000000000002 85.20000000000005z"></path></svg></div></div><div class="r6o-widget comment editable"><textarea class="r6o-editable-text" placeholder="Add a reply..." rows="1" style="overflow: hidden; overflow-wrap: break-word; height: 36px;"></textarea></div><div class="r6o-widget r6o-tag"><div class="r6o-autocomplete"><div><input placeholder="Add tag..."></div><ul></ul></div></div><div class="r6o-footer"><button class="r6o-btn left delete-annotation" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button><button class="r6o-btn outline">Cancel</button><button class="r6o-btn ">Ok</button></div></div></div>';
            newItem.innerHTML += listItem;


        });
    }
    // Function to scroll and highlight selected annotation
    function setupHoverListeners() {
        var sidebarAnnotations = document.getElementById('annotationSidebar').getElementsByTagName('li');
        Array.from(sidebarAnnotations).forEach(item => {
            item.addEventListener('click', function() {
                console.log("item", item);
                scrollToAndHighlight(item.dataset.annotationId);
            });
        });
    }
    function scrollToAndHighlight(annotationId) {
        var pageAnnotation = document.querySelector("[data-id='"+annotationId+"'"); // Get the corresponding page annotation
        console.log("pageAnnotation", pageAnnotation);
        if (pageAnnotation) {
            pageAnnotation.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the annotation

            // Highlight effect
            pageAnnotation.style.backgroundColor = 'yellow'; // Example highlight effect

            // Optional: Remove highlight after a delay
            setTimeout(() => {
                pageAnnotation.style.backgroundColor = ''; // Reset background color
            }, 3000); // Duration of highlight in milliseconds
        }
    }
    // Load existing annotations
    anno.loadAnnotations('/wp-json/annotate/v1/annotations?url='+encodedUrl).then(function (annotations) {
        console.log("annotations loaded", annotations);
        updateSidebar(annotations);
        setupHoverListeners();
    });

    // Store selected dom path
    var selectedElement = document.querySelector('.r6o-selection');

    //var uniqueSelector = getUniqueSelector(selectedElement);


    // Optimize and store annotations

    anno.on('createAnnotation', function (annotation) {
        annotation.url = url;
        var commentsData = anno.getAnnotations();
        // find the annotation in the array with the id
        var index = commentsData.findIndex(x => x.id === annotation.id);
        // update the annotation
        commentsData[index].url = url;
        updateSidebar(commentsData);
        console.log("commentsData", commentsData);
        fetch('/wp-json/annotate/v1/proxy/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentsData)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));

        console.log('Annotation created:', annotation);
    });

    // Additional event listeners as needed
});
