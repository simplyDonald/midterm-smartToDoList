// const { getDbItems } = require("../../databaseHelper/databaseHelper");

const matchKeyWords= {
  shopping:{
    keyWords: ["buy", "get", "purchase"],
    categoryId: 104
  },
  films: {
    keyWords: ["watch", "see", "Netflix"],
    categoryId : 101
  },
  books: {
    keyWords: ["read", "study"],
    categoryId : 103
  },
  restaurants:{
    keyWords: ["eat", "drink", "binge"],
    categoryId : 102
  }
    }

const categorizeItem = function(item,matchKeyWords){
  let category_id;
  let firstWord = item.toLowerCase().split(" ");
  console.log(firstWord[0])
  for (let key in matchKeyWords){
    if (matchKeyWords[key].keyWords.includes(firstWord[0])){
      console.log("matched", matchKeyWords[key].keyWords)
      category_id = matchKeyWords[key].categoryId
      break;
    }
  }
  return category_id;
}
const renderListItems = function (item){
  ('#toBuy-items').empty();
  ('#toBuy-items').append(getDbItems(db,101));
}


// $(function () {
//   // function loadDbItems(){
//   //  $.ajax({
//   //    type: "GET",
//   //    url: "/:user_id",
//   //    dataType: "json"
//   //  }).then((res) => {
//   //     renderListItems(res)
//   //  })
//   //  console.log(loadDbItems())
//   // }
//   // })
//   console.log("working!")
// })
// ;
