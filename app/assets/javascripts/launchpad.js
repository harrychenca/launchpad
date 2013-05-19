var launchpad = (function () {

  return function (elementId) {
    if(!elementId) {
        log("elementId not provided");
        return;
    }
	var element = $('#' + elementId);
	init(element);
  };

  function init(element) {
	var callbackUrl = "http://launchp.herokuapp.com/dev/userCallback";
  
	var wrapper = $('<div/>').addClass('launchpad-wrapper'),
		header = $('<div/>').addClass('launchpad-header'),
		body = $('<div/>').addClass('launchpad-body'),
		footer = $('<div/>').addClass('launchpad-footer');

	header.html('<h3 class="launchpad-header-text">LaunchPad</h3>');
	footer.html('<small>Learn more</small>');

	var fbButton = $('<button/>').addClass('launchpad-facebook').html('Facebook'),
		liButton = $('<button/>').addClass('launchpad-linkedin').html('LinkedIn'),
		ghButton = $('<button/>').addClass('launchpad-github').html('GitHub');
		

	fbButton.on('click', function() {
		window.location = 'http://launchp.herokuapp.com/facebook/index?return_url=' + callbackUrl;
	});

	liButton.on('click', function() {
        window.location = 'http://launchp.herokuapp.com/linkedin/index?return_url=' + callbackUrl;
	});

    ghButton.on('click', function() {
        window.location = 'http://launchp.herokuapp.com/github/index?return_url=' + callbackUrl;
	});

	body.append(fbButton);
	body.append(liButton);
	body.append(ghButton);

	wrapper.append(header);
	wrapper.append(body);
	wrapper.append(footer);

	element.html(wrapper);
  }

  function log(message) {
      console.log("LaunchPad: " + message);
  }

})();