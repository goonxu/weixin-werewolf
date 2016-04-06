var ww = {};

(function(){

    ww.Roles = {
        Villager: {desc:"村民", count:4, nightActionReq:0, team:"Good", imgClass:"bgRoleVillager"},
        Werewolf: {desc:"狼人", count:4, nightActionReq:1, team:"Evil", imgClass:"bgRoleWerewolf"},
        Seer: {desc:"预言家", count:1, nightActionReq:1, team:"Good", imgClass:"bgRoleSeer"},
        Hunter: {desc:"猎人", count:1, nightActionReq:0, team:"Good", imgClass:"bgRoleHunter"},
        Sorcerer: {desc:"女巫", count:1, nightActionReq:1, team:"Good", imgClass:"bgRoleSorceror"},
    };
    ww.Roles.Seer.viewFor = ww.Roles.Werewolf;

    ww.Attributes = {
        Brutal: {name:"Brutal", desc:"Choose someone to die when you die."},
        Tough: {name:"Tough", desc:"Survive the first kill attempt."},
        Cultist: {name:"Cultist", desc:"Know who all of the wolves are."},
    };
    
    ww.N0Actions = {
        Kill: {desc:"Kills a player N0."},
        ChooseView: {desc:"Chooses a player to view N0."},
        RandomNegative: {desc:"Gets a random negative N0."},
        Random: {desc:"Gets a random N0."}
    };

    ww.DeathReveal = {
        None: {desc:"Nothing is revealed on death."},
        Team: {desc:"Only a player's team is revealed on death."},
        Role: {desc:"Role but no attributes are revealed on death."},
        Full: {desc:"Full role and attributes are revealed on death."}
    };
})();

