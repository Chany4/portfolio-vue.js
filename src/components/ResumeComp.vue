<template>
      <!-- Resume Section -->

      <div class="container" id="resume" >
        <div class="row d-flex justify-content-center">
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
                <div class="col-xl-1 mx-auto align-self-center d-none d-md-block" id="div">
                  <span>🎓</span>
                </div>
                <div class="d-block d-md-none mm">
                  <img src="https://chany4.github.io/images-portfolio-re/images/mondale_badge.png" alt="mondale high school badge">
                </div>
                <div class="col-xl-3" id="div">
                  <p>{{education.yearMHS}}</p>
                </div>
                <div class="col-xl-5" id="div">
                  <p>{{education.placeOfInstitutionMHS}}</p>
                </div>
                <div class="col-xl-3" id="div">
                  <p>{{education.levelPassed}}</p>
                </div>

                <div class="col-xl-1 mx-auto align-self-center d-none d-md-block" id="div">
                  <span>🎓</span>
                </div>
                <div class="d-block d-md-none mm">
                  <img src="https://chany4.github.io/images-portfolio-re/images/Life_choices.png" alt="Life Choices Academy">
                </div>
                <div class="col-xl-3" id="div">
                  <p>{{education.yearLC}}</p>
                </div>
                <div class="col-xl-5" id="div">
                  <p>{{education.placeOfInstitution}}</p>
                </div>
                <div class="col-xl-3" id="div">
                  <!-- <p>{{education.levelPassed}}</p> -->
                   <p>I passed with a certificate of excellence</p>
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
                <div class="col-xl-1 align-self-center d-none d-md-block" >
                  <span>📖</span>
                </div>
                <div class="d-block d-md-none mm">
                  <img src="https://chany4.github.io/images-portfolio-re/images/upper-edge-200x140px.jpg" alt="Upper Edge">
                </div>
                <div class="col-xl-3" id="div">
                  <p>{{work.year}}</p>
                </div>
                <div class="col-xl-8" id="div">
                  <p>{{work.placeOfWork}}</p>
                </div>
              </div>

              <div class="row" id="div">
                <div class="col-md-1 align-self-center d-none d-md-block" >
                  <span class="align-self-center">📖</span>
                </div>
                <div class="d-block d-md-none mm">
                  <img src="https://chany4.github.io/images-portfolio-re/images/Screenshot_20241010_095634.jpg" alt="My business">
                </div>
                <div class="col-xl-3" id="div">
                  <p>{{work.yearPIP}}</p>
                </div>
                <div class="col-xl-8" id="div">
                  <p>{{work.nameOfBusiness}}</p>
                </div>
              </div>

            </div>
          </div>

          <div class= "col-lg-6 d-flex flex-column fixThis" >
              <h1 class="p-4 mb-5 display-5 fw-bold mx-auto d-none d-lg-block">Education and Experience</h1>
            <div class="row p-4 education mb-5 w-100 d-flex justify-content-center" v-for= "education in educationData()" :key="education">
              <div class="col-sm-6">
                <div class="d-flex justify-content-start">
                  <h5 class="display-5 fw-bold">Languages Spoken</h5> <i class="las la-language"></i>
                </div>
                <div class="row d-flex justify-content-start">
                  <div class="col-12 d-flex justify-content-start">
                    <ul>
                        <li id="p">{{ education.language1 }}</li>
                      <li id="p">{{ education.language2 }}</li>
                      <li id="p">{{ education.language3 }}</li>
                    </ul>
                    </div>
                </div>

              </div>
              <div class="col-sm-6">
                <div class="d-flex justify-content-start">
                <h5 class="display-5 fw-bold">Other</h5> <i class="las la-hiking"></i>
              </div>
              <div class="row">
                <div class="col-12 d-flex justify-content-start">
                  <ul>
                    <li>{{ education.certificate1 }}</li>
                    <li>{{ education.certificate2 }}</li>
                    <li>{{ education.certificate3 }}</li>
                  </ul>
                
                  </div>
              </div>
              </div>
             
              
            </div>
            
            <div class="p-4 education mb-5 w-100" v-for= "education in educationData()" :key="education">
              <h5 class="display-5 fw-bold">More Information</h5>
              <div class="d-flex justify-content-around">
                <p>{{ education.other }}</p>
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
.mm{
  object-fit: cover;
}
img{
  width: 100%;
  height: 100%;
}
span{
  margin-right: 16px;

}
/* View skills btn */

.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(71, 212, 255);
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 125px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}


/*  */
#self3 {
    width: 50%;
    height: 40%;
    object-fit: cover;
    display: block;
    max-width: 100%;
    padding-top:15px ;
    border-radius: 25px;
    border: 2px solid black;
    padding: 0;
    object-position: center;
}

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
  font-size: 2.5rem;
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