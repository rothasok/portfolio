<template>
  <section class="intro">
 
    <div class="container-fluid">
      <div class="row align-items-center">
        <!-- Left Column for Text -->
        <div class="col-lg-6 intro-text">
          <h2>{{$t("hello it's me")}}</h2>
          <h1>{{$t("rotha sok")}}</h1>
          <h3>
           {{$t("and i am")}}
            <span class="highlight">{{ $t('designer') }}</span>
          </h3>
          <p >
          {{ $t('i am a multidisciplinary') }}
          </p>
       
        </div>

        <!-- Right Column for Image -->
        <div class="col-lg-6 intro-image">
          <div class="hexagon-wrapper">
            <img src="images/photo1.jpg" alt="Rotha Sok" />
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <div>
    
   
  </div>
  <!-- Skills Section -->
  <section class="container">
    <div class="container-fluid">
        <Card />
        <Why />
    </div>
  </section>

  <!-- Footer Section -->
  <footer>
    <div class="container-fluid">
      <hr />
      <p>© 2024 Rotha Sok. All rights reserved.</p>
    </div>
  </footer>
</template>





<script>
import Card from "@/components/Card.vue";  // Ensure correct path to the component
import Why from "@/components/Why.vue";
export default {
  components: {
    Card,
    Why
  },
  name: "PortfolioPage",
  methods: {
    changeLocale() {
      if(this.$i18n.locale == "khm"){
        this.$i18n.locale="en";}
        else{
          this.$i18n.locale="khm";
        }
      },
    },
};

</script>


<style scoped>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #1a222d;
  color: #fdfbfb;
}

/* Container for Intro Section */
.intro {
  padding: 50px 0;
}

.intro-text {
  max-width: 100%;
}

.intro-text h2 {
  font-size: 28px;
}

.intro-text h1 {
  font-size: 50px;
  font-weight: 700;
  margin: 10px 0;
}

.intro-text h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.intro-text .highlight {
  color: #00e0ff;
}

.intro-text p {
  margin-bottom: 20px;
  padding-right: 10px;
}
.intro-text p {
  margin-bottom: 20px;
  text-align: justify;
}

.intro-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-wrapper {
  width: 500px;
  height: 500px;
  padding: 0;
  background-color: #000000;
}

.hexagon-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #000000;
}

/* Skills Section */
.skills {
  padding: 50px 0;
}

.skills h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

.skills ul {
  list-style-type: none;
  padding-left: 0;
}

.skills ul li {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Achievements Section */
.achievements {
  padding: 50px 0;
}

.achievements h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

.achievements ul {
  list-style-type: none;
  padding-left: 0;
}

.achievements ul li {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Certificates Section */
.certificates {
  padding: 50px 0;
}

.certificates h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

.certificates ul {
  list-style-type: none;
  padding-left: 0;
}

.certificates ul li {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Footer Section */
footer {
  padding: 20px 0;
  text-align: center;
}

footer hr {
  border-color: #fdfbfb;
}

footer p {
  margin: 10px 0;
  font-size: 14px;
}
</style>
