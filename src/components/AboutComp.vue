<template>
    <div>
         <!-- About Section -->
      <div class="container" id="about">
        <div class="row">
          <div class="col-lg-4" id="self2-div">
            <img
              src="https://chany4.github.io/images.Portfolio/images/20240422_114648.jpg"
              alt="self2"
              id="self2"
            />
          </div>
          <div class="col-lg-8">
            <div class="box">
              <h4>About Me</h4>
              <br />
              <p id="brief-Para">
                My name is Chandré Leigh Davids. I am a hard working individual
                who is always up for a challenge no matter how tedious it may
                seem. I absoloutely love learning new things. This is showcased
                through the fact that I am currently learning three languages,
                aside from coding, which are Mandarin, Korean and Arabic.
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
        </div>
      </div>

        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>