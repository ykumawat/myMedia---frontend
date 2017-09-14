class UsersThings {
  constructor() {
    this.usersthings = []
    this.adapter = new UsersAdapter()
    this.fetchAndLoadUsersThings()
    this.render()
  }

  fetchAndLoadUsersThings() {
    this.adapter.getUserThings()
    .then( userThingsJSON => userThingsJSON.forEach( userThing => this.usersthings.push( new UserThing(userThing) )))
      // .then( this.render.bind(this) )
      .catch( (e) => console.log(e) )
      //console.log(this)
  }

  render() {

  }



}
