var webrtc = new SimpleWebRTC({
  media: {
    video: false,
    audio: false,
  },
});

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
  // you can name it anything
  webrtc.joinRoom('default');

  webrtc.on('channelMessage', function (peer, label, data) {
    console.log(data);
    document.body.innerHTML += '<p>Peer sent us message: "' + data.payload + '"</p>';
  });
});

setInterval(function () {
  webrtc.sendDirectlyToAll('default', 'msg', 'Hello ' + Math.random());
}, 5000 * (Math.random() + 1));
