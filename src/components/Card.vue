<template>
  <!-- service section -->
  <section class="service_section layout_padding">
    <!-- <div class="service_container"> -->
    <!-- <div class="container"> -->
    <div class="heading_container heading_center">
      <h2><span>{{ $t('my profession') }}</span></h2>
      <p>
       {{ $t('professional desc') }}
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
            <h5>{{ $t(service.title) }}</h5>
            <p>{{ $t(service.description) }}</p>
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
            "skill desc",
        },
        {
          image: "images/profession.png",
          title: "achievements",
          description:
            "achievement desc",
        },
        {
          image: "images/certificate.png",
          title: "education",
          description:
            "edcuation desc",
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
