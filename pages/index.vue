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
                    <div
                      class="col-lg-12"
                      v-for="category in categories.data"
                    ></div>

                    <div class="col-12 mb-4"></div>
                  </div>
                </div>
              </div>
              <!--end left post-->

              <!-- START LATEST POSTS -->
            <div class="block-area">
                <div class="row">
                <div v-for="article in articles.data" class="col-md-4">
                  <div class="pop-box border-bottom-last-0 first-pt-0" >
                    <div class="pop-img">
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
                    <div class="img-content">
                      <h3>
                        <nuxt-link :to="`/post/${article.id}`">
                          {{ article.attributes.name }}</nuxt-link
                        >
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
