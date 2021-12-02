// const { getDbItems } = require("../../databaseHelper/databaseHelper");

// const matchKeyWords= {
//   shopping:{
//     keyWords: ["buy", "get", "purchase"],
//     categoryId: 104
//   },
//   films: {
//     keyWords: ["watch", "see", "Netflix"],
//     categoryId : 101
//   },
//   books: {
//     keyWords: ["read", "study"],
//     categoryId : 103
//   },
//   restaurants:{
//     keyWords: ["eat", "drink", "binge"],
//     categoryId : 102
//   }
//     }

// const categorizeItem = function(item,matchKeyWords){
//   let category_id;
//   let firstWord = item.toLowerCase().split(" ");
//   console.log(firstWord[0])
//   for (let key in matchKeyWords){
//     if (matchKeyWords[key].keyWords.includes(firstWord[0])){
//       console.log("matched", matchKeyWords[key].keyWords)
//       category_id = matchKeyWords[key].categoryId
//       break;
//     }
//   }
//   return category_id;
// }
// const renderListItems = function (item){
//   ('#toBuy-items').empty();
//   ('#toBuy-items').append(getDbItems(db,101));
// }

// window.onload = function(){
//   if (jQuery) {
//   alert("jQuery is loaded")
// }
// else{
//   alert("jQuery not loaded")
// }
// }
function addEditedItem(){
const $newItem =
`<input class="form-input d-none" type="input" />`
$('.item-text').append($newItem)
}



$(document).ready(function () {
  //save button .on click
  //data-id attribute
   function editedItem(){$.ajax({
     type: "POST",
     url: "/:user_id",
     dataType: "json"
   }).then((res)=> {

   })
  }
  $('.edit-button').on('click', function (evt){
    evt.preventDefault();
    $(this).addClass("d-none");
    // .$(".save-button").switchClass("d-none","d-block")
    // $()
    // $(this).attr("disabled", "disabled");
    const btn= $(this)
    console.log("this---",this, "previous", btn.parent().prev() )
    const targetingItem = btn.parent().prev();
    const btn2 = btn.parent();
    const saveBtn = btn2.children(".save-button");
    saveBtn.addClass('d-block').removeClass('d-none');
    console.log(`save butoon------->`,saveBtn);

    const textElement = targetingItem.children(".item-text");
    const formInput = targetingItem.children(".form-input");
    formInput.addClass('d-block').removeClass('d-none');
    console.log(textElement);
    textElement.addClass("d-none");
  })
  $('.save-button').on('click', function (evt){
    $(".form-input")


});







// function loadDbItems(){
  //  $.ajax({
  //    type: "GET",
  //    url: "/:user_id",
  //    dataType: "json"
  //  }).then((res) => {
  //     renderListItems(res)
  //  })
  //  console.log(loadDbItems())
  // }
  // })
  console.log("working!")
