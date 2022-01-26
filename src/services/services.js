export default class DiaToolServices {
  constructor() {
    this.url = require('../assets/backend-hosts.json')
  }

  getHostname() {
    return this.url.hostname
  }

  getProtocol() {
    return this.url.protocol
  }

  getUrl() {
    return this.getProtocol() + '://' + this.getHostname()
  }

  getUrlPing() {
    return this.getUrl() + '/api/v1/system/ping'
  }

  getUrlUpload() {
    return this.getUrl() + '/api/v1/upload'
  }

  getUrlPic1(id) {
    return this.getUrl() + '/api/v1/' + id + '/pic1'
  }

  getUrlPic2(id) {
    return this.getUrl() + '/api/v1/' + id + '/pic2'
  }

}