var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        if( data[i].currencies[0].name === "United States dollar"){
            console.log(`${data[i].name}`);
    }
    
    }
}
//Qn:- Print the country which uses US Dollars as currency