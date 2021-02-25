$(document).ready(function () {

  // Refer
  // https://github.com/fkranenburg/bootstrap-pincode-input
  // Set pin numner
  $("[num]").each(function () {
    let input = $(this).attr("num");
    $(this).pincodeInput({
      hidedigits: false,
      inputs: input
    });
  });

  function resizeInput() {
    $(this).attr('size', $(this).val().length);
  }


  // increase size based on the input
  $('input.form-dashed[type="text"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);

  // Refer 
  // https://www.jqueryscript.net/other/Smooth-Signature-Pad-Plugin-with-jQuery-Html5-Canvas.html
  // sinin pad
  $('#smoothed').signaturePad({
    drawOnly: true,
    drawBezierCurves:true, 
    lineTop:260,
    bgColour :'#f8f9fa',
  });

});