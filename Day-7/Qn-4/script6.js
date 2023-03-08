var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data[1].population);
    
    var total=0;
   var tot = data.reduce( (pv, cv) => pv + cv.population, 0)
    console.log(tot);
    
       
    
}

/* const numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
} */


//Qn:- Print the total population of countries using reduce function


//var total = (data.population).reduce( (a,b) => (a+b) )
//    console.log(total);

// 14240168

/*  for(var i=0;i<data.length;i++){ 
    var total = 0;
    total = total + data[i].population;     
    
    
}
console.log(total);  */