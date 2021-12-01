const axios = require('axios').default;

//api for restaurants

var settings = {
  "url": "https://api.yelp.com/v3/businesses/search?term=books&location=Kitchener&categories=books",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer Rnsnn2hNsZYOAJJy2f_lHSg1QwFQ_eTg8UP2QOq4EwQ1MHxMOlm7ZJNhfGJxZL4BLvNwEHC8cdJI8rGR-g-Jii1_HPxHDZ75pcI_3GIJtRMYyBYiayVgrTlSyvOiYXYx"
  },
};
axios(settings).then(function (response) {
  console.log(response.data.businesses);
}).catch(error => console.log(error));


// // GET https://api.yelp.com/v3/businesses/search

// // var foodSettings = {
// //   "url": "https://api.yelp.com/v3/businesses/search?term=Harry%20Potter&location=Toronto&categories=food",
// //   "method": "GET",
// //   "timeout": 0,
// //   "headers": {
// //     "Authorization": "Bearer Rnsnn2hNsZYOAJJy2f_lHSg1QwFQ_eTg8UP2QOq4EwQ1MHxMOlm7ZJNhfGJxZL4BLvNwEHC8cdJI8rGR-g-Jii1_HPxHDZ75pcI_3GIJtRMYyBYiayVgrTlSyvOiYXYx"
// //   },
// // };

// // var options = {
// //   method: 'POST',
// //   url: 'https://worldwide-restaurants.p.rapidapi.com/search',
// //   headers: {
// //     'content-type': 'application/x-www-form-urlencoded',
// //     'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
// //     'x-rapidapi-key': '34db11ceb6mshd10fbcf29bddb52p1ee761jsnc0e28e6ec06f'
// //   },
// //   data: {language: 'en_US', limit: '30', location_id: '297704', currency: 'USD'}
// // };

// // axios.request(options).then(function (response) {
// //   console.log(response.data);
// // }).catch(function (error) {
// //   console.error(error);
// // });

