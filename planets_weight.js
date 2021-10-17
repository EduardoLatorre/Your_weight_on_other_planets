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
            break;
        case "Venus":
            g_planet = g_venus;
            break;
        case "Earth":
            g_planet = g_earth;
            break;
        case "Mars":
            g_planet = g_mars;
            break;
        case "Jupiter":
            g_planet = g_jupiter;
            break;
        case "Saturn":
            g_planet = g_saturn;
            break;
        case "Uranus":
            g_planet = g_uranus;
            break;
        case "Neptune":
            g_planet = g_neptune;
            break;
        default:
            break;
    }
    final_weight = user_weight * g_planet / g_earth;
    final_weight = (final_weight.toFixed(2));
    document.getElementById("planet_out").textContent = planet_name;
    document.getElementById("weight_out").textContent = final_weight;
}