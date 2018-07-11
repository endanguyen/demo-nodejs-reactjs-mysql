var _ = require('lodash')

var Response = {
  columes: {},
  toObject: function (data) {
    var dataReturn = {}
    console.log(this.columes)
    for (let key in this.columes) {
      if (data[key]) {
        dataReturn[key] = data[key]
      } else {
        dataReturn[key] = this.columes[key] || ''
      }
    }
    return dataReturn
  },
  updateWithModel: function (data) {
    return this.toObject(data)
  },
  updateListWithModel: function (data) {
    dataReturn = []
    _.forEach(data, (value) => {
      console.log(value)
      dataReturn.push(this.toObject(value))
    })
    return dataReturn
  }
}

module.exports = Response
