document.addEventListener('DOMContentLoaded', function() {
    // Access applicationId and instanceId from PHP
    var applicationId = appConfig.applicationId;
    var instanceId = appConfig.instanceId;

    // Retrieve user from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const user = params.get('user');

    // Initialize recogito.js
    var anno = Recogito.init({
      content: document.body,
      // other configuration options
    });

    // Add user information to each annotation
    anno.on('createAnnotation', function(annotation) {
      // Attach the user to the annotation body
      if (user) {
        annotation.body = annotation.body || [];
        annotation.body.push({
          type: 'TextualBody',
          value: 'User: ' + user,
          purpose: 'tagging'
        });
      }
      var commentData = {
        user: user, // Replace or dynamically set the username
        comment: annotation.text, // Assuming 'text' is the property where the comment is stored
        // Add any other relevant data
        };
        fetch(`https://app.faaaster.io/api/applications/${applicationId}/instances/${instanceId}/annotate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include any necessary headers, such as authentication tokens
            },
            body: JSON.stringify(commentData)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));

      console.log('Annotation created:', annotation);
    });

    // Additional event listeners as needed
});
