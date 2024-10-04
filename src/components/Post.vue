<template>
  <section class="why_section layout_padding">
    <div class="row">
      <div class="why_container">
        <div class="box" v-for="(book, index) in books" :key="index">
          <div class="img-box">
            <img :src="book.image" :alt="book.title" />
          </div>
          <div class="detail-box">
            <a 
              :href="book.link" 
              target="_blank" 
              rel="noopener noreferrer"
            > 
              <h5 class="read-more">{{ book.title }}</h5>
            </a>
            <p>
              {{ book.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      books: [
        {
          title: "UI is Communication",
          image: "/images/ui_is_communication.jpg",
          link: "https://www.amazon.com/gp/product/0123969808/ref=as_li_tl?ie=UTF8&tag=cre8ivecomm0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0123969808&linkId=671a9a6012925793dd5c05380af1b8f7",
          description: "The book offers a practical approach to UI design, focusing on tools and techniques to solve real-world problems. It challenges the subjective perception of UI design as solely aesthetics, emphasizing its objective role in user communication. The author likens interfaces to conversations, highlighting the importance of what the interface says, how it says it, and when it says it. Writing down the conversation between the interface and the user is proposed as a foundation for effective UI design. The book includes numerous real-world examples and design makeovers to illustrate the concepts."
        },
        {
          title: "Designing with the Mind in Mind",
          image: "/images/design.jpg",
          link: "https://www.amazon.com/gp/product/0124079148/ref=as_li_tl?ie=UTF8&tag=cre8ivecomm0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0124079148&linkId=d0d8a7c7bea7909f9d323b8fdc200e98",
            description: "In this completely updated and revised edition of Designing with the Mind in Mind, Jeff Johnson provides you with just enough background in perceptual and cognitive psychology that user interface (UI) design guidelines make intuitive sense rather than being just a list or rules to follow. Early UI practitioners were trained in cognitive psychology, and developed UI design rules based on it. But as the field has evolved since the first edition of this book, designers enter the field from many disciplines. Practitioners today have enough experience in UI design that they have been exposed to design rules, but it is essential that they understand the psychology behind the rules in order to effectively apply them.",
        },
         {
          title: "Evil by Design",
          image: "/images/evil.jpg",
          link: "https://www.amazon.com/gp/product/1118422147/ref=as_li_tl?ie=UTF8&tag=cre8ivecomm0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1118422147&linkId=533e757e52a94180b1cf53f34394c0c4",
            description: "Learn how companies make us feel good about doing what they want. Approaching persuasive design from the dark side, this book melds psychology, marketing, and design concepts to show why we're susceptible to certain persuasive techniques. Packed with examples from every nook and cranny of the web, it provides easily digestible and applicable patterns for putting these design techniques to work.",
        },
        // Add more book objects here if needed
      ],
    };
  },
};
</script>


<style scoped>
.read-more {
  color: #007bff;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

</style>