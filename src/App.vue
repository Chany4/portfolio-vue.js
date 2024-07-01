<template>
  <navbar-comp/>
  <main>
    <router-view/>
  </main>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
export default{
components:{
  NavbarComp
}
}
</script>

<style src='../src/assets/CSS/style.css'>
</style>

