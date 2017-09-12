class Things {
  constructor() {
    this.things = []
    this.initBindingsAndEventListeners()
    this.adapter = new ThingsAdapter()
    this.fetchAndLoadThings()
  }

  initBindingsAndEventListeners() {
    this.thingsForm = document.getElementById('new-thing-form')
    this.thingInput = document.getElementById('new-thing-body')
    this.thingsNode = document.getElementById('things-container')
    this.thingsForm.addEventListener('submit',this.handleAddThing.bind(this))
    this.thingsNode.addEventListener('click',this.handleDeleteThing.bind(this))
  }

  fetchAndLoadThings() {
    this.adapter.getThings()
    .then( thingsJSON => thingsJSON.forEach( thing => this.things.push( new Thing(thing) )))
      .then( this.render.bind(this) )
      .catch( () => alert('The server does not appear to be running') )
  }

  handleAddThing() {
    event.preventDefault()
    const body = this.thingInput.value
    this.adapter.createThing(body)
    .then( (thingJSON) => this.things.push(new Thing(thingJSON)) )
    .then(  this.render.bind(this) )
    .then( () => this.thingInput.value = '' )
  }

  handleDeleteThing() {
    if (event.target.dataset.action === 'delete-thing' && event.target.parentElement.classList.contains("thing-element")) {
      const thingId = event.target.parentElement.dataset.thingid
      this.adapter.deleteThing(thingId)
      .then( resp => this.removeDeletedThing(resp) )
    }
  }

  removeDeletedThing(deleteResponse) {
    this.things = this.things.filter( thing => thing.id !== deleteResponse.thingId )
    this.render()
  }

  thingsHTML() {
    return this.things.map( thing => thing.render() ).join('')
  }

  render() {
    this.thingsNode.innerHTML = `<ul>${this.thingsHTML()}</ul>`
  }
}
