<template>
  <div class="container">
    <h1 class="text-center mt-5">My Portfolio</h1>
    <div class="row">
      <div class="col-md-4" v-for="n in 6" :key="n">
        <div class="card mb-4">
          <img class="card-img-top" src="https://via.placeholder.com/150" alt="Portfolio Item">
          <div class="card-body">
            <h5 class="card-title">Project {{ n }}</h5>
            <p class="card-text">A description of the project goes here.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>
