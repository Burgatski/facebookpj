$('.add #button').on('click',function(){ /*делаем клон блока добавления*/
    var template = $('#template').clone();
    template.removeAttr('id').find('textarea').html($('.add textarea').val());
    $(template).appendTo('.block');
})


$('.block').on('click','.close',function(){   /*удаляем блок*/
$(this).parent().remove();
})

$('.block').on('click','#button',function(){ /*редактирование и по вводу Enter - заканчивается редактирование*/
 $(this).siblings('textarea').removeAttr('disabled');
 $('html').keydown(function(e){
if (e.keyCode == 13) {
  $('textarea').attr("disabled","disabled");
}
});
})

$('.sidebar').on('click', 'button', function(){ /*блок рекламы*/
  $(this).closest('.sidebar').find('.tic').slideDown();
})
