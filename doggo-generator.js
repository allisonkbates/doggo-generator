// creds
const key = '';
const secret = '';
// dog filters
const size = 'large';
const type = 'dog';
const status = 'adoptable';
// token vars
var token, tokenType, expires;

// get doggos
var getDoggos = function() {
	return fetch('https://api.petfinder.com/v2/animals?size=' + size + '&type=' + type + '&status=' + status, {
		headers: {
			'Authorization': tokenType + ' ' + token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(function(response) {
		return response.json();
	}).then(function(data) {
		console.log('Doggos', data);
		/*var doggos = data.animals;
		doggos.forEach(function (doggo){
			var largePhoto = doggo && doggo['photos'][0] && doggo['photos'][0]['medium'] ? doggo['photos'][0]['medium'] : "cheyenne/cheyenne_hero.jpg";
			console.log(doggo);
			function createCard() {
				var card = document.createElement('div');
				card.setAttribute('class', 'card');
				var dogimg = document.createElement('img');
				dogimg.src=largePhoto;
				dogimg.setAttribute('class', 'dog-img-card');
				card.appendChild(dogimg);
				var badge = document.createElement('h2');
				card.appendChild(badge);
				badge.setAttribute('class', 'badge');
				var dogName = document.createTextNode(doggo.name);
				badge.appendChild(dogName);
				var dogInfo = document.createElement('div');
				dogInfo.setAttribute('class', 'dog-info');
				//var dogDescription = document.createElement('p')
				//dogDescription.createTextNode(doggo.description);
				//doginfo.appendChild(dogDescription);
				document.getElementById('cards').appendChild(card);
			};
			createCard();*/
		});
	}).catch(function(err){
		console.log('something went wrong...', err);
	});
};



// get oAuth creds
var getOAuth = function() {
	return fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(function(response) {
		return response.json();
	}).then(function(data) {
		console.log('token', data);
		token = data.access_token;
		tokenType = data.token_type;
		expires = new Date().getTime() + (data.expires_in * 1000);
	}).catch(function(err) {
		console.log('something went wrong...', err);
	});
};	

// check token & get pets
var callDoggos = function() {
	if (!expires || expires-new Date.getTime() < 1) {
		console.log('new call');
		getOAuth().then(function() {
			getDoggos();
		});
		return;
	}
	console.log('from cache');
	getDoggos();
};

callDoggos();