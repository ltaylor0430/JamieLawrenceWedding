
$(document).ready(function () {
 
$('#contentContainer').addClass(' animated bounceInDown');
 
});
 
  $(function() {
  var active;
   var links = $('a.link').click(function(event) {
   	   event.preventDefault();

    console.debug("removing class active.");
   console.debug(event);
   var hash = event.target.hash;
   console.debug(hash);
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
			$('#contentContainer').addClass('bounceInDown');
			  	$(active).toggleClass("hide");
			$(hash).toggleClass("hide");
			if (hash == "#album")
   			{
	   	    
				// Can also be used with $(document).ready()
				 console.debug("album tag");
				$('.flexslider').flexslider({
				    animation: "slide"
				});
	 
	    
   			}
		   else if ((hash == "#directions" )&& (directionsService == undefined))
		   {
			   	loadScript();
			   	console.debug("google script loaded");
		   }
			},
			400
		);
    
   
	
   });
  });