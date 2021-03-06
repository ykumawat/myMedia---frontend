class ThingsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/things'
    this.userThingsUrl = 'http://localhost:3000/api/v1/users'
  }

  getThings() {
    return fetch(this.baseUrl).then(response => response.json())
  }

    addThingsToUser(thing) {
      const editThingsForUser = `${this.userThingsUrl}/${app.user.id}`
      const userThingsAddParams = {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({"things": thing})
      }
      return fetch(editThingsForUser, userThingsAddParams).then(response => response.json())
    }

  deleteThing(thingId) {
    const deleteUrl = `${this.userThingsUrl}/${app.user.id}`
    const thingDeleteParams = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({"thingid": thingId})
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


// products = Product.find(x)
// special = products.specials.find(y)
//
// products.specials.delete(special)
