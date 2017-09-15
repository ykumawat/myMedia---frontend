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
    this.songsHeading = document.getElementById('heading-songs')
    this.podcastsHeading = document.getElementById('heading-podcasts')
    this.omegaContainer = document.getElementById('omega-container')
    //this.thingsForm.addEventListener('submit',this.handleAddThing.bind(this))
    //this.thingsNode.addEventListener('click',this.handleDeleteThing.bind(this))
    this.allMediaDIv.addEventListener('click', this.addToFaves.bind(this))
    // this.favesContainer.addEventListener('click', this.deleteFromFaves.bind(this))
    this.thingInput.addEventListener('keyup', this.filterThings.bind(this))
    this.omegaContainer.addEventListener('hover', this.renderMoreInfo.bind(this))
  }

  findOrCreateUser() {
    event.preventDefault()
    let username = this.loginInput.value

    // see if the username exists in the database, if not, alert user and create new user in database
  }

  renderMoreInfo(){
    console.log(event)
  }



  addToFaves() {
    var foundThing
    var favContainer = this.favesContainer
    var adapter = this.adapter
    if(event.target.className === "em em-heart"){
      foundThing = this.things.find(function(el){
        return el.id.toString() === event.target.dataset.id.toString()
      })
      if(app.user.things.length > 0 ){
        // app.user.things.forEach(function(thing){
          let newFound = app.user.things.find(function(thing){
          return thing.id.toString() === foundThing.id.toString()
            })
          if(newFound === undefined){
            favContainer.innerHTML += `
            <div class="ui segment">
              <div data-content="popup">${foundThing.title} 
                <button id="button-fave" data-id= ${foundThing.id} class= "em em-broken_heart"></button>
              </div>
              <p>Artist: ${foundThing.creator}</p>
            </div>`
            app.user.things.push(foundThing)
            adapter.addThingsToUser(foundThing)

          }else{
            alert("You already have that item saved to your favorites!")

          }
        }else{
      this.favesContainer.innerHTML += `
            <div class="ui segment">
              <div data-content="popup">${foundThing.title} 
                <button id="button-fave" data-id= ${foundThing.id} class= "em em-broken_heart"></button>
              </div>
              <p>Artist: ${foundThing.creator}</p>
            </div>`
      // console.log("hello")
      app.user.things.push(foundThing)
      this.adapter.addThingsToUser(foundThing)
      }
    }

  }

  filterThings(){
    this.songsNode.innerHTML = ""
    this.podcastsNode.innerHTML = ""
    if (event.target.value !== "") {
      this.songsHeading.innerHTML = "Songs"
      this.podcastsHeading.innerHTML = "Podcasts"
    } else {
      this.songsHeading.innerHTML = ""
      this.podcastsHeading.innerHTML = ""
    }
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
        this.songsNode.innerHTML += `
        <div class="ui segment">
          <div data-content="popup">${thing.title} 
            <button id="button-fave" data-id= ${thing.id} class= "em em-heart"></button>
          </div>
          <p>Artist: ${thing.creator}</p>
        </div>`
        
      } else if(thing.kind.includes("podcast")) {
        this.podcastsNode.innerHTML += `
        <div class="ui segment">
          <div data-content="popup">${thing.title} 
            <button id="button-fave" data-id= ${thing.id} class= "em em-heart"></button>
          </div>
          <p>Artist: ${thing.creator}</p>
        </div>`
      } else {
        this.thingsNode.innerHTML += `
        <div class="ui segment">
          <div data-content="popup">${thing.title} 
            <button id="button-fave" data-id= ${thing.id} class= "em em-heart"></button>
          </div>
          <p>Artist: ${thing.creator}</p>
        </div>`
      }
    })
    // return a new string of HTML rendered to a certain point on the page

  }




}

// `
//         <li id= "listItem">${thing.title}<div data-content="This popup is very long but wont escape the segment it is placed in">${thing.title}</div>
//           <p>${thing.kind}</p>
//         </div>
//         <button id="button-fave" data-id= ${thing.id} class= "em em-heart"></button></li>`


