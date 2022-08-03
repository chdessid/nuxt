<template>
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
            <div class="col-md-8">
              <!-- block start -->
              <div class="block-area">
                <div class="row">
                  <div class="block-title-6">
                    <h2
                      v-if="category.data.attributes.name"
                      class="h5 border-primary"
                    >
                      <span class="bg-primary text-white">{{
                        category.data.attributes.name
                      }}</span>
                    </h2>
                  </div>
                  <!-- block content -->
                  <div class="border-bottom-last-0 first-pt-0">
                    <!--post start-->
                    <article
                      v-for="singlepost in category.data.attributes.articles
                        .data"
                      :key="singlepost.id"
                      class="card card-full hover-a py-4"
                    >
                      <div class="row">
                        <div class="col-sm-6 col-md-12 col-lg-6">
                          <div class="ratio_360-202 image-wrapper">
                            <nuxt-link :to="`/post/${singlepost.id}`">
                              <img
                                class="img-fluid"
                                :src="`${uploadpath}/${singlepost.attributes.devimages}`"
                                :alt="`${singlepost.attributes.slug}`"
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
                              <nuxt-link :to="`/post/${singlepost.id}`">{{
                                singlepost.attributes.name
                              }}</nuxt-link>
                            </h3>
                            <p
                              class="card-text"
                              v-if="singlepost.attributes.description"
                            >
                              {{
                                singlepost.attributes.description
                                  | truncate(200)
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
            </div>
                          <post_right_column />

          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { singleCategory } from "~/graphql/category";
import post_right_column from "@/components/AppUtility/Posts/post_right_column.vue";

export default {
    components: {
    post_right_column,
  },
  data() {
    return {
      uploadpath: process.env.UPLOADS_URL,
      category: [],
      single: [],
    };
  },
  filters: {
    truncate: function (data, num) {
      const reqdString = data.split("").slice(0, num).join("");
      return reqdString;
    },
  },

  apollo: {
    category: {
      prefetch: true,
      query: singleCategory,
      variables() {
        return { id: parseInt("5") };
      },
    },
  },
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require(`~/assets/img/placeholder-jaridaa.png`);
    },
  },
};
</script>
