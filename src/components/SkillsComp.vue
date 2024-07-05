<template lang="">
<div class="row a">
    <div class="slider col-12">
  <div class="logos">
    <i class="lab la-github"></i>
    <i class="las la-code"></i>
    <i class="lab la-css3"></i>
    <i class="lab la-html5"></i>
    <i class="lab la-js-square"></i>
    <i class="lab la-node-js"></i>
    <i class="lab la-vuejs"></i>
    <i class="lab la-bootstrap"></i>


    <i class="lab la-github"></i>
    <i class="las la-code"></i>
    <i class="lab la-css3"></i>
    <i class="lab la-html5"></i>
    <i class="lab la-js-square"></i>
    <i class="lab la-node-js"></i>
    <i class="lab la-vuejs"></i>
    <i class="lab la-bootstrap"></i>


    <i class="lab la-github"></i>
    <i class="las la-code"></i>
    <i class="lab la-css3"></i>
    <i class="lab la-html5"></i>
    <i class="lab la-js-square"></i>
    <i class="lab la-node-js"></i>
    <i class="lab la-vuejs"></i>
    <i class="lab la-bootstrap"></i>

  </div>


</div>

<div class= "col-12">
    <div class="row">
  <div class="col d-flex justify-content-center" id="x" @mouseenter="applyAnimation" @mouseleave="removeAnimation">
    <div class="col-md-4">
      <div class="col">
        <i class="bi bi-github"></i>
      </div>
      <div class="col">
        <p>Intermediate</p>
      </div>
    </div>
    <div class="col-" id="myDIV"></div>
  </div>
</div>


</div>

</div>



    <div>
        
    </div>
</template>
<script>
export default {
    methods: {
        applyAnimation(){
            let myDiv=  document.querySelector('#myDIV')
            myDiv.style.width = "200px";
            myDiv.style.height = "fit-content";
            myDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'; // Reset content for #myDIV on mouse enter";
        },
        removeAnimation() {
            let myDiv=  document.querySelector('#myDIV')
            myDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'; // Reset content for #myDIV on mouse leave";
        }
    }
    
}
</script>
<style scoped>
#myDIV {
      width: 1px;
      background: red;
      transition: width 2s, background-color 0.3s ease-in-out; /* Combined transition for width and background-color */
    }

    #myDIV:hover {
      width:200px;
    }

    .col {
      border: 2px solid black;
    }

    .row {
      border: 2px solid pink;
      padding: 10px;
    }


a{
    top: 0;
}
  body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: black;
  display: grid;
  place-items: center;
  overflow-x:hidden;
}
.slider{
  width: 100%;
  height: fit-content;
  overflow: hidden;
  background-color: black;
  border-radius: 10px;
}

.logos{
  display: flex;
  align-items: center;
  animation: slider 10s linear infinite;
}

.lab {
  font-size:4rem;
  color:white;
  width: 110px;
  margin: 0 25px;
}
.las{
  font-size:4rem;
  color:white;
  width: 110px;
  margin: 0 25px;
}


@keyframes slider{
  from {
    transform: translateX(0px);
  }
  to{
    transform: translateX(-900px);
  }
 
}
    
</style>