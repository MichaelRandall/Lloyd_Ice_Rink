


$(document).ready(function() {
	// on ready, clear values for all hidden input fields
	$('#product-title').val("")
	$('#product-attr-description').val("")
	$('#product-price').val("")
	$('#sk-name').val("")
	$('#erbox').hide();
	$("#change_skater").hide();
	
	if(googlecartWidget.isLoaded()){
	googlecart.clear();
	}
	
	
	$('#select_class').change(function() {
		var selectedClass = $('select[name="select_class"]').val();
		var koolPattern = new RegExp("^Kool");
		var isKool = koolPattern.test(selectedClass);
		if (isKool){
			$(".skaterAgeSize").show();
		}else{
			$(".skaterAgeSize").hide();
		}
	});	
	
	
	var theThing = document.classes_form.select_day_time;
	// Format in option is "text to appear", "value", "default selected", "selected - true/false"
	
    theThing.options[0]=new Option("Select Option","Skate Class Certificate", true, true)
    theThing.options[1]=new Option("Redeemable Anytime","Redeemable Anytime", false, false)
    

    
    /*These are used if the gift certificate is taken out*/
    /*
    theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    theThing.options[2]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    theThing.options[3]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    theThing.options[4]=new Option("Fri 5:30PM", "Friday 5:30PM", false, false)
    theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM ", false, false)
    */
    

	   
    $('#select_class').change(function(){
    	document.classes_form.select_day_time.options.length=0
    	
    	$('#product-attr-description').val("")
    	
    	
    	/* Begin regular classes */
    	if ($('select[name="select_class"]').val() == "Snowbunnies 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:15PM", "Tuesday 5:15PM", false, false)
    			theThing.options[3]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    			theThing.options[4]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[5]=new Option("Fri 5:00PM", "Friday 5:00PM", false, false)
    			theThing.options[6]=new Option("Sat 10:30AM", "Saturday A 10:30AM ", false, false)
    			/*theThing.options[7]=new Option("Sat 11:00AM", "Saturday B 11:00AM ", false, false)*/
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Snowbunnies 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Snowbunnies 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:15PM", "Tuesday 5:15PM", false, false)
    			theThing.options[3]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    			theThing.options[4]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[5]=new Option("Fri 5:00PM", "Friday 5:00PM", false, false)
    			theThing.options[6]=new Option("Sat 10:30AM", "Saturday A 10:30AM ", false, false)
       		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Snowbunnies 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Snowbunnies 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:15PM", "Tuesday 5:15PM", false, false)
    			theThing.options[3]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    			theThing.options[4]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[5]=new Option("Fri 5:00PM", "Friday 5:00PM", false, false)
    			theThing.options[6]=new Option("Sat 10:30AM", "Saturday A 10:30AM ", false, false)
    			/*theThing.options[7]=new Option("Sat 11:00AM", "Saturday B 11:00AM ", false, false)*/
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Snowbunnies 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Introductory")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Tue 5:15PM", "Tuesday 5:15PM", false, false)
    			theThing.options[3]=new Option("Wed 4:30PM", "Wednesday A 4:30PM", false, false)
    			theThing.options[4]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[5]=new Option("Fri 5:30PM", "Friday 5:30PM", false, false)
    			theThing.options[6]=new Option("Sat 10:30AM", "Saturday A 10:30AM", false, false)
    			/*theThing.options[7]=new Option("Sat 11:00AM", "Saturday B 11:00AM", false, false)*/
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Intro")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Basic 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:15PM", "Tuesday 5:15PM", false, false)
    			theThing.options[3]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    			theThing.options[4]=new Option("Fri 6:00PM", "Friday 6:00PM", false, false)
    			theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Basic 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Basic 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[3]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[4]=new Option("Fri 6:30PM", "Friday 6:30PM", false, false)
    			theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Basic 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 6:15PM", "Tuesday 6:15PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Basic 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[3]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[4]=new Option("Fri 6:30PM", "Friday 6:30PM", false, false)
    			theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Basic 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 6:15PM", "Tuesday 6:15PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Basic 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[3]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[4]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Basic 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 6:15PM", "Tuesday 6:15PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Basic 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    			theThing.options[3]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[4]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
		/*else if ($('select[name="select_class"]').val() == "Summer Basic 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 6:15PM", "Tuesday 6:15PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Basic 7")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[3]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Basic 7")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 6:15PM", "Tuesday 6:15PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Basic 8")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[3]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
		/*else if ($('select[name="select_class"]').val() == "Summer Basic 8")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 6:15PM", "Tuesday 6:15PM", false, false)
    			theThing.options[2]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Freeskate 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Freeskate 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Freeskate 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Freeskate 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Freeskate 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Freeskate 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
		else if ($('select[name="select_class"]').val() == "Freeskate 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
		/*else if ($('select[name="select_class"]').val() == "Summer Freeskate 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Freeskate 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Freeskate 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Freeskate 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Summer Freeskate 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:30AM", "Saturday 11:30AM", false, false)
       		}*/
    	else if ($('select[name="select_class"]').val() == "Adult 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Adult 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Adult 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Adult 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Adult FS-1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    		/*else if ($('select[name="select_class"]').val() == "SmrAdult")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:30PM", "Monday 7:30PM", false, false)
    		}
    		else if ($('select[name="select_class"]').val() == "SmrBoys")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
    		}*/
    	/* Int-Low-Power and High-Power are off for the summer */
    	/*else if ($('select[name="select_class"]').val() == "Int-Low-Power")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Low-Power Off Ice")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 8:20AM", "Saturday 8:20AM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "High-Power")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 8:30AM", "Saturday 8:30AM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "High-Power Off Ice")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sun 10:05AM", "Sunday 10:05AM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Posture Stretch")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 4:30PM", "Tuesday 4:30PM", false, false)
    		}*/
    	else if ($('select[name="select_class"]').val() == "Power")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Synchronized Skating")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 10:00AM", "Saturday 10:00AM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Moves")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Wed 6:00PM", "Wednesday 6:00PM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Jumps")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}*/
    	else if ($('select[name="select_class"]').val() == "Spins")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Adult Specialty")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 10:30AM", "Tuesday 10:30AM", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Dance 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 5:45PM", "Tuesday 5:45PM", false, false)
    		}*/
    	else if ($('select[name="select_class"]').val() == "Patch")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 10:00AM", "Tuesday 10:00AM", false, false)
    		}
    	/*else if ($('select[name="select_class"]').val() == "Off Ice")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 10:05AM", "Saturday 10:05AM", false, false)
    		}*/
    	else if ($('select[name="select_class"]').val() == "Spectrum Skaters")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true) 
    			theThing.options[1]=new Option("Sat 10:00AM", "Saturday 10:00AM", false, false)
    		}
    	
    	/* Begin Holiday Classes */
    	/*
    	else if ($('select[name="select_class"]').val() == "Holiday Snowbunnies 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
    		}
		else if ($('select[name="select_class"]').val() == "Holiday Snowbunnies 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Snowbunnies 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Introductory")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Basic 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Basic 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Basic 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Basic 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Basic 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		} 		
    	else if ($('select[name="select_class"]').val() == "Holiday Basic 7")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Basic 8")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
    	else if ($('select[name="select_class"]').val() == "Holiday Freeskate 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
    	else if ($('select[name="select_class"]').val() == "Holiday Freeskate 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
    	else if ($('select[name="select_class"]').val() == "Holiday Freeskate 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
    	else if ($('select[name="select_class"]').val() == "Holiday Freeskate 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
    	else if ($('select[name="select_class"]').val() == "Holiday Freeskate 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
    	else if ($('select[name="select_class"]').val() == "Holiday Freeskate 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
       		}
		else if ($('select[name="select_class"]').val() == "Holiday Adults")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:30PM", "Monday 7:30PM", false, false)
    		}
		else if ($('select[name="select_class"]').val() == "Holiday Moves")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    		}
		else if ($('select[name="select_class"]').val() == "Holiday Spins")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Wed 7:00PM", "Wednesday 7:00PM", false, false)
    		}
		else if ($('select[name="select_class"]').val() == "Holiday Power")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
    		}
		else if ($('select[name="select_class"]').val() == "Holiday Jumps")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 11:00AM", "Saturday 11:00AM", false, false)
    		}
    	*/
    	/* Begin certificate */
    	
    	else if ($('select[name="select_class"]').val() == "Skate Class Certificate")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Select Option","Skate Class Certificate", true, true)
    			theThing.options[1]=new Option("Redeemable Anytime","Redeemable Anytime", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Public Skate Pass")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Select Option","Public Skate Pass", true, true)
    			theThing.options[1]=new Option("Redeemable Anytime","Redeemable Anytime", false, false)
    		}
    		
    	/* Begin Kool Kamp */
    	
    	/*else if ($('select[name="select_class"]').val() == "Kool Kamp 1 Wk")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Select Option","Kool Kamp 1 Wk", true, true)
    			theThing.options[1]=new Option("June 17 to 21","June 17 to 21", false, false)
    			theThing.options[2]=new Option("June 24 to 28","June 24 to 28", false, false)
    			theThing.options[3]=new Option("July 1 to 5 (Open the 4th)","July 1 to 5 (Open the 4th)", false, false)
    			theThing.options[4]=new Option("July 8 to 12","July 8 to 12", false, false)
    			theThing.options[5]=new Option("July 15 to 19","July 15 to 19", false, false)
    			theThing.options[6]=new Option("July 22 to 26","July 22 to 26", false, false)
    			theThing.options[7]=new Option("July 29 to August 2","July 29 to August 2", false, false)
    			theThing.options[8]=new Option("August 5 to 9","August 5 to 9", false, false)
    			theThing.options[9]=new Option("August 12 to 16","August 12 to 16", false, false)
    			theThing.options[10]=new Option("August 19 to 23","August 19 to 23", false, false)
    			theThing.options[11]=new Option("August 26 to 30","August 26 to 30", false, false)
    		}
    	else if ($('select[name="select_class"]').val() == "Kool Kamp Deposit")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Select Option","Kool Kamp Deposit", true, true)
    			theThing.options[1]=new Option("June 17 to 21","June 17 to 21", false, false)
    			theThing.options[2]=new Option("June 24 to 28","June 24 to 28", false, false)
    			theThing.options[3]=new Option("July 1 to 5 (Open the 4th)","July 1 to 5 (Open the 4th)", false, false)
    			theThing.options[4]=new Option("July 8 to 12","July 8 to 12", false, false)
    			theThing.options[5]=new Option("July 15 to 19","July 15 to 19", false, false)
    			theThing.options[6]=new Option("July 22 to 26","July 22 to 26", false, false)
    			theThing.options[7]=new Option("July 29 to August 2","July 29 to August 2", false, false)
    			theThing.options[8]=new Option("August 5 to 9","August 5 to 9", false, false)
    			theThing.options[9]=new Option("August 12 to 16","August 12 to 16", false, false)
    			theThing.options[10]=new Option("August 19 to 23","August 19 to 23", false, false)
    			theThing.options[11]=new Option("August 26 to 30","August 26 to 30", false, false)
    		}
		else if ($('select[name="select_class"]').val() == "Kool Kamp 4 Wks")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Select Option","Kool Kamp 4 Wks", true, true)
    			theThing.options[1]=new Option("Redeemable Anytime","Redeemable Anytime", false, false)
    		}*/
    	});		    	
});


