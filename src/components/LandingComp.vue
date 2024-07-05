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
          <div class="pt-5">
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

 #Landing {
    width: 100%;
    max-width: max-content;
    color: white;
}
#p-landing{
  color: black;
  font-size: 1.2rem;
}
h1{
  font-family: "Antic Didone", serif;
  font-size: 4rem;
  color:#000;
}
h3{
  font-family: "Antic Didone", serif;
  font-size: 1.9rem;
  margin-top: 5%;
  font-weight: bolder;
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
.lab{
  color: black;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
}
.lab ::before{
  box-sizing: border-box;
}
.lab ::after{
  box-sizing: border-box;
}

@keyframes float {
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-10px);
    scale:1.1;
  }
  100%{
    transform: rotateY(0px);
  }
}
</style>
    
