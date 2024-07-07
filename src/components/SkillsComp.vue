<template lang="">
  <div class="p">
    <div class="row a">
    <h1 class="text-center">Skills</h1>
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

    <div class="col-12 my-5">
      <div class="row gap-2">
        <div
          class="col-md-5 d-flex justify-content-end x"
          @mouseenter="applyAnimation($event, JSON.stringify(skillsData))"
          @mouseleave="removeAnimation($event, JSON.stringify(skillsData))"  v-for="skill in skillsData" :key="skill"
        >
          <div class="col-md-4">
            <i :class="skill.name" id="x"></i>
            <div class="">
              <p>{{skill.level}}</p>
            </div>
          </div>
          <div class="myDIV"></div>
        </div>
        
      </div>
    </div>
  </div>
  </div>
  
</template>
<script>
export default {
  methods: {
    
    applyAnimation(event, skills) {
      if(event.target){
        let myDivs = document.querySelectorAll(".myDIV");
        let data = JSON.parse(skills)
        myDivs.forEach( (div, index)=>{
          div.style.width = "200px";
          div.style.height = "fit-content";
          div.innerHTML =data[index].proficiency
        })
      }
    },
    removeAnimation(event, skills) {
      if(event.target){
        let myDivs = document.querySelectorAll(".myDIV");
        let data = JSON.parse(skills)
        myDivs.forEach( (div, index)=>{
          div.innerHTML =data[index].proficiency
        })
      }
    },
    
  },
    computed: {
      skillsData(){
            return this.$store.state.skill
    },
},
mounted() {
  this.$store.dispatch('getData')
}
};
</script>
<style scoped>
.p{
  border: 1px solid black;
}

h1{
      font-size: 9rem;
      font-family: "Chathura", sans-serif;
    }
i {
  font-size: 4rem;
  color: white;
  background-color: black;
  padding: 2px;
}
.myDIV {
  width: 0.2px;
  background: white;
  padding:16px ;
  transition: width 2s, background-color 0.3s ease-in-out;
}

.col {
  border: 2px solid black;
}

.row {
  padding: 10px;
}

a {
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
  overflow-x: hidden;
}
.slider {
  width: 100%;
  height: fit-content;
  overflow: hidden;
  background-color: black;
  border-radius: 10px;
}

.logos {
  display: flex;
  align-items: center;
  animation: slider 10s linear infinite;
}

.lab {
  font-size: 4rem;
  color: white;
  width: 110px;
  margin: 0 25px;
}
.las {
  font-size: 4rem;
  color: white;
  width: 110px;
  margin: 0 25px;
}

@keyframes slider {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-900px);
  }
}
</style>
