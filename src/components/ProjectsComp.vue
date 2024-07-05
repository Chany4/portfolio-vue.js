<template lang="">
    <div>
         <!-- Projects Section -->

        <div id="projectLabel" >
          <h1>My current Work</h1>
        </div>
        <CardComp/>


    
        
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
  components:{
    CardComp
  }
    
}
</script>
<style scoped>

.space-projects{
    background-color:var(--linear-peach-pink)
}
    h1{
      font-size: 9rem;
      font-family: "Chathura", sans-serif;
    }
    #projectLabel{
      display: flex;
      justify-content: flex-start ;
    }
</style>