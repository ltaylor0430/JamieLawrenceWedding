$(document).ready(function () {
if (!window.console) console = {debug: function() {}};

 $(window).resize(function() {
  $('body').css('margin','0px');
});
$('#contentContainer').addClass(' animated bounceInDown');
 
});

  $(function() {
  var active;
   var links = $('a.link').click(function(event) {
    event.preventDefault();
    
    console.log("removing class active.");
    console.log(event);
   var hash = event.target.hash;
   console.log(hash);
  $("#headerList > li a").each(function(i,k) {
 		
   if ($(this).parent().hasClass("active"))
  	 	active = k.hash;
  	 if (hash == (k.hash))
   	 {
   	 	
   	 	$(this).parent().addClass("active");
   	 }
   	 else
   	 {
   	 	$(this).parent().removeClass("active");
   	 }
 

   	});
   	//fade out current selection and show the new one
   	$("#contentContainer").addClass("bounceOutUp");
 
     	
   	//remove 
   	var wait = window.setTimeout( function(){
			$('#contentContainer').removeClass("bounceOutUp");
			window.scrollTo(0,0);
			$('#contentContainer').addClass('bounceInDown');
			  	$(active).toggleClass("hide");
			$(hash).toggleClass("hide");
			if (hash == "#album")
   			{
	   	    
				// Can also be used with $(document).ready()
				 console.log("album tag");
				$('.flexslider').flexslider({
				    animation: "slide"
				});
	 
	    
   			}
		   else if ((hash == "#directions" )&& (directionsService == undefined))
		   {
			   	loadScript();
			   	console.log("google script loaded");
		   }
			},
			400
		);
    
   
	
   });
  });