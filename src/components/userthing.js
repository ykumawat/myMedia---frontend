class UserThing {
  constructor(userThingJSON) {
    this.id = userThingJSON.id
    this.userID = userThingJSON.user_id
    this.thingId = userThingJSON.thing_id
  }
}
