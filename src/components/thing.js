class Thing {
  constructor(thingJSON) {
    this.title = thingJSON.title
    this.id = thingJSON.id
    this.kind = thingJSON.kind
    this.genre = thingJSON.genre
    this.creator = thingJSON.creator
  }

  // render() {
  //   return `<li data-thingid='${this.id}' data-props='${JSON.stringify(this)}' class='thing-element'>${this.title} <i data-action='delete-thing' class="em em-scream_cat"></i></li>`
  // }
}
