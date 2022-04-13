/* funcion para tooltip */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

/* funcion para alerta de correo */
$(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...")
  });
});

/* funcion para cambiar color de ingredientes y preparación */
$(function () {
  $(".ing-prep").on('dblclick', function () {
    $(this).css('color', 'red');
  });
});

/* desaparecer texto de panqueques*/
$(function () {
  $(".tarjeta").click(function () {
    $(".texts").toggle(300);
  });
});
