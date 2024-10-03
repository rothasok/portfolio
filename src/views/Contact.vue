<template>
  <section class="contact_section layout_padding">
    <div class="heading_container heading_center">
      <h2>Contact <span>Me</span></h2>
    </div>
    
    <div class="contact_info">
      <h4>Contact Information</h4>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a>
        </li>
        <li>
          <strong>Address:</strong> 123 Main Street, City, Country
        </li>
      </ul>
    </div>

    <div class="social_media">
      <h4>Connect with Me</h4>
      <ul>
        <li>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
        </li>
      </ul>
    </div>
    
    <div class="map_section">
      <h4>Find Me Here</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.34216670241804!2d104.92206207438942!3d11.517768666979135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516726f89429%3A0x9fbce4bc8c0ee7e9!2z4Z6f4Z-S4Z6a4Z-C4Z6a4Z6T4Z-E4Z6E!5e0!3m2!1sen!2skh!4v1727970812763!5m2!1sen!2skh"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact_section {
  padding: 20px;
  font-family: "Poppins", sans-serif;
}

.heading_container {
  text-align: center;
  margin-bottom: 20px;
}

.contact_info,
.social_media,
.map_section {
  margin-bottom: 30px;
}

.contact_info ul,
.social_media ul {
  list-style-type: none;
  padding: 0;
}

.contact_info li,
.social_media li {
  margin-bottom: 10px;
}

.map_section {
  text-align: center;
}
</style>
