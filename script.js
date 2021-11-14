"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());

	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
};


//меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuBg = document.querySelector(".header");

if (iconMenu) {

	iconMenu.addEventListener("click", function (e) {
		menuBg.classList.toggle('_active');
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}


//прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


// Форма телефонного номера
$(".contact-form__phone").mask("+7(999)999-99-99");

// Показ скрытой части текста
let readMore = document.querySelector('.read-more');
let readMoreBtns = document.querySelectorAll('.read-more-btn');

for (let index = 0; index < readMoreBtns.length; index++) {
	const readMoreBtn = readMoreBtns[index];
	readMoreBtn.addEventListener('click', function (e) {

		if (readMoreBtn.innerHTML == "Read more") {
			readMoreBtn.innerHTML = "Read less"
			let parent = readMoreBtn.parentElement;
			let previousElement = parent.previousElementSibling;
			let previousElementChildSpan = previousElement.querySelector('.read-more');

			previousElementChildSpan.classList.add('_active');
		} else {
			readMoreBtn.innerHTML = "Read more"
			let parent = readMoreBtn.parentElement;
			let previousElement = parent.previousElementSibling;
			let previousElementChildSpan = previousElement.querySelector('.read-more');

			previousElementChildSpan.classList.remove('_active');
		}
	});
}

// Табы в Offers
var tabNavs = document.querySelectorAll(".summer-nav__tabs-link");
var tabPanes = document.querySelectorAll(".offer__summer-body");

for (var i = 0; i < tabNavs.length; i++) {

	tabNavs[i].addEventListener("click", function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute("data-tab");

		for (var j = 0; j < tabNavs.length; j++) {
			var contentAttr = tabPanes[j].getAttribute("data-tab-content");

			if (activeTabAttr === contentAttr) {
				tabNavs[j].classList.add("_active");
				tabPanes[j].classList.add("_active");
			} else {
				tabNavs[j].classList.remove("_active");
				tabPanes[j].classList.remove("_active");
			}
		};
	});
}
/*
// Появление информационной таблички на картах
let mapContent = document.querySelector(".map__content");
let mapAfrica = document.querySelector(".map__africa");
let mapWorld = document.querySelector(".map__world");

mapAfrica.addEventListener("click", function () {
	mapContent.classList.toggle("_active");
})
mapWorld.addEventListener("click", function () {
	mapContent.classList.remove("_active");
})

$('.map__africa').click(function (e) {
	e.preventDefault();
	document.body.classList.add('_lock');

	$('#popup').show();
});

$('.popup__close').click(function (e) {
	e.preventDefault();
	document.body.classList.remove('_lock');
	$('#popup').hide();
});

$("#popup").click(function (e) { // событие клика по #popup
	var div = $(".popup__content"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('#popup').hide();
		document.body.classList.remove('_lock');
	}
});*/



function getWindowWidth() {
	return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() > 991) {
	let mapContent = document.querySelector(".map__content");
	let mapAfrica = document.querySelector(".map__africa");
	let mapWorld = document.querySelector(".map__world");
	let popup = document.querySelector(".popup");

	popup.style.display = "none";

	mapAfrica.addEventListener("click", function () {
		mapContent.classList.toggle("_active");
	})
	mapWorld.addEventListener("click", function () {
		mapContent.classList.remove("_active");
	})
} else {

	$('.map__africa').click(function (e) {
		e.preventDefault();
		document.body.classList.add('_lock');
	
		$('#popup').show();
	});
	
	$('.popup__close').click(function (e) {
		e.preventDefault();
		document.body.classList.remove('_lock');
		$('#popup').hide();
	});
	
	$("#popup").click(function (e) { // событие клика по #popup
		var div = $(".popup__content"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('#popup').hide();
			document.body.classList.remove('_lock');
		}
	});
}