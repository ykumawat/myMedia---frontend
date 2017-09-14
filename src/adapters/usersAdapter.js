class UsersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users'
  }

  getUser(username) {
    return fetch(this.baseUrl + "?q=" + username ).then(response => response.json())
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
