<template>
  <div>
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
                      <article
                        v-for="article in articles.data"
                        :key="article.id"
                        class="card card-full hover-a py-4"
                      >
                        <div class="row">
                          <div class="col-sm-6 col-md-12 col-lg-6">
                            <!--thumbnail-->
                            <div class="ratio_360-202 image-wrapper">
                              <nuxt-link :to="`/post/${article.id}`">
                                <img
                                  class="img-fluid"
                                  :src="`${uploadpath}/${article.attributes.devimages}`"
                                  :alt="`${article.attributes.slug}`"
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
                                <nuxt-link :to="`/post/${article.id}`">{{
                                  article.attributes.name
                                }}</nuxt-link>
                              </h3>
                              <p
                                class="card-text"
                                v-if="article.attributes.description"
                              >
                                {{
                                  article.attributes.description | truncate(200)
                                }}
                                ...
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <!-- <post_right_column/> -->
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <!-- ========== END WRAPPER ========== -->
      </body>
    </div>
  </div>
</template>
<script>
import { allArticles } from "@/graphql/articles";
import post_left_column from "@/components/AppUtility/Posts/post_left_column.vue";
import post_right_column from "@/components/AppUtility/Posts/post_right_column.vue";

export default {
  components:{
    post_left_column,
    post_right_column
  },
  data() {
    return {
      uploadpath: process.env.UPLOADS_URL,
      articles: [],
    };
  },
  filters: {
    truncate: function (data, num) {
      const reqdString = data.split("").slice(0, num).join("");
      return reqdString;
    },
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticles,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>
