var roleMaintainer = {
  spawn: function () {
    var newName = "maintainer" + Game.time;
    console.log("Spawning new maintainer: " + newName);
    Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, {
      memory: { role: "maintainer" },
    });
  },

  /** @param {Creep} creep **/
  run: function (creep) {
    if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.building = false;
      creep.say("🔄 harvest");
    }
    if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
      creep.memory.building = true;
      creep.say("🚧 build");
    }

    // Repair Ramparts
    if (creep.memory.building) {
      var ramparts = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (
            structure.structureType == STRUCTURE_RAMPART &&
            structure.hits < structure.hitsMax
          );
        },
      });
      if (ramparts.length) {
        if (creep.repair(ramparts[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(ramparts[0], {
            visualizePathStyle: { stroke: "#ffffff" },
          });
        }
      }
    } else {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
      }
    }
  },
};

module.exports = roleMaintainer;
