<template>
  <header class="header_section">
    <div class="container">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
       
        <!-- Toggler Button for Mobile View -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <!-- <li class="nav-item" :class="{ active: $route.path === '/' }">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/about' }">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/skills' }">
              <router-link class="nav-link" to="/skills">Skills</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/portfolio' }">
              <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/contact' }">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li> -->

            <li
              v-for="(item, index) in navs"
              class="nav-item"
              :key="index"
             
            >
              <router-link :to="item.path" class="nav-link"
                >{{ $t(item.name) }}
                <span class="sr-only">(current)</span></router-link
              >
            </li>
         

            <!-- Language Toggle Button -->
            <li class="nav-item">
              <button @click="changeLocale" class="btn btn-link">{{ $t('kh') }}</button>
            </li>

           
           
          </ul>
        </div>
      </nav>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: 'home', path: '/' },
        { name: 'about', path: '/about' },
        { name: 'skills', path: '/skills' },
        { name: 'portfolio', path: '/portfolio' },
        { name: 'contact', path: '/contact' },
      ],
    };
  },
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
.header_section {
  background-color: rgb(0, 0, 0);
}

.navbar-brand {
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
}

.navbar-nav .nav-link {
  color: #ffffff;
  margin-right: 10px;
}

.navbar-nav .nav-link:hover {
  color: #00e0ff;
  padding: 20px;
}

.nav-item.active .nav-link {
  color: #00e0ff; /* Highlight the active link */
}

.nav_search-btn {
  background-color: transparent;
  color: #ffffff;
  border: none;
}

.nav_search-btn:hover {
  color: #00e0ff;
}
</style>

