<template >
  <div class="p">
    <div class="row a">
    <h1 class="text-center">Skills</h1>

    <div class="col-12 my-5">
      <div class="row gap-2">
        <div
          class="col-md-3 d-flex justify-content-center" v-for="skill in skillsData" :key="skill"
        >
          <div class="col-md-4 z">
            <i :class="skill.name" id="x"></i>
            <div class="n">
              <p class="mt-2">{{skill.level}}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  </div>

  
</template>
<script>
export default {
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
  display: flex;
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
  border-radius: 10px;
  display: flex;
  justify-content: center;
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
