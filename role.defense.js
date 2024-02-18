var roleDefense = {

  spawn: function () {
    var newName = "robocop" + Game.time;
    console.log("Spawning new robocop: " + newName);
    Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, {
      memory: { role: "robocop" },
    });
  },


  run: function (roomName) {
    var myTowers = [];

    for (var myRoom in Game.rooms) {
      myTowers.push(
        Game.rooms[myRoom].find(FIND_MY_STRUCTURES, {
          filter: (s) => s.structureType === STRUCTURE_TOWER,
        })
      );
    }

    for (const tower of myTowers) {
      try {
        const closestHostile =
          tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
      } catch {}

      // Find the closest damaged wall
      try {
        var closestDamagedWall = tower.pos.findClosestByRange(STRUCTURE_WALL, {
          filter: (structure) => structure.hits < structure.hitsMax,
        });
      } catch {
        console.log("No damaged walls found.")
      }
      // Find the closest damaged rampart
      try {
        var closestDamagedRampart = tower.pos.findClosestByRange(
          STRUCTURE_RAMPART,
          {
            filter: (structure) => structure.hits < structure.hitsMax,
          }
        );
      } catch {}

      // Find the closest damaged structure (excluding walls and ramparts)
      try {
        var closestDamagedStructure = tower.pos.findClosestByRange(
          FIND_STRUCTURES,
          {
            filter: (structure) => structure.hits < structure.hitsMax,
          }
        );
      } catch {}

      try {
        if (closestHostile) {
          tower.attack(closestHostile);
        } else if (closestDamagedWall) {
          console.log("hello");
          tower.repair(closestDamagedWall);
        } else if (closestDamagedRampart) {
          tower.repair(closestDamagedRampart);
        } else if (closestDamagedStructure) {
          tower.repair(closestDamagedStructure);
        }
      } catch {}
    }
  },
};

module.exports = roleDefense;
