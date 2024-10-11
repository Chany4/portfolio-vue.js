<template lang="">
  <div class="Wrapper">
    <section class="section Landing i" id= "main">
      <LandingComp/>
    </section>

    <section class="section about i padding" id= "aboutSection">
      <AboutComp/>
    </section>

    <section class="section i padding" id= "skills">
      <SkillsComp/>
    </section>
    
    <section class="section padding space-resume i" id= "Resume">
      <ResumeComp/>
    </section>

    <section class="section i padding" id= "projects">
      <CodeComp/>
    </section>

    
    <section class="section padding" id="contact">
      <ContactComp/>
    </section>
    
    <section class="footer">
      <FooterComp/>
    </section>

  </div>
</template>
<script>
import LandingComp from '@/components/LandingComp.vue'
import AboutComp from '@/components/AboutComp.vue'
import ResumeComp from '@/components/ResumeComp.vue'
import SkillsComp from '@/components/SkillsComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CodeComp from '@/components/CodeComp.vue'


export default {
  components : {
    LandingComp,
    AboutComp,
    ResumeComp,
    SkillsComp,
    ContactComp,
    FooterComp,
    CodeComp
  }
  }

</script>
<style scoped>
  #main{
    background-image: url('https://chany4.github.io/images-portfolio-re/images/for%20chandre%203.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; /* This replaces object-fit */
    margin: 0;
  }
  .padding{
    padding: 20px;
  }
  #Resume{
    background: rgba(255, 255, 255, 0.5); /* Optional: semi-transparent background */
    backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
    
  }
  #projects{
    background: rgba(255, 255, 255, 0.5); /* Optional: semi-transparent background */
    backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
    
  }
  #skills{
    background: rgba(255, 255, 255, 0.5); /* Optional: semi-transparent background */
    backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
  }

  @media (min-width: 768px) { /* Adjust the min-width as needed for your design */
    .padding {
        padding: 20px 100px 20px 160px;
    }
}

</style>
