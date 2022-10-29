
  
 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  } 

  let recipesList =[]
  async function getData (){
    let myData = await fetch ("https://forkify-api.herokuapp.com/api/search?q=pizza")
    let List = await myData.json()
    recipesList=List.recipes;
    console.log (recipesList);
    display()
  }
  getData()
  function display(){
    let temp=""
    recipesList.forEach((element)=>{
      temp+= `<div class="col-md-3">
      <div class=" border text-center">
        <img src="${element.image_url}" class= "w-100" alt="">
        <h6> ${element.title}</h6>
      </div>

    </div>`

    })
    document.getElementById ("myrow").innerHTML=temp
  }

 