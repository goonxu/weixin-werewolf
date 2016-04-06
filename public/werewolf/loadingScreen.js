ww.loadingScreen = {};

$(function() {

    // Show that we're loading
    $.mobile.showPageLoadingMsg();
    
    // General setup
    $.mobile.defaultPageTransition = "slide";

    $(window).load(function() {

            $.mobile.hidePageLoadingMsg();

            // Title Screen Setup
            ww.titleScreen.resetTitleScreen();
            
            changeScreens("#titleScreen", "fade");
    });
});
