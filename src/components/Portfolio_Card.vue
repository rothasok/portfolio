<template>
  <section class="why_section layout_padding">
      <div class="heading_container heading_center">
        <h2>Some of my latest <span>Works</span></h2>
      </div>
     <div class="row">
     
      <div class="why_container" v-for="(item,index) in projects" :key="index" >
        <div class="box" >
          <div class="img-box">
            <img :src="item.img" alt="" />
          </div>
          <div class="detail-box">
            <h5>{{item.header}}</h5>
            <p>
              {{item.detail}}
            </p>
          </div>
        </div>
      </div>
     </div>
  </section>
</template>
<script>

import useRepositoryStore from "@/store/repository.js";

export default {
  setup() {
    const projectStore = useRepositoryStore();
    return {
      projects: projectStore.projects,
    };
  },
};
</script>
<style scoped>
h2{
  padding: 40px;
}
</style>

