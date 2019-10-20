(function(w,d,t,f){  w[f]=w[f]||function(c,k,n){s=w[f],k=s['k']=(s['k']||(k?('&k='+k):''));s['c']=  
c=(c  instanceof  Array)?c:[c];s['n']=n=n||0;L=d.createElement(t),e=d.getElementsByTagName(t)[0];  
L.async=1;L.src='//feed.aqicn.org/feed/'+(c[n].city)+'/'+(c[n].lang||'')+'/feed.v1.js?n='+n+k;  
e.parentNode.insertBefore(L,e);  };  })(  window,document,'script','_aqiFeed'  );

_aqiFeed({
		display: '%details',
		container:"airQualityApi",
		lang: 'en',
		city: 'toronto'
		// callback:function(aqi) {
		// 	console.log(aqi);
		// 	}
	});

// AIR QUALITY WIDGET
var chosenLang, chosenCity;

var cityValues = ['brisbane', 'melbourne', 'sydney', 'vienna', 'calgary', 'toronto', 'montreal','baoding', 'beijing', 'changchun', 'changsha', 'chengdu', 'dongguan', 'guangzhou', 'hangzhou', 'hongkong', 'shanghai', 'shenzhen','prague', 'cairo', 'giza', 'paris', 'berlin', 'newdelhi', 'jakarta', 'isfahan', 'tehran', 'milan', 'rome', 'hiroshima', 'kyoto', 'tokyo', 'yokohama', 'busan', 'seoul','moscow', 'barcelona', 'madrid', 'london', 'chigaco', 'philadelphia']
var cityText = titleMaker(cityValues);
var langDropdown = document.getElementById("languageDropdown");
var cityDropdown = document.getElementById("airQualityDropdown");

langDropdown.addEventListener("change", function() {
	chosenLang = langDropdown.value;
	aqiChange(chosenLang, chosenCity);
});

cityDropdown.addEventListener("change", function() {
	chosenCity = cityDropdown.value;
	aqiChange(chosenLang, chosenCity);

	console.log(cityDropdown.value)
});

window.onload = function() {
	for (var i = 0; i<cityValues.length; i++) {
		var option = document.createElement('option');
		option.text = cityText[i];
		option.value = cityValues[i];
		cityDropdown.add(option, 0);
	}
}


function aqiChange(language, chosenCity) {
	_aqiFeed({
		display: '%details',
		container:"airQualityApi",
		lang: language,
		city: chosenCity
		// callback:function(aqi) {
		// 	console.log(aqi);
		// 	}
	});
}

function showActivity(n) {
	let x = document.getElementsByClassName("activity");
	if (n == 0) { //Ambient Air Pollution is showm
		x[0].style.display = 'none';
		x[1].style.display = 'block'; 
		console.log("Show Household Air")
	}else if(n == 1) {	//AQI is showm
		x[1].style.display = 'none';
		x[0].style.display = 'block';
		console.log("Show AQI")
	}else {
		x[0].style.display = 'block';
		console.log("Show Ambient Air")
	}

	// console.log("it worked!")
}