class UsersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users'
  }

  getUsers() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  deleteUser(userId) {
    const deleteUrl = `${this.baseUrl}/${userId}`
    const userDeleteParams = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    }
    return fetch(deleteUrl, userDeleteParams).then(response => response.json())
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

}
