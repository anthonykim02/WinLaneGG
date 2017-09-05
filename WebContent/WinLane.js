
$(document).ready(function() {
	// give button a click event handler
         $("#enter").click(function() {
             servletCall();
         });
         
         $("#about").click(function() {
        	 window.location.href = "About.jsp";
         });
         
         

     });

// get request to servlet to get current game info
     function servletCall() {
    	 var name = $("#name").val();
         $.post(
             "GetUserServlet", 
             {userName : name}, //meaasge you want to send
             function(result) {
	            	 if (result.trim() == "NotInGame") {
	            		 alert("Summoner is not currrently in game.");
	            	 } else if (result.trim() == "DoesNotExist") {
	            		 alert("Summoner does not exist");
	            	 } else  {
	            		// store current game locally, open next webpage
	                	 localStorage.setItem("CurrentGame", result);
	                	 window.location.href = "Stats.jsp";
	            	 }
            	 
            	 
         });
    	 	
     };