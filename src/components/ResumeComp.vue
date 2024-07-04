<template>
      <!-- Resume Section -->

      <div class="container" id="resume" >
        <div class="row">
          <div class= "col-lg-6 d-flex flex-column align-items-start" >
            <div class="p-4 education mb-5" v-for= "education in educationData()" :key="education">
              <h5 class="display-5 fw-bold">Education</h5>
              <div>
                <h6>HighSchool</h6>
                <p>{{education.descriptionMHS}}</p>
                <p>
                  <ul>
                    <li>Pure Mathematics</li>
                    <li>Physical Sciences</li>
                    <li>Accounting</li>
                    <li>Life Sciences</li>
                  </ul>
                </p>
              </div>

              <!-- Table -->
              <div class="row" id="div">
                <div class="col-1 mx-auto" id="div">
                  *
                </div>
                <div class="col-md-3" id="div">
                  <p>{{education.yearMHS}}</p>
                </div>
                <div class="col-md-5" id="div">
                  <p>{{education.placeOfInstitutionMHS}}</p>
                </div>
                <div class="col-md-3" id="div">
                  <p>{{education.levelPassed}}</p>
                </div>

                <div class="col-1 mx-auto" id="div">
                  *
                </div>
                <div class="col-md-3" id="div">
                  <p>{{education.yearMHS}}</p>
                </div>
                <div class="col-md-5" id="div">
                  <p>{{education.placeOfInstitutionMHS}}</p>
                </div>
                <div class="col-md-3" id="div">
                  <p>{{education.levelPassed}}</p>
                </div>

             

              </div>
            </div>

            
            <div class="p-4 education mb-5" v-for= "work in workExpData()" :key="work">
              <h5 class="display-5 fw-bold">Work Experience</h5>
              <div>
                <p>{{work.description}}</p>
                <p>{{work.descriptionPIP}}</p>
              </div>
              <div class="row" id="div">
                <div class="col-1" id="div">
                  *
                </div>
                <div class="col-3" id="div">
                  <p>{{work.year}}</p>
                </div>
                <div class="col-8" id="div">
                  <p>{{work.placeOfWork}}</p>
                </div>
              </div>

              <div class="row" id="div">
                <div class="col-1" id="div">
                  *
                </div>
                <div class="col-3" id="div">
                  <p>{{work.yearPIP}}</p>
                </div>
                <div class="col-8" id="div">
                  <p>{{work.nameOfBusiness}}</p>
                </div>
              </div>

            </div>
          </div>

          <div class= "col-lg-6 d-flex flex-column align-items-start" >
              <h1 class="p-4 mb-5 display-5 fw-bold mx-auto">Resume</h1>
            <div class="row p-4 education mb-5 w-100">
              <div class="col-6">
                <div class="d-flex justify-content-start">
                  <h5 class="display-5 fw-bold">Languages Spoken</h5> <i class="las la-language"></i>
                </div>
                <div class="row">
                  <div class="col-12 d-flex justify-content-start">
                    <ul>
                      <li id="p">English</li>
                      <li id="p">Afrikaans</li>
                      <li id="p">Korean</li>
                    </ul>
                    </div>
                </div>
                <div id="profButton-div">
                <button id="profButton">View Level Of proficiency</button>
              </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-start">
                <h5 class="display-5 fw-bold">Other</h5> <i class="las la-hiking"></i>
              </div>
              <div class="row">
                <div class="col-12 d-flex justify-content-start">
                  <ul>
                    <li>Certificate In First Aid Level 1</li>
                    <li>D</li>
                    <li>C</li>
                    <li>J</li>
                    <li>D</li>
                  </ul>
                
                  </div>
              </div>
              </div>
             
              
            </div>
            
            <div class="p-4 education mb-5 w-100">
              <h5 class="display-5 fw-bold"></h5>
              <div class="d-flex justify-content-around">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ad tempore nesciunt dolore iste vel quis, nostrum, est delectus itaque consequatur? Quam perferendis harum qui veniam at eveniet perspiciatis aliquam.</p>
              </div>
            </div>
          </div>
         
          
        </div>
      </div>
</template>
<script>
export default {
  methods: {
    educationData(){
      return this.$store.state.education
    },
    workExpData(){
      return this.$store.state.workExp
    },
    skillsData(){
      return this.$store.state.skills
    }



  },
  computed:{
    geteducationData(){
      return this.$store.dispatch('getData')
    },
    getworkExpData(){
      return this.$store.dispatch('getData')
    },
    getskillsData(){
      return this.$store.dispatch('getData')
    }
  },
  mounted(){
    this.geteducationData,
    this.getworkExpData,
    this.getskillsData
  }
    
}
</script>
<style scoped> 
#div{
  border: 1px solid black;
}
li{
  color: black;
  font-family: "Chathura", sans-serif;
  font-size: 2.2rem;
  list-style: none;
}
p{
  color: black;
  font-family: "Chathura", sans-serif;
  font-size: 2.2rem;
}

#p{
  font-size: 2rem;
  text-decoration-skip-ink:auto;
}
div{
  object-fit: contain;
  max-width: 100%;
}
#resumeLabel{
  display: flex;
  justify-content: flex-end ;
}
h1{
  font-size: 9rem;
  font-family: "Chathura", sans-serif;
  
}
h5{
 color: white;
  font-family: "Chathura", sans-serif;
  background-color: black;
  border-radius: 15px;
  padding: 2%;

  }
h6{
  color: black;
  font-family: "Chathura", sans-serif;
  font-size: 2.8rem;
  border-radius: 15px;
  
}
  .education{
    background-color: white;
    border: 2px solid black;
    border-radius:15px;
    padding: 2px;
  }
  .resume{
    background-color: black;
  }

  #profButton{
    background-color: pink;
    border: 1px rgb(255, 161, 177);
    border-radius: 25px;
    padding: 1%;
    box-shadow: 3px 5px 6px 3px rgb(253, 118, 167);
  }
  #profButton-div{
    display: flex;
    justify-content: flex-start;
    margin-top: 35px;
  }
.las{
  color: black;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
  padding-top: 16px;
}
.las ::before{
  box-sizing: border-box;
}
.las ::after{
  box-sizing: border-box;
}


@keyframes float {
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-10px);
  }
  100%{
    transform: rotateY(0px);
  }
}
</style>