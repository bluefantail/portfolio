smoothScroll.init();

function handle_click(e){
	switch (e.currentTarget.id){
		case 'about-button':
		case 'header':
	  		var innerHeight = aboutSection.scrollHeight + 'px';
	  		var currentHeight = aboutSection.offsetHeight;
	  		currentHeight ? aboutSection.style.height = '0px' : aboutSection.style.height = innerHeight;
	  		aboutButton.querySelector('[class^=arr-]').classList.toggle('arr-up');
			break;
		default:
			e.preventDefault();
			var id = e.currentTarget.id.substr(1);
			document.querySelector('section:not(.hide)').className = 'hide shrink';
			document.querySelector('section#' + id).className = '';
			document.querySelector('nav a.active').classList.remove('active');
			e.currentTarget.classList.add('active');
			menuText.textContent = e.currentTarget.textContent;
			
			smoothScroll.animateScroll( '#sections' );
			
			var stickyNav = getComputedStyle(nav).getPropertyValue('position') == 'fixed' ? true : false;
			if (stickyNav) {
				menuArrow.classList.remove('spin');
				navInner.style.height = '0px';
			}
			break;
	}
}
function fromTop(elem) {
    var top = 0;
    do {
        top += elem.offsetTop || 0;
        elem = elem.offsetParent;
    } while (elem);

    return top;
};
function stop_propigation(e){
	e.stopPropagation();
}
function toggle_profile(e){
	e.stopPropagation();
	largeProfile.classList.toggle('hide');
}
function toggle_nav(e){
	var innerHeight = navInner.scrollHeight + 'px';
	var currentHeight = navInner.offsetHeight;
	currentHeight ? navInner.style.height = '0px' : navInner.style.height = innerHeight;
	menuArrow.classList.toggle('spin');
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

var profileImage = document.querySelector('#profile-image');
	profileImage.addEventListener('click', toggle_profile);
var largeProfile = document.querySelector('#large-profile');
	largeProfile.addEventListener('click', toggle_profile);

var nav = document.querySelector('nav');
var navInner = nav.querySelector('ul');

var openNav = document.querySelector('#open-nav');
	openNav.addEventListener('click', toggle_nav);
var menuArrow = openNav.querySelector('#menu-arrow');
var menuText = openNav.querySelector('#menu-text');

sectionElements[0].className = '';

console.log('Nav Names:');
console.log(navNames);

console.log('Sections:');
console.log(sectionElements);