<template>
  <div>
    <div>
      <div class="wrapper">
        <main id="content">
          <div class="container">
            <div class="row">
              <h1 hidden>
                The Jaridaa Daily: World News,Recipes,Tips,Sport Telangana,
                Entertainment, India
              </h1>
              <hr />
              <div v-if="categories.data" class="col-md-8">
                <!--CATEGORY MENU HEADER -->
                <div class="block-area">
                  <div class="row">
                    <div class="col-lg-12" v-for="category in categories.data">
                      
                    </div>

                    <div class="col-12 mb-4"></div>
                  </div>
                </div>
              </div>
              <!--end left post-->

              <!-- START LATEST POSTS -->
              <div class="col-md-12">
                <div class="block-area">
                  <div class="block-title-6">
                    <h2 class="h5 border-primary">
                      <span class="bg-primary text-white">Latest post</span>
                    </h2>
                  </div>
                  <div class="border-bottom-last-0 first-pt-0">
                    <article
                      v-for="article in articles.data"
                      class="card card-full hover-a py-4"
                    >
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <nuxt-link :to="`/post/${article.id}`">
                              <img
                                class="img-fluid"
                                :src="`${uploadpath}/${article.devimages}`"
                                :alt="`${article.attributes.slug}`"
                                width="300"
                                height="300"
                                sizes="sm:300 md:300 lg:300"
                                @error="setFallbackImageUrl"
                              />
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
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
                </div>
              </div>
              <!-- END LATEST POSTS -->
            </div>
          </div>
        </main>
      </div>
    </div>


  </div>
</template>
<script>
import { allArticles } from "@/graphql/articles";
import { allArticlesByCategory } from "~/graphql/categories";
import { singleCategory } from "~/graphql/category";

import post_left_column from "@/components/AppUtility/Posts/post_left_column.vue";
import post_right_column from "@/components/AppUtility/Posts/post_right_column.vue";
export default {
  components: {
    post_left_column,
    post_right_column,
  },

  data() {
    return {
      uploadpath: process.env.UPLOADS_URL,
      articles: [],
      categories: [],

      category: [],
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
    categories: {
      prefetch: true,
      query: allArticlesByCategory,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require(`~/assets/img/placeholder-jaridaa.png`);
    },

    startFrom(arr, idx) {
      return arr.slice(idx);
    },
  },
};
</script>
