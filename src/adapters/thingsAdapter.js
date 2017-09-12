class ThingsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/things'
  }

  getThings() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  deleteThing(thingId) {
    const deleteUrl = `${this.baseUrl}/${thingId}`
    const thingDeleteParams = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    }
    return fetch(deleteUrl, thingDeleteParams).then(response => response.json())
  }

  createThing(body) {
    const thingCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({body})
    }
    return fetch(this.baseUrl, thingCreateParams).then(resp => resp.json())
  }

}
