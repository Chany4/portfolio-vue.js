<template lang="">
    <div>
      <nav class="navbar navbar-expand-lg shadow-sm fixed-top nav">
      <div class="container-fluid">
        <a
          class="navbar-brand fw-bold fs-4 mx-5"
          href="#main"
          title="click on me" id="logo"
          >CHANDRE</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item" id="li">
              <a class="nav-link" aria-current="page" href="#main">Home</a>
            </li>
            <li class="nav-item dropdown" >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Me
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#aboutSection"
                    ><button type="button" class="btn">Detailed</button></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#aboutSection"
                    ><button
                      type="button"
                      class="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Brief
                    </button></a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#Resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav-link {
    color: ghostwhite;
    font-weight: bold;
  }  
  ul{
    color: white;
  }
</style>
