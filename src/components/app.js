class App {
  constructor() {
    this.things = new Things()
    // this.usersthings = new UsersThings()
    this.adapter = new UsersAdapter()
    this.thingAdapter = new ThingsAdapter()
    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.userProfile = document.getElementById('user-profile')
    this.loginForm = document.getElementById('user-login')
    this.loginInput = document.getElementById('user-name')
    this.favesContainer = document.getElementById('favez-container')
    this.favezHeading = document.getElementById('favez-heading')
    this.loginForm.addEventListener('submit', this.fetchAndLoadUser.bind(this))
    this.favesContainer.addEventListener('click',this.deleteFromFaves.bind(this))
  }

  fetchAndLoadUser() {
    event.preventDefault()
    let username = this.loginInput.value
     this.adapter.getUser(username)
     .then( userJSON => {
       this.user = new User(userJSON)
       this.findOrCreateUser(this.user)

       if(this.user !== undefined){
        this.userProfile.innerHTML += `
        <div class="ui card">
          <div class="image">
            <img src="${this.user.url}">
          </div>
          <div class="content">
            <a class="header">${this.user.name}</a>
          </div>
          <div class="extra content">
          </div>
        </div>`

      }
      })
       // .then( this.render.bind(this) )
       .catch( (e) => this.findOrCreateUser(this.user) )


       //console.log(this)
      //  this.findOrCreateUser(this.user)
   }

  findOrCreateUser(user) {
    if (!this.user){
      alert ("Sorry, we couldn't find you in our database. We'll make a new user profile now!")
    } else {
      alert(`Welcome, ${this.user.name}!`)
      //put in function that loads all of that users things into favs container.
      this.addUsersThingsToFavs()
    }
    this.favezHeading.innerHTML = "My Faves"
    // see if the username exists in the database, if not, alert user and create new user in database

  }

  addUsersThingsToFavs(){
    console.log(this.user.things)

    let userThingsArr = this.user.things
    let favesContainer = document.getElementById('favez-container')

    userThingsArr.forEach(function(instance){
      favesContainer.innerHTML += `
            <div class="ui segment">
              <div data-content="popup">${instance.title}
                <button id="button-fave" data-id= ${instance.id} class= "em em-broken_heart"></button>
              </div>
              <p>Artist: ${instance.creator}</p>
            </div>`
    })
    // const template =
    // this.favesContainer.innerHTML += `<ul>${foundThing.title}<button id="button-unfave" data-id= ${foundThing.id} class= "em em-broken_heart"></button></ul>`
  }

  deleteFromFaves(){
    console.log(event)
    if(event.target.className === "em em-broken_heart"){
      console.log("u hit delete button")
      let thingID = event.target.dataset.id
      event.target.parentElement.parentElement.remove()

      let foundThing = this.user.things.find(function(el){
        return el.id.toString() === event.target.dataset.id.toString()
      })

      let index = this.user.things.indexOf(foundThing);
      this.user.things.splice(index, 1)
      this.user.things
      this.thingAdapter.deleteThing(thingID)
      // this.user.things
    }
  }

}
