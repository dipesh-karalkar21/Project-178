let longitude = 80 ; let latitude = 20

mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"

var map =new mapboxgl.Map({
    container : "map",
    center : [longitude,latitude],
    zoom : 5,
    style : "mapbox://styles/mapbox/streets-v11"
})

var img1 = document.querySelector("#baps")
var img2 = document.querySelector("#raigad")
var img3 = document.querySelector("#kailash")
var img4 = document.querySelector("#kasi")
var img5 = document.querySelector("#panhala")
var img6 = document.querySelector("#rajgad")
var img7 = document.querySelector("#ramMandir")
var img8 = document.querySelector("#ramnathswamy")
var img9 = document.querySelector("#sinhagad")
var img10 = document.querySelector("#tanjavur")

var marker1 = new mapboxgl.Marker({element : img1}).setLngLat([72.98244450632868,20.269545061124656]).addTo(map)
var marker2 = new mapboxgl.Marker({element : img2}).setLngLat([73.44064837927753,18.23375190377168]).addTo(map)
var marker3 = new mapboxgl.Marker({element : img3}).setLngLat([75.16194023885606,20.02401658549146]).addTo(map)
var marker4 = new mapboxgl.Marker({element : img4}).setLngLat([83.01068902371156,25.31100835969185]).addTo(map)
var marker5 = new mapboxgl.Marker({element : img5}).setLngLat([74.10739861642303,16.812148036225086]).addTo(map)
var marker6 = new mapboxgl.Marker({element : img6}).setLngLat([73.68237372715642,18.246765844468786]).addTo(map)
var marker7 = new mapboxgl.Marker({element : img7}).setLngLat([82.1998717084321,26.79230430972472]).addTo(map)
var marker8 = new mapboxgl.Marker({element : img8}).setLngLat([79.31812350975622,9.288281225158682]).addTo(map)
var marker9 = new mapboxgl.Marker({element : img9}).setLngLat([73.75585623695298,18.36647044679179]).addTo(map)
var marker10 = new mapboxgl.Marker({element : img10}).setLngLat([79.13114419443876,10.782812695693277]).addTo(map)

map.addControl(
    new mapboxgl.GeolocateControl({
        trackUserLocation : true,
        positionOptions : {
            enableHighAccuracy : true
        } 
    })
)

map.addControl(
    new MapboxGeocoder({
        accessToken : mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)
