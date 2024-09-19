<template lang="">
  <div class="Wrapper">
    <section class="section Landing i" id= "main">
      <LandingComp/>
    </section>

    <section class="section about i" id= "aboutSection">
      <AboutComp/>
    </section>
    
    <section class="section space-resume i" id= "Resume">
      <ResumeComp/>
    </section>

    <section class="section i" id= "skills">
      <SkillsComp/>
    </section>

    <section class="section space-projects i" id= "projects">
      <ProjectsComp/>
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
import ContactComp from '@/components/ContactComp.vue'
import FooterComp from '@/components/FooterComp.vue'
// import SpinnerComp from '@/components/SpinnerComp.vue'


export default {
  components : {
    LandingComp,
    AboutComp,
    ResumeComp,
    SkillsComp,
    ProjectsComp,
    ContactComp,
    FooterComp
    // SpinnerComp
  }
  }

</script>
<style>
  
</style>
