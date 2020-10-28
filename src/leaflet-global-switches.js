/****************************************************************************
	leaflet-global-switches.js,

	(c) 2020, FCOO

	https://github.com/FCOO/leaflet-global-switches
	https://github.com/FCOO

    Setting global switches for leaflet

****************************************************************************/
(function (window/*, document, undefined*/) {
	"use strict";

    //Detect Operation System. Possible values = "windows_phone", "android", "ios", null
    var os = function() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "windows_phone";
        }

        if (/android/i.test(userAgent)) {
            return "android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "ios";
        }

        return null;//"unknown";
    }(),
    //To use later: is_windows_phone = (os == "windows_phone"),
    //To use later: is_android = (os == "android"),
    is_ios = (os == "ios");

    /**************************************************
    Global Switches for Leaflet
    From Leaflet 1.2.0:
    Switch	        Description
    L_NO_TOUCH	    Forces Leaflet to not use touch events even if it detects them.
    L_DISABLE_3D	Forces Leaflet to not use hardware-accelerated CSS 3D transforms for positioning (which may cause glitches in some rare environments) even if they're supported.
    **************************************************/

    //Turn off 3D transform for ios
    window.L_DISABLE_3D = is_ios;


}(this, document));



