<template >
  <div class="p">
    <div class="row a">
    <h1 class="text-center">Skills</h1>

    <div class="my-5">
      <div class="row">
        <div
          class="col-lg-3 col-md-3 d-flex justify-content-center my-2" v-for="skill in skillsData" :key="skill"
        >
          <div class="col-md-3 z">
            <i :class="skill.name" id="x"></i>
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


a {
  top: 0;
}
.lab {
  font-size: 4rem;
  color: white;
}
.las {
  font-size: 4rem;
  color: white;
}

</style>
