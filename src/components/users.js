// copy formatting of things.js
class Users {
  constructor () {
    this.users = []
    this.adapter = new UsersAdapter()
    this.fetchAndLoadUsers()
    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.loginForm = document.getElementById('user-login')
    this.loginInput = document.getElementById('user-name')
    this.loginForm.addEventListener('submit', this.findOrCreateUser.bind(this))
  }

  fetchAndLoadUsers() {
    this.adapter.getUsers()
    .then( usersJSON => usersJSON.forEach( user => this.users.push( new User(user) )))
      // .then( this.render.bind(this) )
      .catch( (e) => console.log(e) )
      //console.log(this)
  }

  findOrCreateUser() {
    event.preventDefault()
    let username = this.loginInput.value
    var foundUser = this.users.find(function(el) {
      return el.name.toLowerCase() === username.toLowerCase()
    })

    // see if the username exists in the database, if not, alert user and create new user in database
  }


}
