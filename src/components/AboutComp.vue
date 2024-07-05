<template>
    <div>
         <!-- About Section -->
      <div class="container" id="about" v-for="about in aboutData()" :key="about">
        <div class="row">
          <div class="col-lg-7">
            <div class="box">
              <h4 id="aboutMeLabel">About Me</h4>
              <br />
              <p id="brief-Para">
                {{about.aboutBrief}}
              </p>
              <br />
            </div>
            <div class="box">
              <!-- this is a modal -->
              <div
                class="modal"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 text-danger" id="staticBackdropLabel">
                        Who is Chandré Leigh Davids ?
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body" style="height: 400px;">
                      <p class="p">{{ about.aboutBrief2 }}</p>
                    </div>
                    <div class="modal-footer">
                      <a href="https://chany4.github.io/portfolio-vue.js/Resume.pdf" download="https://chany4.github.io/portfolio-vue.js/Resume.pdf" target="_blank">
                        <button type="button" class="btn">
                        Download CV
                      </button>
                    </a> 
                    </div>
                  </div>
                </div>
              </div>

              <!-- End of modal -->
            </div>
          </div>
          <div class="col-lg-5" id="self2-div">
            <img
              src= "https://chany4.github.io/images.Portfolio/images/IMG_20240702_144032.jpg"
              alt="self2"
              id="self2"
            />
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
  }

#aboutMeLabel{
  color: black;
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
    
</style>