const axios = require('axios').default;

const apiMatchItem = async function(itemName, categoryId){
  const itemNameWithoutKeyWords = itemName.split(" ").slice(1).join(" ")
  const moviesCategoryId = 101;
  const restaurantCategoryId = 102;
  const bookCategoryId = 103;
  const shoppingCategoryId = 104;
  const otherCategoryId = 105;
  if(categoryId === moviesCategoryId){
// var options = {
//   method: 'GET',
//   url: 'https://imdb8.p.rapidapi.com/auto-complete',
//   params: {q: 'game of thr'},
//   headers: {
//     'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//     'x-rapidapi-key': '34db11ceb6mshd10fbcf29bddb52p1ee761jsnc0e28e6ec06f'
//   }
// }
//   const result = await axios.request(options)
//   console.log(result.data"result")
//   return result
// };

    var options = {
      method: 'GET',
      url:`https://api.tvmaze.com/search/shows?q==${itemNameWithoutKeyWords}`
  // headers: {
  //   'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
  //   'x-rapidapi-key': '461cc9cce5f14a006c2025e4317cb185'
    }
    const result = await axios.request(options)
   const url= result.data[0].show.url
    return url
  };

  if(categoryId === bookCategoryId){


    var options = {
      method: 'GET',
      url: `https://www.googleapis.com/books/v1/volumes?q=${itemNameWithoutKeyWords}`,
      params: {key: 'AIzaSyB_aDprVpCkqxUkMGOu-Vea93DznYeB5HI'},
      headers: {
        'x-rapidapi-host': 'google-books.p.rapidapi.com',
        'x-rapidapi-key': '34db11ceb6mshd10fbcf29bddb52p1ee761jsnc0e28e6ec06f'
      }
    };
    const response = await axios.request(options)
    const bookUrl=response.data.items[0].volumeInfo.previewLink
    return bookUrl;
  };

  if(categoryId === restaurantCategoryId){
    var settings = {
      "url": `https://api.yelp.com/v3/businesses/search?term=${itemNameWithoutKeyWords}&location=Kitchener&categories=restaurants`,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer Rnsnn2hNsZYOAJJy2f_lHSg1QwFQ_eTg8UP2QOq4EwQ1MHxMOlm7ZJNhfGJxZL4BLvNwEHC8cdJI8rGR-g-Jii1_HPxHDZ75pcI_3GIJtRMYyBYiayVgrTlSyvOiYXYx"
      }
    }
    const result = await  axios.request(settings)
    return result.data.businesses[0].url
  }
  if(categoryId === shoppingCategoryId){
    var options = {
      method: 'GET',
      url: "https://www.amazon.com/s/?field-keywords=Harry+Potter",
      headers: {
        'key': 'SeClR2tlYT3lP8zIxVPhM3osO539z1K96OvgIZpG'
      }
    };

   const result = await axios.request(options)
   console.log((result.data), "result")
   return result
}
}
apiMatchItem("socks", 104);
exports.apiMatchItem = apiMatchItem;
