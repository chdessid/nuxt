<template>
  <div>


    <body class="bg-repeat font-family">
      <!--Skippy-->

      <a id="skippy" class="visually-hidden-focusable" href="#content">
        <div class="container">
          <span class="skiplink-text">Skip to main content</span>
        </div>
      </a>

      <!--Background image-->
      <div class="bg-image"></div>

      <!-- ========== WRAPPER ========== -->
      <div class="wrapper">
        <!--Content start-->
        <main id="content">
          <div class="container">
            <div class="row">

              <h1 hidden>The Jaridaa Daily: World News,Recipes,Tips,Sport Telangana, Entertainment, India</h1>
              <hr>
              <!-- top section -->
              <post_left_column/>  
              <post_right_column/> 
              <post_list_view :datas="posts" />
            </div>
          </div>
        </main>
      </div>
      <!-- ========== END WRAPPER ========== -->
    </body>
  </div>
</template>

<script>
import post_left_column from "~/components/AppUtility/Posts/post_left_column.vue";
import post_right_column from "~/components/AppUtility/Posts/post_right_column.vue";
import post_list_view from "~/components/AppUtility/Posts/post_list_view.vue";


export default {
  components: {
    post_left_column,
    post_right_column,
    post_list_view,
  },
  name: "IndexPage",

  data() {
    return {
      uploadpath: process.env.UPLOADS_URL,
      posts: [],
      currentPage: 1,
      showNextButton: false,
      showPrevButton: false,
      error: null,
    };
  },
  delimiters: ["[[", "]]"],
  mounted() {
    this.getPosts(), this.getPages();
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    loadNext() {
      this.currentPage += 1;
      this.getPosts();
    },
    loadPrev() {
      this.currentPage -= 1;
      this.getPosts();
    },
    getPages() {
      fetch(`${process.env.BASE_URL}/api/articles`)
        .then((pager) => {
          return pager.json();
        })
        .then((data) => {
          this.page = data.meta.pagination;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPosts() {
      // fetch(`${process.env.BASE_URL}/api/articles?pagination[page]=2&pagination[pageSize]=30`)
      fetch(`${process.env.BASE_URL}/api/articles`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.showNextButton = false;
          this.showPrevButton = false;
          if (data.next) {
            this.showNextButton = true;
          }
          if (data.previous) {
            this.showPrevButton = true;
          }
          this.posts = data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
