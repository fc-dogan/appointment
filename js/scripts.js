$(document).ready(function() {
  $("#apt").submit(function(event) {
    var nameInput = $("input#name").val();
    var addrInput = $("input#addr").val();
    var descInput = $("input#desc").val();

    $(".name").text(nameInput);
    $(".addr").text(addrInput);
    $(".desc").text(descInput);

    $(".output").show();
  
    event.preventDefault();
  });
});
