var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    
    var value = data.forEach( data => { console.log(`${data.name} ${data.capital} ${data.flag}`);
        });
}

//printing using forEach function
