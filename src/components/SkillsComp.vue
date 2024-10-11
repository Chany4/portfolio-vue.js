<template >

  <div class="p">
    <div class="row a">
    <h1 class="text-center">Skills</h1>
    <div class="my-5">
      <div class="row d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <h4>Technical Skills</h4>
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/html.png" alt="html">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/css.png" alt="css">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/bootstrap.jpg" alt="bootstrap">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/vue-transparent.png" alt="vue">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/mysql.jpg" alt="mysql">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/nodejs.e.png" alt="node">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/figma.jpg" alt="figma">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/adobe.png" alt="adobe">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images.Portfolio/images/GitHub-Mark-ea2971cee799.png" alt="git bash">
        </div>

        
      </div>

      <div class="row d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <h4>Soft Skills</h4>
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/communicational.png" alt="communication skills">
          <p>Communication skills</p>
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/self_discipline.png" alt="resillience">
          <p>resillience</p>
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/discipline.png" alt="discipline">
          <p>discipline</p>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <h4>Badges</h4>
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/operating-systems-basics%20(1).png" alt="OS systems basice">
        </div>
        <div class="col-md-3">
          <img src="https://chany4.github.io/images-portfolio-re/images/linux-unhatched.png" alt="linux unhatched">
        </div>
      </div>
      <div class="row">
        <router-link ><button>View More Achievements</button></router-link>
      </div>
  </div>
  </div>

  
</template>
<script>
export default {
    methods: {
      skillsData(){
      return this.$store.state.skill
    },
    softSkills(){
      return this.$store.state.softSkills
    }
},
computed:{
    getskillsData(){
      return this.$store.dispatch('getData')
    },
    getsoftSkillsData(){
      return this.$store.dispatch('getData')
    },
  },
mounted() {
  this.getskillsData,
  this.getsoftSkillsData
}
};
</script>
<style scoped>
img{
  width: 200px;
  height: 180px;
  margin: 2px;
}
p{
  text-align: start;
  font-size: 2rem;
  font-family: "Chathura", sans-serif;
}
h1{
      font-size: 9rem;
      font-family: "Chathura", sans-serif;
    }
h4{
      font-size: 5rem;
      font-family: "Chathura", sans-serif;
    }
i {
  font-size: 4rem;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.col {
  border: 2px solid black;
}


a {
  top: 0;
}
.lab {
  font-size: 6rem;
  color: black;
}
.las {
  font-size: 6rem;
  color: black;
}

</style>
