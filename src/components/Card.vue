<template>
  <!-- service section -->
  <section class="service_section layout_padding">
    <!-- <div class="service_container"> -->
    <!-- <div class="container"> -->
    <div class="heading_container heading_center">
      <h2>my <span>Profession</span></h2>
      <p>
        "a professional who designs, develops, tests, and maintains software
        applications."
      </p>
    </div>
    <div class="row justify-content-center ">
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="box">
          <div class="img-box justify-content-center">
            <img :src="service.image" alt="Service Image" />
          </div>
          <div class="detail-box">
            <h5>{{ service.title }}</h5>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          image: "images/education.png",
          title: "highlighting the skills",
          description:
            "My technical skills include proficiency in Microsoft products (VB.NET, C#, SQL Server), web development (HTML, CSS, JavaScript, Bootstrap, Vue.js), database management (MySQL), and project management. I'm also skilled in creating user-friendly interfaces through UI/UX design.lastly, i've engaged myself in ICT policy.",
        },
        {
          image: "images/profession.png",
          title: "Achievements",
          description:
            "My achievements include the development of the MPTC HRMIS, Senate-Staff Management System (WinForm), MAFF-HRMIS (WinForm), MOI-Sub-National Administrative Councils Management Information System, Attendant System, and HRMIS-Mobile App.",
        },
        {
          image: "images/certificate.png",
          title: "Education",
          description:
            "Experienced ICT professional with a strong foundation in computer science and engineering. Possessing a Master's degree in ICT Techno Policy from Soongsil University, Korea, with a thesis on E-participation initiatives in Cambodia. Proven track record in project management, software development, and information security. Skilled in utilizing ICT services and applications, with expertise in big data analytics. Committed to driving technological advancements and contributing to the development of the ICT sector.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.col-md-4 {
  padding: 0 5px; 
}

.img-box {
  display: flex;
  justify-content: center; 
  align-items: center;     
  height: 80px;            
}

.img-box img {
  height: 80px; 
  object-fit: contain;
  margin: 0;
  padding: 0;
}

.row {
  margin: 0; 
}
.container-fluid{
  margin: 0;
  padding: 0;
}
.service_section {
  margin: 0; 
  padding: 0; 
}

.service_section img {
  display: block; 
  margin: 0 auto; 
  width: 100%; 
  height: auto; 
}

</style>
