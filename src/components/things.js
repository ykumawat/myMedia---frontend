class Things {
  constructor() {
    //console.log(this)
    this.things = []
    // this.myThings = []
    this.initBindingsAndEventListeners()
    this.adapter = new ThingsAdapter()
    this.fetchAndLoadThings()
  }

  // static loadCurrentUser(user) {
  //   this.currentUser = user
  //   //use this.currentUser.things to access the current user's things associations
  // }


  initBindingsAndEventListeners() {
    //console.log(this)

    this.thingsForm = document.getElementById('new-thing-form')
    this.thingInput = document.getElementById('new-thing-title')
    this.thingsNode = document.getElementById('things-container')
    this.songsNode = document.getElementById('songs-container')
    this.podcastsNode = document.getElementById('podcasts-container')
    this.allMediaDIv = document.getElementById('all-media')
    this.addFavButton = document.getElementById('button-fave')
    this.favesContainer = document.getElementById('favez-container')
    //this.thingsForm.addEventListener('submit',this.handleAddThing.bind(this))
    //this.thingsNode.addEventListener('click',this.handleDeleteThing.bind(this))

    this.allMediaDIv.addEventListener('click', this.addToFaves.bind(this))
    this.favesContainer.addEventListener('click', this.deleteFromFaves.bind(this))
    this.thingInput.addEventListener('keyup', this.filterThings.bind(this))
  }

  findOrCreateUser() {
    event.preventDefault()
    let username = this.loginInput.value

    // see if the username exists in the database, if not, alert user and create new user in database
  }

  deleteFromFaves(){
    if(event.target.className === "em em-broken_heart"){
      console.log("what it is")
    }

  }

  addToFaves() {
    var foundThing
    if(event.target.className === "em em-heart"){
      foundThing = this.things.find(function(el){

        return el.id.toString() === event.target.dataset.id.toString()
      })
      this.favesContainer.innerHTML += `<ul>${foundThing.title}<button id="button-unfave" data-id= ${foundThing.id} class= "em em-broken_heart"></button></ul>`
      // console.log("hello")
    }
    console.log(app.user);
    //debugger
  }

  filterThings(){
    this.songsNode.innerHTML = ""
    this.podcastsNode.innerHTML = ""
    const searchInput = event.target.value
    // console.log(this.things)
    //let foundArr = []
    const filteredArray = this.things.filter(function(instance){
        for(var key in instance){
              if(instance[key].toString().toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== ""){
                  return instance
              }
            }
        })
      this.renderFilteredArray(filteredArray)
    }

  fetchAndLoadThings() {

    this.adapter.getThings()
    .then( thingsJSON => thingsJSON.forEach( thing => this.things.push( new Thing(thing) )))
      // .then( this.render.bind(this) )
      .catch( (e) => console.log(e) )
      //console.log(this)
  }

  renderFilteredArray(something) {
    //console.log(this)
    something.map(thing => {
    //console.log(this)
      if (thing.kind.includes("song")) {
        this.songsNode.innerHTML = `<ul>${thing.title}<button id="button-fave" data-id= ${thing.id} class= "em em-heart"></button></ul>`
      } else if(thing.kind.includes("podcast")) {
        this.podcastsNode.innerHTML = `<ul>${thing.title}<button id="button-fave" data-id= ${thing.id} class= "em em-heart"></button></ul>`
      } else {
        this.thingsNode.innerHTML = `<ul>${thing.title}<button id="button-fave" data-id= ${thing.id} class= "em em-heart"></button></ul>`
      }
    })
    // return a new string of HTML rendered to a certain point on the page

  }


}





  // handleAddThing() {
  //   //console.log(this)
  //   event.preventDefault()
  //   const title = this.thingInput.value
  //   this.adapter.createThing(title)
  //   .then( (thingJSON) => this.things.push(new Thing(thingJSON)) )
  //   .then(  this.render.bind(this) )
  //   .then( () => this.thingInput.value = '' )
  // }

  // handleDeleteThing() {
  //   if (event.target.dataset.action === 'delete-thing' && event.target.parentElement.classList.contains("thing-element")) {
  //     const thingId = event.target.parentElement.dataset.thingid
  //     this.adapter.deleteThing(thingId)
  //     .then( resp => this.removeDeletedThing(resp) )
  //   }
  //   //console.log(this)
  // }

  // removeDeletedThing(deleteResponse) {
  //   this.things = this.things.filter( thing => thing.id !== deleteResponse.thingId )
  //   this.render()
  //   //console.log(this)
  // }

  // thingsHTML() {
  //   //console.log(this)
  //   return this.things.map( thing => thing.render() ).join('')
  // }

  // render() {
  //   this.thingsNode.innerHTML = `<ul>${this.thingsHTML()}</ul>`
  // }
