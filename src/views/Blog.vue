<template>
  <section class="blog-page">
    <!-- Skills Section -->

    <div class="container justify-content-center">
       <div class="box">
      <div class="row align-items-start">
       
              <div class="col-4 mr-20 pr-3 pb-4 pt-5">
                <img
                  src="images/brain.png"
                  alt="Featured Blog Post"
                  class="img-fluid"
                />
              </div>
              <div class="col-8 mr-20 pr-3 pb-4 pt-5">
                <h2 class="post-title">UI design books you should read in 2024</h2>
                <p class="post-excerpt">
                  The recommended reading materials focus on three key areas:
                  practical tools and foundational knowledge for designing user
                  interfaces, the psychological principles that influence interface
                  design, and the business aspects of persuasion and sales within the
                  context of user interfaces.
                </p>
                <router-link
                  :to="{ name: 'post', params: { id: 1 } }"
                  class="btn btn-primary"
                >
                  Read more
                </router-link>
              </div>
              </div>
      </div>
      <div class="box  pr-3 pb-4 pt-5">
      
        <div class="row justify-content-center">
          <div
            class="col-12 col-sm-6 col-md-4"
            v-for="post in posts"
            :key="post.id"
          >
            <div>
              <img :src="post.thumbnail" :alt="post.title" />
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-excerpt">{{ post.excerpt }}</p>
              <router-link
                :to="{ name: 'post', params: { id: post.id } }"
                class="read-more"
              >
                Read more
              </router-link>
            </div>
          </div>
        </div>
        </div>
      </div>
    

    <section>
      <div class="container-fluid">
        <Course />
      </div>
    </section>
  </section>
</template>

<script>
import Course from "@/components/Course.vue";

export default {
  components: {
    Course,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "UI design books you should read in 2024",
          excerpt: "This is a short excerpt for the first blog post.",
          thumbnail: "images/ui_is_communication.jpg",
        },
        {
          id: 2,
          title: "Designing with the Mind in Mind",
          excerpt:
            "In this completely updated and revised edition of Designing with the Mind in Mind.",
          thumbnail: "/images/design.jpg",
        },
        {
          id: 3,
          title: "Evil by Design",
          excerpt: "Interaction Design to Lead Us into Temptation.",
          thumbnail: "/images/evil.jpg",
        },

        // Add more blog posts here
      ],
      currentPage: 1,
      totalPages: 3, // Example for pagination
    };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style scoped>
/* Skills Section */
.skills-section h2 span {
  color: #00bbf0;
}

/* Blog Layout Styles */
.blog-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.featured-post {
  display: flex;
  margin: 40px 0;
  background-color: #282929;
  padding: 20px;
}

.post-thumbnail img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
}

.post-details {
  margin-left: 20px;
  flex-grow: 1;
}

.post-title {
  font-size: 28px;
  margin-bottom: 10px;
}

.post-excerpt {
  font-size: 18px;
}

.read-more {
  color: #007bff;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

/* Blog Grid Section */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.blog-card {
  background-color: #282929;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-thumbnail img {
  width: 100%;
  border-radius: 8px;
}

.card-title {
  font-size: 20px;
  margin: 10px 0;
}

.card-excerpt {
  font-size: 18px;
  color: #ffffff;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 5px;
}

.pagination button:disabled {
  background-color: #ccc;
}
h1 {
  padding-top: 20;
}
p,
li {
  font-family: caveat;
  font-size: 18pt;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px; /* Add space between the boxes */
}

.box + .box {
  margin-top: 40px; /* Optional, if you want space from the top of the second box */
}

</style>
