class UserThing {
  constructor(userThingJSON) {
    this.id = userThingJSON.id
    this.userID = userThingJSON.user_id
    this.thingId = userThingJSON.thing_id
    //add constants and event listener to button and user name input
    //use function to
  }

  handleAddUserThing() {
    //console.log(this)
    event.preventDefault()
    const title = this.thingInput.value
    this.adapter.createThing(title)
    .then( (thingJSON) => this.things.push(new Thing(thingJSON)) )
    .then(  this.render.bind(this) )
    .then( () => this.thingInput.value = '' )
  }

  //load user's likes based on associations

}
