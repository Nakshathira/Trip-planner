var markers = []; // Declare markers array globally
var polyline; // Declare polyline globally

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("ameneties");
var span1 = document.getElementsByClassName("close1")[0];
const chargingPoints = [
  { name: "Charging Point 1", lat: 11.074116801896626, lng: 77.07307716051936 },
  { name: "Charging Point 2", lat: 11.081097052965177, lng: 77.00247257291696 },
  { name: "Charging Point 3", lat: 11.056453086011214, lng: 76.9473266330967 },
  { name: "Charging Point 4", lat: 11.042922183850287, lng: 76.96406736482786 },
  { name: "Charging Point 5", lat: 11.0267039164397, lng: 76.9382028563921 },
  { name: "Charging Point 6", lat: 11.026615957828675, lng: 76.94631283463504 },
  { name: "Charging Point 7", lat: 11.027759417719594, lng: 76.9490012252128 },
  { name: "Charging Point 8", lat: 11.023449430309038, lng: 76.95321303711798 },
  { name: "Charging Point 9", lat: 11.02002213137061, lng: 76.9742844321164 },
  { name: "Charging Point 10", lat: 11.010903609373983, lng: 76.9636676570832 },
  { name: "Charging Point 11", lat: 11.011066442600805, lng: 76.95139201095108 },
  { name: "Charging Point 12", lat: 11.004878716690941, lng: 76.96764894772066 },
  { name: "Charging Point 13", lat: 11.001784804997941, lng: 76.9878871751277 },
  { name: "Charging Point 14", lat: 10.998528020757874, lng: 77.01575620958984 },
  { name: "Charging Point 15", lat: 11.02816343006874, lng: 77.03035427526048 },
  { name: "Charging Point 16", lat: 11.038583963409398, lng: 77.032676694799 },
  { name: "Charging Point 17", lat: 11.042003120371357, lng: 77.04943129289828 },
  { name: "Charging Point 18", lat: 11.006938095165868, lng: 77.08246086806118 },
  { name: "Charging Point 19", lat: 11.060360983218567, lng: 77.08400714682081 },
  { name: "Charging Point 20", lat: 11.047006172128851, lng: 77.05339082738003 },
  { name: "Charging Point 21", lat: 11.200672535201313, lng: 77.31388091521235 },
  { name: "Charging Point 22", lat: 11.187537683191362, lng: 77.28572845028185 },
  { name: "Charging Point 23", lat: 11.171707711280114, lng: 77.30598449212208 },
  { name: "Charging Point 24", lat: 11.178806178912286, lng: 77.26425611303645 },
  { name: "Charging Point 25", lat: 11.180070360724049, lng: 77.283730947183 },
  { name: "Charging Point 26", lat: 11.10293440746106, lng: 77.35310286935167 },
  { name: "Charging Point 27", lat: 11.114949842797142, lng: 77.34216064311406 },
  { name: "Charging Point 28", lat: 11.10293440746106, lng: 77.38358478529933 },
  { name: "Charging Point 29", lat: 10.993461597011079, lng: 77.36004136029197 },
  { name: "Charging Point 30", lat: 13.14026764258513, lng: 80.2946623851409 },
  { name: "Charging Point 31", lat: 13.144613937438207, lng: 80.23011770687162 },
  { name: "Charging Point 32", lat: 13.111513292804029, lng: 80.20745840492603 },
  { name: "Charging Point 33", lat: 13.090781327041894, lng: 80.20402517735852 },
  { name: "Charging Point 34", lat: 13.058342333386184, lng: 80.19990530427751 },
  { name: "Charging Point 35", lat: 13.055666762157198, lng: 80.21157827800705 },
  { name: "Charging Point 36", lat: 13.062355635892331, lng: 80.21226492352056 },
  { name: "Charging Point 37", lat: 13.02824048754036, lng: 80.22702780206086 },
  { name: "Charging Point 38", lat: 13.033592194508445, lng: 80.23423757995263 },
  { name: "Charging Point 39", lat: 13.012519179558371, lng: 80.25895681843876 },
  { name: "Charging Point 40", lat: 13.022219678944714, lng: 80.27303305146555 },
  { name: "Charging Point 41", lat: 13.028909457237841, lng: 80.26239004600626 },
  { name: "Charging Point 42", lat: 13.057004551393721, lng: 80.27646627903307 },
  { name: "Charging Point 43", lat: 13.070716473280246, lng: 80.26856985562779 },
  { name: "Charging Point 44", lat: 13.050649988014655, lng: 80.25586691362798 },
  { name: "Charging Point 45", lat: 13.063024513302901, lng: 80.25483694535772 },
  { name: "Charging Point 46", lat: 13.074060728935603, lng: 80.25106039503348 },
{ name: "Charging Point 47", lat: 13.063024513302901, lng: 80.24625387643894 },
{ name: "Charging Point 48", lat: 13.046970955593613, lng: 80.24179068060117 },
{ name: "Charging Point 49", lat: 13.00110155073141, lng: 77.48517741724044 },
{ name: "Charging Point 50", lat: 12.994411022104021, lng: 77.50303020059152 },
{ name: "Charging Point 51", lat: 13.002774154707225, lng: 77.5025152164564 },
{ name: "Charging Point 52", lat: 13.002774154707225, lng: 77.52259959772636 },
{ name: "Charging Point 53", lat: 13.0139803104377, lng: 77.5272344549425 },
{ name: "Charging Point 54", lat: 13.003610451986074, lng: 77.57890452948777 },
{ name: "Charging Point 55", lat: 12.994522023973213, lng: 77.57313251487754 },
{ name: "Charging Point 56", lat: 12.993852961492006, lng: 77.57296085349915 },
{ name: "Charging Point 57", lat: 12.991176693539376, lng: 77.57793903347206 },
{ name: "Charging Point 58", lat: 12.987831318042549, lng: 77.57536411279642 },
{ name: "Charging Point 59", lat: 12.989671280141708, lng: 77.58995532995836 },
{ name: "Charging Point 60", lat: 12.974616644492247, lng: 77.59699344647177 },
{ name: "Charging Point 61", lat: 12.978254931706878, lng: 77.58838891982535 },
{ name: "Charging Point 62", lat: 12.96838543137402, lng: 77.56572961787974 },
{ name: "Charging Point 63", lat: 12.957344509434089, lng: 77.56658792477161 },
{ name: "Charging Point 64", lat: 12.961526734453596, lng: 77.57019281371751 },
{ name: "Charging Point 65", lat: 12.957637267472018, lng: 77.5852131843254 },
{ name: "Charging Point 66", lat: 12.956215296635236, lng: 77.58268117899435 },
 { name: "Charging Point 67", lat: 11.530163525938153, lng: 77.93860516968822 },
  { name: "Charging Point 68", lat: 11.600124820577342, lng: 78.06975446276726 },
  { name: "Charging Point 69", lat: 11.58936268307277, lng: 78.14253888719858 },
  { name: "Charging Point 70", lat: 11.666033845040785, lng: 78.16313825260366 },
  { name: "Charging Point 71", lat: 11.673094599463537, lng: 78.15833173400915 },
  { name: "Charging Point 72", lat: 11.670404809445817, lng: 78.15043531060387 },
  { name: "Charging Point 73", lat: 11.684694020002913, lng: 78.12434278109076 },
  { name: "Charging Point 74", lat: 11.692908850292042, lng: 78.12054991782497 },
  { name: "Charging Point 75", lat: 11.696270810671756, lng: 78.11316847855481 },
  { name: "Charging Point 76", lat: 11.690891654413932, lng: 78.12415480645788 },
  { name: "Charging Point 77", lat: 11.706356446680944, lng: 78.11866164234986 },
  { name: "Charging Point 78", lat: 11.708373529760873, lng: 78.10080885899878 },
  { name: "Charging Point 79", lat: 11.729888166449047, lng: 78.17427992894358 },
  { name: "Charging Point 80", lat: 11.74770370577803, lng: 78.05034041383024 },
  { name: "Charging Point 81", lat: 11.760140286155332, lng: 78.03969740837094 },
  { name: "Charging Point 82", lat: 11.944010245058925, lng: 79.80240711965777 },
  { name: "Charging Point 83", lat: 11.935444916833724, lng: 79.80481037895503 },
  { name: "Charging Point 84", lat: 11.946025577049996, lng: 79.82266316230611 },
  { name: "Charging Point 85", lat: 11.946865294286653, lng: 79.83158955398164 },
  { name: "Charging Point 86", lat: 11.941155165736344, lng: 79.83914265463018 },
  { name: "Charging Point 87", lat: 11.915626061270656, lng: 79.82884297192764 },
  { name: "Charging Point 88", lat: 11.898661315375657, lng: 79.80841526790093 },
  { name: "Charging Point 89", lat: 11.87296022849764, lng: 79.81716999817391 },
  { name: "Charging Point 90", lat: 11.884425228510668, lng: 79.82064614108604 },
  { name: "Charging Point 91", lat: 11.882367443533102, lng: 79.81858620454553 },
  { name: "Charging Point 92", lat: 11.607400834405343, lng: 78.36260069913538 },
  { name: "Charging Point 93", lat: 11.235879331094766, lng: 78.12639464249041 },
  { name: "Charging Point 94", lat: 11.634303659661652, lng: 77.92314757049357 },
  { name: "Charging Point 95", lat: 11.392085292479424, lng: 77.70342100617266 },
  { name: "Charging Point 96", lat: 11.365159317651422, lng: 77.58257139579617 },
  { name: "Charging Point 97", lat: 11.076893320201162, lng: 77.1005462485436 },
  { name: "Charging Point 98", lat: 11.091717720338911, lng: 76.99274290292364 },
  { name: "Charging Point 99", lat: 11.021632129763912, lng: 76.96047056378902 },
  { name: "Charging Point 100", lat: 11.010848246272571, lng: 76.97420347405907 },
  { name: "Charging Point 101", lat: 11.010848246272571, lng: 77.04561460746336 },
  { name: "Charging Point 102", lat: 11.04387264058195, lng: 77.0305084061663 },
  { name: "Charging Point 103", lat: 11.049937942166977, lng: 77.06415403632795 },
  { name: "Charging Point 104", lat: 11.114148387022729, lng: 77.3481702828266 },
  { name: "Charging Point 105", lat: 10.981386096390006, lng: 77.3516035103941 }
];




btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

btn1.onclick = function () {
  modal1.style.display = "block";
};

span1.onclick = function () {
  modal1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

function toggleButton(buttonId) {
  var button = document.getElementById(buttonId);
  button.classList.toggle("selected");
}

window.onload = async function () {
  var amenitiesButton = document.getElementById("ameneties");
  amenitiesButton.style.display = "none";
  var startTripButton = document.getElementById("trip");
  startTripButton.style.display = "none";

  var filters = document.querySelectorAll(".left, .leftest");
  filters.forEach(function (filter) {
    filter.style.display = "none";
  });

  var currentLocation = document.getElementById("location-container");
  currentLocation.style.display = "inline-block";

  await initMap(); // Load the map
};

async function initMap() {
  console.log("Initializing map...");

  const googleMapsAPI = await loadGoogleMapsAPI();

  const { Map } = googleMapsAPI;

  console.log("Map library imported.");

  map = new Map(document.getElementById("map"), {
    center: { lat: 11.075796, lng: 77.0106986 },
    zoom: 10,
  });

  console.log("Map initialized.");

  const input = document.getElementById("container2");
  const button = document.getElementById("current-location");

  const autocomplete = new googleMapsAPI.places.Autocomplete(input);

  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    const location = place.geometry.location;
    input.value = place.name; // Display the location name in the input field
    placeMarker(location); // Call function to place marker on the map
  });
}

