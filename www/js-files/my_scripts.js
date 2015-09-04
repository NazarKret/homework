$(document).ready(function(){

	var FREQ = 10000 ;
	var repeat = true;
	
	function showFrequency(){
		//$("#freq").html( "Page refreshes every " + FREQ/1000 + " second(s).");
	}
	
	function startAJAXcalls(){
		if(repeat){
			setTimeout( function() {
					getXMLData();
					startAJAXcalls();
				}, 	
				FREQ
			);
		}
	}
	
	function getXMLData(){
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Lviv,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Lviv').empty();
				
				//$(xml).find("time").each(function()
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '. WindSpeed: ' + $(xml).find('windSpeed').attr('mps') + '. Clouds: ' + $(xml).find('clouds').attr('value') + '</li>';
					/*if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }*/
					$('#weather_Lviv').append( info );
				}
				//);
				
				//getTimeAjax();
			}
		});
		
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Odessa,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Odessa').empty();
				
				//$(xml).find("time").(function()
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '. WindSpeed: ' + $(xml).find('windSpeed').attr('mps') + '. Clouds: ' + $(xml).find('clouds').attr('value') + '</li>';
					/*if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }*/
					$('#weather_Odessa').append( info );
				}
				//);
				
				//getTimeAjax();
			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Donetsk,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Donetsk').empty();
				
				//$(xml).find("time").(function()
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '. WindSpeed: ' + $(xml).find('windSpeed').attr('mps') + '. Clouds: ' + $(xml).find('clouds').attr('value') + '</li>';
					/*if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }*/
					$('#weather_Donetsk').append( info );
				}
				//);
				
				//getTimeAjax();
			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Kharkiv,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Kharkiv').empty();
				$('#Clouds_Type').empty();
				
				//$(xml).find("time").(function()
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '. WindSpeed: ' + $(xml).find('windSpeed').attr('mps') + '. Clouds: ' + $(xml).find('clouds').attr('value') + '</li>';
					if( $(xml).find('clouds').attr('value') == "few clouds" ){
						$('#Clouds_Type').append( '<img src="http://openweathermap.org/img/w/06d.png"/>' );
					}else if ( $(xml).find('clouds').attr('value') == "broken clouds" ){
						$('#Clouds_Type').append( '<img src="http://openweathermap.org/img/w/04d.png"/>' );
					}else{  }
					$('#weather_Kharkiv').append( info );
				}
				//);
				
				//getTimeAjax();
			}
		});
		
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Kiev,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Kiev').empty();
				
				//$(xml).find("time").(function()
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '. WindSpeed: ' + $(xml).find('windSpeed').attr('mps') + '. Clouds: ' + $(xml).find('clouds').attr('value') + '</li>';
					/*if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }*/
					$('#weather_Kiev').append( info );
				}
				//);
				
				//getTimeAjax();
			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Ternopil,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Ternopil').empty();
				
				//$(xml).find("time").(function()
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '. WindSpeed: ' + $(xml).find('windSpeed').attr('mps') + '. Clouds: ' + $(xml).find('clouds').attr('value') + '</li>';
					/*if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }*/
					$('#weather_Ternopil').append( info );
				}
				//);
				
				//getTimeAjax();
			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Lutsk,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Lutsk').empty();
				
				//$(xml).find("time").(function()
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '. WindSpeed: ' + $(xml).find('windSpeed').attr('mps') + '. Clouds: ' + $(xml).find('clouds').attr('value') + '</li>';
					/*if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }*/
					$('#weather_Lutsk').append( info );
				}
				//);
				
				getTimeAjax();
			}
		});

	}

	function getTimeAjax(){
	//$('#updatedTime').load("time.php");
		/*
		var time = "";
		$.ajax({
			url: "time.php",
			cache: false,
			success: function(data){
				$('#updatedTime').html(data);
			}
		});
		*/
	}
	
	/*$("#btnStop").click(function(){
		repeat = false;
		$("#freq").html( "Updates paused." );
	});

	$("#btnStart").click(function(){
		repeat = true;
		startAJAXcalls();
		showFrequency();
	});	
*/
	showFrequency();
	getXMLData();
	startAJAXcalls();
});
