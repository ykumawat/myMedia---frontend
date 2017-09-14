class App {
  constructor() {
    this.things = new Things()
    this.usersthings = new UsersThings()
    this.adapter = new UsersAdapter()
    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.loginForm = document.getElementById('user-login')
    this.loginInput = document.getElementById('user-name')
    this.loginForm.addEventListener('submit', this.fetchAndLoadUser.bind(this))
  }

  fetchAndLoadUser() {
    event.preventDefault()
    let username = this.loginInput.value
     this.adapter.getUser(username)
     .then( userJSON => {
       this.user = new User(userJSON)
       this.findOrCreateUser(this.user)
      })
       // .then( this.render.bind(this) )
       .catch( (e) => console.log(e) )
       //console.log(this)
      //  this.findOrCreateUser(this.user)
   }

  findOrCreateUser(user) {
    alert(`Welcome, ${this.user.name}!`)
    // see if the username exists in the database, if not, alert user and create new user in database

  }

}
