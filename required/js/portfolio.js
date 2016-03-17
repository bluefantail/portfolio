function handle_click(e){
	switch (e.currentTarget.id){
		case 'about-button':
		case 'header':
	  		var innerHeight = aboutSection.scrollHeight + 'px';
	  		var currentHeight = aboutSection.offsetHeight;
	  		currentHeight ? aboutSection.style.height = '0px' : aboutSection.style.height = innerHeight;
			break;
		default:
			e.preventDefault();
			var id = e.currentTarget.id.substr(1);
			document.querySelector('section:not(.hide)').className = 'hide shrink';
			document.querySelector('section#' + id).className = '';
			document.querySelector('nav a.active').classList.remove('active');
			e.currentTarget.classList.add('active');
			// window.scroll(0,0);
			break;
	}
}
function stop_propigation(e){
	e.stopPropagation();
}

var navItems = document.querySelectorAll('nav a');
var sections = document.querySelectorAll('section');
var aboutSection = document.querySelector('#about')
var header = document.querySelector('header');
	header.addEventListener('click', handle_click);
var aboutButton = document.querySelector('#about-button');
	aboutButton.addEventListener('click', handle_click);

var navNames = [];
Array.prototype.forEach.call(navItems, function(a){
	a.addEventListener('click', handle_click);
	navNames.push(a.id);
});

var sectionElements = [];
Array.prototype.forEach.call(sections, function(el){
	sectionElements.push(el);
});

var projectLinks = document.querySelectorAll('#channels *');
Array.prototype.forEach.call(projectLinks, function(a){
	a.addEventListener('click', stop_propigation);
});

sectionElements[0].className = '';

console.log('Nav Names:');
console.log(navNames);

console.log('Sections:');
console.log(sectionElements);