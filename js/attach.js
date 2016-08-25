(function ($) {
	Drupal.behaviors.cca_theme_blocks = {
		attach: function (context, settings) {
			
			// Initialise the carousel
			$('#section-what-we-do .slidesjs').slidesjs({
				width:940,
                height:250,
                play: {
					interval:5000,
					auto:true
				},
				effect: {
					slide: {
						speed:2000
					}
				},
				callback: {
					loaded: function(number) {
						$('#section-what-we-do .slidesjs').css('visibility','visible');
						$('#section-what-we-do .slidesjs').css('height','auto');
					}
				}
			});

			$('#section-videos .slidesjs').slidesjs({
				width:940,
				height:300,
				play: {
					interval:5000,
					auto:false
				},
				effect: {
					slide: {
						speed:2000
					}
				}
			});

            $('.page-nap-gsp-home .slidesjs').slidesjs({
				height:100,
                start: 1,
                navigation: {
                    active: false
                },
                pagination: {
                    active: false
                },
                play: {
                    active: false,
                    effect: "fade",
                    interval: 5000,
                    auto: true
                },
                callback: {
                    loaded: function(number) {
                        $('#block-cca-theme-blocks-nap-slides .slidesjs').css('visibility','visible');
                        $('#block-cca-theme-blocks-nap-slides .slidesjs').css('height','auto');
                    }
                }
            });
		}	
	}
})(jQuery);