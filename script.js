  const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Italiani", "Creativi", "NEPS"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
var i=20;

$(function() {
	var pop = $('.popbtn');
	var row = $('.row:not(:first):not(:last)');


	pop.popover({
		trigger: 'manual',
		html: true,
		container: 'body',
		placement: 'bottom',
		animation: false,
		content: function() {
			return $('#popover').html();
		}
	});


	pop.on('click', function(e) {
		pop.popover('toggle');
		pop.not(this).popover('hide');
	});

	$(window).on('resize', function() {
		pop.popover('hide');
	});

	row.on('touchend', function(e) {
		$(this).find('.popbtn').popover('toggle');
		row.not(this).find('.popbtn').popover('hide');
		return false;
	});

});

function type() {
  if (i>=0) {
   if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
    i--;
    if(i==2){
    $('.typed-text').css("font-family" , "nonilfontdellatesla");
    $('.cursor').css("background-color" , " ");
  }
  }


}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

$(document).ready(function(){

    (function($) {
      var s,
      spanizeLetters = {
        settings: {
          letters: $('.js-spanize'),
        },
        init: function() {
          s = this.settings;
          this.bindEvents();
        },
        bindEvents: function(){
          s.letters.html(function (i, el) {
            //spanizeLetters.joinChars();
            var spanizer = $.trim(el).split("");
            return '<span>' + spanizer.join('</span><span>') + '</span>';
          });
        },
      };
      spanizeLetters.init();
    })(jQuery);
  });

$( "span:contains('NEPS')" ).css( "text-decoration", "underline" );

