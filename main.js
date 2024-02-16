
var actionStaffing = require("action.checkStaffing")
var actionWork = require("action.work")
var roleDefense = require("role.defense")


module.exports.loop = function () {

  actionWork.work();
  roleDefense.towerDefend(Room.name);
  actionStaffing.check();
};
