ww.loadingScreen = {};

$(function() {

    // Show that we're loading
    $.mobile.showPageLoadingMsg();
    
    // General setup
    $.mobile.defaultPageTransition = "slide";

    $(window).load(function() {
        var loadPage = wwgame.loadState();

            $.mobile.hidePageLoadingMsg();

            // Title Screen Setup
            ww.titleScreen.resetTitleScreen();
    });
});
