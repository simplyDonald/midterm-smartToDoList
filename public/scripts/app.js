$(document).ready(function () {

    $('.card-body').on('click', '#delete-button', function (evt){
      console.log("clicked delete button!")
      $(this).closest('form').submit()
    });
    $('.card-body').on('click', '.edit-button', function (evt){
      console.log("clicked edit button!")
      $(this).hide();
      const inputForm =  $(this).closest(".list-group-item").find('.form-input-shopping')
      inputForm.show();
      const oldItem =$(this).closest(".list-group-item").find('.item-text')
      oldItem.hide();
      $(this).siblings().find('.save-button').show();
    });
    $('.card-body').on('click', '.save-button', function (evt){
      console.log("clicked save button!")
      $(this).closest('form').submit()
    });

    $('.card-body').on('click', '#delete-button', function (evt){
      console.log("clicked delete button!")
      $(this).closest('form').submit()
    });
    $('.card-body').on('click', '.edit-button', function (evt){
      console.log("clicked edit button!")
      $(this).hide();
      const inputForm =  $(this).closest(".list-group-item").find('.form-input-shopping')
      inputForm.show();
      const oldItem =$(this).closest(".list-group-item").find('.item-text')
      oldItem.hide();
      $(this).siblings().find('.save-button').show();
    });
    $('.card-body').on('click', '.save-button', function (evt){
      console.log("clicked save button!")
      $(this).closest('form').submit()
    });



  // $('.item-text').draggable({
  //     cursor: 'move',
  //     helper: "clone"
  // });

  // $(".card-body").droppable({
  //   drop: function(event, ui) {
  //     var itemid = $(event.originalEvent.toElement).attr(".item-text");
  //     $('.item-text').each(function() {
  //       if ($(this).attr(".item-text") === itemid) {
  //         $(this).appendTo(".card-body");
  //       }
  //     });
  //   }
  // });

  // $("#container2").droppable({
  //   drop: function(event, ui) {
  //     var itemid = $(event.originalEvent.toElement).attr("itemid");
  //     $('.box-item').each(function() {
  //       if ($(this).attr("itemid") === itemid) {
  //         $(this).appendTo("#container2");
  //       }
  //     });
    // }
  });






