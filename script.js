  $('.add #button').on('click',function(){
      var template = $('#template').clone();
      template.removeAttr('id').find('textarea').html($('.add textarea').val());
      $(template).appendTo('.block');
})


  $('.block').on('click','.close',function(){
  $(this).parent().remove();
})

  $('.block').on('click','#button',function(){
   $(this).siblings('textarea').removeAttr('disabled');
   $('html').keydown(function(e){
  if (e.keyCode == 9) {
    $('textarea').attr("disabled","disabled");
  }
});
  })
