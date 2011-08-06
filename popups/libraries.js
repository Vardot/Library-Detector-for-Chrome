/**
    description: Runs whenever the popup is created in a tab
**/

var addLibrary = function(library) {
	
	var container = document.createElement('div');
	
	var link = document.createElement('a');
	link.href = library.url;
	link.innerHTML = library.name;
	link.setAttribute('style', "background: transparent url('../icons/" + library.icon + ".png') no-repeat left center");
	link.target = '_blank';

    var version = document.createElement('span');
    version.innerHTML = library.version !== 'none' ? library.version : '';

	container.appendChild(link);
	container.appendChild(version);
	
    document.getElementById('libraries').appendChild(container);
};

var handlePageLoad = function() {
	chrome.tabs.getSelected(null, function(tab) {
		var libraries = JSON.parse(localStorage.getItem('libraries_'+tab.id));
		if (libraries === null) return;
	    for (var i=0,j=libraries.length; i<j; i++) {
	        addLibrary(libraries[i]);
	    }
	});
};

window.addEventListener("load", handlePageLoad, false);