<template>
  <section class="why_section layout_padding">
    <div class="row col-12 col-sm-6 col-md-4">
      <div class="box">
        <div class="contact_info">
          <h4>Contact Information</h4>
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:rothasok@gmail.com">rothasok@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+85577393986">+855 77 39 39 86</a>
            </li>
            <li>
              <strong>Address:</strong> #181, st. Commercial Chip Mong271, Chak angre, Mean Chhey, Phnom Penh
            </li>
          </ul>
        </div>
       
      </div>
    </div>
     <div class="row col-12 col-sm-6 col-md-4">
      <!-- <div class="box"> -->
     <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31276.67476227058!2d104.92720480000001!3d11.5098779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516726f89429%3A0x9fbce4bc8c0ee7e9!2z4Z6f4Z-S4Z6a4Z-C4Z6a4Z6T4Z-E4Z6E!5e0!3m2!1skm!2skh!4v1728137326035!5m2!1skm!2skh"
            width="800"
            height="300"
            style="border:2;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div>
      
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>

html, body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;    /* Center vertically */
}
.row {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 800px; 
  height: 300px;
  margin: 0 auto; 
  text-align: center; 
}

.box {
  text-align: center; /* Center text inside the box */
}

.why_section {
  padding: 40px 20px; /* Add padding around the section */
}

.contact_info {
  margin-bottom: 10px;
  text-align: center; /* Keep the text centered */
}

.contact_info ul {
  list-style-type: none;
  padding: 0;
}

.contact_info li {
  margin-bottom: 10px;
}
h4{
  margin-top: 20px;
}
#map {
  padding: 40px;

text-align: center;
}
</style>
