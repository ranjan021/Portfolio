const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



// fade-in-about-photo
const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
	threshold: 1,
	rootMargin: "0px 0px 50px 0px"
}

const appearOnScroll = new IntersectionObserver
(function 
	(entries , appearOnScroll)
	{
		entries.forEach( entry => {
			if (!entry.isIntersecting){
				return;
			} else{
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target);
			}
		})
	}, 
appearOptions)

faders.forEach(fader => {
	appearOnScroll.observe(fader)
})


// // sliders-about

// const sliders = document.querySelectorAll('.slide-in');

// sliders.forEach(slider => {
// 	appearOnScroll.observe(slider)
// })