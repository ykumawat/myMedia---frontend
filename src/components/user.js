class User {
  constructor(userJSON) {
    this.name = userJSON.name
    this.id = userJSON.id
    this.url = userJSON.url
    this.things = userJSON.things
  }
}
