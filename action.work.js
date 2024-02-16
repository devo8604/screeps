var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
const roleMaintainer = require("./role.maintainer");

var actionWork = {
  work: function () {
    for (var name in Game.creeps) {
      var creep = Game.creeps[name];
      if (creep.memory.role == "harvester") {
        roleHarvester.run(creep);
      }
      if (creep.memory.role == "upgrader") {
        roleUpgrader.run(creep);
      }
      if (creep.memory.role == "builder") {
        roleBuilder.run(creep);
      }
      if (creep.memory.role == "maintainer") {
        roleMaintainer.run(creep);
      }
    }
  },
};

module.exports = actionWork;
