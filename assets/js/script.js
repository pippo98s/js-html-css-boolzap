$(document).ready(function(){

  // invio messaggio al click
  $("#send").click(function(){
    sendSms();
  });

  // invio messaggio tramite tastiera
  $("body").keydown(function (e) {
    if (e.keyCode == 13) { // enter
      sendSms();
    }
  }); 

  // Ricerca utenti
  $(".search-bar").keyup(function(){
    searchChat();
  });

});


// blocco funzioni 

// funzione di invio messaggio

function sendSms(){
  var message = $(".footer input").val();
  if (message.length > 0 && !/^\s+$/.test(message)) {  // !/^\s+$/.test() checks there are only white spaces
    var element = $(".template .user-sms").clone();
    element.html("<p>" + message + "</p>")
    $(".chat").append(element);

    // risposta automatica dopo un secondo
    setTimeout(function () {
      var smsDefault = "ok";
      var pc = $(".template .pc-sms").clone();
      pc.html("<p>" + smsDefault + "</p>");
      $(".chat").append(pc);

    }, 1000);
  }
  $(".footer input").val("");
}


// funzione per cercare le chat
function searchChat(){
  $(".name").each(function () {
    var name = $(this).text();
    var str = name.toLowerCase();
    var research = $(".search-bar").val();
    var n = str.indexOf(research.toLowerCase());

    if (n !== -1) {
      $(this).parents(".info-chat").show();
    } else {
      $(this).parents(".info-chat").hide();
    }
  })
}