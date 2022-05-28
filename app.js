window.addEventListener("load",()=>{
    let long;
    let lat;
    let tempretureDescription=document.querySelector(".tempreture-description");
    let tempretureDegree=document.querySelector(".tempreture-degree");
    let locationTimezone=document.querySelector(".location-timezone");
    let locationRegion=document.querySelector(".location-region");
    let locationarea=document.querySelector(".location-tz");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

            const api=`http://api.weatherapi.com/v1/current.json?key=4f6bf6d04a88424387a122551222805&q=${lat},${long}&aqi=no`;

        fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const{temp_f} =data.current;
                const{condition}=data.current;
                // Set DOM elements from the API
                tempretureDescription.textContent=condition.text;
                tempretureDegree.textContent=temp_f;
                const{name,region,tz_id}=data.location;
                 locationTimezone.textContent=name;
                 locationRegion.textContent=region;
                 locationarea.textContent=tz_id;
                 


            });
            
        });

        function setIcons(icon,iconID){
            const skycons=new skycons({color:"white"});
            const currentIcon=data.icon;
        }
        

    }


});