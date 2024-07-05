<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center">Testimonials</h1>
      <div class="col-md-6 mb-4 d-flex justify-content-center"  v-for="x in testimonialData()" :key="x.id">
        <div class="card p-4 h-100 w-100">
      <img :src="x.image" class="card-img-top" :alt="x.name">
      <div class="card-body">
        <h3 class="card-text">{{ x.name }}</h3>
        <p class="card-text lead">{{ x.position }}</p>
        <p class="card-text lead">{{ x.message }}</p>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        testimonialData(){
            return this.$store.state.testimonials
    }
  },
    computed: {
        gettestimonialsData(){
            return this.$store.dispatch('getData')
    },
},
mounted() {
    this.gettestimonialsData
},
};
</script>
<style scoped>
h1 {
  font-family: "Chathura", sans-serif;
  font-size: 9rem;
}
.card{
  width: 18rem;
  transform: scale(1);
transition: 0.5s ease-in-out;
}
.card:hover{
background: rgb(255, 142, 161);
box-shadow:  17px 17px 30px #e8b1b1,
             -17px -17px 30px #ffd3d3;
transform: scale(1.025);
transition: 0.5s ease-in-out;

}
</style>











Message Imaraaan









