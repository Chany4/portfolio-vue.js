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
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Who is Chandré Leigh Davids ?
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body" style="height: 400px;"></div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Understood
                      </button>
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