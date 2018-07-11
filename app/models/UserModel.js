var BaseModel = require('./BaseModel')

var UserModel = BaseModel.Model.extend({
  tableName: 'users'
})
module.exports = UserModel
