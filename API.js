let para = '';
let paraO = '';

function getStuff () {
    if (para && paraO !== ''){
        document.getElementById('myDIV').removeChild(paraO);
        document.getElementById('myDIV').removeChild(para);
    }
    fetch('http://www.songsterr.com/a/ra/songs.json?pattern=acdc')
    .then(function(response) {
        return response.json();
    }).then(function(data){
        let currentSong = data[Math.floor(Math.random() * data.length)];
    console.log(currentSong);
    paraO = document.createElement('p1');
        let artist = document.createTextNode( currentSong.artist.name);
    para = document.createElement('p2');
        let song = document.createTextNode( currentSong.title);
        paraO.appendChild(artist);
        para.appendChild(song);
        document.getElementById('myDIV').appendChild(paraO);
        document.getElementById('myDIV').appendChild(para);
    })

}



