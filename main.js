chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    id: 'main',
    innerBounds: {
      height: 250,
      width: 500,
    },
    resizable: false
  });
});
