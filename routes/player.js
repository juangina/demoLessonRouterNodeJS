var express = require('express');
var router = express.Router();

//Toggle pause and play semiphore
let isPlaying = false;

// Changes the class name to show the "play" icon.
function showPlayButton() {
  const playClasses = ['fas', 'fa-play'];
}

// Changes the class name to show the "pause" icon.
function showPauseButton() {
  const pauseClasses = ['fas', 'fa-pause'];
}

/* GET display player. */
router.get('/', function(req, res, next) {
  res.render('player', { title: 'Express Routing - Back End', player_message: 'Player Messages' });
});

router.get('/play_be', function(req, res, next) {
    // We'll pause if we're already playing
    if (isPlaying) {
      showPlayButton();
      isPlaying = false;
      res.render('player', { title: 'Express Routing - Back End', player_message: 'Pausing Song' });
    // We'll play if we're already paused
  } else {
      showPauseButton();
      isPlaying = true;
      res.render('player', { title: 'Express Routing - Back End', player_message: 'Playing Song' });
  }
});

router.get('/stop_be', function(req, res, next) {
    isPlaying = false;
  res.render('player', { title: 'Express Routing - Back End', player_message: 'Stopping Song' });
});

router.get('/next_be', function(req, res, next) {
  res.render('player', { title: 'Express Routing - Back End', player_message: 'Playing Next Song' });
});

router.get('/prev_be', function(req, res, next) {
  res.render('player', { title: 'Express Routing - Back End', player_message: 'Playing Previous Song' });
});

module.exports = router;
