var UserService = require('../../services/UserService')
var UserResponse = require('../../responses/UserResponse')
exports.index = async function (req, res) {
  let users = await UserService.getUsers()
  res.json(UserResponse.updateListWithModel(users))
}
