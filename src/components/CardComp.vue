<template>
  <div>
    <div class="row" >
        <div class="col" v-for="card in projectsData()" :key="card">
            <div class="card my-3" style="width: 40rem">
        <img :src="card.image" class="card-img-top" alt="project-image" />
        <div class="card-body">
          <h5 class="card-title">{{card.name}}</h5>
          <p class="card-text">
            {{card.description}}
          </p>
          <div class="d-flex justify-content-end">
            <a :href="card.vercel" class="btn mx-2" target="_blank" id="projectButton">View</a>
            <a :href="card.github" class="btn mx-2" target="_blank" id="projectButton">Repo</a>
          </div>
        </div>
      </div>
        </div>
     
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        projectsData(){
            return this.$store.state.projects
    },
  },
    computed: {
        getprojectsData(){
            return this.$store.dispatch('getData')
    },
},
mounted() {
    this.getprojectsData
}

}
</script>
<style scoped>
#projectButton{
  background-color: rgb(255, 176, 189);
  color: rgb(255, 45, 84);
  font-weight: bolder;
  border: 1px solid black;
}
.card , .card-body{
  border: 1px solid black;
}

</style>
