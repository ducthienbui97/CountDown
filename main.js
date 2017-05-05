chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    id: 'main',
    innerBounds: {
      height: 200,
      width: 500,
    },
    resizable: false
  });
});
