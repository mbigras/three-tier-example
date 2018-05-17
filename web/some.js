var api = 'http://localhost:4567'
console.log('hello world')
document.addEventListener('DOMContentLoaded', function(event) { 
	console.log('DOMContentLoaded')

	var things = document.getElementById('things')
	var thingsBtn = document.getElementById('getThings')

	thingsBtn.addEventListener('click', function(){
		// GET /things
		fetch(api + '/things').then(function(response) {
			if(response.status !== 200) {
				console.log("Error status: " + response.status)
				return;
			}
		
			response.json().then(function(data) {
				console.log("Got some data in response to GET request!")
				console.log(data)
				things.innerHTML = JSON.stringify(data, null, 2)
			})
		})
	})

	// var submitBtn = document.querySelector('button')
	// submitBtn.addEventListener('click', function(){
	// 	// POST
	// 	fetch(api, {
	// 		method: 'post',
	// 		body: JSON.stringify({"foo":"bar"})
	// 	}).then(function(response) {
	// 		if(response.status !== 200) {
	// 			console.log("Error status: " + response.status)
	// 			return;
	// 		}

	// 		response.json().then(function(data) {
	// 			console.log("Got some data in response to POST request!")
	// 			console.log(data)
	// 		})
	// 	})
	// })
})
