class BaseRepository {

  constructor () {
    this.BASE_URL = window.app.apiUrl
    this.PATH = '/'
  }

  index (offset, limit, order, direction, searchWord = '', params = {}) {
    return this.get(this.PATH, Object.assign({
      'offset': offset || 0,
      'limit': limit || 0,
      'direction': direction || 'id',
      'order': order || 'asc',
      'query': searchWord || ''
    }, params))
  }

  show (id, params = {}) {
    return this.get(this.PATH + '/' + id, params)
  }

  store (params = {}) {
    return this.post(this.PATH, params)
  }

  update (id, params = {}) {
    return this.put(this.PATH + '/' + id, params)
  }

  destroy (id, params = {}) {
    return this.delete(this.PATH + '/' + id, params)
  }

  get (url, params = {}) {
    return this.request('GET', url, params)
  }

  post (url, params = {}) {
    return this.request('POST', url, params)
  }

  put (url, params = {}) {
    params['_method'] = 'put'
    return this.request('POST', url, params)
  }

  delete (url, params = {}) {
    params['_method'] = 'delete'
    return this.request('POST', url, params)
  }

  request (method, url, params = {}) {
    let realUrl = this.BASE_URL + url
    let formData = new FormData()
    if (method === 'GET' || method === 'HEAD') {
      let query = Object
        .keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')
      realUrl = realUrl + '?' + query

      return fetch(realUrl, {
        credentials: 'same-origin',
        method: method
      })
        .then(response => response.json())
        .catch(error => console.log('Error', error))
    }

    if (params instanceof FormData) {
      formData = params
    } else {
      Object
        .keys(params)
        .forEach(function (key) {
          formData.append(key, params[key])
        })
    }
    formData.append('_token', token)
    return fetch(realUrl, {
      credentials: 'same-origin',
      method: method,
      body: formData
    })
      .then(response => response.json())
      .catch(error => console.log('Error', error))
  }
}

export default BaseRepository
