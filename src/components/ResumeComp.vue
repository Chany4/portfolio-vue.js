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
              <h1 class="p-4 mb-5 display-5 fw-bold mx-auto d-none d-md-block">Education and Experience</h1>
            <div class="row p-4 education mb-5 w-100 d-flex justify-content-center" v-for= "education in educationData()" :key="education">
              <div class="col-6">
                <div class="d-flex justify-content-start">
                  <h5 class="display-5 fw-bold">Languages Spoken</h5> <i class="las la-language"></i>
                </div>
                <div class="row">
                  <div class="col-12 d-flex justify-content-start">
                    <ul>
                        <li id="p">{{ education.language1 }}</li>
                      <li id="p">{{ education.language2 }}</li>
                      <li id="p">{{ education.language3 }}</li>
                    </ul>
                    </div>
                </div>
            <button type="button" class="btn Btn" data-bs-toggle="modal" data-bs-target="#proficiency">
              <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
              <div class="text">Level</div>
            </button>

              </div>
              <div class="col-6">
                <div class="d-flex justify-content-start">
                <h5 class="display-5 fw-bold">Other</h5> <i class="las la-hiking"></i>
              </div>
              <div class="row">
                <div class="col-12 d-flex justify-content-start">
                  <ul>
                    <li>{{ education.cerificate1 }}</li>
                    <li>{{ education.cerificate2 }}</li>
                    <li>{{ education.cerificate3 }}</li>
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
              <div class="row">
          <div class="col-12 d-flex justify-content-start align-content-center">
            <a href="#skills">
            <button class="Btn">
              <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
              <div class="text">Skills</div>
            </button>
            </a>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="proficiency" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="proficiency">Proficiency</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul>
          <li>English : Advanced (Home language)</li>
          <li>Afrikaans : Advanced</li>
          <li>Korean : Beginner</li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            End of modal
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