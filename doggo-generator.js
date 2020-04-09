/*fetch("https://api.thedogapi.com/v1/images/search")
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

fetch("https://api.thedogapi.com/v1/images/search?mime_types=gif")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		const gifUrl = data[0]["url"];
		var gifDog = document.createElement("img");
		gifDog.src = gifUrl;
		document.body.appendChild(gifDog);
		console.log(gifUrl);
	});
fetch("https://api.thedogapi.com/v1/breeds")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});
fetch("https://api.thedogapi.com/v1/images/search?breed_id=8")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const imageUrl2 = data[0]["url"];
			var newDog2 = document.createElement("img");
			newDog2.src = imageUrl2;
			document.body.appendChild(newDog2);
			console.log(imageUrl2);
			console.log(data);
		});  */

var pf = new petfinder.Client({apiKey:"", secret:""});

pf.animal.search()
    .then(function (response) {
    	console.log(response);
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // H
    });