document.addEventListener('aos:in:fade1', ({ detail }) => {
  console.log('animated in', detail);
  $('.sep').css({
    'border' : '0',
    'width' : '3em',
    'height' : '1px',
    'margin' : '1em 0',
    'background-color' : 'rgba(255, 255, 255, 0.4)'
  });

  $('.mast').css({
    'position' : 'relative',
    'display' : 'flex',
    'align-items' : 'center',
    'color' : '#fff',
    'padding' : '1%'
  });

  $('.mast:after').css({
    'z-index' : '0',
    'content' : '',
    'position' : 'absolute',
    'top' : '0',
    'left' : '0',
    'height' : '100%',
    'width' : '100%'
  });

  $('.mast > header').css({
    'z-index' : '2',
    'position' : 'relative'
  });

  $('.mast__bg').css({
    'position' : 'absolute',
    'top' : '0',
    'left' : '0',
    'width' : '100%',
    'height' : '100vh',
    'margin' : '0',
    'padding' : '0',
    'background-size' : 'cover',
    'background-position' : '50%'
  });

  $('.mast__header').css({

  });


  $('.mast__title1 span').css({
    'animation' : 'letter-glow 0.7s 0s ease both'
  });

  $('.mast__title1 span:nth-child(1)').css({
    'animation-delay' : '0.05s'
  });

  $('.mast__title1 span:nth-child(2)').css({
    'animation-delay' : '0.1s'
  });

  $('.mast__title1 span:nth-child(3)').css({
    'animation-delay' : '0.15s'
  });

  $('.mast__title1 span:nth-child(4)').css({
    'animation-delay' : '0.2s'
  });

  $('.mast__title1 span:nth-child(5)').css({
    'animation-delay' : '0.25s'
  });

  $('.mast__title1 span:nth-child(6)').css({
    'animation-delay' : '0.3s'
  });

  $('.mast__title1 span:nth-child(7)').css({
    'animation-delay' : '0.35s'
  });

  $('.mast__title1 span:nth-child(8)').css({
    'animation-delay' : '0.4s'
  });

  $('.mast__title1 span:nth-child(9)').css({
    'animation-delay' : '0.45s'
  });

  $('.mast__title1 span:nth-child(10)').css({
    'animation-delay' : '0.5s'
  });

  $('.mast__title1 span:nth-child(11)').css({
    'animation-delay' : '0.55s'
  });

  $('.mast__title1 span:nth-child(12)').css({
    'animation-delay' : '0.6s'
  });

  $('.mast__title1 span:nth-child(13)').css({
    'animation-delay' : '0.65s'
  });

  $('.mast__title1 span:nth-child(14)').css({
    'animation-delay' : '0.7s'
  });

  $('.mast__title1 span:nth-child(15)').css({
    'animation-delay' : '0.75s'
  });

  $('.mast__title1 span:nth-child(16)').css({
    'animation-delay' : '0.8s'
  });

  $('.mast__title1 span:nth-child(17)').css({
    'animation-delay' : '0.85s'
  });

  $('.mast__title1 span:nth-child(18)').css({
    'animation-delay' : '0.9s'
  });

  $('.mast__title1 span:nth-child(19)').css({
    'animation-delay' : '0.95s'
  });

  $('.mast__title1 span:nth-child(20)').css({
    'animation-delay' : '1s'
  });

  $('.mast__title1 span:nth-child(21)').css({
    'animation-delay' : '1.05s'
  });

  $('.mast__title1 span:nth-child(22)').css({
    'animation-delay' : '1.1s'
  });

  $('.mast__title1 span:nth-child(23)').css({
    'animation-delay' : '1.15s'
  });

  $('.mast__title1 span:nth-child(24)').css({
    'animation-delay' : '1.2s'
  });

  $('.mast__title1 span:nth-child(25)').css({
    'animation-delay' : '1.25s'
  });

  $('.mast__text1').css({
    'font-family' : '"Cutive Mono", monospace',
    'font-size' : '1em',
    'margin' : '0 0 0.5em',
    'line-height' : '1.5',
    'white-space' : 'normal'
  });

  $('.mast__text1 span').css({
    'animation' : 'letter-glow 0.7s 0s ease both'
  });

  $('.mast__text1 span:nth-child(1)').css({
    'animation-delay' : '0.05s'
  });

  $('.mast__text1 span:nth-child(2)').css({
    'animation-delay' : '0.1s'
  });

  $('.mast__text1 span:nth-child(3)').css({
    'animation-delay' : '0.15s'
  });

  $('.mast__text1 span:nth-child(4)').css({
    'animation-delay' : '0.2s'
  });

  $('.mast__text1 span:nth-child(5)').css({
    'animation-delay' : '0.25s'
  });

  $('.mast__text1 span:nth-child(6)').css({
    'animation-delay' : '0.3s'
  });

  $('.mast__text1 span:nth-child(7)').css({
    'animation-delay' : '0.35s'
  });

  $('.mast__text1 span:nth-child(8)').css({
    'animation-delay' : '0.4s'
  });

  $('.mast__text1 span:nth-child(9)').css({
    'animation-delay' : '0.45s'
  });

  $('.mast__text1 span:nth-child(10)').css({
    'animation-delay' : '0.5s'
  });

  $('.mast__text1 span:nth-child(11)').css({
    'animation-delay' : '0.55s'
  });

  $('.mast__text1 span:nth-child(12)').css({
    'animation-delay' : '0.6s'
  });

  $('.mast__text1 span:nth-child(13)').css({
    'animation-delay' : '0.65s'
  });

  $('.mast__text1 span:nth-child(14)').css({
    'animation-delay' : '0.7s'
  });

  $('.mast__text1 span:nth-child(15)').css({
    'animation-delay' : '0.75s'
  });

  $('.mast__text1 span:nth-child(16)').css({
    'animation-delay' : '0.8s'
  });

  $('.mast__text1 span:nth-child(17)').css({
    'animation-delay' : '0.85s'
  });

  $('.mast__text1 span:nth-child(18)').css({
    'animation-delay' : '0.9s'
  });

  $('.mast__text1 span:nth-child(19)').css({
    'animation-delay' : '0.95s'
  });

  $('.mast__text1 span:nth-child(20)').css({
    'animation-delay' : '1s'
  });

  $('.mast__text1 span:nth-child(21)').css({
    'animation-delay' : '1.05s'
  });

  $('.mast__text1 span:nth-child(22)').css({
    'animation-delay' : '1.1s'
  });

  $('.mast__text1 span:nth-child(23)').css({
    'animation-delay' : '1.15s'
  });

  $('.mast__text1 span:nth-child(24)').css({
    'animation-delay' : '1.2s'
  });

  $('.mast__text1 span:nth-child(25)').css({
    'animation-delay' : '1.25s'
  });

  $('.mast__text1 span:nth-child(26)').css({
    'animation-delay' : '1.3s'
  });

  $('.mast__text1 span:nth-child(27)').css({
    'animation-delay' : '1.35s'
  });

  $('.mast__text1 span:nth-child(28)').css({
    'animation-delay' : '1.4s'
  });

  $('.mast__text1 span:nth-child(29)').css({
    'animation-delay' : '1.45s'
  });

  $('.mast__text1 span:nth-child(30)').css({
    'animation-delay' : '1.5s'
  });

  $('.mast__text1 span:nth-child(31)').css({
    'animation-delay' : '1.55s'
  });

  $('.mast__text1 span:nth-child(32)').css({
    'animation-delay' : '1.6s'
  });

  $('.mast__text1 span:nth-child(33)').css({
    'animation-delay' : '1.65s'
  });

  $('.mast__text1 span:nth-child(34)').css({
    'animation-delay' : '1.7s'
  });

  $('.mast__text1 span:nth-child(35)').css({
    'animation-delay' : '1.75s'
  });

  $('.mast__text1 span:nth-child(36)').css({
    'animation-delay' : '1.8s'
  });

  $('.mast__text1 span:nth-child(37)').css({
    'animation-delay' : '1.85s'
  });

  $('.mast__text1 span:nth-child(38)').css({
    'animation-delay' : '1.9s'
  });

  $('.mast__text1 span:nth-child(39)').css({
    'animation-delay' : '1.95s'
  });

  $('.mast__text1 span:nth-child(40)').css({
    'animation-delay' : '2s'
  });

  $('.mast__text1 span:nth-child(41)').css({
    'animation-delay' : '2.05s'
  });

  $('.mast__text1 span:nth-child(42)').css({
    'animation-delay' : '2.1s'
  });

  $('.mast__text1 span:nth-child(43)').css({
    'animation-delay' : '2.15s'
  });

  $('.mast__text1 span:nth-child(44)').css({
    'animation-delay' : '2.2s'
  });

  $('.mast__text1 span:nth-child(45)').css({
    'animation-delay' : '2.25s'
  });

  $('.mast__text1 span:nth-child(46)').css({
    'animation-delay' : '2.3s'
  });

  $('.mast__text1 span:nth-child(47)').css({
    'animation-delay' : '2.35s'
  });

  $('.mast__text1 span:nth-child(48)').css({
    'animation-delay' : '2.4s'
  });

  $('.mast__text1 span:nth-child(49)').css({
    'animation-delay' : '2.45s'
  });

  $('.mast__text1 span:nth-child(50)').css({
    'animation-delay' : '2.5s'
  });

  $('.mast__text1 span:nth-child(51)').css({
    'animation-delay' : '2.55s'
  });

  $('.mast__text1 span:nth-child(52)').css({
    'animation-delay' : '2.6s'
  });

  $('.mast__text1 span:nth-child(53)').css({
    'animation-delay' : '2.65s'
  });

  $('.mast__text1 span:nth-child(54)').css({
    'animation-delay' : '2.7s'
  });

  $('.mast__text1 span:nth-child(55)').css({
    'animation-delay' : '2.75s'
  });

  $('.mast__text1 span:nth-child(56)').css({
    'animation-delay' : '2.8s'
  });

  $('.mast__text1 span:nth-child(57)').css({
    'animation-delay' : '2.85s'
  });

  $('.mast__text1 span:nth-child(58)').css({
    'animation-delay' : '2.9s'
  });

  $('.mast__text1 span:nth-child(59)').css({
    'animation-delay' : '2.95s'
  });

  $('.mast__text1 span:nth-child(60)').css({
    'animation-delay' : '3s'
  });

  $('.mast__text1 span:nth-child(61)').css({
    'animation-delay' : '3.05s'
  });

  $('.mast__text1 span:nth-child(62)').css({
    'animation-delay' : '3.1s'
  });

  $('.mast__text1 span:nth-child(63)').css({
    'animation-delay' : '3.15s'
  });

  $('.mast__text1 span:nth-child(64)').css({
    'animation-delay' : '3.2s'
  });

  $('.mast__text1 span:nth-child(65)').css({
    'animation-delay' : '3.25s'
  });

  $('.mast__text1 span:nth-child(66)').css({
    'animation-delay' : '3.3s'
  });

  $('.mast__text1 span:nth-child(67)').css({
    'animation-delay' : '3.35s'
  });

  $('.mast__text1 span:nth-child(68)').css({
    'animation-delay' : '3.4s'
  });

  $('.mast__text1 span:nth-child(69)').css({
    'animation-delay' : '3.45s'
  });

  $('.mast__text1 span:nth-child(70)').css({
    'animation-delay' : '3.5s'
  });

  $('.mast__text1 span:nth-child(71)').css({
    'animation-delay' : '3.55s'
  });

  $('.mast__text1 span:nth-child(72)').css({
    'animation-delay' : '3.6s'
  });

  $('.mast__text1 span:nth-child(73)').css({
    'animation-delay' : '3.65s'
  });

  $('.mast__text1 span:nth-child(74)').css({
    'animation-delay' : '3.7s'
  });

  $('.mast__text1 span:nth-child(75)').css({
    'animation-delay' : '3.75s'
  });

  $('.mast__text1 span:nth-child(76)').css({
    'animation-delay' : '3.8s'
  });

  $('.mast__text1 span:nth-child(77)').css({
    'animation-delay' : '3.85s'
  });

  $('.mast__text1 span:nth-child(78)').css({
    'animation-delay' : '3.9s'
  });

  $('.mast__text1 span:nth-child(79)').css({
    'animation-delay' : '3.95s'
  });

  $('.mast__text1 span:nth-child(80)').css({
    'animation-delay' : '4s'
  });

  $('.mast__text1 span:nth-child(81)').css({
    'animation-delay' : '4.05s'
  });

  $('.mast__text1 span:nth-child(82)').css({
    'animation-delay' : '4.1s'
  });

  $('.mast__text1 span:nth-child(83)').css({
    'animation-delay' : '4.15s'
  });

  $('.mast__text1 span:nth-child(84)').css({
    'animation-delay' : '4.2s'
  });

  $('.mast__text1 span:nth-child(85)').css({
    'animation-delay' : '4.25s'
  });

  $('.mast__text1 span:nth-child(86)').css({
    'animation-delay' : '4.3s'
  });

  $('.mast__text1 span:nth-child(87)').css({
    'animation-delay' : '4.35s'
  });

  $('.mast__text1 span:nth-child(88)').css({
    'animation-delay' : '4.4s'
  });

  $('.mast__text1 span:nth-child(89)').css({
    'animation-delay' : '4.45s'
  });

  $('.mast__text1 span:nth-child(90)').css({
    'animation-delay' : '4.5s'
  });

  $('.mast__text1 span:nth-child(91)').css({
    'animation-delay' : '4.55s'
  });

  $('.mast__text1 span:nth-child(92)').css({
    'animation-delay' : '4.6s'
  });

  $('.mast__text1 span:nth-child(93)').css({
    'animation-delay' : '4.65s'
  });

  $('.mast__text1 span:nth-child(94)').css({
    'animation-delay' : '4.7s'
  });

  $('.mast__text1 span:nth-child(95)').css({
    'animation-delay' : '4.75s'
  });

  $('.mast__text1 span:nth-child(96)').css({
    'animation-delay' : '4.8s'
  });

  $('.mast__text1 span:nth-child(97)').css({
    'animation-delay' : '4.85s'
  });

  $('.mast__text1 span:nth-child(98)').css({
    'animation-delay' : '4.9s'
  });

  $('.mast__text1 span:nth-child(99)').css({
    'animation-delay' : '4.95s'
  });

  $('.mast__text1 span:nth-child(100)').css({
    'animation-delay' : '5s'
  });

  $('.mast__text1 span:nth-child(101)').css({
    'animation-delay' : '5.05s'
  });

  $('.mast__text1 span:nth-child(102)').css({
    'animation-delay' : '5.1s'
  });

  $('.mast__text1 span:nth-child(103)').css({
    'animation-delay' : '5.15s'
  });

  $('.mast__text1 span:nth-child(104)').css({
    'animation-delay' : '5.2s'
  });

  $('.mast__text1 span:nth-child(105)').css({
    'animation-delay' : '5.25s'
  });

  $('.mast__text1 span:nth-child(106)').css({
    'animation-delay' : '5.3s'
  });

  $('.mast__text1 span:nth-child(107)').css({
    'animation-delay' : '5.35s'
  });

  $('.mast__text1 span:nth-child(108)').css({
    'animation-delay' : '5.4s'
  });

  $('.mast__text1 span:nth-child(109)').css({
    'animation-delay' : '5.45s'
  });

  $('.mast__text1 span:nth-child(110)').css({
    'animation-delay' : '5.5s'
  });

  $('.mast__text1 span:nth-child(111)').css({
    'animation-delay' : '5.55s'
  });

  $('.mast__text1 span:nth-child(112)').css({
    'animation-delay' : '5.6s'
  });

  $('.mast__text1 span:nth-child(113)').css({
    'animation-delay' : '5.65s'
  });

  $('.mast__text1 span:nth-child(114)').css({
    'animation-delay' : '5.7s'
  });

  $('.mast__text1 span:nth-child(115)').css({
    'animation-delay' : '5.75s'
  });

  $('.mast__text1 span:nth-child(116)').css({
    'animation-delay' : '5.8s'
  });

  $('.mast__text1 span:nth-child(117)').css({
    'animation-delay' : '5.85s'
  });

  $('.mast__text1 span:nth-child(118)').css({
    'animation-delay' : '5.9s'
  });

  $('.mast__text1 span:nth-child(119)').css({
    'animation-delay' : '5.95s'
  });

  $('.mast__text1 span:nth-child(120)').css({
    'animation-delay' : '6s'
  });

  $('.mast__text1 span:nth-child(121)').css({
    'animation-delay' : '6.05s'
  });

  $('.mast__text1 span:nth-child(122)').css({
    'animation-delay' : '6.1s'
  });

  $('.mast__text1 span:nth-child(123)').css({
    'animation-delay' : '6.15s'
  });

  $('.mast__text1 span:nth-child(124)').css({
    'animation-delay' : '6.2s'
  });

  $('.mast__text1 span:nth-child(125)').css({
    'animation-delay' : '6.25s'
  });

  $('.mast__text1 span:nth-child(126)').css({
    'animation-delay' : '6.3s'
  });

  $('.mast__text1 span:nth-child(127)').css({
    'animation-delay' : '6.35s'
  });

  $('.mast__text1 span:nth-child(128)').css({
    'animation-delay' : '6.4s'
  });

  $('.mast__text1 span:nth-child(129)').css({
    'animation-delay' : '6.45s'
  });

  $('.mast__text1 span:nth-child(130)').css({
    'animation-delay' : '6.5s'
  });

  $('.mast__text1 span:nth-child(131)').css({
    'animation-delay' : '6.55s'
  });

  $('.mast__text1 span:nth-child(132)').css({
    'animation-delay' : '6.6s'
  });

  $('.mast__text1 span:nth-child(133)').css({
    'animation-delay' : '6.65s'
  });

  $('.mast__text1 span:nth-child(134)').css({
    'animation-delay' : '6.7s'
  });

  $('.mast__text1 span:nth-child(135)').css({
    'animation-delay' : '6.75s'
  });

  $('.mast__text1 span:nth-child(136)').css({
    'animation-delay' : '6.8s'
  });

  $('.mast__text1 span:nth-child(137)').css({
    'animation-delay' : '6.85s'
  });

  $('.mast__text1 span:nth-child(138)').css({
    'animation-delay' : '6.9s'
  });

  $('.mast__text1 span:nth-child(139)').css({
    'animation-delay' : '6.95s'
  });

  $('.mast__text1 span:nth-child(140)').css({
    'animation-delay' : '7s'
  });

  $('.mast__text1 span:nth-child(141)').css({
    'animation-delay' : '7.05s'
  });

  $('.mast__text1 span:nth-child(142)').css({
    'animation-delay' : '7.1s'
  });

  $('.mast__text1 span:nth-child(143)').css({
    'animation-delay' : '7.15s'
  });

  $('.mast__text1 span:nth-child(144)').css({
    'animation-delay' : '7.2s'
  });

  $('.mast__text1 span:nth-child(145)').css({
    'animation-delay' : '7.25s'
  });

  $('.mast__text1 span:nth-child(146)').css({
    'animation-delay' : '7.3s'
  });

  $('.mast__text1 span:nth-child(147)').css({
    'animation-delay' : '7.35s'
  });

  $('.mast__text1 span:nth-child(148)').css({
    'animation-delay' : '7.4s'
  });

  $('.mast__text1 span:nth-child(149)').css({
    'animation-delay' : '7.45s'
  });

  $('.mast__text1 span:nth-child(150)').css({
    'animation-delay' : '7.5s'
  });

  $('.mast__text1 span:nth-child(151)').css({
    'animation-delay' : '7.55s'
  });

  $('.mast__text1 span:nth-child(152)').css({
    'animation-delay' : '7.6s'
  });

  $('.mast__text1 span:nth-child(153)').css({
    'animation-delay' : '7.65s'
  });

  $('.mast__text1 span:nth-child(154)').css({
    'animation-delay' : '7.7s'
  });

  $('.mast__text1 span:nth-child(155)').css({
    'animation-delay' : '7.75s'
  });

  $('.mast__text1 span:nth-child(156)').css({
    'animation-delay' : '7.8s'
  });

  $('.mast__text1 span:nth-child(157)').css({
    'animation-delay' : '7.85s'
  });

  $('.mast__text1 span:nth-child(158)').css({
    'animation-delay' : '7.9s'
  });

  $('.mast__text1 span:nth-child(159)').css({
    'animation-delay' : '7.95s'
  });

  $('.mast__text1 span:nth-child(160)').css({
    'animation-delay' : '8s'
  });

  $('.mast__text1 span:nth-child(161)').css({
    'animation-delay' : '8.05s'
  });

  $('.mast__text1 span:nth-child(162)').css({
    'animation-delay' : '8.1s'
  });

  $('.mast__text1 span:nth-child(163)').css({
    'animation-delay' : '8.15s'
  });

  $('.mast__text1 span:nth-child(164)').css({
    'animation-delay' : '8.2s'
  });

  $('.mast__text1 span:nth-child(165)').css({
    'animation-delay' : '8.25s'
  });

  $('.mast__text1 span:nth-child(166)').css({
    'animation-delay' : '8.3s'
  });

  $('.mast__text1 span:nth-child(167)').css({
    'animation-delay' : '8.35s'
  });

  $('.mast__text1 span:nth-child(168)').css({
    'animation-delay' : '8.4s'
  });

  $('.mast__text1 span:nth-child(169)').css({
    'animation-delay' : '8.45s'
  });

  $('.mast__text1 span:nth-child(170)').css({
    'animation-delay' : '8.5s'
  });

  $('.mast__text1 span:nth-child(171)').css({
    'animation-delay' : '8.55s'
  });

  $('.mast__text1 span:nth-child(172)').css({
    'animation-delay' : '8.6s'
  });

  $('.mast__text1 span:nth-child(173)').css({
    'animation-delay' : '8.65s'
  });

  $('.mast__text1 span:nth-child(174)').css({
    'animation-delay' : '8.7s'
  });

  $('.mast__text1 span:nth-child(175)').css({
    'animation-delay' : '8.75s'
  });

  $('.mast__text1 span:nth-child(176)').css({
    'animation-delay' : '8.8s'
  });

  $('.mast__text1 span:nth-child(177)').css({
    'animation-delay' : '8.85s'
  });

  $('.mast__text1 span:nth-child(178)').css({
    'animation-delay' : '8.9s'
  });

  $('.mast__text1 span:nth-child(179)').css({
    'animation-delay' : '8.95s'
  });

  $('.mast__text1 span:nth-child(180)').css({
    'animation-delay' : '9s'
  });

});

