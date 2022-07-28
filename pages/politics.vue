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
              <!-- top section -->
              <div class="col-12 mt-05">
                <!-- <BreakingNews /> -->
                <!-- <big_grid/> -->
              </div>
              <!-- <post_left_column/>  -->
              <!-- <post_right_column/>  -->
              <!-- <post_full_column/>  -->
              <post_list_view :datas="posts" />
              <!-- <aside_read_more/> -->
            </div>
          </div>
        </main>
      </div>
      <!-- ========== END WRAPPER ========== -->

      <!--Back to top-->
      <a class="back-top btn btn-light border position-fixed r-1 b-1 backtop-is-visible backtop-fade-out" href="#">
	    <svg class="bi bi-arrow-up" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
	      <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path>
	    </svg>
	</a>

      <!-- <a class="back-top btn btn-light border position-fixed r-1 b-1" href="#">
        <svg
          class="bi bi-arrow-up"
          width="1rem"
          height="1rem"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
</a> -->
    </body>
  </div>
</template>

<script>
import BreakingNews from "@/components/AppUtility/BreakingNews/one.vue";
import big_grid from "~/components/AppUtility/Posts/post_big_grid.vue";
import post_left_column from "../components/AppUtility/Posts/post_left_column.vue";
import post_right_column from "../components/AppUtility/Posts/post_right_column.vue";
import post_full_column from "../components/AppUtility/Posts/post_full_column.vue";
import post_list_view from "../components/AppUtility/Posts/post_list_view.vue";

import aside_read_more from "@/components/AppUtility/Aside/aside_read_more.vue";


export default {
  components: {
    BreakingNews,
    big_grid,
    post_left_column,
    post_right_column,
    post_full_column,
    post_list_view,
    aside_read_more,
  },
  name: "IndexPage",

  data() {
    return {
      sidebar: false,

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
      fetch(`${process.env.BASE_URL}/api/articles?sort=name:ASC&filters%5B$and%5D%5B0%5D%5Bcategories%5D%5Bname%5D%5B$eq%5D=politics&locale=en`)
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
