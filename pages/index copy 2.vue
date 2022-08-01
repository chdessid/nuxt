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
              <h1 hidden>
                The Jaridaa Daily: World News,Recipes,Tips,Sport Telangana,
                Entertainment, India
              </h1>
              <hr />
              <!-- top section -->
              <post_left_column />
              <post_right_column />
              <div class="col-md-8">
                <!-- block start -->
                <div class="block-area">
                  <!-- block title -->
                  <div class="block-title-6">
                    <h2 class="h5 border-primary">
                      <span class="bg-primary text-white">Latest post</span>
                    </h2>
                  </div>
                  <!-- block content -->
                  <div class="border-bottom-last-0 first-pt-0">
                    <!--post start-->
                    <!-- <article v-for="post in datas" class="card card-full hover-a py-4"> -->
                    <article v-for="post in posts">
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <!--thumbnail-->
                          <div class="ratio_360-202 image-wrapper">
                            <nuxt-link :to="`/post/${post.id}`">
                              <nuxt-img
                                class="img-fluid"
                                :src="`${uploadpath}/${post.attributes.devimages}`"
                                :alt="`${post.attributes.slug}`"
                                width="300"
                                height="300"
                                sizes="sm:300 md:300 lg:300"
                              />
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                            <!--title-->
                            <h3 class="card-title h2 h3-sm h2-md">
                              <nuxt-link :to="`/post/${post.id}`">{{
                                post.attributes.name
                              }}</nuxt-link>
                            </h3>
                            <p
                              class="card-text"
                              v-if="post.attributes.description"
                            >
                              {{
                                post.attributes.description | truncate(200)
                              }}
                              ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <!-- end block content -->
                </div>
                <!--end block-->

                <!--Pagination-->
                <div class="clearfix my-4">
                  <nav class="float-start" aria-label="Page navigation example">
                    <!--page number-->
                    <ul class="pagination">
                      <li class="page-item active">
                        <span class="page-link">1</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html"
                          >2</a
                        >
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html"
                          >3</a
                        >
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html"
                          >4</a
                        >
                      </li>
                      <li class="page-item">
                        <span class="page-link disabled">....</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="../category/category.html"
                          >12</a
                        >
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="../category/category.html"
                          aria-label="Next"
                          title="Next page"
                        >
                          <span aria-hidden="true">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.2rem"
                              height="1.2rem"
                              fill="currentColor"
                              viewBox="0 0 512 512"
                            >
                              <polyline
                                points="184 112 328 256 184 400"
                                style="
                                  fill: none;
                                  stroke: currentColor;
                                  stroke-linecap: round;
                                  stroke-linejoin: round;
                                  stroke-width: 48px;
                                "
                              />
                            </svg>
                          </span>
                          <span class="visually-hidden">Next</span>
                        </a>
                      </li>
                    </ul>
                    <!--end page number-->
                  </nav>
                  <span class="py-2 float-end">Page 1 of 12</span>
                </div>
                <!--end pagination-->
              </div>
            </div>
          </div>
        </main>
      </div>
      <!-- ========== END WRAPPER ========== -->
    </body>
  </div>
</template>

<script>
import axios from "axios";
import post_left_column from "@/components/AppUtility/Posts/post_left_column.vue";
import post_right_column from "@/components/AppUtility/Posts/post_right_column.vue";

export default {
  name: "IndexPaage",
  components: {
    post_left_column,
    post_right_column,
    // post_list_view,
  },
  data() {
    return {
      posts: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios
        .get("https://api.jaridaa.com/api/articles")
        .then((response) => {
          console.log(response.data);
                            this.posts = response.data.data;

        });

    } catch (error) {
      this.error = error;
    }
  },
};
</script>