document.addEventListener('aos:in:fade2', ({ detail }) => {
  console.log('animated in', detail);
  $('.sep').css({
    'border' : '0',
    'width' : '3em',
    'height' : '1px',
    'margin' : '1em 0',
    'background-color' : 'rgba(255, 255, 255, 0.4)'
  });

  $('.mast').css({
    'position' : 'relative',
    'display' : 'flex',
    'align-items' : 'center',
    'color' : '#fff',
    'padding' : '1%'
  });

  $('.mast:after').css({
    'z-index' : '0',
    'content' : '',
    'position' : 'absolute',
    'top' : '0',
    'left' : '0',
    'height' : '100%',
    'width' : '100%'
  });

  $('.mast > header').css({
    'z-index' : '2',
    'position' : 'relative'
  });

  $('.mast__bg').css({
    'position' : 'absolute',
    'top' : '0',
    'left' : '0',
    'width' : '100%',
    'height' : '100vh',
    'margin' : '0',
    'padding' : '0',
    'background-size' : 'cover',
    'background-position' : '50%'
  });

  $('.mast__header').css({

  });


  $('.mast__title2 span').css({
    'animation' : 'letter-glow 0.7s 0s ease both'
  });

  $('.mast__title2 span:nth-child(1)').css({
    'animation-delay' : '0.05s'
  });

  $('.mast__title2 span:nth-child(2)').css({
    'animation-delay' : '0.1s'
  });

  $('.mast__title2 span:nth-child(3)').css({
    'animation-delay' : '0.15s'
  });

  $('.mast__title2 span:nth-child(4)').css({
    'animation-delay' : '0.2s'
  });

  $('.mast__title2 span:nth-child(5)').css({
    'animation-delay' : '0.25s'
  });

  $('.mast__title2 span:nth-child(6)').css({
    'animation-delay' : '0.3s'
  });

  $('.mast__title2 span:nth-child(7)').css({
    'animation-delay' : '0.35s'
  });

  $('.mast__title2 span:nth-child(8)').css({
    'animation-delay' : '0.4s'
  });

  $('.mast__title2 span:nth-child(9)').css({
    'animation-delay' : '0.45s'
  });

  $('.mast__title2 span:nth-child(10)').css({
    'animation-delay' : '0.5s'
  });

  $('.mast__title2 span:nth-child(11)').css({
    'animation-delay' : '0.55s'
  });

  $('.mast__title2 span:nth-child(12)').css({
    'animation-delay' : '0.6s'
  });

  $('.mast__title2 span:nth-child(13)').css({
    'animation-delay' : '0.65s'
  });

  $('.mast__title2 span:nth-child(14)').css({
    'animation-delay' : '0.7s'
  });

  $('.mast__title2 span:nth-child(15)').css({
    'animation-delay' : '0.75s'
  });

  $('.mast__title2 span:nth-child(16)').css({
    'animation-delay' : '0.8s'
  });

  $('.mast__title2 span:nth-child(17)').css({
    'animation-delay' : '0.85s'
  });

  $('.mast__title2 span:nth-child(18)').css({
    'animation-delay' : '0.9s'
  });

  $('.mast__title2 span:nth-child(19)').css({
    'animation-delay' : '0.95s'
  });

  $('.mast__title2 span:nth-child(20)').css({
    'animation-delay' : '1s'
  });

  $('.mast__title2 span:nth-child(21)').css({
    'animation-delay' : '1.05s'
  });

  $('.mast__title2 span:nth-child(22)').css({
    'animation-delay' : '1.1s'
  });

  $('.mast__title2 span:nth-child(23)').css({
    'animation-delay' : '1.15s'
  });

  $('.mast__title2 span:nth-child(24)').css({
    'animation-delay' : '1.2s'
  });

  $('.mast__title2 span:nth-child(25)').css({
    'animation-delay' : '1.25s'
  });

  $('.mast__text2').css({
    'font-family' : '"Cutive Mono", monospace',
    'font-size' : '1em',
    'margin' : '0 0 0.5em',
    'line-height' : '1.5',
    'white-space' : 'normal'
  });

  $('.mast__text2 span').css({
    'animation' : 'letter-glow 0.7s 0s ease both'
  });

  $('.mast__text2 span:nth-child(1)').css({
    'animation-delay' : '0.05s'
  });

  $('.mast__text2 span:nth-child(2)').css({
    'animation-delay' : '0.1s'
  });

  $('.mast__text2 span:nth-child(3)').css({
    'animation-delay' : '0.15s'
  });

  $('.mast__text2 span:nth-child(4)').css({
    'animation-delay' : '0.2s'
  });

  $('.mast__text2 span:nth-child(5)').css({
    'animation-delay' : '0.25s'
  });

  $('.mast__text2 span:nth-child(6)').css({
    'animation-delay' : '0.3s'
  });

  $('.mast__text2 span:nth-child(7)').css({
    'animation-delay' : '0.35s'
  });

  $('.mast__text2 span:nth-child(8)').css({
    'animation-delay' : '0.4s'
  });

  $('.mast__text2 span:nth-child(9)').css({
    'animation-delay' : '0.45s'
  });

  $('.mast__text2 span:nth-child(10)').css({
    'animation-delay' : '0.5s'
  });

  $('.mast__text2 span:nth-child(11)').css({
    'animation-delay' : '0.55s'
  });

  $('.mast__text2 span:nth-child(12)').css({
    'animation-delay' : '0.6s'
  });

  $('.mast__text2 span:nth-child(13)').css({
    'animation-delay' : '0.65s'
  });

  $('.mast__text2 span:nth-child(14)').css({
    'animation-delay' : '0.7s'
  });

  $('.mast__text2 span:nth-child(15)').css({
    'animation-delay' : '0.75s'
  });

  $('.mast__text2 span:nth-child(16)').css({
    'animation-delay' : '0.8s'
  });

  $('.mast__text2 span:nth-child(17)').css({
    'animation-delay' : '0.85s'
  });

  $('.mast__text2 span:nth-child(18)').css({
    'animation-delay' : '0.9s'
  });

  $('.mast__text2 span:nth-child(19)').css({
    'animation-delay' : '0.95s'
  });

  $('.mast__text2 span:nth-child(20)').css({
    'animation-delay' : '1s'
  });

  $('.mast__text2 span:nth-child(21)').css({
    'animation-delay' : '1.05s'
  });

  $('.mast__text2 span:nth-child(22)').css({
    'animation-delay' : '1.1s'
  });

  $('.mast__text2 span:nth-child(23)').css({
    'animation-delay' : '1.15s'
  });

  $('.mast__text2 span:nth-child(24)').css({
    'animation-delay' : '1.2s'
  });

  $('.mast__text2 span:nth-child(25)').css({
    'animation-delay' : '1.25s'
  });

  $('.mast__text2 span:nth-child(26)').css({
    'animation-delay' : '1.3s'
  });

  $('.mast__text2 span:nth-child(27)').css({
    'animation-delay' : '1.35s'
  });

  $('.mast__text2 span:nth-child(28)').css({
    'animation-delay' : '1.4s'
  });

  $('.mast__text2 span:nth-child(29)').css({
    'animation-delay' : '1.45s'
  });

  $('.mast__text2 span:nth-child(30)').css({
    'animation-delay' : '1.5s'
  });

  $('.mast__text2 span:nth-child(31)').css({
    'animation-delay' : '1.55s'
  });

  $('.mast__text2 span:nth-child(32)').css({
    'animation-delay' : '1.6s'
  });

  $('.mast__text2 span:nth-child(33)').css({
    'animation-delay' : '1.65s'
  });

  $('.mast__text2 span:nth-child(34)').css({
    'animation-delay' : '1.7s'
  });

  $('.mast__text2 span:nth-child(35)').css({
    'animation-delay' : '1.75s'
  });

  $('.mast__text2 span:nth-child(36)').css({
    'animation-delay' : '1.8s'
  });

  $('.mast__text2 span:nth-child(37)').css({
    'animation-delay' : '1.85s'
  });

  $('.mast__text2 span:nth-child(38)').css({
    'animation-delay' : '1.9s'
  });

  $('.mast__text2 span:nth-child(39)').css({
    'animation-delay' : '1.95s'
  });

  $('.mast__text2 span:nth-child(40)').css({
    'animation-delay' : '2s'
  });

  $('.mast__text2 span:nth-child(41)').css({
    'animation-delay' : '2.05s'
  });

  $('.mast__text2 span:nth-child(42)').css({
    'animation-delay' : '2.1s'
  });

  $('.mast__text2 span:nth-child(43)').css({
    'animation-delay' : '2.15s'
  });

  $('.mast__text2 span:nth-child(44)').css({
    'animation-delay' : '2.2s'
  });

  $('.mast__text2 span:nth-child(45)').css({
    'animation-delay' : '2.25s'
  });

  $('.mast__text2 span:nth-child(46)').css({
    'animation-delay' : '2.3s'
  });

  $('.mast__text2 span:nth-child(47)').css({
    'animation-delay' : '2.35s'
  });

  $('.mast__text2 span:nth-child(48)').css({
    'animation-delay' : '2.4s'
  });

  $('.mast__text2 span:nth-child(49)').css({
    'animation-delay' : '2.45s'
  });

  $('.mast__text2 span:nth-child(50)').css({
    'animation-delay' : '2.5s'
  });

  $('.mast__text2 span:nth-child(51)').css({
    'animation-delay' : '2.55s'
  });

  $('.mast__text2 span:nth-child(52)').css({
    'animation-delay' : '2.6s'
  });

  $('.mast__text2 span:nth-child(53)').css({
    'animation-delay' : '2.65s'
  });

  $('.mast__text2 span:nth-child(54)').css({
    'animation-delay' : '2.7s'
  });

  $('.mast__text2 span:nth-child(55)').css({
    'animation-delay' : '2.75s'
  });

  $('.mast__text2 span:nth-child(56)').css({
    'animation-delay' : '2.8s'
  });

  $('.mast__text2 span:nth-child(57)').css({
    'animation-delay' : '2.85s'
  });

  $('.mast__text2 span:nth-child(58)').css({
    'animation-delay' : '2.9s'
  });

  $('.mast__text2 span:nth-child(59)').css({
    'animation-delay' : '2.95s'
  });

  $('.mast__text2 span:nth-child(60)').css({
    'animation-delay' : '3s'
  });

  $('.mast__text2 span:nth-child(61)').css({
    'animation-delay' : '3.05s'
  });

  $('.mast__text2 span:nth-child(62)').css({
    'animation-delay' : '3.1s'
  });

  $('.mast__text2 span:nth-child(63)').css({
    'animation-delay' : '3.15s'
  });

  $('.mast__text2 span:nth-child(64)').css({
    'animation-delay' : '3.2s'
  });

  $('.mast__text2 span:nth-child(65)').css({
    'animation-delay' : '3.25s'
  });

  $('.mast__text2 span:nth-child(66)').css({
    'animation-delay' : '3.3s'
  });

  $('.mast__text2 span:nth-child(67)').css({
    'animation-delay' : '3.35s'
  });

  $('.mast__text2 span:nth-child(68)').css({
    'animation-delay' : '3.4s'
  });

  $('.mast__text2 span:nth-child(69)').css({
    'animation-delay' : '3.45s'
  });

  $('.mast__text2 span:nth-child(70)').css({
    'animation-delay' : '3.5s'
  });

  $('.mast__text2 span:nth-child(71)').css({
    'animation-delay' : '3.55s'
  });

  $('.mast__text2 span:nth-child(72)').css({
    'animation-delay' : '3.6s'
  });

  $('.mast__text2 span:nth-child(73)').css({
    'animation-delay' : '3.65s'
  });

  $('.mast__text2 span:nth-child(74)').css({
    'animation-delay' : '3.7s'
  });

  $('.mast__text2 span:nth-child(75)').css({
    'animation-delay' : '3.75s'
  });

  $('.mast__text2 span:nth-child(76)').css({
    'animation-delay' : '3.8s'
  });

  $('.mast__text2 span:nth-child(77)').css({
    'animation-delay' : '3.85s'
  });

  $('.mast__text2 span:nth-child(78)').css({
    'animation-delay' : '3.9s'
  });

  $('.mast__text2 span:nth-child(79)').css({
    'animation-delay' : '3.95s'
  });

  $('.mast__text2 span:nth-child(80)').css({
    'animation-delay' : '4s'
  });

  $('.mast__text2 span:nth-child(81)').css({
    'animation-delay' : '4.05s'
  });

  $('.mast__text2 span:nth-child(82)').css({
    'animation-delay' : '4.1s'
  });

  $('.mast__text2 span:nth-child(83)').css({
    'animation-delay' : '4.15s'
  });

  $('.mast__text2 span:nth-child(84)').css({
    'animation-delay' : '4.2s'
  });

  $('.mast__text2 span:nth-child(85)').css({
    'animation-delay' : '4.25s'
  });

  $('.mast__text2 span:nth-child(86)').css({
    'animation-delay' : '4.3s'
  });

  $('.mast__text2 span:nth-child(87)').css({
    'animation-delay' : '4.35s'
  });

  $('.mast__text2 span:nth-child(88)').css({
    'animation-delay' : '4.4s'
  });

  $('.mast__text2 span:nth-child(89)').css({
    'animation-delay' : '4.45s'
  });

  $('.mast__text2 span:nth-child(90)').css({
    'animation-delay' : '4.5s'
  });

  $('.mast__text2 span:nth-child(91)').css({
    'animation-delay' : '4.55s'
  });

  $('.mast__text2 span:nth-child(92)').css({
    'animation-delay' : '4.6s'
  });

  $('.mast__text2 span:nth-child(93)').css({
    'animation-delay' : '4.65s'
  });

  $('.mast__text2 span:nth-child(94)').css({
    'animation-delay' : '4.7s'
  });

  $('.mast__text2 span:nth-child(95)').css({
    'animation-delay' : '4.75s'
  });

  $('.mast__text2 span:nth-child(96)').css({
    'animation-delay' : '4.8s'
  });

  $('.mast__text2 span:nth-child(97)').css({
    'animation-delay' : '4.85s'
  });

  $('.mast__text2 span:nth-child(98)').css({
    'animation-delay' : '4.9s'
  });

  $('.mast__text2 span:nth-child(99)').css({
    'animation-delay' : '4.95s'
  });

  $('.mast__text2 span:nth-child(100)').css({
    'animation-delay' : '5s'
  });

  $('.mast__text2 span:nth-child(101)').css({
    'animation-delay' : '5.05s'
  });

  $('.mast__text2 span:nth-child(102)').css({
    'animation-delay' : '5.1s'
  });

  $('.mast__text2 span:nth-child(103)').css({
    'animation-delay' : '5.15s'
  });

  $('.mast__text2 span:nth-child(104)').css({
    'animation-delay' : '5.2s'
  });

  $('.mast__text2 span:nth-child(105)').css({
    'animation-delay' : '5.25s'
  });

  $('.mast__text2 span:nth-child(106)').css({
    'animation-delay' : '5.3s'
  });

  $('.mast__text2 span:nth-child(107)').css({
    'animation-delay' : '5.35s'
  });

  $('.mast__text2 span:nth-child(108)').css({
    'animation-delay' : '5.4s'
  });

  $('.mast__text2 span:nth-child(109)').css({
    'animation-delay' : '5.45s'
  });

  $('.mast__text2 span:nth-child(110)').css({
    'animation-delay' : '5.5s'
  });

  $('.mast__text2 span:nth-child(111)').css({
    'animation-delay' : '5.55s'
  });

  $('.mast__text2 span:nth-child(112)').css({
    'animation-delay' : '5.6s'
  });

  $('.mast__text2 span:nth-child(113)').css({
    'animation-delay' : '5.65s'
  });

  $('.mast__text2 span:nth-child(114)').css({
    'animation-delay' : '5.7s'
  });

  $('.mast__text2 span:nth-child(115)').css({
    'animation-delay' : '5.75s'
  });

  $('.mast__text2 span:nth-child(116)').css({
    'animation-delay' : '5.8s'
  });

  $('.mast__text2 span:nth-child(117)').css({
    'animation-delay' : '5.85s'
  });

  $('.mast__text2 span:nth-child(118)').css({
    'animation-delay' : '5.9s'
  });

  $('.mast__text2 span:nth-child(119)').css({
    'animation-delay' : '5.95s'
  });

  $('.mast__text2 span:nth-child(120)').css({
    'animation-delay' : '6s'
  });

  $('.mast__text2 span:nth-child(121)').css({
    'animation-delay' : '6.05s'
  });

  $('.mast__text2 span:nth-child(122)').css({
    'animation-delay' : '6.1s'
  });

  $('.mast__text2 span:nth-child(123)').css({
    'animation-delay' : '6.15s'
  });

  $('.mast__text2 span:nth-child(124)').css({
    'animation-delay' : '6.2s'
  });

  $('.mast__text2 span:nth-child(125)').css({
    'animation-delay' : '6.25s'
  });

  $('.mast__text2 span:nth-child(126)').css({
    'animation-delay' : '6.3s'
  });

  $('.mast__text2 span:nth-child(127)').css({
    'animation-delay' : '6.35s'
  });

  $('.mast__text2 span:nth-child(128)').css({
    'animation-delay' : '6.4s'
  });

  $('.mast__text2 span:nth-child(129)').css({
    'animation-delay' : '6.45s'
  });

  $('.mast__text2 span:nth-child(130)').css({
    'animation-delay' : '6.5s'
  });

  $('.mast__text2 span:nth-child(131)').css({
    'animation-delay' : '6.55s'
  });

  $('.mast__text2 span:nth-child(132)').css({
    'animation-delay' : '6.6s'
  });

  $('.mast__text2 span:nth-child(133)').css({
    'animation-delay' : '6.65s'
  });

  $('.mast__text2 span:nth-child(134)').css({
    'animation-delay' : '6.7s'
  });

  $('.mast__text2 span:nth-child(135)').css({
    'animation-delay' : '6.75s'
  });

  $('.mast__text2 span:nth-child(136)').css({
    'animation-delay' : '6.8s'
  });

  $('.mast__text2 span:nth-child(137)').css({
    'animation-delay' : '6.85s'
  });

  $('.mast__text2 span:nth-child(138)').css({
    'animation-delay' : '6.9s'
  });

  $('.mast__text2 span:nth-child(139)').css({
    'animation-delay' : '6.95s'
  });

  $('.mast__text2 span:nth-child(140)').css({
    'animation-delay' : '7s'
  });

  $('.mast__text2 span:nth-child(141)').css({
    'animation-delay' : '7.05s'
  });

  $('.mast__text2 span:nth-child(142)').css({
    'animation-delay' : '7.1s'
  });

  $('.mast__text2 span:nth-child(143)').css({
    'animation-delay' : '7.15s'
  });

  $('.mast__text2 span:nth-child(144)').css({
    'animation-delay' : '7.2s'
  });

  $('.mast__text2 span:nth-child(145)').css({
    'animation-delay' : '7.25s'
  });

  $('.mast__text2 span:nth-child(146)').css({
    'animation-delay' : '7.3s'
  });

  $('.mast__text2 span:nth-child(147)').css({
    'animation-delay' : '7.35s'
  });

  $('.mast__text2 span:nth-child(148)').css({
    'animation-delay' : '7.4s'
  });

  $('.mast__text2 span:nth-child(149)').css({
    'animation-delay' : '7.45s'
  });

  $('.mast__text2 span:nth-child(150)').css({
    'animation-delay' : '7.5s'
  });

  $('.mast__text2 span:nth-child(151)').css({
    'animation-delay' : '7.55s'
  });

  $('.mast__text2 span:nth-child(152)').css({
    'animation-delay' : '7.6s'
  });

  $('.mast__text2 span:nth-child(153)').css({
    'animation-delay' : '7.65s'
  });

  $('.mast__text2 span:nth-child(154)').css({
    'animation-delay' : '7.7s'
  });

  $('.mast__text2 span:nth-child(155)').css({
    'animation-delay' : '7.75s'
  });

  $('.mast__text2 span:nth-child(156)').css({
    'animation-delay' : '7.8s'
  });

  $('.mast__text2 span:nth-child(157)').css({
    'animation-delay' : '7.85s'
  });

  $('.mast__text2 span:nth-child(158)').css({
    'animation-delay' : '7.9s'
  });

  $('.mast__text2 span:nth-child(159)').css({
    'animation-delay' : '7.95s'
  });

  $('.mast__text2 span:nth-child(160)').css({
    'animation-delay' : '8s'
  });

  $('.mast__text2 span:nth-child(161)').css({
    'animation-delay' : '8.05s'
  });

  $('.mast__text2 span:nth-child(162)').css({
    'animation-delay' : '8.1s'
  });

  $('.mast__text2 span:nth-child(163)').css({
    'animation-delay' : '8.15s'
  });

  $('.mast__text2 span:nth-child(164)').css({
    'animation-delay' : '8.2s'
  });

  $('.mast__text2 span:nth-child(165)').css({
    'animation-delay' : '8.25s'
  });

  $('.mast__text2 span:nth-child(166)').css({
    'animation-delay' : '8.3s'
  });

  $('.mast__text2 span:nth-child(167)').css({
    'animation-delay' : '8.35s'
  });

  $('.mast__text2 span:nth-child(168)').css({
    'animation-delay' : '8.4s'
  });

  $('.mast__text2 span:nth-child(169)').css({
    'animation-delay' : '8.45s'
  });

  $('.mast__text2 span:nth-child(170)').css({
    'animation-delay' : '8.5s'
  });

  $('.mast__text2 span:nth-child(171)').css({
    'animation-delay' : '8.55s'
  });

  $('.mast__text2 span:nth-child(172)').css({
    'animation-delay' : '8.6s'
  });

  $('.mast__text2 span:nth-child(173)').css({
    'animation-delay' : '8.65s'
  });

  $('.mast__text2 span:nth-child(174)').css({
    'animation-delay' : '8.7s'
  });

  $('.mast__text2 span:nth-child(175)').css({
    'animation-delay' : '8.75s'
  });

  $('.mast__text2 span:nth-child(176)').css({
    'animation-delay' : '8.8s'
  });

  $('.mast__text2 span:nth-child(177)').css({
    'animation-delay' : '8.85s'
  });

  $('.mast__text2 span:nth-child(178)').css({
    'animation-delay' : '8.9s'
  });

  $('.mast__text2 span:nth-child(179)').css({
    'animation-delay' : '8.95s'
  });

  $('.mast__text2 span:nth-child(180)').css({
    'animation-delay' : '9s'
  });

});


