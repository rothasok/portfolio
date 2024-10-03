<template>

  <section class="why_section layout_padding">
    <div class="row">
      <div class="why_container" v-for="(item, index) in services" :key="index">
        <div class="box">
          <div class="img-box">
            <img :src="item.image" alt="Work Image" />
          </div>
          <div class="detail-box">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      services: [
        {
          title: 'Multidisciplinary Professional in Digital Design & Development',
          description:
            "I'm Rotha Sok, a multidisciplinary professional who combines creative design and technical development to build seamless, visually captivating, and highly functional digital experiences.",
          image: 'images/workspace.webp'
        },
          {
          title: 'My Mission',
          description:
            "My mission is to build digital experiences that not only look great but also perform seamlessly. Whether I’m designing a sleek UI or developing backend systems, I focus on creating systems that are user-friendly,scalable, and efficient.",
          image: 'images/mission.webp'
        },
        {
          title: 'Career Journey',
          description:
            " Starting as a frontend developer, I quickly expanded into backend development, mastering frameworks like Vue.js. My journey has allowed me to work on several large-scale projects, including the MPTC-HRMIS and MOI-SACMIS, delivering solutions for national-level government agencies.",
          image: 'images/carrer.webp'
        },
   {
  title: 'Core Values',
  description: "I constantly seek to push the boundaries of what’s possible in digital solutions through innovation. I believe that great digital products are born through teamwork and open communication, emphasizing the importance of collaboration. I build solutions that are not only functional but also ethical and secure, demonstrating my commitment to integrity. Lastly, I am dedicated to continuous learning and staying at the forefront of the tech industry, reflecting my value of growth.",
  image: 'images/core.jpg'
}
      ]
    };
  }
};
</script>
<style scoped>
.mission{
  padding: 20px;
}
</style>

