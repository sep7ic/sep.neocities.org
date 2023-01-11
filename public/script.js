let url = window.location.pathname;

if ( url.includes("FOTW/"))( url.includes("more/")); {
relativePath = "..";
}

let headerHTML = '<ul> <li><a href="' + relativePath + '/index.html">home</a></li>' + 
'<li><a href="' + relativePath + '/about.html">about</a></li>' +
'<li><a href="' + relativePath + '/posts.html">posts</a></li>' +
'<li><a href="' + relativePath + '/flags.html">flags</a></li>' +
'<li><a href="' + relativePath + '/art.html">art</a></li>' +
'<li><a href="' + relativePath + '/more.html">more</a></li> </ul>';

let headimg = '<h1>SEP</h1>';

let footerHTML = `
<br> 
<div class="footer" style="font-size: 15px;"><a href="https://hotlinewebring.club/sep/previous">< prev</a> | <a href="https://hotlinewebring.club/">hotline webring</a> | <a href="https://hotlinewebring.club/sep/next">next ></a></div>
<br>
welcome, visitor #<span id="hitcount"></span>
<a href="https://info.flagcounter.com/IolJ"><img src="https://s11.flagcounter.com/count2/IolJ/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_250/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0" style="display: none"></a>
<br>

<div class="audio-player">

<audio autoplay="" loop="" name="media" id="audio">
  <source src="https://drive.google.com/uc?id=1Q67zCgEqZrmyW5RAg3zsi_xEHZ229S1P" type="audio/mp3">
</audio>

<div class="player-controls">

  <button id="playAudio"></button>

  <div id="seekObjContainer">
    <div id="seekObj">
      <div id="percentage"></div>
    </div>
  </div>

  <p><small id="currentTime">00:00</small></p>

</div>
</div>
`;

if (document.getElementById("headimg")) {
  document.getElementById("headimg").innerHTML = headimg;
}
if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = headerHTML;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}


// -------------visit counter----------------//
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        var num_arr = site_data.info.views.toString().split("");
        var num_str = "";
        for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
    }
document.getElementById("hitcount").innerHTML = num_str;
    }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=sep", true);
  xhttp.send();
  //----------------------------------------------//


    //---------------------audio-------------------------//
    function $(id) { return document.getElementById(id); };
    const media = $('audio');
    
    let ui = {
      play: 'playAudio',
      audio: 'audio',
      percentage: 'percentage',
      seekObj: 'seekObj',
      currentTime: 'currentTime'
    };
    
    function togglePlay() {
      if (media.paused === false) {
        media.pause();
        $(ui.play).classList.remove('pause');
      } else {
        media.play();
        $(ui.play).classList.add('pause');
      }
    }
    
    function calculatePercentPlayed() {
      let percentage = (media.currentTime / media.duration).toFixed(2) * 100;
      $(ui.percentage).style.width = `${percentage}%`;
    }
    
    function calculateCurrentValue(currentTime) {
      const currentMinute = parseInt(currentTime / 60) % 60;
      const currentSecondsLong = currentTime % 60;
      const currentSeconds = currentSecondsLong.toFixed();
      const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
      currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
      }`;
      
      return currentTimeFormatted;
    }
    
    function initProgressBar() {
      const currentTime = calculateCurrentValue(media.currentTime);
      $(ui.currentTime).innerHTML = currentTime;
      $(ui.seekObj).addEventListener('click', seek);
    
      media.onended = () => {
        $(ui.play).classList.remove('pause');
        $(ui.percentage).style.width = 0;
        $(ui.currentTime).innerHTML = '00:00';
      };
    
      function seek(e) {
        const percent = e.offsetX / this.offsetWidth;
        media.currentTime = percent * media.duration;
      }
      
      calculatePercentPlayed();
    }
    
    $(ui.play).addEventListener('click', togglePlay)
    $(ui.audio).addEventListener('timeupdate', initProgressBar);

      //----------------------------------------------//