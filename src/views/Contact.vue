<template>
  <section class="why_section layout_padding">
    <div class="row">
      <div class="box">
        <div class="contact_info">
          <h4>Contact Information</h4>
          <ul>
            <li>
              <strong>Email:</strong> <a href="rothasok@gmail.com">example@example.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+855 77 39 39 86">+855 77 39 39 86</a>
            </li>
            <li>
              <strong>Address:</strong> #181, st. Commercial Chip Mong271, Chak angre, Mean Chhey, Phnom Penh
            </li>
          </ul>
        </div>
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
.row {
  display: flex; /* Use flexbox to center the content */
  justify-content: center; /* Center the container horizontally */
  align-items: center; /* Center the container vertically */
  width: 800px; /* Set a fixed width for the row */
  height: 300px; /* Set a fixed height for the row */
  margin: 0 auto; /* Center the row itself on the page */
  text-align: center; /* Center text inside the row */
}

.box {
  text-align: center; /* Center text inside the box */
}

.why_section {
  padding: 40px 20px; /* Add padding around the section */
}

.contact_info {
  margin-bottom: 30px;
  text-align: center; /* Keep the text centered */
}

.contact_info ul {
  list-style-type: none;
  padding: 0;
}

.contact_info li {
  margin-bottom: 20px;
}
h4{
  margin-top: 20px;
}
</style>
