
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE'
  });
}

function getTime() {
  console.log(player.getCurrentTime());
}

function get_stamps() {
    var stamps = new Array;
    var stamps_str = localStorage.getItem('stamp');
    if (stamps_str != null) {
        stamps = JSON.parse(stamps_str);
    }
    return stamps;
}
