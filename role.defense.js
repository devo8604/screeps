var roleDefense = {
  spawn: function () {
    var newName = "robocop" + Game.time;
    console.log("Spawning new robocop: " + newName);
    Game.spawns["Spawn1"].spawnCreep(
      [TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK],
      newName,
      {
        memory: { role: "robocop" },
      }
    );
  },

  towerDefend: function (roomName) {
    try {
      var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
      if (hostiles.length > 0) {
        var username = hostiles[0].owner.username;
        Game.notify(`User ${username} spotted in room ${roomName}`);
        var towers = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {
          filter: { structureType: STRUCTURE_TOWER },
        });
        towers.forEach((tower) => tower.attack(hostiles[0]));
      }
    } catch {}
  },
};

module.exports = roleDefense;
