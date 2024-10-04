<template>
  <div>
    <!-- Skills Section -->
 

    <!-- Blog Page -->
    <section class="blog-page">
      <!-- Main Featured Post -->
      <section class="featured-post">
        <div class="post-thumbnail">
          <img src="images/brain.png" alt="Featured Blog Post" />
        </div>
        <div class="post-details">
          <h2 class="post-title">UI design books you should read in 2024</h2>
          <p class="post-excerpt">
            The recommended reading materials focus on three key areas: practical tools and foundational knowledge for designing user interfaces, the psychological principles that influence interface design, and the business aspects of persuasion and sales within the context of user interfaces..
          </p>
          <router-link :to="{ name: 'post', params: { id: 1 } }" class="read-more">
            Read more
          </router-link>
        </div>
      </section>

      <!-- Blog Grid -->
      <section class="blog-grid">
        <div v-for="post in posts" :key="post.id" class="blog-card">
          <div class="card-thumbnail">
            <img :src="post.thumbnail" :alt="post.title" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="card-excerpt">{{ post.excerpt }}</p>
            <router-link :to="{ name: 'post', params: { id: post.id } }" class="read-more">
              Read more
            </router-link>
          </div>
        </div>
      </section>

      <!-- Pagination Section -->
      <!-- <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div> -->

      <!-- Course Section -->
      <div class="container-fluid">
        <Course />
      </div>
    </section>
  </div>
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
          excerpt: "In this completely updated and revised edition of Designing with the Mind in Mind.",
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
  font-size: 16px;
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
  background-color: #282929;;
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
  font-size: 14px;
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
h1{
  padding-top: 20;
}
</style>
