class UsersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users'
    this.userThingsUrl = 'http://localhost:3000/api/v1/users/showusersthings'
  }

  getUsers() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  getUserThings() {
    return fetch(this.userThingsUrl).then(response => response.json())
  }

  deleteUserThings(userThingId) {
    const deleteUrl = `${this.userThingsUrl}/${userThingId}`
    const userThingsDeleteParams = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    }
    return fetch(deleteUrl, userThingsDeleteParams).then(response => response.json())
  }

  createUser(body) {
    const userCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({body})
    }
    return fetch(this.baseUrl, userCreateParams).then(resp => resp.json())
  }

  createUserThings(body) {
    const userThingsCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({body})
    }
    return fetch(this.userThingsUrl, userThingsCreateParams).then(resp => resp.json())
  }

}
