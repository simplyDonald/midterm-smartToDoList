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





// // $(function () {
//   $("#add-item").on("click", function(evt){
//     evt.preventDefault();
//     categorizeItem($("#input-item"),matchKeyWords);
//     const category_id = categorizeItem($("#input-item"),matchKeyWords);
//     $("#add-item")
//     $("#add-item").val("");







//   })



// })

//     function loadListItems(){
//       $.ajax({
//         type: "GET",
//         url: ""
//       })
//     }
