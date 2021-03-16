var client;

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') renderApp();

  function renderApp() {
    var onInit = app.initialized();
    onInit.then(getClient).catch(handleErr);
    function getClient(_client) {
      client = _client;
      log();
    }
  }
};

function onAppActivate() {
  var textElement = document.getElementById('apptext');
  var getContact = client.data.get('contact');
  getContact.then(showContact).catch(handleErr);

  function showContact(payload) {
    textElement.innerHTML = `Ticket created by ${payload.contact.name}`;
  }
}

function log(){
  console.log('in a modal');
}

function handleErr(err) {
  console.error(`Error occured. Details:`, err);
}
