$( function() {
    $( "#dateFrom" ).datepicker();
    $( "#dateTo" ).datepicker();
    $(".date-clear").on("click", function(){
    	$(this).siblings($(".date")).val("");
    })
  } );