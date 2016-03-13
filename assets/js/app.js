!(function( $ ) {

    var hwr = function() {

        this.listen();
        this.redirect = false;

    }

    hwr.prototype = {

    	constructor: hwr,


        toggleDownloadOptions: function() {

            $( '.tm-downloads' ).toggle();

            if ( $( '.tm-downloads' ).is( ':visible' ) ) {
                $( '[data-tm-downloads]' ).find( 'svg').removeClass( 'tm-down-icon' ).addClass( 'tm-up-icon' );
            } else {
                $( '[data-tm-downloads]' ).find( 'i').removeClass( 'tm-up-icon' ).addClass( 'tm-down-icon' );
            }

        },


        listen: function() {

            var $this = this;


            $( document ).on( 'click', '[data-tm-downloads]', function( e ) {

                e.preventDefault();

                $this.toggleDownloadOptions();

            } );

            // Next and previous keyboard shortcuts
            $(document).keydown(function(e) {

                var url = false;

                if (e.which == 37) {  // left arrow key code

                    url = $('a.tm-prev').attr('href');

                }

                else if (e.which == 39) {  // right arrow key code

                    url = $('a.tm-next').attr('href');

                }

                if (url) {

                    window.location = url;

                }

            });

        }

    };

    // Fire thembutler js.
    $( document ).ready( function() {

        new hwr();

    });

})( window.jQuery );
