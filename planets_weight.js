var entered_weight = document.getElementById("weight_text");
var button = document.getElementById("button_cal");
button.addEventListener("click", calcular_peso)
var g_mercury = 3.7;
var g_venus = 8.87;
var g_earth = 9.8;
var g_mars = 3.721;
var g_jupiter = 24.79;
var g_saturn = 10.44;
var g_uranus = 8.87;
var g_neptune = 11.15;



function calcular_peso()
{
    var user_weight = parseFloat(entered_weight.value)
    var g_planet;
    var planet_name = document.getElementById("planet_list").value;

    
    switch (planet_name) {
        case "Mercury":
            g_planet = g_mercury;
            document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/North_pole_of_Mercury_--_NASA.jpg/800px-North_pole_of_Mercury_--_NASA.jpg")';
            break;
        case "Venus":
            g_planet = g_venus;
            document.body.style.backgroundImage = 'url("https://i.imgur.com/SzH5sFn.jpeg")';
            break;
        case "Earth":
            g_planet = g_earth;
            document.body.style.backgroundImage = 'url("https://i.imgur.com/R9441p2.jpeg")';
            break;
        case "Mars":
            g_planet = g_mars;
            document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mars_atmosphere.jpg/535px-Mars_atmosphere.jpg")';
            break;
        case "Jupiter":
            g_planet = g_jupiter;
            document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/7/75/Portrait_of_Jupiter_from_Cassini.jpg")';
            break;
        case "Saturn":
            g_planet = g_saturn;
            document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/4/4f/PIA20517-Saturn%26Rings-CassiniSpacecraftScene-20161028.jpg")';
            break;
        case "Uranus":
            g_planet = g_uranus;
            document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Uranuslight.jpg/600px-Uranuslight.jpg")';
            break;
        case "Neptune":
            g_planet = g_neptune;
            document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/c/c8/Neptune_clouds.jpg")';
            break;
        default:
            break;
    }
    final_weight = user_weight * g_planet / g_earth;
    final_weight = (final_weight.toFixed(2));
    document.getElementById("planet_out").textContent = planet_name;
    document.getElementById("weight_out").textContent = final_weight;
}