class User {
  constructor(userJSON) {
    this.name = userJSON.name
    this.id = userJSON.id
  }

  // render() {
  //   return `<li data-userid='${this.id}' data-props='${JSON.stringify(this)}' class='thing-element'>${this.title} <i data-action='delete-thing' class="em em-scream_cat"></i></li>`
  // }
}
