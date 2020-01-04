$('#placeholder_input').on('focus',function(){
   $(this).parent().children('.placeholder').addClass('focus')
}).on('blur',function(){
  if($(this).val()===''){
   $(this).parent().children('.placeholder').removeClass('focus')
  }
})

$('#placeholder_input-mail').on('focus',function(){
   $(this).parent().children('.placeholder_email').addClass('focus_email')
}).on('blur',function(){
   if($(this).val()===''){
    $(this).parent().children('.placeholder_email').removeClass('focus_email')
   }
 })

$('#placeholder_input-phone').on('focus',function(){
   $(this).parent().children('.placeholder_phone').addClass('focus_phone')
}).on('blur',function(){
   if($(this).val()===''){
    $(this).parent().children('.placeholder_phone').removeClass('focus_phone')
   }
 })


$('#enviar').on('click',function(){
   
   let valor = 0;
   let nome = $('#placeholder_input').val();
   let email = $('#placeholder_input-email').val();
   let tel =  $('#placeholder_input-phone').val();
   let msg =  $('#msg').val();

   

   if(nome == '' || nome == null || nome.length<4 || nome == undefined){
      valor = valor + 1

   
   }



  

   if(tel == '' || tel == null || tel.length<4 || tel == undefined || tel.length>15){
     valor = valor +1
   }

  

   if(msg == '' || msg == null || msg.length<4 || msg.length>120 || nome == undefined){
      
      valor = valor +1
   }



  if(valor === 0){
   window.open("resultado.html");
     
      
  }

})  


$(document).ready(function($){
   $('#placeholder_input-phone').mask('(00)00000-0000')
})





