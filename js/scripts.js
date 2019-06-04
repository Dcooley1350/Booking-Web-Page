$(document).ready(function() {
  $("#blank-form form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var ageInput = $("input#age").val();
    var colorInput = $("input#color").val();
    var eggsInput = $("input#eggs").val();
    var positionInput = $("input#position").val();
    var prefDateInput = $("input#prefDate").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".age").text(ageInput);
    $(".color").text(colorInput);
    $(".eggs").text(eggsInput);
    $(".position").text(positionInput);
    $(".prefDate").text(prefDateInput);

    $("#confirmation").show();

    event.preventDefault();
  })
})