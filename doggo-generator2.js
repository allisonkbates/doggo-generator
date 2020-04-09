// need to figure out how to make environment variables! 

var pf = new petfinder.Client({apiKey:"", secret:""});

pf.animal.search()
    .then(function (response) {
    	console.log(response);
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // Handle the error
    });


