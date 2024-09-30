<template>

  <!-- why section -->
  <section class="why_section layout_padding">
    <!-- <div class="container"> -->
      <div class="heading_container heading_center">
        <h2>Some of my latest <span>Work</span></h2>
      </div>
     <div class="row">
     
      <div class="why_container" v-for="(why,index) in whys" :key="index" >
        <div class="box" >
          <div class="img-box">
            <img :src="why.img" alt="" />
          </div>
          <div class="detail-box">
            <h5>{{why.header}}</h5>
            <p>
              {{why.detail}}
            </p>
          </div>
        </div>
      </div>
     </div>
    <!-- </div> -->
  </section>
  <!-- end why section -->
</template>
<script>

export default {
  data() {
    return {
      whys: [
        {
          img: "images/HRMIS.png",
          detail: "The MPTC-HRMIS (Human Resource Management Information System) is a national HR management platform designed for the Ministry of Post and Telecommunications in Cambodia. It provides a centralized system for managing human resource information, accessible via both client-server technology and the internet. The system streamlines operational HR tasks such as managing employee records, payroll, and administrative workflows. It supports functions like tracking employee information, managing attendance, and facilitating HR reporting, which can be accessed through mobile applications available on both Android and iOS platforms. This system enhances accessibility and efficiency for HR departments and employees, reducing reliance on paper-based processes and allowing better data accuracy and confidentiality through digital platforms. Regular updates improve its functionality and address minor issues, ensuring consistent service.",
          header:"MPTC-HRMIS"
       },
        {
          img: "images/mobile.png",
          detail:
            "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
          header:"Mobile App"
        },
        {
          img: "images/moi.png",
          detail:
            "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
          header:"MOI-SACMIS"
        },
        
      ],
    };
  },
};
</script>
