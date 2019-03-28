let url = 'https://spotifik.herokuapp.com/my-recently-played'

function setup() {
  noCanvas()
  loadJSON(url, gotData)
}

function gotData(data) {
  artistName = data.items[0].track.artists[0].name
  trackName = data.items[0].track.name
  var names = document.getElementById('track');
  names.innerHTML = artistName + " — " + trackName;
}

function draw() {
  // function printData(){
  //   var names = document.getElementById('track');
  //   names.innerHTML = artistName + " — " + trackName;
  // }
}
