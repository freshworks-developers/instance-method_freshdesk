var client;

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') renderApp();

  function renderApp() {
    var onInit = app.initialized();

    onInit.then(getClient).catch(handleErr);

    function getClient(_client) {
      client = _client;
      client.events.on('app.activated', onAppActivate);
    }
  }
};

function onAppActivate() {
  document.getElementById('showModal').addEventListener('fwClick', showModal) 
}

function showModal() {
  client.interface.trigger("showModal", {
    title: "Sample Modal",
    template: "modal.html"
  }).then(function(data) {
  // data - success message
  }).catch(function(error) {
  // error - error object
  });
}

function handleErr(err) {
  console.error(`Error occured. Details:`, err);
}