function placeMarker(location) {
  // Create marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Selected Location",
  });

  markers.push(marker); // Add marker to markers array

  // Check if there are exactly two markers
  if (markers.length === 2) {
    // Clear any existing polyline
    if (polyline) {
      polyline.setMap(null);
    }

    // Fetch and display the route
    calculateAndDisplayRoute(markers[0].getPosition(), markers[1].getPosition());

    // Reset markers array for next route calculation
    markers = [];
  }
}
function getChargingPointsWithinBounds(bounds) {
  const chargingPointsWithinBounds = [];

  chargingPoints.forEach((chargingPoint) => {
    const chargingPointPosition = new google.maps.LatLng(chargingPoint.lat, chargingPoint.lng);
    if (bounds.contains(chargingPointPosition)) {
      chargingPointsWithinBounds.push(chargingPoint);
    }
  });

  return chargingPointsWithinBounds;
}

function displayChargingPoints(chargingPoints) {
  chargingPoints.forEach((chargingPoint, index) => {
    const marker = new google.maps.Marker({
      position: { lat: chargingPoint.lat, lng: chargingPoint.lng },
      map: map,
      title: `Charging Point ${index + 1}`,
    });

    // Add click event listener to the marker
    marker.addListener("click", function () {
      // Create a pop-up window
      const infoWindow = new google.maps.InfoWindow({
        content: `<div><strong>${chargingPoint.name}</strong><br><button onclick="openInGoogleMaps(${chargingPoint.lat}, ${chargingPoint.lng})">Direct to Google Maps</button></div>`
      });
      
      // Open the pop-up window
      infoWindow.open(map, marker);
    });
  });
}

