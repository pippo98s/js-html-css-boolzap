$(document).ready(function(){

  $("#send").click(function(){
    var message = $(".footer input").val();
    if (message.length > 0 && !/^\s+$/.test(message)) {  // !/^\s+$/.test() checks there are only white spaces
      var element = $(".template .user-sms").clone();
      element.html("<p>" + message + "</p>")
      $(".chat").append(element);

      // risposta automatica dopo un secondo
      setTimeout(function(){
        var smsDefault = "ok";
        var pc = $(".template .pc-sms").clone();
        pc.html("<p>" + smsDefault + "</p>");
        $(".chat").append(pc);
        
      } , 1000);
    }
    $(".footer input").val("");
  });


  // Ricerca utenti
  $(".search-bar").keyup(function(){
   
    $(".name").each(function(){
      
      var name = $(this).text();
      var n = name.indexOf($(".search-bar").val());
      
      if ( n !== -1){
        $(this).parents(".info-chat").show();
      } else {
          $(this).parents(".info-chat").hide();
        }
    })

  });

});