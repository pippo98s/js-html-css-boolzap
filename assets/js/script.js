$(document).ready(function(){

  $("#send").click(function(){
    var message = $(".footer input").val();
    if (message.length > 0 && !/^\s+$/.test(message)) {  // !/^\s+$/.test() checks white spaces
      var element = $(".user-sms:first-child").clone();
      var output = element.html("<p>" + message + "</p>");
      $(".chat").append(output);
    }
    $(".footer input").val("");
  });

});