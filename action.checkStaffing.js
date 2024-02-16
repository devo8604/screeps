var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
var roleMaintainer = require("role.maintainer");
var roleDefender = require("role.defense")

var checkStaffing = {
  check: function () {
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
    }

    if (upgraders.length < 5) {
      roleUpgrader.spawn();
    }

    if (builders.length < 2) {
      roleBuilder.spawn();
    }

    if (maintainers.length < 5) {
      roleMaintainer.spawn();
    }

    if (robocops.length < 5) {
      roleDefender.spawn();
    }
  },
};

module.exports = checkStaffing;
