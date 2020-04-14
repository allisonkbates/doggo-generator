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
		console.log('dogs', data);
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

// api call for oAuth 2
	
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function(response) {
	return response.json();
}).then(function(data) {
	console.log('token', data);
	return fetch('https://api.petfinder.com/v2/animals?size=' + size + '&type=' + type + '&status=' + status, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}).then(function(response) {
	return response.json();
}).then(function(data) {
	var name = data['animals'][0]['name'];
	document.getElementById('badge').innerHTML=name;
	console.log(data['animals'][0]['name']);

}).catch(function(err) {
	console.log('something went wrong... ', err);
});

// check token & get pets
var callDoggos = function() {
	if (!expires || expires-new Date.getTime() < 1) {
		console.log('new call');
		getOAuth().then(function() {
			getDoggos();
		});
		return;
	}
	getDoggos();
};
