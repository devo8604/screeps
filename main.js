
var actionStaffing = require("action.checkStaffing")
var actionWork = require("action.work")
var roleDefense = require("role.defense")

const serviceTick = 5
var loopCounter = 0

module.exports.loop = function () {

  actionWork.work();
  roleDefense.run(Room.name);

  if (loopCounter == serviceTick) {
    console.log("Check Staffing.")
    actionStaffing.check();
    loopCounter = 0
  }

  loopCounter += 1

};
