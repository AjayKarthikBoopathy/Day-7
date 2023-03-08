var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);

    var filt = (data).filter((data) => (data.region === "Asia"))

    console.log(filt);
    for(var i=0;i<filt.length;i++){        
        console.log(`${filt[i].name}`);
        
    }

}


//Overall 250 country Filtered 50 country using Filter method