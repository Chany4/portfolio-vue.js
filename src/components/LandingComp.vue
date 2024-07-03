<template>
    <div>
        <!-- Landing Page -->
      <div class="" data-aos="zoom-in-right" id="Landing" v-for="job in jobTitleData()" :key="job">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8 d-flex justify-content-start">
            <div class="home-text">
              <h1 class="text-capitalize">{{job.title}}</h1>
              <h3>{{ job.nameInJob }}</h3>
              <p id="p-landing">
                {{ job.jobBrief }}
              </p>
            </div>
          </div>
          <div class="col-md-4" id="self3-div">
            <img
              src="https://chany4.github.io/images.Portfolio/images/20240422_114648.jpg"
              class="mx-auto"
              alt="self3"
              
            />
          </div>
        </div>
      </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        jobTitleData(){
            return this.$store.state.jobTitle
    },
  },
    computed: {
        getjobTitleData(){
            return this.$store.dispatch('getData')
    },
},
mounted() {
    this.getjobTitleData
}

}
</script>
<style scoped>
h1{
  font-family: "Antic Didone", serif;
}
h3{
  font-family: "Oranienbaum", serif;
}
#self3-div{
  object-fit: contain;
  object-position: center;
}

p{
  font-family: "Chathura", sans-serif;
  font-size: 140px;
}
</style>
    
