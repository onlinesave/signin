// Slide effect on sections
new cbpScroller( document.getElementById('cbp-so-scroller') );
jQuery(document).ready(function() {
	//Function to prevent Default Events
	function pde(e){
		if(e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;
	}
	//Collapse navigation on click (Bootstrap 3 is missing it)
	$('.nav a').on('click', function () {
		$('#my-nav').removeClass('in').addClass('collapse');
	});
	
	// Minify the Nav Bar
	$(document).scroll(function () {
		var position = $(document).scrollTop();
		var headerHeight = $('#header').outerHeight();
		if (position >= headerHeight - 100){
				$('.navbar').addClass('minified');
		} else {
				$('.navbar').removeClass('minified');
		}
		
		// Parallax effect on #Header
		$(".jumbotron .container").css({
			'opacity' : (1 - position/500)
		});


		// Show "Back to Top" button
		if (position >= headerHeight - 100){
			$('.scrolltotop').addClass('show-to-top');
		} else {
			$('.scrolltotop').removeClass('show-to-top');
		}

	});
	// Nice scroll to DIVs
	$('.navbar-nav li a').click(function(evt){
		var place = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(place).offset().top
			}, 1200, 'easeInOutCubic');
		pde(evt);
	});
	// Scroll down from Header to Contact section
	$('#header p a').click(function(evt) {
		var place = $(this).attr('href');
		$('html, body').animate({scrollTop: $(place).offset().top}, 1200, 'easeInOutCubic');
		pde(evt);
	});
	// Scroll on Top
	$('.scrolltotop, .navbar-brand').click(function(evt) {
		$('html, body').animate({scrollTop: '0'}, 1200, 'easeInOutCubic');
		pde(evt);
	});
});
// Modal Scrollbar
function setModalMaxHeight(element) {
  this.$element     = $(element);
  var dialogMargin  = $(window).width() > 767 ? 62 : 22;
  var contentHeight = $(window).height() - dialogMargin;
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 2;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 2;
  var maxHeight     = contentHeight - (headerHeight + footerHeight);

  this.$element
    .find('.modal-content').css({
      'overflow': 'hidden'
  });
  
  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}

$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setModalMaxHeight(this);
});

$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setModalMaxHeight($('.modal.in'));
  }
});