(function ($) {
	Drupal.behaviors.cca_theme_blocks_countup = {
		attach: function (context, settings) {
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                prefix: '',
                suffix: ''
            };

            var values = settings.cca_theme_blocks_countup.values;
            var data = [];

            for (var i = 0; i < 3; i++) { // Only allow 3
                var decimal = 2;
                if (values[i].value % 1 === 0) {
                    decimal = 0;
                }

                var domId = "impact-story-data-value-"+i;
                data[i] = new CountUp(domId,0,values[i].value,decimal,1,options);
            }

            function countStart() {
                data[0].start(function() {
                    data[1].start(function() {
                        data[2].start();
                    });
                });

              }

            setTimeout(countStart, 1000);

        }
	}
})(jQuery);