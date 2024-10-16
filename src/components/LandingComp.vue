<template>
  <div class="pt-5 row d-flex justify-conent-center">
    <!-- Landing Page -->
    <div
      class="pt-5"
      data-aos="zoom-in-right"
      id="Landing"
      v-for="job in jobTitleData()"
      :key="job"
    >
      <div
        class="row justify-content-center align-items-center justify-conent-center"
      >
        <div class="col-md-6 p-5">
          <div class="home-text">
            <h1 class="text-capitalize responsive-title">{{ job.title }}</h1>
            <h3 class="responsive-subtitle">{{ job.nameInJob }}</h3>
            <div class="pt-5">
              <i class="lab la-html5"></i>
              <i class="lab la-css3-alt"></i>
              <i class="lab la-vuejs"></i>
              <i class="lab la-node-js"></i>
            </div>
          </div>
        </div>
        <div class="col-md-6 pt-3" id="self3-div">
          <div class="card d-none d-md-block">
            <img
              src="https://chany4.github.io/images.Portfolio/images/20240422_114648.jpg"
              class="mx-auto"
              alt="self3"
              id="self3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jobTitleData() {
      return this.$store.state.jobTitle;
    },
  },
  computed: {
    getjobTitleData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getjobTitleData;
  },
};
</script>
<style scoped>
.home-text {
  object-fit: contain;
}

#Landing {
  width: 100%;
  max-width: max-content;
  color: white;
}
h1 {
  font-family: "Chathura", sans-serif;
  font-size: 4rem;
  color: white  ;
}
h3 {
  font-family: "Antic Didone", serif;
  font-size: 1.9rem;
  margin-top: 5%;
  font-weight: bolder;
}
#self3-div {
  object-fit: contain;
  object-position: center;
}

p {
  font-family: "Chathura", sans-serif;
  font-size: 1.7rem;
  color: black;
  font-weight: bolder;
}

.lab {
  color: white;
  font-size: 4rem;
}
.lab {
  color: white;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
}
.lab ::before {
  box-sizing: border-box;
}
.lab ::after {
  box-sizing: border-box;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
    scale: 1.1;
  }
  100% {
    transform: rotateY(0px);
  }
}

.home-text {
  text-align: left;
}

.responsive-title {
  font-size: 10vw; /* Adjust based on design */
}

.responsive-subtitle {
  font-size: 8vw; /* Adjust based on design */
}

/* Media queries for larger screens */
@media (min-width: 768px) {
  .responsive-title {
    font-size: 8rem; /* Fixed size for larger screens */
  }

  .responsive-subtitle {
    font-size: 2rem; /* Fixed size for larger screens */
  }
}

/* card */
.card {
  /* background: url("https://chany4.github.io/images.Portfolio/images/20240422_114648.jpg"); */
  background-repeat: no-repeat;
  background-size: cover; /* Change to cover to fill the card */
  background-position: center;
  background-attachment: fixed; /* This can be removed if not needed */
  padding: 0;
  overflow: hidden; /* Ensure no overflow */
  width: 404px; /* Keep the width */
  height: 404px; /* Keep the height */
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  border-radius: 50%; /* Make it a circle */
  margin-left: 5px;
}
 

.card h2 {
  z-index: 1;
  color: white;
  font-size: 2em;
}

.card::before {
  content: "";
  position: absolute;
  width: 100%; /* Cover the entire card */
  height: 100%; /* Cover the entire card */
  background-image: conic-gradient(
    rgb(255, 95, 170) 0%,
    rgb(255, 125, 183) 30%,
    rgb(255, 125, 183) 10%,
    white 30%,
    white 35%,
    rgb(48, 255, 65) 35%,
    rgb(135, 246, 104) 65%,
    white 65%,
    white 70%,
    rgb(252, 109, 161) 70%,
    rgb(253, 135, 198) 100%
  );
  animation: rotBGimg 3s linear infinite; /* Continuous rotation */
  border-radius: 50%; /* Match the card's border radius */
  z-index: 0; /* Place it behind the text */
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: "";
  position: absolute;
  background: url("https://chany4.github.io/images.Portfolio/images/20240422_114648.jpg");
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  inset: 5px; /* Creates an inset effect */
  border-radius: 50%; /* Match the circular shape */
  z-index: 0; /* Keep it behind the text */
}


@media (min-width: 992px) { /* Assuming 'lg' starts at 992px */
    .card {
        margin-left: 120px;
    }
}
</style>
