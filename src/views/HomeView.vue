<template lang="">
  <div class="Wrapper">
    <section class="section Landing" id= "main">
      <LandingComp/>
    </section>

    <section class="section about" id= "aboutSection">
      <AboutComp/>
    </section>
    
    <section class="section space-resume" id= "Resume">
      <ResumeComp/>
    </section>

    <section class="section" id= "skills">
      <SkillsComp/>
    </section>

    <section class="section space-projects" id= "projects">
      <ProjectsComp/>
    </section>
    
    <section  class="section space" id= "testimonials">
      <TestimonialsComp/>
    </section>
    
    <section class="section" id="contact">
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
import ProjectsComp from '@/components/ProjectsComp.vue'
import TestimonialsComp from '@/components/TestimonialsComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import FooterComp from '@/components/FooterComp.vue'


export default {
  components : {
    LandingComp,
    AboutComp,
    ResumeComp,
    SkillsComp,
    ProjectsComp,
    TestimonialsComp,
    ContactComp,
    FooterComp
  }
  }

</script>
<style>
  
</style>
