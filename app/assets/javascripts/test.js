$(document).ready(function () {
var active;
var hash;/*
  $('#headerList > li > a').bind('ajax:beforeSend', function(event,object) {
        console.log("removing class active.");
        console.log(event);
      
        hash = event.currentTarget.id;
        hash = hash.substr(1);
          
        console.log('navigating to ' + hash); 
         $("#headerList > li a").each(function(i,k) {
    
           if ($(this).parent().hasClass("active"))
              active = k.id.substr(1);
            console.log('current active page = ' + active);
             if (hash == (k.id).substr(1))
             {
              
              $(this).parent().addClass("active");
             }
             else
             {
              $(this).parent().removeClass("active");
             }
         

          });

          $("#contentContainer").addClass("bounceOutUp");
            
          if ($("#" + hash).length ==1)
          {
          
               //alert($("#" + hash).length);
             var wait = window.setTimeout( function()
             {
              $('#contentContainer').removeClass("bounceOutUp");
              //  $('#contentContainer').empty();
              window.scrollTo(0,0);
               $('#contentContainer').addClass('bounceInDown');
                  $('#' + active).toggleClass("hide");
                  alert (active);
                 $("#" + hash).toggleClass("hide");
               });
             return false;
          }
          else
          {
            return true;
          } 
      });
 $('#headerList > li > a').bind('ajax:success', function(evt, data, status, xhr) {
          console.log(evt);
            
              $('#contentContainer').addClass('bounceInDown');
           
         var wait = window.setTimeout( function(){
      $('#contentContainer').removeClass("bounceOutUp");
      
      window.scrollTo(0,0);
      $('#contentContainer').append(data);
      $('#contentContainer').addClass('bounceInDown');
          $(active).toggleClass("hide");
          $(hash).toggleClass("hide");
         
 
      if ($("#photos").length)
        {        // Can also be used with $(document).ready()
         console.log("album tag");
        $('.flexslider').flexslider({
            animation: "slide"
        });
   
      
        }
       else if (( $("#directions").length) && (directionsService == undefined))
       {
          loadScript();
          console.log("google script loaded");
       }
      },
      400
    );
    
      });
*/
if (!window.console) console = {debug: function() {}};

/*$(window).resize(function() {
        $('body').css('margin','0px');
      });
 */
  $('#contentContainer').addClass('animated bounceInDown');

});

 /* $(function() {
  var active;
   var links = $('#headerList > li > a.link').click(function(event) {
    event.preventDefault();
    
    console.log("removing class active.");
    console.log(event);
   var hash = event.target.hash;
   console.log(hash);
   if (!$(hash).length)
   {
    $.ajax({
      url: "views/layouts/_" + hash.substr(1) + ".html.erb"
      
    }).done(function(html) {
      $('#contentContainer').append(html);
    });
   }
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
  });*/