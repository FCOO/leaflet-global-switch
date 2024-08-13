/****************************************************************************
	leaflet-global-switches.js,

	(c) 2020, FCOO

	https://github.com/FCOO/leaflet-global-switches
	https://github.com/FCOO

    Setting global switches for leaflet

****************************************************************************/
(function (window/*, document, undefined*/) {
	"use strict";

    var modernizrDevice = new window.ModernizrDevice({
        scale    : false,
        modernizr: {}
    });

    /**************************************************
    From Leaflet 1.9.4:
    Global Switches
    Global switches are created for rare cases and generally make Leaflet to not detect a particular browser feature even if it's there.
    You need to set the switch as a global variable to true before including Leaflet on the page, like this:
    <script>L_NO_TOUCH = true;</script>
    <script src="leaflet.js"></script>
    Switch	Description
    L_NO_TOUCH	    Forces Leaflet to not use touch events even if it detects them.
    L_DISABLE_3D	Forces Leaflet to not use hardware-accelerated CSS 3D transforms for positioning (which may cause glitches in some rare environments) even if they're supported.
    **************************************************/

    //Turn off 3D transform for iPads
    window.L_DISABLE_3D = modernizrDevice.ipad();

}(this, document));



