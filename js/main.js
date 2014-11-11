var theText;
 
 
function doSomething(){
	alert("Hi");
	//var url = "http://www.lloydcenterice.com/json/skschedule.json";
  var url = "http://localhost/LCIR_JavaScript_2013_2014/js/skschedule.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			getCurrentActivities(request.responseText);
		}
	};
	request.send(null);
}

var dUtil = {

  // Use provided date object, or today
  // Add support for strings
  // Remember name:value - values can be functions, arrays, other objects
  getDayName: function(dateObj) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	dateObj = dateObj || new Date();
    return days[dateObj.getDay()];
  },


  // Expects a string like '10:00 AM', assumes current date
  // Note that this will only work where client and server are
  // the same timezone
  timeToDate: function(s) {
    var d = new Date();
    s = s.split(/[: ]/);
    d.setHours((s[2] == 'AM'? s[0] : +s[0] + 12), s[1], 0);
    return d; 
  }
};


function getCurrentActivities(data) {
  var objActivities = JSON.parse(data);
  
  // New trying w-jquery and real page - 12132012
  // var activitiesDiv = $("div.rbox").last();
  var activitiesDiv = document.getElementById("curActivities");
  var actRemoval = activitiesDiv.firstChild;
  
  while (actRemoval){
  	activitiesDiv.removeChild(actRemoval);
  	actRemoval = activitiesDiv.firstChild;
  }
  //activitiesDiv.removeChild(activitiesDiv.firstChild);
  var currentActivities = [];
  var todayActivities, activity, name, times, start, end;
  var now = new Date();

  // Get current day name
  var currentDayName = dUtil.getDayName();

  // Get activities from array
  for (var i=0, iLen=objActivities.length; i<iLen; i++) {
    //alert(objActivities[i].day);
	if (objActivities[i].day == currentDayName) {
      todayActivities = objActivities[i].activities;
      break;
    }
  }

  // If there are no activities for today, return undefined
  if (!todayActivities) return;

  // For each activity today, see what are on now
  for (var j=0, jLen=todayActivities.length; j<jLen; j++) {
    activity = todayActivities[j];
    name = activity.activity;

    // Loop over times to see if on now
    times = activity.times;
    for (var k=0, kLen=times.length; k<kLen; k++) {

      if (dUtil.timeToDate(times[k].start) < now && 
          dUtil.timeToDate(times[k].end) > now) {

        // Add activity to result array
        // Format to whatever is needed
        // This gives an array of strings like "Freestyle  - 6:45 PM to 7:30 PM"
        currentActivities.push(name + ' - ' + times[k].start + ' to ' + times[k].end);
      }
    }
  }
  // Can I put something in here to format the string
  if(currentActivities.length == 0){
  	var div = document.createElement("div");
  	div.setAttribute('id','closedAct');
  	div.innerHTML = "We are currently closed";
  	activitiesDiv.appendChild(div);	
  }
  else{
  	  var div = document.createElement("div");
  	  div.setAttribute('id','openAct');
  	  var olist = document.createElement("ul");
  	  olist.setAttribute('id','currentActivitiesList');
  	  var listHead = document.createElement('h3');
  	  listHead.setAttribute('id','curSkatingActivitiesHead');
  	  listHead.innerHTML = "Current Skating Activities";
  	  var disclaimer = document.createElement("p");
  	  disclaimer.setAttribute('id','disclaimer');
  	  disclaimer.innerHTML = "Dates and times subject to change without notice";
  	  var olistitem;
  	  
	  
	  for(var i=0;i<currentActivities.length;i++){
	  	olistitem = document.createElement("li");
	  	//div.setAttribute('id','openAct');
	  	olistitem.innerHTML = currentActivities[i];
	  	olist.appendChild(olistitem);
	  	//activitiesDiv.appendChild(div);		
	  }
	  div.appendChild(olist);
	  activitiesDiv.appendChild(listHead);
	  activitiesDiv.appendChild(div);
	  activitiesDiv.appendChild(disclaimer);
  }
  //return currentActivities;
}





function sendGroupEmail(){
	var grpName=document.forms["groupemail"]["groupname"].value;
	var conName=document.forms["groupemail"]["contactname"].value;
	var conAddress=document.forms["groupemail"]["contactaddress"].value;
	var conCity=document.forms["groupemail"]["contactcity"].value;
	var conState=document.forms["groupemail"]["contactstate"].value;
	var conZip=document.forms["groupemail"]["contactzip"].value;
	var conPhone=document.forms["groupemail"]["contactphone"].value;
	var conEmail=document.forms["groupemail"]["contactemail"].value;
	var numSkaters=document.forms["groupemail"]["numskaters"].value;
	var arriveDate=document.forms["groupemail"]["arrivaldate"].value;
	var arriveTime=document.forms["groupemail"]["arrivaltime"].value;
	var depTime=document.forms["groupemail"]["departtime"].value;
}

function sendEmail(){

	if (!document.getElementsByTagName){
		return false;
	}
	if (!document.getElementById){
		return false;
	}
	if (!document.getElementById("emailform")){
		return false;
	}
	var emailForm = document.getElementById("emailform");
	var formInputFields = document.getElementsByTagName("input");
	var formTextAreaFields = document.getElementsByTagName("textarea");
	
}

function validateLloydGroupEmailForm(){
	var frmGroupName=document.forms["groupemail"]["groupname"].value;
	
	if (frmGroupName==null || frmGroupName=="")
		{
			alert("Your missing something");
			return false;
		}
}



function validateLloydEmailForm(){
	var frmName=document.forms["myForm"]["lloydName"].value;
	var frmEmail=document.forms["myForm"]["lloydEmail"].value;
	var frmComments=document.forms["myForm"]["lloydComments"].value;
	var atpos = frmEmail.indexOf("@");
	var dotpos = frmEmail.lastIndexOf(".");
	
	if (frmName==null || frmName=="")
		{
			alert("The name field needs to be filled out");
			return false;
		}
	if (frmEmail==null || frmEmail=="")
		{
			alert("The email field needs to be filled out");
			return false;
		}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=frmEmail.length)
		{
			alert("The email is not in a valid format");
			return false;
		}
	if (frmComments==null || frmComments=="")
		{
			alert("The comments field needs to be filled out");
			return false;
		}
}



