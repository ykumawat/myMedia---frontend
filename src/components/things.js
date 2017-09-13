class Things {
  constructor() {
    //console.log(this)
    this.things = []
    this.initBindingsAndEventListeners()
    this.adapter = new ThingsAdapter()
    this.fetchAndLoadThings()
    
  }


  initBindingsAndEventListeners() {
    //console.log(this)
    this.thingsForm = document.getElementById('new-thing-form')
    this.thingInput = document.getElementById('new-thing-title')
    this.thingsNode = document.getElementById('things-container')
    this.songsNode = document.getElementById('songs-container')
    this.podcastsNode = document.getElementById('podcasts-container')
    //this.thingsForm.addEventListener('submit',this.handleAddThing.bind(this))
    //this.thingsNode.addEventListener('click',this.handleDeleteThing.bind(this))
    this.thingInput.addEventListener('keyup', this.filterThings.bind(this))
  }



  filterThings(){
    const searchInput = event.target.value

    console.log(this.things)
    //let foundArr = []
    
    
    const filteredArray = this.things.filter(function(instance){
        
        for(var key in instance){
              if(instance[key].toString().includes(searchInput)){
                  //console.log(instance[key])
                  //foundArr.push(instance)
                  return instance
              }  
            }
            // return foundArr

        })
      

      // const htmlTemplate = filteredArray.map(function(instance){

      // 
      // debugger
      renderFilteredArray(filteredArray)


    }

    
    
    
    

    //this = whatever we typed in our form because we bound it on line 19
    




  fetchAndLoadThings() {
    
    this.adapter.getThings()
    .then( thingsJSON => thingsJSON.forEach( thing => this.things.push( new Thing(thing) )))
      // .then( this.render.bind(this) )
      .catch( (e) => console.log(e) )
      //console.log(this)
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

  renderFilteredArray(something) {
    debugger
    // let objs = this
    //console.log(this)
    something.map(function(thing) {
    //console.log(this)
      if (thing.kind.includes("song")) {
        objs.songsNode.innerHTML = `<ul>${thing.title}</ul>`
      } else if(thing.kind.includes("podcast")) {
        objs.podcastsNode.innerHTML = `<ul>${thing.title}</ul>`
      } else {
        objs.thingsNode.innerHTML = `<ul>${thing.title}</ul>`
      }
    })
    // return a new string of HTML rendered to a certain point on the page

  }


}
