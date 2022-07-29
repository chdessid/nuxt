<template>
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
            <!--breadcrumb-->
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol
                  class="breadcrumb u-breadcrumb pt-3 px-0 mb-0 bg-transparent small"
                >
                  <li class="breadcrumb-item">
                    <a href="../home/index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="../category/category.html">Travel</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="../category/category2.html">Low budget</a>
                  </li>
                  <li
                    class="breadcrumb-item active d-none d-md-block"
                    aria-current="page"
                  >
                    {{ post.name }}
                  </li>
                </ol>
              </nav>
            </div>
            <!--end breadcrumb-->

            <!--content-->
            <div class="col-md-8">
              <div class="post-title mb-4">
                <!-- title -->
                <h1 class="entry-title display-4 display-2-lg mt-2">
                  {{ post.name }}
                </h1>
                <!-- atribute -->
                <!-- <Post_meta/> -->
              </div>

              <!-- post content -->
              <div class="post-content">
                <!-- images -->
                <figure class="image-wrapper ratio_single">
                  <img 
                    class="i-amphtml-fill-content i-amphtml-replaced-content" 
                    :src="`${uploadpath}/${post.devimages}`"
                    :alt="`${post.slug}`"
                    sizes="(max-width: 750px) 100vw, 750px" 
                    data-hero-candidate="" 
                    data-hero=""
                  />
                  <figcaption>{{ post.name }}</figcaption>
                </figure>
                <p>{{ post.description }}</p>
                <!-- images -->
                <p>
                  <strong>You must read other typology:</strong
                  ><a
                    class="text-primary"
                    href="../../snippets/post/typology.html"
                    target="_blank"
                  >
                    Typology post formate for article or pages.</a
                  >
                </p>
              </div>

              <!-- footer post -->
              <div class="entry-footer">
                <!-- tags -->
                <div class="tags-area">
                  <ul class="tags-links tagcloud ps-0">
                    <li><span class="fw-bold me-2">Tags</span></li>
                    <li><a href="../category/tags.html">travel</a></li>
                    <li><a href="../category/tags.html">cheap</a></li>
                    <li><a href="../category/tags.html">holiday</a></li>
                    <li><a href="../category/tags.html">dollar</a></li>
                    <li><a href="../category/tags.html">fun</a></li>
                    <li><a href="../category/tags.html">world</a></li>
                  </ul>
                </div>
                <div class="gap-0"></div>
              </div>

              <!-- <Author_box/> -->
              <!-- <Prev_next_post/> -->
              <!-- <Related_post /> -->
              <!-- <Suggestion_box/> -->
              <!-- <Comments/> -->
            </div>
            
            <!-- <Aside_single/> -->
          </div>
        </div>
      </main>
    </div>
    <!-- ========== END WRAPPER ========== -->

  </body>
</template>

<script>
import Author_box from "~/components/AppUtility/Single/author_box.vue";
import Prev_next_post from "../../components/AppUtility/Single/prev_next_post.vue";
import Related_post from "../../components/AppUtility/Single/related_post.vue";
import Comments from "../../components/AppUtility/Single/comments.vue";
import Aside_single from "../../components/AppUtility/Single/aside_single.vue";
import Post_meta from "../../components/AppUtility/Single/post_meta.vue";

export default {
  data: () => ({
    post: [],
    posts: [],
    sidebar: false,
    uploadpath: process.env.UPLOADS_URL,
  }),
  delimiters: ["[[", "]]"],
  mounted() {
    this.getPosts();
    this.getSinglePost();
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
    getPosts() {
      fetch(`${process.env.BASE_URL}/api/articles/`)
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
          this.posts = data.data.attributes;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSinglePost() {
      fetch(`${process.env.BASE_URL}/api/articles/${this.$route.params.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.post = data.data.attributes;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  head() {
  },
  components: {
    Author_box,
    Prev_next_post,
    Related_post,
    Comments,
    Aside_single,
    Post_meta,
  },
};
</script>

<style></style>
