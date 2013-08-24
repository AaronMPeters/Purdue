$(document).ready(function() {

  $('.square').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
  });

  $('.square').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
  });

  $('.square').click(function() {
       (this).toggle(1000);
   });
  
  $('.link').mouseenter(function() {
        $(this).fadeTo('fast', 1.0);
  });
    
  $('.link').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
  });

  $(function() {
    
    $( "#accordion" ).accordion();
    
    
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#autocomplete" ).autocomplete({
      source: availableTags
    });
    

    
    $( "#button" ).button();
    $( "#radioset" ).buttonset();
    

    
    $( "#tabs" ).tabs();
    

    
    $( "#dialog" ).dialog({
      autoOpen: false,
      width: 400,
      buttons: [
        {
          text: "Ok",
          click: function() {
            $( this ).dialog( "close" );
          }
        },
        {
          text: "Cancel",
          click: function() {
            $( this ).dialog( "close" );
          }
        }
      ]
    });

    // Link to open the dialog
    $( "#dialog-link" ).click(function( event ) {
      $( "#dialog" ).dialog( "open" );
      event.preventDefault();
    });
    

    
    $( "#datepicker" ).datepicker({
      inline: true
    });
    

    
    $( "#slider" ).slider({
      range: true,
      values: [ 17, 67 ]
    });
    

    
    $( "#progressbar" ).progressbar({
      value: 20
    });
    

    // Hover states on the static widgets
    $( "#dialog-link, #icons li" ).hover(
      function() {
        $( this ).addClass( "ui-state-hover" );
      },
      function() {
        $( this ).removeClass( "ui-state-hover" );
      }
    );
  });
});