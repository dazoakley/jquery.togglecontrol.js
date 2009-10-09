/*
 * jQuery toggleControl 1.1
 * 
 * Copyright (c) 2008 Darren Oakley
 *
 * http://hocuspokus.net/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function($) {
    $.fn.extend({
        toggleControl: function( element, params ) {
            
            var defaults = {
                hide: true,
                speed: "normal",
                event: "click",
                openClass: "toggle-open",
                closeClass: "toggle-close"
            };
            
            var options = $.extend(defaults, params);
            
            return this.each( function( index ) {
                var obj = $(this);
                
                $(this).each( function ( i, toggle ) {
                    
                    if ( options.hide ) {
                        $(toggle).addClass( options.openClass );
                        if ( $(element).attr("display") !== "none" ) {
                          $(element).slideUp( options.speed );
                        }
                    } else {
                        $(toggle).addClass( options.closeClass );
                        if ( $(element).attr("display") === "none" ) {
                          $(element).slideDown( options.speed );
                        }
                    }
                    
                    $(toggle).unbind( options.event );
                    $(toggle).bind( options.event, function(event) {
                        $(toggle).toggleClass( options.openClass );
                        $(toggle).toggleClass( options.closeClass );
                        $(element).eq(index).slideToggle( options.speed );
                    });
                });
                
            });
            
        }
    });
})(jQuery);