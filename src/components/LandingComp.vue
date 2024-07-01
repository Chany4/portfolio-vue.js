<template>
    <div>
        <!-- Landing Page -->
      <div class="" data-aos="zoom-in-right" id="Landing" v-for="job in jobTitleData()" :key="job">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8 d-flex justify-content-start">
            <div class="home-text">
              <h1 class="text-capitalize">{{job.title}}</h1>
              <h3>{{ job.nameInJob }}</h3>
              <p>
                {{ job.jobBrief }}
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://chany4.github.io/images.Portfolio/images/self3.jpg"
              class="w-50"
              alt="self3"
              id="self3"
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
<style></style>
    
