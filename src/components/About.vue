<template>
  <div class="about-page">
    <section class="intro">
      <h1>About Me</h1>
      <p>
        I'm Rotha Sok, a multidisciplinary professional who combines creative design and technical development
        to build seamless, visually captivating, and highly functional digital experiences. My expertise in
        UI/UX design, frontend, and backend development helps me transform ideas into engaging realities.
      </p>
      <img src="images/moi.png" alt="Rotha Sok" class="intro-image" />
    </section>

    <section>
      <div class="container">
        <div class="row align-items-center justify-content-center mt-5">
          <!-- Part Designer -->
          <div class="col-md-4 text-center">
            <h2>Part Designer</h2>
            <img src="images/moi.png" alt="Designer Illustration" class="role-image" />
            <ul class="list-unstyled">
              <li>UI design</li>
              <li>UX design</li>
              <li>Design Systems</li>
              <li>Interaction design</li>
              <li>"Making it pop"</li>
            </ul>
          </div>

          <!-- Pie Chart -->
          <div class="col-md-4 text-center">
            <div class="pie-chart">
              <div class="designer-section">
                <span>Designer</span>
              </div>
              <div class="coder-section">
                <span>Coder</span>
              </div>
            </div>
            <img src="path/to/pie-chart-image.jpg" alt="Pie Chart" class="chart-image" />
          </div>

          <!-- Part Coder -->
          <div class="col-md-4 text-center">
            <h2>Part Coder</h2>
            <img src="path/to/coder-image.jpg" alt="Coder Illustration" class="role-image" />
            <ul class="list-unstyled">
              <li>Front-end development</li>
              <li>HTML / CSS</li>
              <li>JavaScript (kinda)</li>
              <li>Swearing at my computer</li>
              <li>Eating pizza</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="mission">
      <h2>My Mission</h2>
      <p>
        My mission is to build digital experiences that not only look great but also perform seamlessly. Whether
        I’m designing a sleek UI or developing backend systems, I focus on creating systems that are user-friendly,
        scalable, and efficient.
      </p>
      <img src="path/to/mission-image.jpg" alt="Mission Illustration" class="mission-image" />
    </section>

    <section class="career-journey">
      <h2>Career Journey</h2>
      <p>
        Starting as a frontend developer, I quickly expanded into backend development, mastering frameworks like
        Vue.js. My journey has allowed me to work on several large-scale projects, including the MPTC-HRMIS and
        MOI-SACMIS, delivering solutions for national-level government agencies.
      </p>
      <img src="path/to/career-image.jpg" alt="Career Journey" class="career-image" />
    </section>

    <section class="core-values">
      <h2>Core Values</h2>
      <ul>
        <li><strong>Innovation:</strong> I constantly seek to push the boundaries of what’s possible in digital solutions.</li>
        <li><strong>Collaboration:</strong> I believe great digital products are born through teamwork and open communication.</li>
        <li><strong>Integrity:</strong> I build solutions that are not only functional but also ethical and secure.</li>
        <li><strong>Growth:</strong> I am committed to continuous learning and staying at the forefront of the tech industry.</li>
      </ul>
      <img src="path/to/values-image.jpg" alt="Core Values" class="values-image" />
    </section>
  </div>
</template>

// <script>
// export default {
//   name: "About",
// };
// </script>

<style scoped>
.about-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.intro-image,
.role-image,
.chart-image,
.mission-image,
.career-image,
.values-image {
  width: 100%;
  max-width: 300px; /* Adjust this based on your design */
  margin-top: 20px;
}

h1, h2 {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
