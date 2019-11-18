$(document).ready(function () {

  $(".dropdown").on("click", function () {
    $(this).next(".dropdown-item").toggle();
  })

  $(".dropdown-item").on("click", "p", function(){
    $(this).parents(".sms-contenitor").remove();
  })
  

  // invio messaggio al click
  $("#send").click(function () {
    sendSms();
  });

  // invio messaggio tramite tastiera
  $("body").keydown(function (e) {
    if (e.keyCode == 13) { // enter
      sendSms();
    }
  });

  // Ricerca utenti
  $(".search-bar").keyup(function () {
    searchChat();
  });


  // mostra chat
  $(".info-chat").click( function(){

    var chatAttiva = $("#right-side .chat-contenitor.active");
    var array = ["michele", "fabio", "samuele", "alessandro", "claudia", "davide", "federico", "cj"]
    

    chatAttiva.removeClass("active");
    chatAttiva.addClass("d-none")

    var i = 0;
    while ( i < array.length) {
      if ($(this).is("[riferimento=" + array[i] + "]")) {
        $(".chat-contenitor" + "." + array[i] + "").addClass("active");
      } 
      i++;
    }
  });

});


// blocco funzioni 

// funzione di invio messaggio

function sendSms() {
  var message = $(".footer input").val();
  if (message.length > 0 && !/^\s+$/.test(message)) {  // !/^\s+$/.test() checks there are only white spaces
    var element = $(".template .user-sms").clone();
    element.find(".text").append(message);
    element.find(".time").append(getHours() + ":" + getMinutes());
    $(".chat-contenitor.active .chat").append(element);
    $(".chat-contenitor.active .chat").scrollTop(100000000000000);


    // risposta automatica dopo un secondo
    setTimeout(function () {
      var smsDefault = "ok";
      var pc = $(".template .pc-sms").clone();
      pc.find(".text").append(smsDefault);
      pc.find(".time").append(getHours() + ":" + getMinutes());
      $(".chat-contenitor.active .chat").append(pc);
      $(".chat-contenitor.active .chat").scrollTop(100000000000);
    }, 1000);
  }
  
  $(".footer input").val("");
}


// funzione per cercare le chat
function searchChat() {
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

// funzione per l'ora

function getHours(){
  var d = new Date();
  if (d.getHours() < 10) {
    return "0" + d.getHours();
  } else {
    return d.getHours();
  }
}

// funzione per i minuti

function getMinutes() {
  var d = new Date();
  if (d.getMinutes() < 10){
    return "0" + d.getMinutes();
  } else {
    return d.getMinutes();
  }
  
}