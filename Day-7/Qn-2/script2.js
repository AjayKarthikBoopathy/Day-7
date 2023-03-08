var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);

    var filt = (data).filter((data) => (data.population <= 200000))

    console.log(filt);
    for(var i=0;i<filt.length;i++){        
        console.log(`${filt[i].name}`);
        
    }

} 
    
   

//Country names with less than 2 lakh population using Filter method are 63 countries