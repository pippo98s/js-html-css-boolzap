$(document).ready(function () {

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

  // mostra chat attiva
  showChat();

  // cancella un messaggio
  deleteMessage();

  // ritorno dalla chat alla lista per device sotto i 662px di larghezza 
  $(".arrow-chat").click(function () {
    if (window.matchMedia("(max-width: 662px)").matches) {
      $("#right-side").addClass("d-none-important");
      $("#left-side").addClass("active-important");
    }
  });
  

  $(window).resize(function () {
    if (window.matchMedia("(min-width: 662px)").matches){
     $("#right-side").removeClass("d-none-important");
     $("#left-side").removeClass("active-important");
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

// funzione per mostrare la chat attiva
function showChat(){
  $(".info-chat").click(function () {
    if (window.matchMedia("(max-width: 662px)").matches) {
      $("#left-side").removeClass("active-important");
      $("#right-side").removeClass("d-none-important");
      showChatHelper($(this));
    } else {
      showChatHelper($(this));
    }
  });
}

// seconda parte della funzione showChat
function showChatHelper(_this){
  var chatAttiva = $("#right-side .chat-contenitor.active");
  var riferimento = (_this.attr("riferimento"));

  chatAttiva.removeClass("active");
  chatAttiva.addClass("d-none");

  $(".chat-contenitor" + "." + riferimento + "").addClass("active");
  $(".chat-contenitor" + "." + riferimento + "").removeClass("d-none");
}

// funzione per cancellare il messaggio
function deleteMessage(){
  $(document).on("click", ".dropdown", function () {
    $(this).next(".dropdown-item").toggle();
  })

  $(document).on("click", ".dropdown-item p", function () {
    $(this).parents(".sms-contenitor").remove();
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