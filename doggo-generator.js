fetch("https://api.thedogapi.com/v1/images/search")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const imageUrl = data[0]["url"];
			var newDog = document.createElement("img");
			newDog.src = imageUrl;
			document.body.appendChild(newDog);
			console.log(imageUrl);
			console.log(data);
		});

var pf = new petfinder.Client({apiKey: doggo-generator.env, secret: "my-api-secret"});

pf.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // Handle the error
    });