<template >
  <div class="p">
    <div class="row a">
    <h1 class="text-center">Skills</h1>

    <div class="col-12 my-5">
      <div class="row gap-2">
        <div
          class="col-md-5 d-flex justify-content-end x"
          @mouseenter="applyAnimation($event, JSON.stringify(skillsData))"
          @mouseleave="removeAnimation($event, JSON.stringify(skillsData))"  v-for="skill in skillsData" :key="skill"
        >
          <div class="col-md-4 z">
            <i :class="skill.name" id="x"></i>
            <div class="n">
              <p class="mt-2">{{skill.level}}</p>
            </div>
          </div>
          <div class="myDIV"></div>
        </div>
        
      </div>
    </div>
  </div>
  </div>

  <div class="row p-4">
    <div class="card col-lg-4 m-1" v-for="skill in skillsData" :key="skill">
      <div>
        <img :src="skill.name">
      </div>
      <div>
        {{ skill.level }}
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
.z{
  border: 1px solid black;
  background-color:white ;
  padding: 6px;
}
.n{
  background-color: black;
  color:white;
  font-size: 15px;
}


h1{
      font-size: 9rem;
      font-family: "Chathura", sans-serif;
    }
i {
  font-size: 4rem;
  color: white;
  background-color: black;
  padding: 15px;
  border-radius: 120px;
  display: flex;
  justify-content: center;
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

</style>
