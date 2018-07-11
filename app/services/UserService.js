var UserModel = require('../models/UserModel')

exports.getUsers = function (){
  return UserModel.fetchAll().then((data) => {
    return data.length > 0 ? data.serialize() : []
  }).catch((err) => console.log(err))
}