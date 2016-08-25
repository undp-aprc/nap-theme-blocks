(function ($) {
	Drupal.behaviors.cca_theme_blocks_map_layers = {
		attach: function (context, settings) {

            $('.bef-checkboxes', context).find('input[type=checkbox]').each(function() {
                if($(this).prop('checked')) {
                    var id = $(this).prop('value');
                    var targetId = $('#impact-story-select-icon-'+id);
                    if (targetId.hasClass('inactive')) {
                        targetId.removeClass('inactive', context);
                    } else {
                        targetId.addClass('inactive', context);
                    }
                }
            });


            $('.impact-story-select-icon').on('click', function() {
                $(this).toggleClass('inactive');
                var dataId = $(this).data('id');
                var targetId = $('#edit-field-impact-theme-target-id-'+dataId);
                if (targetId.prop('checked')) {
                    targetId.removeProp('checked', context);
                } else {
                    targetId.prop('checked','checked', context);
                }
                $('.ctools-auto-submit-click').click();
            });

        }
	}
})(jQuery);