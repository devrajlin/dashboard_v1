function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function initMap() {
        var myLatlng = {lat: 19.0330, lng: 73.0297};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatlng
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
        });

        map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });
      }
function tsales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data.html", true);
xhttp.send();
}

function ysales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data2.html", true);
xhttp.send();
}

function lsales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data3.html", true);
xhttp.send();
}

function llsales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data4.html", true);
xhttp.send();
}

function wsales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data5.html", true);
xhttp.send();
}

function msales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data6.html", true);
xhttp.send();
}

function yysales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data7.html", true);
xhttp.send();
}

function osales(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("today").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "data/data8.html", true);
xhttp.send();
}




