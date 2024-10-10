<template scoped>
  <div class="app-container row">
    <div class="card-container col-lg-3 col-md-4 col-sm-6" v-for="card in projectsData()" :key="card">
      <div class="card my-2">
        <img :src="card.image" class="card-img-top" alt="project-image" />
        <div class="hover-text">
          <div class="headline">
            <h5 class="card-title">{{card.name}} &#x2193;</h5>
          </div>
          <div class="content">
            <p class="card-text">
            {{card.description}}
          </p>
          </div>
          <div class="my-5">
            <div class="d-flex justify-content-start align-self-end">
            <a :href="card.vercel" class="btn mx-2" target="_blank" id="projectButton">View</a>
            <a :href="card.github" class="btn mx-2" target="_blank" id="projectButton">Repo</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    projectsData() {
      return this.$store.state.projects;
    },
  },
  computed: {
    getprojectsData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getprojectsData;
  },
};
</script>
<style scoped>
.card-img-top{
  object-fit: contain;
}
#projectButton{
  background-color: rgb(255, 176, 189);
  color: rgb(255, 45, 84);
  font-weight: bolder;
  border: 1px solid black;
}

.card-container {
  display: flex;
  overflow-x: scroll;
}

.card {
  height: 400px;
  background: rgb(255, 255, 255);
  position: relative;
  overflow: hidden;
  margin: 0 20px;
  border: 1px solid rgb(255, 167, 181);
}

.card:first-of-type {
  margin-left: 0;
}

.card:last-of-type {
  margin-right: 0;
}

.card img {
  width: 100%;
  height: 100%;
}

.card .hover-text {
  position: absolute;
  bottom: 0;
  background: #ffdddd;
  color: black;
  padding: 30px;
  box-sizing: border-box;
  transition: 0.5s ease-in-out;
  width: 74%;
  height: 25%;
}

.headline {
  margin-bottom: 32px;
}

.card:hover .hover-text {
  height: 100%;
  width: 100%;
  background: rgba(252, 252, 252, 0.938);
}

.card .content,
.card button {
  visibility: hidden;
  opacity: 0;
  transition: 1s 0.3s;
  transform: translatey(50px);
}

.card:hover .content,
.card:hover button {
  visibility: visible;
  opacity: 1;
  transform: translatey(0px);
}
</style>
