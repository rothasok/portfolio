<template>
  <div class="container">
    <h2 class="text-center mt-5">About <span>Me</span></h2>
    <p class="lead text-center">Learn more about my background and skills.</p>
  </div>
 
    <section class="container">
    <div class="container-fluid">
        <About />
        
    </div>
    
  </section>
   <!-- Footer Section -->

 
</template>

<script>
import About from "@/components/About.vue";  // Ensure correct path to the component
// import Why from "@/components/Why.vue";
export default {
  components: {
    About,
    // Why
  },
  name: "PortfolioPage"
};
</script>
<style scoped>
span {
  color:#00bbf0;
}
</style>
