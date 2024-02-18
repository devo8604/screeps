var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
var roleMaintainer = require("role.maintainer");
var roleDefender = require("role.defense");

var checkStaffing = {
  check: function () {
    // Return early if spawn energy storage not full
    if (Game.spawns["Spawn1"].spawning) {
      return;
    }

    // Check number of creeps, create more
    var harvesters = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "harvester"
    );
    var builders = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "builder"
    );
    var upgraders = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "upgrader"
    );

    var maintainers = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "maintainer"
    );

    var robocops = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == "robocop"
    );

    if (harvesters.length < 3) {
      roleHarvester.spawn();
    } else if (upgraders.length < 5) {
      roleUpgrader.spawn();
    } else if (builders.length < 2) {
      roleBuilder.spawn();
    } else if (maintainers.length < 7) {
      roleMaintainer.spawn();
    } else if (robocops.length < 5) {
      roleDefender.spawn();
    }
  },
};

module.exports = checkStaffing;