function openInGoogleMaps(lat, lng) {
  // Open Google Maps with the specified latitude and longitude
  window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
}


function calculateAndDisplayRoute(origin, destination) {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(map);

  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        const route = response.routes[0];
        console.log("Route:", route);
        const routeBounds = route.bounds;
        console.log("Route bounds:", routeBounds);

        // Fetch charging points within route bounds
        const chargingPointsWithinBounds = getChargingPointsWithinBounds(routeBounds);
        console.log("Charging points within bounds:", chargingPointsWithinBounds);

        // Display charging points on the map
        displayChargingPoints(chargingPointsWithinBounds);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}






async function loadGoogleMapsAPI() {
  return new Promise((resolve, reject) => {
    const apiKey = "AIzaSyAOcbvs0MtHhAiHevyu63o1kkp7OXHfVRY"; // Replace with your Google Maps API key
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOcbvs0MtHhAiHevyu63o1kkp7OXHfVRY&libraries=places`;
    script.onload = () => {
      resolve(window.google.maps);
    };
    script.onerror = () => {
      reject(new Error("Google Maps API failed to load"));
    };
    document.head.appendChild(script);
  });
}

function submitForm() {
  var submitButton = document.querySelector(".submit-button");
  submitButton.style.display = "none";

  var amenitiesButton = document.getElementById("ameneties");
  amenitiesButton.style.display = "inline-block";
  var startTripButton = document.getElementById("trip");
  startTripButton.style.display = "inline-block";

  var filters = document.querySelectorAll(".left, .leftest");
  filters.forEach(function (filter) {
    filter.style.display = "block";
  });
}

function showButton() {
  var button = document.getElementById("location-container");
  button.style.display = "inline-block";
  var icons = document.getElementById("hide");
  icons.style.display = "none";
}

function hideButton() {
  var button = document.getElementById("location-container");
  button.style.display = "none";
  var icons = document.getElementById("hide");
  icons.style.display = "inline-block";
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var input = document.getElementById("container1");
      input.value = latitude + ", " + longitude;
      hideButton();
      placeMarker({ lat: latitude, lng: longitude });
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

document.getElementById("container1").addEventListener("focus", showButton);
document.getElementById("location-container").addEventListener("click", getLocation);