document.addEventListener('aos:in:fade3', ({ detail }) => {
  console.log('animated in', detail);
  $('.sep').css({
    'border' : '0',
    'width' : '3em',
    'height' : '1px',
    'margin' : '1em 0',
    'background-color' : 'rgba(255, 255, 255, 0.4)'
  });

  $('.mast').css({
    'position' : 'relative',
    'display' : 'flex',
    'align-items' : 'center',
    'color' : '#fff',
    'padding' : '1%'
  });

  $('.mast:after').css({
    'z-index' : '0',
    'content' : '',
    'position' : 'absolute',
    'top' : '0',
    'left' : '0',
    'height' : '100%',
    'width' : '100%'
  });

  $('.mast > header').css({
    'z-index' : '2',
    'position' : 'relative'
  });

  $('.mast__bg').css({
    'position' : 'absolute',
    'top' : '0',
    'left' : '0',
    'width' : '100%',
    'height' : '100vh',
    'margin' : '0',
    'padding' : '0',
    'background-size' : 'cover',
    'background-position' : '50%'
  });

  $('.mast__header').css({

  });


  $('.mast__title2 span').css({
    'animation' : 'letter-glow 0.7s 0s ease both'
  });

  $('.mast__title2 span:nth-child(1)').css({
    'animation-delay' : '0.05s'
  });

  $('.mast__title2 span:nth-child(2)').css({
    'animation-delay' : '0.1s'
  });

  $('.mast__title2 span:nth-child(3)').css({
    'animation-delay' : '0.15s'
  });

  $('.mast__title2 span:nth-child(4)').css({
    'animation-delay' : '0.2s'
  });

  $('.mast__title2 span:nth-child(5)').css({
    'animation-delay' : '0.25s'
  });

  $('.mast__title2 span:nth-child(6)').css({
    'animation-delay' : '0.3s'
  });

  $('.mast__title2 span:nth-child(7)').css({
    'animation-delay' : '0.35s'
  });

  $('.mast__title2 span:nth-child(8)').css({
    'animation-delay' : '0.4s'
  });

  $('.mast__title2 span:nth-child(9)').css({
    'animation-delay' : '0.45s'
  });

  $('.mast__title2 span:nth-child(10)').css({
    'animation-delay' : '0.5s'
  });

  $('.mast__title2 span:nth-child(11)').css({
    'animation-delay' : '0.55s'
  });

  $('.mast__title2 span:nth-child(12)').css({
    'animation-delay' : '0.6s'
  });

  $('.mast__title2 span:nth-child(13)').css({
    'animation-delay' : '0.65s'
  });

  $('.mast__title2 span:nth-child(14)').css({
    'animation-delay' : '0.7s'
  });

  $('.mast__title2 span:nth-child(15)').css({
    'animation-delay' : '0.75s'
  });

  $('.mast__title2 span:nth-child(16)').css({
    'animation-delay' : '0.8s'
  });

  $('.mast__title2 span:nth-child(17)').css({
    'animation-delay' : '0.85s'
  });

  $('.mast__title2 span:nth-child(18)').css({
    'animation-delay' : '0.9s'
  });

  $('.mast__title2 span:nth-child(19)').css({
    'animation-delay' : '0.95s'
  });

  $('.mast__title2 span:nth-child(20)').css({
    'animation-delay' : '1s'
  });

  $('.mast__title2 span:nth-child(21)').css({
    'animation-delay' : '1.05s'
  });

  $('.mast__title2 span:nth-child(22)').css({
    'animation-delay' : '1.1s'
  });

  $('.mast__title2 span:nth-child(23)').css({
    'animation-delay' : '1.15s'
  });

  $('.mast__title2 span:nth-child(24)').css({
    'animation-delay' : '1.2s'
  });

  $('.mast__title2 span:nth-child(25)').css({
    'animation-delay' : '1.25s'
  });

  $('.mast__text3').css({
    'font-family' : '"Cutive Mono", monospace',
    'font-size' : '1em',
    'margin' : '0 0 0.5em',
    'line-height' : '1.5',
    'white-space' : 'normal'
  });

  $('.mast__text3 span').css({
    'animation' : 'letter-glow 0.7s 0s ease both'
  });

  $('.mast__text3 span:nth-child(1)').css({
    'animation-delay' : '0.05s'
  });

  $('.mast__text3 span:nth-child(2)').css({
    'animation-delay' : '0.1s'
  });

  $('.mast__text3 span:nth-child(3)').css({
    'animation-delay' : '0.15s'
  });

  $('.mast__text3 span:nth-child(4)').css({
    'animation-delay' : '0.2s'
  });

  $('.mast__text3 span:nth-child(5)').css({
    'animation-delay' : '0.25s'
  });

  $('.mast__text3 span:nth-child(6)').css({
    'animation-delay' : '0.3s'
  });

  $('.mast__text3 span:nth-child(7)').css({
    'animation-delay' : '0.35s'
  });

  $('.mast__text3 span:nth-child(8)').css({
    'animation-delay' : '0.4s'
  });

  $('.mast__text3 span:nth-child(9)').css({
    'animation-delay' : '0.45s'
  });

  $('.mast__text3 span:nth-child(10)').css({
    'animation-delay' : '0.5s'
  });

  $('.mast__text3 span:nth-child(11)').css({
    'animation-delay' : '0.55s'
  });

  $('.mast__text3 span:nth-child(12)').css({
    'animation-delay' : '0.6s'
  });

  $('.mast__text3 span:nth-child(13)').css({
    'animation-delay' : '0.65s'
  });

  $('.mast__text3 span:nth-child(14)').css({
    'animation-delay' : '0.7s'
  });

  $('.mast__text3 span:nth-child(15)').css({
    'animation-delay' : '0.75s'
  });

  $('.mast__text3 span:nth-child(16)').css({
    'animation-delay' : '0.8s'
  });

  $('.mast__text3 span:nth-child(17)').css({
    'animation-delay' : '0.85s'
  });

  $('.mast__text3 span:nth-child(18)').css({
    'animation-delay' : '0.9s'
  });

  $('.mast__text3 span:nth-child(19)').css({
    'animation-delay' : '0.95s'
  });

  $('.mast__text3 span:nth-child(20)').css({
    'animation-delay' : '1s'
  });

  $('.mast__text3 span:nth-child(21)').css({
    'animation-delay' : '1.05s'
  });

  $('.mast__text3 span:nth-child(22)').css({
    'animation-delay' : '1.1s'
  });

  $('.mast__text3 span:nth-child(23)').css({
    'animation-delay' : '1.15s'
  });

  $('.mast__text3 span:nth-child(24)').css({
    'animation-delay' : '1.2s'
  });

  $('.mast__text3 span:nth-child(25)').css({
    'animation-delay' : '1.25s'
  });

  $('.mast__text3 span:nth-child(26)').css({
    'animation-delay' : '1.3s'
  });

  $('.mast__text3 span:nth-child(27)').css({
    'animation-delay' : '1.35s'
  });

  $('.mast__text3 span:nth-child(28)').css({
    'animation-delay' : '1.4s'
  });

  $('.mast__text3 span:nth-child(29)').css({
    'animation-delay' : '1.45s'
  });

  $('.mast__text3 span:nth-child(30)').css({
    'animation-delay' : '1.5s'
  });

  $('.mast__text3 span:nth-child(31)').css({
    'animation-delay' : '1.55s'
  });

  $('.mast__text3 span:nth-child(32)').css({
    'animation-delay' : '1.6s'
  });

  $('.mast__text3 span:nth-child(33)').css({
    'animation-delay' : '1.65s'
  });

  $('.mast__text3 span:nth-child(34)').css({
    'animation-delay' : '1.7s'
  });

  $('.mast__text3 span:nth-child(35)').css({
    'animation-delay' : '1.75s'
  });

  $('.mast__text3 span:nth-child(36)').css({
    'animation-delay' : '1.8s'
  });

  $('.mast__text3 span:nth-child(37)').css({
    'animation-delay' : '1.85s'
  });

  $('.mast__text3 span:nth-child(38)').css({
    'animation-delay' : '1.9s'
  });

  $('.mast__text3 span:nth-child(39)').css({
    'animation-delay' : '1.95s'
  });

  $('.mast__text3 span:nth-child(40)').css({
    'animation-delay' : '2s'
  });

  $('.mast__text3 span:nth-child(41)').css({
    'animation-delay' : '2.05s'
  });

  $('.mast__text3 span:nth-child(42)').css({
    'animation-delay' : '2.1s'
  });

  $('.mast__text3 span:nth-child(43)').css({
    'animation-delay' : '2.15s'
  });

  $('.mast__text3 span:nth-child(44)').css({
    'animation-delay' : '2.2s'
  });

  $('.mast__text3 span:nth-child(45)').css({
    'animation-delay' : '2.25s'
  });

  $('.mast__text3 span:nth-child(46)').css({
    'animation-delay' : '2.3s'
  });

  $('.mast__text3 span:nth-child(47)').css({
    'animation-delay' : '2.35s'
  });

  $('.mast__text3 span:nth-child(48)').css({
    'animation-delay' : '2.4s'
  });

  $('.mast__text3 span:nth-child(49)').css({
    'animation-delay' : '2.45s'
  });

  $('.mast__text3 span:nth-child(50)').css({
    'animation-delay' : '2.5s'
  });

  $('.mast__text3 span:nth-child(51)').css({
    'animation-delay' : '2.55s'
  });

  $('.mast__text3 span:nth-child(52)').css({
    'animation-delay' : '2.6s'
  });

  $('.mast__text3 span:nth-child(53)').css({
    'animation-delay' : '2.65s'
  });

  $('.mast__text3 span:nth-child(54)').css({
    'animation-delay' : '2.7s'
  });

  $('.mast__text3 span:nth-child(55)').css({
    'animation-delay' : '2.75s'
  });

  $('.mast__text3 span:nth-child(56)').css({
    'animation-delay' : '2.8s'
  });

  $('.mast__text3 span:nth-child(57)').css({
    'animation-delay' : '2.85s'
  });

  $('.mast__text3 span:nth-child(58)').css({
    'animation-delay' : '2.9s'
  });

  $('.mast__text3 span:nth-child(59)').css({
    'animation-delay' : '2.95s'
  });

  $('.mast__text3 span:nth-child(60)').css({
    'animation-delay' : '3s'
  });

  $('.mast__text3 span:nth-child(61)').css({
    'animation-delay' : '3.05s'
  });

  $('.mast__text3 span:nth-child(62)').css({
    'animation-delay' : '3.1s'
  });

  $('.mast__text3 span:nth-child(63)').css({
    'animation-delay' : '3.15s'
  });

  $('.mast__text3 span:nth-child(64)').css({
    'animation-delay' : '3.2s'
  });

  $('.mast__text3 span:nth-child(65)').css({
    'animation-delay' : '3.25s'
  });

  $('.mast__text3 span:nth-child(66)').css({
    'animation-delay' : '3.3s'
  });

  $('.mast__text3 span:nth-child(67)').css({
    'animation-delay' : '3.35s'
  });

  $('.mast__text3 span:nth-child(68)').css({
    'animation-delay' : '3.4s'
  });

  $('.mast__text3 span:nth-child(69)').css({
    'animation-delay' : '3.45s'
  });

  $('.mast__text3 span:nth-child(70)').css({
    'animation-delay' : '3.5s'
  });

  $('.mast__text3 span:nth-child(71)').css({
    'animation-delay' : '3.55s'
  });

  $('.mast__text3 span:nth-child(72)').css({
    'animation-delay' : '3.6s'
  });

  $('.mast__text3 span:nth-child(73)').css({
    'animation-delay' : '3.65s'
  });

  $('.mast__text3 span:nth-child(74)').css({
    'animation-delay' : '3.7s'
  });

  $('.mast__text3 span:nth-child(75)').css({
    'animation-delay' : '3.75s'
  });

  $('.mast__text3 span:nth-child(76)').css({
    'animation-delay' : '3.8s'
  });

  $('.mast__text3 span:nth-child(77)').css({
    'animation-delay' : '3.85s'
  });

  $('.mast__text3 span:nth-child(78)').css({
    'animation-delay' : '3.9s'
  });

  $('.mast__text3 span:nth-child(79)').css({
    'animation-delay' : '3.95s'
  });

  $('.mast__text3 span:nth-child(80)').css({
    'animation-delay' : '4s'
  });

  $('.mast__text3 span:nth-child(81)').css({
    'animation-delay' : '4.05s'
  });

  $('.mast__text3 span:nth-child(82)').css({
    'animation-delay' : '4.1s'
  });

  $('.mast__text3 span:nth-child(83)').css({
    'animation-delay' : '4.15s'
  });

  $('.mast__text3 span:nth-child(84)').css({
    'animation-delay' : '4.2s'
  });

  $('.mast__text3 span:nth-child(85)').css({
    'animation-delay' : '4.25s'
  });

  $('.mast__text3 span:nth-child(86)').css({
    'animation-delay' : '4.3s'
  });

  $('.mast__text3 span:nth-child(87)').css({
    'animation-delay' : '4.35s'
  });

  $('.mast__text3 span:nth-child(88)').css({
    'animation-delay' : '4.4s'
  });

  $('.mast__text3 span:nth-child(89)').css({
    'animation-delay' : '4.45s'
  });

  $('.mast__text3 span:nth-child(90)').css({
    'animation-delay' : '4.5s'
  });

  $('.mast__text3 span:nth-child(91)').css({
    'animation-delay' : '4.55s'
  });

  $('.mast__text3 span:nth-child(92)').css({
    'animation-delay' : '4.6s'
  });

  $('.mast__text3 span:nth-child(93)').css({
    'animation-delay' : '4.65s'
  });

  $('.mast__text3 span:nth-child(94)').css({
    'animation-delay' : '4.7s'
  });

  $('.mast__text3 span:nth-child(95)').css({
    'animation-delay' : '4.75s'
  });

  $('.mast__text3 span:nth-child(96)').css({
    'animation-delay' : '4.8s'
  });

  $('.mast__text3 span:nth-child(97)').css({
    'animation-delay' : '4.85s'
  });

  $('.mast__text3 span:nth-child(98)').css({
    'animation-delay' : '4.9s'
  });

  $('.mast__text3 span:nth-child(99)').css({
    'animation-delay' : '4.95s'
  });

  $('.mast__text3 span:nth-child(100)').css({
    'animation-delay' : '5s'
  });

  $('.mast__text3 span:nth-child(101)').css({
    'animation-delay' : '5.05s'
  });

  $('.mast__text3 span:nth-child(102)').css({
    'animation-delay' : '5.1s'
  });

  $('.mast__text3 span:nth-child(103)').css({
    'animation-delay' : '5.15s'
  });

  $('.mast__text3 span:nth-child(104)').css({
    'animation-delay' : '5.2s'
  });

  $('.mast__text3 span:nth-child(105)').css({
    'animation-delay' : '5.25s'
  });

  $('.mast__text3 span:nth-child(106)').css({
    'animation-delay' : '5.3s'
  });

  $('.mast__text3 span:nth-child(107)').css({
    'animation-delay' : '5.35s'
  });

  $('.mast__text3 span:nth-child(108)').css({
    'animation-delay' : '5.4s'
  });

  $('.mast__text3 span:nth-child(109)').css({
    'animation-delay' : '5.45s'
  });

  $('.mast__text3 span:nth-child(110)').css({
    'animation-delay' : '5.5s'
  });

  $('.mast__text3 span:nth-child(111)').css({
    'animation-delay' : '5.55s'
  });

  $('.mast__text3 span:nth-child(112)').css({
    'animation-delay' : '5.6s'
  });

  $('.mast__text3 span:nth-child(113)').css({
    'animation-delay' : '5.65s'
  });

  $('.mast__text3 span:nth-child(114)').css({
    'animation-delay' : '5.7s'
  });

  $('.mast__text3 span:nth-child(115)').css({
    'animation-delay' : '5.75s'
  });

  $('.mast__text3 span:nth-child(116)').css({
    'animation-delay' : '5.8s'
  });

  $('.mast__text3 span:nth-child(117)').css({
    'animation-delay' : '5.85s'
  });

  $('.mast__text3 span:nth-child(118)').css({
    'animation-delay' : '5.9s'
  });

  $('.mast__text3 span:nth-child(119)').css({
    'animation-delay' : '5.95s'
  });

  $('.mast__text3 span:nth-child(120)').css({
    'animation-delay' : '6s'
  });

  $('.mast__text3 span:nth-child(121)').css({
    'animation-delay' : '6.05s'
  });

  $('.mast__text3 span:nth-child(122)').css({
    'animation-delay' : '6.1s'
  });

  $('.mast__text3 span:nth-child(123)').css({
    'animation-delay' : '6.15s'
  });

  $('.mast__text3 span:nth-child(124)').css({
    'animation-delay' : '6.2s'
  });

  $('.mast__text3 span:nth-child(125)').css({
    'animation-delay' : '6.25s'
  });

  $('.mast__text3 span:nth-child(126)').css({
    'animation-delay' : '6.3s'
  });

  $('.mast__text3 span:nth-child(127)').css({
    'animation-delay' : '6.35s'
  });

  $('.mast__text3 span:nth-child(128)').css({
    'animation-delay' : '6.4s'
  });

  $('.mast__text3 span:nth-child(129)').css({
    'animation-delay' : '6.45s'
  });

  $('.mast__text3 span:nth-child(130)').css({
    'animation-delay' : '6.5s'
  });

  $('.mast__text3 span:nth-child(131)').css({
    'animation-delay' : '6.55s'
  });

  $('.mast__text3 span:nth-child(132)').css({
    'animation-delay' : '6.6s'
  });

  $('.mast__text3 span:nth-child(133)').css({
    'animation-delay' : '6.65s'
  });

  $('.mast__text3 span:nth-child(134)').css({
    'animation-delay' : '6.7s'
  });

  $('.mast__text3 span:nth-child(135)').css({
    'animation-delay' : '6.75s'
  });

  $('.mast__text3 span:nth-child(136)').css({
    'animation-delay' : '6.8s'
  });

  $('.mast__text3 span:nth-child(137)').css({
    'animation-delay' : '6.85s'
  });

  $('.mast__text3 span:nth-child(138)').css({
    'animation-delay' : '6.9s'
  });

  $('.mast__text3 span:nth-child(139)').css({
    'animation-delay' : '6.95s'
  });

  $('.mast__text3 span:nth-child(140)').css({
    'animation-delay' : '7s'
  });

  $('.mast__text3 span:nth-child(141)').css({
    'animation-delay' : '7.05s'
  });

  $('.mast__text3 span:nth-child(142)').css({
    'animation-delay' : '7.1s'
  });

  $('.mast__text3 span:nth-child(143)').css({
    'animation-delay' : '7.15s'
  });

  $('.mast__text3 span:nth-child(144)').css({
    'animation-delay' : '7.2s'
  });

  $('.mast__text3 span:nth-child(145)').css({
    'animation-delay' : '7.25s'
  });

  $('.mast__text3 span:nth-child(146)').css({
    'animation-delay' : '7.3s'
  });

  $('.mast__text3 span:nth-child(147)').css({
    'animation-delay' : '7.35s'
  });

  $('.mast__text3 span:nth-child(148)').css({
    'animation-delay' : '7.4s'
  });

  $('.mast__text3 span:nth-child(149)').css({
    'animation-delay' : '7.45s'
  });

  $('.mast__text3 span:nth-child(150)').css({
    'animation-delay' : '7.5s'
  });

  $('.mast__text3 span:nth-child(151)').css({
    'animation-delay' : '7.55s'
  });

  $('.mast__text3 span:nth-child(152)').css({
    'animation-delay' : '7.6s'
  });

  $('.mast__text3 span:nth-child(153)').css({
    'animation-delay' : '7.65s'
  });

  $('.mast__text3 span:nth-child(154)').css({
    'animation-delay' : '7.7s'
  });

  $('.mast__text3 span:nth-child(155)').css({
    'animation-delay' : '7.75s'
  });

  $('.mast__text3 span:nth-child(156)').css({
    'animation-delay' : '7.8s'
  });

  $('.mast__text3 span:nth-child(157)').css({
    'animation-delay' : '7.85s'
  });

  $('.mast__text3 span:nth-child(158)').css({
    'animation-delay' : '7.9s'
  });

  $('.mast__text3 span:nth-child(159)').css({
    'animation-delay' : '7.95s'
  });

  $('.mast__text3 span:nth-child(160)').css({
    'animation-delay' : '8s'
  });

  $('.mast__text3 span:nth-child(161)').css({
    'animation-delay' : '8.05s'
  });

  $('.mast__text3 span:nth-child(162)').css({
    'animation-delay' : '8.1s'
  });

  $('.mast__text3 span:nth-child(163)').css({
    'animation-delay' : '8.15s'
  });

  $('.mast__text3 span:nth-child(164)').css({
    'animation-delay' : '8.2s'
  });

  $('.mast__text3 span:nth-child(165)').css({
    'animation-delay' : '8.25s'
  });

  $('.mast__text3 span:nth-child(166)').css({
    'animation-delay' : '8.3s'
  });

  $('.mast__text3 span:nth-child(167)').css({
    'animation-delay' : '8.35s'
  });

  $('.mast__text3 span:nth-child(168)').css({
    'animation-delay' : '8.4s'
  });

  $('.mast__text3 span:nth-child(169)').css({
    'animation-delay' : '8.45s'
  });

  $('.mast__text3 span:nth-child(170)').css({
    'animation-delay' : '8.5s'
  });

  $('.mast__text3 span:nth-child(171)').css({
    'animation-delay' : '8.55s'
  });

  $('.mast__text3 span:nth-child(172)').css({
    'animation-delay' : '8.6s'
  });

  $('.mast__text3 span:nth-child(173)').css({
    'animation-delay' : '8.65s'
  });

  $('.mast__text3 span:nth-child(174)').css({
    'animation-delay' : '8.7s'
  });

  $('.mast__text3 span:nth-child(175)').css({
    'animation-delay' : '8.75s'
  });

  $('.mast__text3 span:nth-child(176)').css({
    'animation-delay' : '8.8s'
  });

  $('.mast__text3 span:nth-child(177)').css({
    'animation-delay' : '8.85s'
  });

  $('.mast__text3 span:nth-child(178)').css({
    'animation-delay' : '8.9s'
  });

  $('.mast__text3 span:nth-child(179)').css({
    'animation-delay' : '8.95s'
  });

  $('.mast__text3 span:nth-child(180)').css({
    'animation-delay' : '9s'
  });

});
