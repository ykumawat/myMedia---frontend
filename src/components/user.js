class User {
  constructor(userJSON) {
    this.name = userJSON.name
    this.id = userJSON.id
    this.things = userJSON.things
  }
}
