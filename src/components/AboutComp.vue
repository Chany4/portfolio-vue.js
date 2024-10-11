<template>
    <div>
         <!-- About Section -->
      <div class="container" id="about" v-for="about in aboutData()" :key="about">
        <div class="row">
          <h4 id="aboutMeLabel">About Me</h4>
            <div class="col-md-7">
              
              <br />
              <p id="brief-Para">
                {{about.aboutBrief}}
              </p>
              <br />
            </div>
            <div class="col-md-5">
              <h4>Full Name :</h4>
              <p>Chandre Leigh Davids</p>
              <br><br>
              
              <h4>Date of Birth :</h4>
              <p>04 October 2005</p>
              <br><br>
              
              <h4>Email :</h4>
              <p>chandreleighdavids04052005@gmail.com</p>
              <br><br>
              
              <h4>Adress :</h4>
              <p>Rocklands, Mitchell's Plain</p>
              <br><br>
              
            </div>
          </div>
        </div>

        
    </div>
</template>
<script>
export default {
    methods:{
        aboutData(){
            return this.$store.state.about
    },
  },
    computed: {
        getaboutData(){
            return this.$store.dispatch('getData')
    },
},
mounted() {
    this.getaboutData
}

}
</script>
<style scoped>
.p{
  color: black;
  font-family: "Chathura", sans-serif; 
  font-size: 180%;
}

#aboutSection{
    min-height: 100vh;
    max-height: 100%;
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    background-image: linear-gradient(#FFC0CB,#FFFEFA , #FFC0CB);

}

#staticBackdropLabel{
    color: black;
}

#about{
    color: white;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.458);
  }

#aboutMeLabel{
  color: white;
  font-family: "Chathura", sans-serif; 
  font-size: 9rem;
  top: 0;

}
  #self2{
    width: 80%;
    height: 80%;
    object-fit: cover;
    display: block;
    max-width: 100%;
}
#brief-Para{
    padding: 20px;
    padding-bottom: 50px;
    color: black;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0.7, 0, 0.5);
    font-family: "Chathura", sans-serif;
    font-size: 1.9rem;
}
h4{
    color: black;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0.7, 0, 0.5);
    font-family: "Chathura", sans-serif;
    font-size: 1.9rem;
}
p{
    color: black;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0.7, 0, 0.5);
    font-family: "Chathura", sans-serif;
    font-size: 1.9rem;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
  border-radius: 30px;
  border: 1px solid #8F9092;
  transition: all 0.2s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;
}
.btn:active {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1;
}

.btn:focus {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}


a{
  text-decoration: none;
}

div{
  object-fit: contain;
}
img{
  object-fit: contain;
  padding: 0;
  margin: 0;
  min-width: 100%;
  min-height: 100%;
  border-radius: 25px;
  border: 1px solid black;
}
.col-md-5{
  background-color: rgba(7, 83, 7, 0.625);
  border-radius: 20px;
  border: 2px solid white;
}
</style>