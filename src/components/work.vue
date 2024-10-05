<template>
  <section class="why_section layout_padding">
    
      <div class="heading_container heading_center">
        <h2>Some of my latest <span>Work</span></h2>
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
    <!-- </div> -->
  </section>
  <!-- end why section -->
</template>
<script>

// export default {
//   data() {
//     return {
//       services: [
//         {
//           img: "images/HRMIS.png",
//           detail: "The MPTC-HRMIS (Human Resource Management Information System) is a national HR management platform designed for the Ministry of Post and Telecommunications in Cambodia. It provides a centralized system for managing human resource information, accessible via both client-server technology and the internet. The system streamlines operational HR tasks such as managing employee records, payroll, and administrative workflows. It supports functions like tracking employee information, managing attendance, and facilitating HR reporting, which can be accessed through mobile applications available on both Android and iOS platforms. This system enhances accessibility and efficiency for HR departments and employees, reducing reliance on paper-based processes and allowing better data accuracy and confidentiality through digital platforms. Regular updates improve its functionality and address minor issues, ensuring consistent service.",
//           header:"MPTC-HRMIS"
//        },
//         {
//           img: "images/mobile.png",
//           detail:
//             "The MPTC HRMIS Mobile App streamlines HR processes by providing employees with secure access to personal information, payroll details, and leave management. It uses face recognition for accurate attendance tracking and offers an HR dashboard for key updates. The app supports performance evaluations, enabling supervisors to monitor employee progress, while HR staff can manage records and attendance remotely. With multi-factor authentication, it ensures data security and is available in both Khmer and English. The app reduces reliance on manual processes, creating a more efficient and digitalized HR system.",
//           header:"Mobile App"
//         },
//         {
//           img: "images/moi.png",
//           detail:
//             "The Sub-National Administrative Councils Management Information System (SACMIS), developed by the Ministry of Post and Telecommunications (MPTC) for the Ministry of Interior, is a comprehensive platform designed to enhance the management and operations of sub-national councils. It streamlines administrative tasks such as data management, reporting, and budgeting, ensuring efficient governance at the local level. The system allows for better coordination between provincial, municipal, and district councils, providing real-time data access and improving decision-making. With user-friendly interfaces and secure data handling, SACMIS promotes transparency and accountability within sub-national administrative bodies. This system fosters more efficient and effective public administration across Cambodia's local governments.",
//           header:"MOI-SACMIS"
//         },
        
//       ],
//     };
//   },
// };



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


