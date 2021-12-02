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




function addEditedItem(newItem){

  const newTask =
  `<div class="d-flex align-items-center">
    <input class="form-input-shopping d-none" type="input" />
    <span class= "item-text" data-id="<%= ${newItem}%>">${newItem} </span>
  </div>
  <div class="btn-group btn-group-toggle" data-toggle="button">

    <button class="btn btn-submit save-button d-none">
      <img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"/>
    </button>

    <button class="btn btn-submit edit-button">
    <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-edit-interface-kiranshastry-lineal-kiranshastry.png" style="width:auto;height:25px"/>
    </button>

    <button id="delete-button" class="btn btn-submit">
      <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png" style="width:auto;height:25px"/>
    </button>
  </div>`

  return newTask;

}



$(document).ready(function () {
  //time display
  const loadTime = ()=>{

    const NowMoment = moment().format('LLLL');
    const $timeElement = $('#time-box');
    $timeElement.text(NowMoment);
  }



//    $('.edit-button').on('click', function (evt){
//       evt.preventDefault();
//       $(this).addClass("d-none");
//       $(".form-input-shopping").addClass("d-block");
//     $('.form-input-shopping').change(function(){
//     const input = $(this).val();
//     $('.list-group-item').append('<li>'+ input + '</li>');
//     $(this).val('');
//     $(".form-input-shopping").addClass("d-none");
//        })
// })
    $('.card-body').on('click', '#delete-button', function (evt){
      console.log("clicked delete button!")
      $(this).closest('form').submit()
    });
    $('.card-body').on('click', '.edit-button', function (evt){
      console.log("clicked edit button!")
      const inputForm =  $(this).closest(".list-group-item").find('.form-input-shopping')
      inputForm.show();
      const oldItem =$(this).closest(".list-group-item").find('.item-text')
      oldItem.hide();

      $(this).siblings('.save-button').show();
    });

    //     // const ul = li.parentNode
    //     // const id= $("#delete-button");
    //     // if(button.id === id){
    //     //   ul.removeChild(li)
    //     // }


//     // })
// });
    //function to update time and date;
    setInterval(() => {
      loadTime();
    }, 1000);


});
  //save button .on click
  //data-id attribute
  //  function editedItem(){$.ajax({
  //    type: "POST",
  //    url: "api/todo/edit/:item_id",
  //    dataType: "json"
  //  }).then((res)=> {

  //  })
  // }
  // $('.edit-button').on('click', function (evt){
  //   evt.preventDefault();
  //   $(this).addClass("d-none");
  //     const btn= $(this)
  //     const targetingItem = btn.parent().prev();
  //     const btn2 = btn.parent();

  //   // targeting the save button
  //     const saveBtn = btn2.children(".save-button");
  //     saveBtn.addClass('d-block').removeClass('d-none');

  //     const textElement = targetingItem.children(".item-text");
  //     const formInput = targetingItem.children(".form-input-shopping");
  //   formInput.addClass('d-block').removeClass('d-none');
  //   console.log(textElement);
  //   textElement.addClass("d-none");
  // })
  // $('.save-button').on('click', function (evt){
  //   evt.preventDefault();
  //   const shoppingItem = $(".form-input-shopping").val();
  //   $(this).parent().prev().children('.item-text').text(shoppingItem);
  //   console.log("shopping item======>", shoppingItem);

  //   $(this).parent().parent().empty();
  //   const newItem = $(".form-input-shopping").val();
  //   console.log("this", this)
  //   const $dataId = $(this).data("id");

  //   // const newItem = $(".form-input").val();
  //   console.log("newItem------->",textElement);
  //   console.log(`Test function------>`,addEditedItem(shoppingItem));

  //   $(this).parent().parent().html(addEditedItem(shoppingItem));

  //   console.log(newItem)
  //   $(".item-text").text(newItem);
  //   $('.form-input-shopping').addClass('d-none').removeClass('d-block');
  //   $('.item.text').addClass('d-block').removeClass('d-none');

  //   $('.save-button').addClass('d-none').removeClass('d-block');
  //   $('.edit-button').addClass('d-block').removeClass('d-none');







