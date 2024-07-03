<template>
    <div>
        <!-- Landing Page -->
      <div class="" data-aos="zoom-in-right" id="Landing" v-for="job in jobTitleData()" :key="job">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6 d-flex justify-content-start">
            <div class="home-text">
              <h1 class="text-capitalize">{{job.title}}</h1>
              <h3>{{ job.nameInJob }}</h3>
              <p>
                {{ job.jobBrief }}
              </p>
            </div>
          </div>
          <div class="col-md-6" id="self3-div">
            <img
              src="https://chany4.github.io/images.Portfolio/images/20240422_114648.jpg"
              class="mx-auto"
              alt="self3" id="self3"
              
            />
          </div>
          <div>
            <i class="lab la-html5"></i>
            <i class="lab la-css3-alt"></i>
            <i class="lab la-js-square"></i>

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
  font-size: 4rem;
  color:#000;
}
h3{
  font-family: "Antic Didone", serif;
  font-size: 1.9rem;
  margin-top: 5%;
}
#self3-div{
  object-fit: contain;
  object-position: center;
}

p{
  font-family: "Chathura", sans-serif;
  font-size: 1.7rem;
  color: black;
  font-weight: bolder;
}

.lab{
  color: black;
  font-size: 4rem;
}
</style>
    
