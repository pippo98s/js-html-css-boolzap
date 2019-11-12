$(document).ready(function(){

  $("#send").click(function(){

    var message = $(".footer input").val();
    console.log(message);
    
    var element = $(".user-sms:first-child").clone();
    console.log(element);

    var output = element.html("<p>"+ message + "</p>");

    $(".chat").append(output);
    

    $(".footer input").val("");
    
  });

});