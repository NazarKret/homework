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
			url: "http://api.openweathermap.org/data/2.5/weather?q=Lviv,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Lviv').empty();
				$('#Clouds_Lviv').empty();
				
				{
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature:  ' + Number(x1) + '°C' + '<li>WindSpeed: ' + $(xml).find('speed').attr('value') + ' mps' + '<li>Clouds: ' + $(xml).find('clouds').attr('name') + '</li>';
					$('#Clouds_Lviv').append( '<img src="http://openweathermap.org/img/w/'+
					
					$(xml).find('weather').attr('icon') +
					
					'.png"/>' );
					
					
					$('#weather_Lviv').append( info );				}
				
			}
		});
		
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Odessa').empty();
				$('#Clouds_Odessa').empty();
				
				{
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '°C' + '<li>WindSpeed: ' + $(xml).find('speed').attr('value') + ' mps' + '<li>Clouds: ' + $(xml).find('clouds').attr('name') + '</li>';

					$('#Clouds_Odessa').append( '<img src="http://openweathermap.org/img/w/'+
					
					$(xml).find('weather').attr('icon') +
					
					'.png"/>' );

					$('#weather_Odessa').append( info );
				}
				
			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=Donetsk,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Donetsk').empty();
				$('#Clouds_Donetsk').empty();				
				
				{
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '°C' + '<li>WindSpeed: ' + $(xml).find('speed').attr('value') + ' mps' + '<li>Clouds: ' + $(xml).find('clouds').attr('name') + '</li>';

					$('#Clouds_Donetsk').append( '<img src="http://openweathermap.org/img/w/'+
					
					$(xml).find('weather').attr('icon') +
					
					'.png"/>' );

					$('#weather_Donetsk').append( info );
				}
			
			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Kharkiv').empty();
				$('#Clouds_Kharkiv').empty();
				
			{
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '°C' + '<li>WindSpeed: ' + $(xml).find('speed').attr('value') + ' mps' + '<li>Clouds: ' + $(xml).find('clouds').attr('name') + '</li>';
					
					$('#Clouds_Kharkiv').append( '<img src="http://openweathermap.org/img/w/'+
					
					$(xml).find('weather').attr('icon') +
					
					'.png"/>' );
					
					$('#weather_Kharkiv').append( info );
				}
			
			}
		});
		
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Kyiv').empty();
				$('#Clouds_Kyiv').empty();				
				
			{
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '°C' + '<li>WindSpeed: ' + $(xml).find('speed').attr('value') + ' mps' + '<li>Clouds: ' + $(xml).find('clouds').attr('name') + '</li>';

					$('#Clouds_Kyiv').append( '<img src="http://openweathermap.org/img/w/'+
					
					$(xml).find('weather').attr('icon') +
					
					'.png"/>' );

					$('#weather_Kyiv').append( info );
				}

			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=Ternopil,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Ternopil').empty();
				$('#Clouds_Ternopil').empty();
				
			 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '°C' + '<li>WindSpeed: ' + $(xml).find('speed').attr('value') + ' mps' + '<li>Clouds: ' + $(xml).find('clouds').attr('name') + '</li>';

					$('#Clouds_Ternopil').append( '<img src="http://openweathermap.org/img/w/'+
					
					$(xml).find('weather').attr('icon') +
					
					'.png"/>' );

					$('#weather_Ternopil').append( info );
				}
			
			}
		});
		
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=Lutsk,ua&mode=xml",
			cache: false,
			dataType: "xml",
			success:  function(xml){
				
				$('#weather_Lutsk').empty();
				$('#Clouds_Lutsk').empty();
		
				 {
					var x1 = Math.floor($(xml).find('temperature').attr('value') - 273.15 + 0.5);
					var info = '<li>Temperature: ' + Number(x1) + '°C' + '<li>WindSpeed: ' + $(xml).find('speed').attr('value') + ' mps' + '<li>Clouds: ' + $(xml).find('clouds').attr('name') + '</li>';

					$('#Clouds_Lutsk').append( '<img src="http://openweathermap.org/img/w/'+
					
					$(xml).find('weather').attr('icon') +
					
					'.png"/>' );

					$('#weather_Lutsk').append( info );
				}
			
				
				getTimeAjax();
			}
		});

	}

	function getTimeAjax(){
	
	}
	
	
	showFrequency();
	getXMLData();
	startAJAXcalls();
});


	function Selected(a) {

		var label = a.value;
		
		document.getElementById('Lviv').style.display="none";
		document.getElementById('Odessa').style.display="none";
		document.getElementById('Donetsk').style.display="none";
		document.getElementById('Kharkiv').style.display="none";
		document.getElementById('Kyiv').style.display="none";
		document.getElementById('Ternopil').style.display="none";
		document.getElementById('Lutsk').style.display="none";
		
		if (label == 'city_1') {
			
			document.getElementById('Lviv').style.display="block";
		}
		if (label == 'city_2') {
			
			document.getElementById('Odessa').style.display="block";
		}
		
		if (label == 'city_3') {
			
			document.getElementById('Donetsk').style.display="block";
		}
		
		if (label == 'city_4') {
			
			document.getElementById('Kharkiv').style.display="block";
		}
		
		if (label == 'city_5') {
			
			document.getElementById('Kyiv').style.display="block";
		}
		
		if (label == 'city_6') {
			
			document.getElementById('Ternopil').style.display="block";
		}
		
		if (label == 'city_7') {
			
			document.getElementById('Lutsk').style.display="block";
		}
		
		
	}