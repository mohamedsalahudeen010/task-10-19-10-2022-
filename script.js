var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=>{console.log(data1)
    for (let i=0;i<data1.length;i=i+3){
        var div =document.createElement("div");
        div.innerHTML=`<div class="card-deck">
        <div class="card" style="width=100px height=100px">
          <img src="${data1[i].flag}" class="card-img-top" alt="..." style="height=400px">
          <div class="card-header"><h4>CountryName: ${data1[i].name}</h4></div>
          <div class="card-body">
            <h5 class="card-title">Capital: ${data1[i].capital}</h5>
            <h5 class="card-title">Region: ${data1[i].region}</h5>
            <h5 class="card-title">Countrycode: ${data1[i].alpha3Code}</h5>
            <h5 class="card-title">Lattitude: ${data1[i].latlng[0]}</h5>
            <h5 class="card-title">Longitude:${data1[i].latlng[1]} </h5>
            <button type="button" class="btn btn-secondary"><a href=restdata()>Click here for weather</a></button>
             </div>
        </div>
        <div class="card">
       
          <img src="${data1[i+1].flag}" class="card-img-top" alt="..." style="height=400px">
          <div class="card-header"><h4>CountryName: ${data1[i+1].name}</h4></div>
          <div class="card-body">
          <h5 class="card-title">Capital: ${data1[i+1].capital}</h5>
          <h5 class="card-title">Region: ${data1[i+1].region}</h5>
          <h5 class="card-title">Countrycode: ${data1[i+1].alpha3Code}</h5>
          <h5 class="card-title">Lattitude: ${data1[i+1].latlng[0]}</h5>
          <h5 class="card-title">Longitude: ${data1[i+1].latlng[1]}</h5>
          <button type="button" class="btn btn-secondary"><a href=restdata1()>Click here for weather</a></button>
          </div>
        </div>
        <div class="card">
        
          <img src="${data1[i+2].flag}" class="card-img-top" alt="..." style="height=400px">
          <div class="card-header"><h4>CountryName:${data1[i+2].name}</h4></div>
          <div class="card-body">
          <h5 class="card-title">Capital: ${data1[i+2].capital}</h5>
          <h5 class="card-title">Region: ${data1[i+2].region}</h5>
          <h5 class="card-title">Countrycode: ${data1[i+2].alpha3Code}</h5>
          <h5 class="card-title">Lattitude: ${data1[i+2].latlng[0]}</h5>
          <h5 class="card-title">Longitude: ${data1[i+2].latlng[1]}</h5>
          <button type="button" class="btn btn-secondary"><a href=restdata2()>Click here for weather</a></button>
          </div>
        </div>
      </div>`;
      document.body.append(div)

      

    
    }
})
.catch((error)=>console.log(error));


function restdata(){
  var res=fetch("https://restcountries.com/v2/all")
  .then((data)=>data.json())
  .then((data1)=>{console.log(data1)
    try {
      for(var i=0;i<data1.length;i=i+3){
      var name=data1[i].name;
      var lat=data1[i].latlng[0];
      var lon=data1[i].latlng[1];
      if(latlong.length===undefined){
          throw new Error("invalid coordinates");
      }
      opendata(name,lat,lon);
      }
  } catch (error) {
      console.log("invalid"+error.message);
  }
  })
  
  }
  
  function restdata1(){
    var res=fetch("https://restcountries.com/v2/all")
    .then((data)=>data.json())
    .then((data1)=>{console.log(data1)
      try {
        for(var i=1;i<data1.length;i=i+3){
        var name=data1[i+1].name;
        var lat=data1[i+1].latlng[0];
        var lon=data1[i+1].latlng[1];
        if(latlong.length===undefined){
            throw new Error("invalid coordinates");
        }
        opendata(name,lat,lon);
        }
    } catch (error) {
        console.log("invalid"+error.message);
    }
    })
    
    }
  
    function restdata2(){
      var res=fetch("https://restcountries.com/v2/all")
      .then((data)=>data.json())
      .then((data1)=>{console.log(data1)
        try {
          for(var i=2;i<data1.length;i=i+3){
          var name=data1[i+2].name;
          var latlong=data1[i+2].latlng[0];
          var lon=data1[i+1].latlng[1];
          if(latlong.length===undefined){
              throw new Error("invalid coordinates");
          }
          opendata(name,lat,lon);
          }
      } catch (error) {
          console.log("invalid"+error.message);
      }
      })
      
      }
      
  
  
      function opendata(name,lat,lon){
      let res=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`)
      .then((data)=>data.json())
      .then((data1)=>{ for (let i=0;i<data1.length;i=i+3){
      var div=document.createElement("div");
      div.innerHTML=`Country name:${name} , Temp:${data1.main.temp}`
      document.body.append(div)}
      })
    
    }

