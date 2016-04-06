ww.titleScreen = {};

$(function() {

    ww.titleScreen.resetTitleScreen = function() {
        // Title Screen Setup
        var selections = "";
        var addedPlayers = [];

        for(role in ww.Roles) {
            selections += "<p><label for='" + role + "'>" + ww.Roles[role].desc + "</label>"
            selections += "<input type=\"text\" id='" + role + "' value='" + ww.Roles[role].count + "'/></p>" 
        }
        $("#rolesection").html(selections);

        $("input").change(function(){
            var playerCount = 0;
            $("input").each(function() {
                playerCount += parseInt($(this).val());
                ww.Roles[$(this).id()].count = playerCount;
            });
            $("#rolesetdesc").html("玩家人数为" + playerCount);
        });

        $("#rolesetdesc").html("玩家人数为12");
    };

    // React to Play button
    $("#titlePlayButton").click(function() {
        var roomMeta = {'roles': ''}
        roomMeta.roles = ww.Roles
        saveRoomInFirebase(roomMeta)
        return false;
    });

});

