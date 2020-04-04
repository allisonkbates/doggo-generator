function getDog() {
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
		});
		console.log('I got a dog!');
		//console.log(data);
}

function addImage() {
	
}