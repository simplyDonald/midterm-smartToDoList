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

});
