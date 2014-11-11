function setOnClick(){
	$('.day').click(function(){
		$(this).next().slideToggle();
	});
}

function setOnMouseOverOut(){
    $('.day').mouseover(function(){
        $('.day').css('cursor','pointer');    
    });
    
    $('.day').mouseout(function(){
        $('.day').css('cursor','default');    
    });   
}


//Displays freestyle skate times for the week on the body of the freestyle page
function GetBodyFreestyle(){
	$("#activities").empty();
	$.each(showPrice, function(index, data){
					
			var dayScheduleHolderDiv = $('<div class="daydiv"></div>');
			dayScheduleHolderDiv.append('<div class="day">+ ' + this.day + '</div>');
			var timesHolderDiv = $('<div class="times"></div>');
			
			var freestyleCounter = 0;
			var activityVar = '';	
					
			$.each(data.activities, function(index, data){
        			
        			if(this.type === "Freestyle"){	
        				freestyleCounter += 1;
        			}			
						
			});
					
					
			if(freestyleCounter <= 0){
				activityVar = "No freestyle today";
				timesHolderDiv.append('<p class="classtitle">' + activityVar + '</p>');
			}else{
				$.each(data.activities, function(index, data){
					if(this.type === "Freestyle"){			
												
						$.each(data.times, function(index, data){
							timesHolderDiv.append('<p class="classschedule"><strong>Start:</strong> ' + this.start + ', <strong>End:</strong> ' + this.end + '</p>');
						});
					}
				});
			}
			
					
							
			var scheduleHolderDiv = $("#activities");
			dayScheduleHolderDiv.append(timesHolderDiv);
			scheduleHolderDiv.append(dayScheduleHolderDiv);
			scheduleHolderDiv.trigger('create');
	});
	
	setOnClick();
    setOnMouseOverOut();
	
}

//Displays open skate times for the week on the body of the public page
function GetBodyPublic(){

    $("#activities").empty();
	$.each(showPrice, function(index, data){
					
			var dayScheduleHolderDiv = $('<div class="daydiv"></div>');
			dayScheduleHolderDiv.append('<div class="day">+ ' + this.day + '</div>');
			var timesHolderDiv = $('<div class="times"></div>');
			var publicCounter = 0;
			var activityVar = '';	
					
			$.each(data.activities, function(index, data){
        			
        			if(this.type === "Public"){	
        				publicCounter += 1;
        			}			
						
			});
					
					
			if(publicCounter <= 0){
				activityVar = "No public skate today";
				timesHolderDiv.append('<p class="classtitle">' + activityVar + '</p>');
			}else{
				$.each(data.activities, function(index, data){
					if(this.type === "Public"){			
												
						$.each(data.times, function(index, data){
							timesHolderDiv.append('<p class="classschedule"><strong>Start:</strong> ' + this.start + ', <strong>End:</strong> ' + this.end + '</p>');
						});
					}
				});
			}
			
					
							
			var scheduleHolderDiv = $("#activities");
			dayScheduleHolderDiv.append(timesHolderDiv);
			scheduleHolderDiv.append(dayScheduleHolderDiv);
			scheduleHolderDiv.trigger('create');
	});
	
	setOnClick();
    setOnMouseOverOut();
}

//Displays class times for the week on the body of the schedule page
function GetBodyClasses(){ 
$("#activities").empty();
	$.each(showPrice, function(index, data){
					
			var dayScheduleHolderDiv = $('<div class="daydiv"></div>');
			dayScheduleHolderDiv.append('<div class="day">+ ' + this.day + '</div>');
			var timesHolderDiv = $('<div class="times"></div>');
			var classCounter = 0;
			var activityVar = '';	
					
			$.each(data.activities, function(index, data){
        			
        			if(this.type === "Class"){	
        				classCounter += 1;
        			}			
						
			});
					
					
			if(classCounter <= 0){
				activityVar = "No classes today";
				timesHolderDiv.append('<p class="classtitle">' + activityVar + '</p>');
			}else{
				$.each(data.activities, function(index, data){
					if(this.type === "Class"){			
						timesHolderDiv.append('<p class="classtitle">' + this.activity + '</p>');
						
						$.each(data.times, function(index, data){
							timesHolderDiv.append('<p class="classschedule"><strong>Start:</strong> ' + this.start + ', <strong>End:</strong> ' + this.end + '</p>');
						});
					}
				});
			}
							
			var scheduleHolderDiv = $("#activities");
			dayScheduleHolderDiv.append(timesHolderDiv);
			scheduleHolderDiv.append(dayScheduleHolderDiv);
			scheduleHolderDiv.trigger('create');
	});
	setOnClick();
    setOnMouseOverOut();
}
	

function returnDay(){
	var day=new Date().getDay();
	switch (day)
	{
	case 0:
  		return("Sunday");
  		break;
	case 1:
  		return("Monday");
  		break;
	case 2:
  		return("Tuesday");
  		break;
	case 3:
  		return("Wednesday");
  		break;
	case 4:
  		return("Thursday");
  		break;
	case 5:
  		return("Friday");
  		break;
	case 6:
  		return("Saturday");
  		break;
	}
}

//Displays public skate times for current day on right-side of every page
function GetAdvPublic(){
	var theDay = returnDay();
	
	$("#publicskateschedule").empty();
		$.each(showPrice, function(index, data){
			
			if(this.day == theDay){
				var timeScheduleHolderDiv = $('<div id="adv_time_holder_div"></div>');
				
				var publicCounter = 0;
				var activityVar = '';	
					
				$.each(data.activities, function(index, data){
        			
        			if(this.type === "Public"){	
        				publicCounter += 1;
        			}			
						
				});
					
					
				if(publicCounter <= 0){
					activityVar = "No public skate today";
					timeScheduleHolderDiv.append('<p id="adv_no_public_notice">' + activityVar + '</p>');
				}else{
					$.each(data.activities, function(index, data){
						if(this.type === "Public"){
											
							$.each(data.times, function(index, data){
							timeScheduleHolderDiv.append('<p class="adv_public_schedule"><strong>Start:</strong> ' + this.start + ', <strong>End:</strong> ' + this.end + '</p>');
							});
						}
					});
				}
				
				var advScheduleHolderDiv = $("#publicskateschedule");
				advScheduleHolderDiv.append(timeScheduleHolderDiv);
				advScheduleHolderDiv.trigger('create');
			}
	});
}

//NOT IN USE - determines the schedule type based on page making the request
function GetBodySchedule(activity){
	var activityType = "";
	switch(activity)
	{
		case "freestyle":
  			activityType = "Freestyle";
  			break;
		case "SkateLessons":
			activityType = "Class";
			break;
        case "Public":
    		activityType = "Public";
			break;
	}

}


//Determines the page the request is coming from and dynamically updates the schedule on the page
function init(){
	GetAdvPublic();
	
	var thePath = window.location.pathname;
	var separator = "/";
	var arrayOfStrings = thePath.split(separator);	
	var activity = arrayOfStrings[1];
	
	/*GetBodySchedule(activity);*/
	
	
	switch(activity)
	{
		case "freestyle":
  			GetBodyFreestyle();
  			break;
		case "SkateLessons":
			GetBodyClasses();
			break;
        case "Public":
    		GetBodyPublic();
			break;
	}
}
