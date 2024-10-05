<template>
  <!-- Footer Section -->
  <footer>
    <div class="container-fluid">
      <hr />
      <p>© 2024 Rotha Sok. All rights reserved.</p>
    </div>
  </footer>

  <!-- info section -->
  <section class="info_section layout_padding2">
    <div class="container-fluid">
      <!-- Changed from container to container-fluid -->
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_contact">
            <h4>Address</h4>
            <div class="contact_link_box">
              
                 <router-link to="/contact" exact-active-class="active">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span> Location </span>
                 </router-link>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span> Call +855 77 39 39 86 </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> rothasok@gmail.com </span>
              </a>
            </div>
          </div>
          <div class="info_social">
            <a
              href="https://web.facebook.com/rotha.sok/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://x.com/Rotha29470398">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/rothasok/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_detail">
            <h4>Info</h4>
            <p>
              With a focus on software development, we aim to deliver
              exceptional results that help you achieve your goals. Our
              experienced team combines cutting-edge technology with industry
              expertise to ensure that every project is handled with the utmost
              care and precision.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto info_col">
          <div class="info_link_box">
            <h4>Links</h4>
            <div class="info_links">
              <div v-for="(item, index) in navs" class="nav-item" :key="index">
                <router-link :to="item.path" exact-active-class="active">
                  {{ $t(item.name) }}
                  <span class="sr-only">(current)</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <h4>Subscribe</h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- end info section -->
</template>
<script>
export default {
  data() {
    return {
      navs: [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "blog", path: "/blog" },
        { name: "portfolio", path: "/portfolio" },
        { name: "contact", path: "/contact" },
      ],
    };
  },
  methods: {
    changeLocale() {
      if (this.$i18n.locale == "khm") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "khm";
      }
    },
  },
};
</script>


<style scoped>
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