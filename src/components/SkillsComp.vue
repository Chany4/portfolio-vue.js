<template>
  <div class="p">
    <div class="row a">
      <h1 class="text-center">Skills</h1>
      <div class="my-5">
        <div class="row d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <h4>Technical Skills</h4>
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/html.png"
              alt="html"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/css.png"
              alt="css"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/bootstrap.jpg"
              alt="bootstrap"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/vue-transparent.png"
              alt="vue"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/mysql.jpg"
              alt="mysql"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/nodejs.e.png"
              alt="node"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/figma.jpg"
              alt="figma"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/adobe.png"
              alt="adobe"
            />
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images.Portfolio/images/GitHub-Mark-ea2971cee799.png"
              alt="git bash"
            />
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <h4>Soft Skills</h4>
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/communicational.png"
              alt="communication skills"
            />
            <p>Communication skills</p>
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/self_discipline.png"
              alt="resilience"
            />
            <p>resilience</p>
          </div>
          <div class="col-md-3">
            <img
              src="https://chany4.github.io/images-portfolio-re/images/discipline.png"
              alt="discipline"
            />
            <p>discipline</p>
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <h4>Badges</h4>
        </div>
        <div class="col-md-3">
          <img
            src="https://chany4.github.io/images-portfolio-re/images/operating-systems-basics%20(1).png"
            alt="OS systems basics"
          />
        </div>
        <div class="col-md-3">
          <img
            src="https://chany4.github.io/images-portfolio-re/images/linux-unhatched.png"
            alt="linux unhatched"
          />
        </div>
      </div>
      <div class="row d-flex justify-content-center my-5">
        

        <router-link to="/certificates" class="d-flex justify-content-center " >
          <button href="#" class="button" style="--clr: #7808d0">
          <span class="button__icon-wrapper">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="button__icon-svg"
              width="10"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              viewBox="0 0 14 15"
              fill="none"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              class="button__icon-svg button__icon-svg--copy"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          Explore All
        </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    skillsData() {
      return this.$store.state.skill;
    },
    softSkills() {
      return this.$store.state.softSkills;
    },
  },
  computed: {
    getskillsData() {
      return this.$store.dispatch("getData");
    },
    getsoftSkillsData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getskillsData, this.getsoftSkillsData;
  },
};
</script>
<style scoped>
router-link{
  text-decoration: none;
}
img {
  width: 200px;
  height: 180px;
  margin: 2px;
}
p {
  text-align: start;
  font-size: 2rem;
  font-family: "Chathura", sans-serif;
}
h1 {
  font-size: 9rem;
  font-family: "Chathura", sans-serif;
}
h4 {
  font-size: 5rem;
  font-family: "Chathura", sans-serif;
}
i {
  font-size: 4rem;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.col {
  border: 2px solid black;
}

a {
  top: 0;
}
.lab {
  font-size: 6rem;
  color: black;
}
.las {
  font-size: 6rem;
  color: black;
}

/* button */

.button {
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  border: none;
  cursor: pointer;
  align-items: center;
  gap: 0.75rem;
  background-color: green;
  color: #fff;
  border-radius: 10rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s;
}

.button__icon-wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: black;
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.button:hover {
  background-color: black;
}

.button:hover .button__icon-wrapper {
  color: green;
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover .button__icon-svg:first-child {
  transition: transform 0.3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon-svg--copy {
  transition: transform 0.3s ease-in-out 0.1s;
  transform: translate(0);
}

</style>
