var twerkjs = function (evt) {
  var self = this;
  this.playAudio = function(position){
      var player = self.getPlayer()
        , audio = self.getAudioFor(player);
      player.src = audio;
      player.play();
   };

  this.twerk = function() {
    self.playAudio();
    $('.twerk').addClass('twerking');
    $player = self.getPlayer();

    $player.addEventListener('ended', function() {
      $('.twerk').removeClass('twerking');
    })
  }

  this.getAudioFor = function(player){
    if(player.canPlayType("audio/mp3")) {
      return twerkAudio.mp3;
    } else if(player.canPlayType("audio/ogg")) {
      return twerkAudio.ogg;
    }
  }

  this.getPlayer = function() {
    var  player
     , $body = $('body')
     , $player = $('body audio')[0];


    if (!$player) {
      $body.append('<audio/>');
      $player = $body.find('audio')[0];
    }
    return $player;
  };


  this.stop = function() {
    player = self.getPlayer();
    player.stop();
  }

  return {
    getLow: function() {
      self.twerk();
    },
    stop: function() {
      self.stop();
    }
  }
}

var twerk = new twerkjs();
