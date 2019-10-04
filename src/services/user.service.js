// import { authHeader } from '../helpers';

export const userService = {
	login,
	logout,
	register
};

function login(email, password) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	};

	return fetch(`http://localhost:3000/api/v1/admin/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			console.log(user,'user-----');
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem('user', JSON.stringify(user));
			return user;
		});
}

// remove user from local storage to log user out
function logout() {
	localStorage.removeItem('user');
}

// register user request
function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:3000/api/v1/admin/signup`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		console.log(data,'data data----');
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout();
				// location.reload(true);
			}
			console.log(data,'finding const')
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}