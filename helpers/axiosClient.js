const axios = require('axios');

// TODO: https://developer.paypal.com/docs/api/get-an-access-token-postman/
const axiosClient = axios.create({
    baseURL: process.env.PAYPAL_API,
    auth: {
		username: process.env.PAYPAL_CLIENT,
        password: process.env.PAYPAL_SECRET,
	}
});

module.exports = axiosClient;