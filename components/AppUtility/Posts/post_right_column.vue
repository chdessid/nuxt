<template>
  <aside class="col-md-4 end-sidebar-lg">
    <!-- sidebar sticky start -->
    <div class="sticky">
      <!--widget start-->
      <aside class="widget">
        <!-- block title -->
        <div class="block-title-4">
          <h4 class="h5 title-arrow">
            <span>Most read</span>
          </h4>
        </div>
        <!-- block content -->
        <div class="small-post">
          <!--post list-->
          <article
            v-for="article in articles.data"
            :key="article.id"
            class="card card-full hover-a mb-4"
          >
            <div class="row">
              <!--thumbnail-->
              <div class="col-3 col-md-4 pe-2 pe-md-0">
                <div class="ratio_110-77 image-wrapper">
                  <a href="#">
                    <img
                      :to="`/post/${article.id}`"
                      class="img-fluid bg-light"
                      :src="`${uploadpath}/${article.attributes.devimages}`"
                      :alt="`${article.attributes.slug}`"
                      width="100%"
                      height="100%"
                      @error="setFallbackImageUrl"
                      
                    />
                  </a>
                </div>
              </div>
              <!-- title & date -->
              <div class="col-9 col-md-8">
                <div class="card-body pt-0">
                  <h3 class="card-title h6 h5-sm h6-md">
                    <nuxt-link :to="`/post/${article.id}`">{{
                      article.attributes.name
                    }}</nuxt-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
        </div>
        <!--end block content-->
        <div class="gap-0"></div>
      </aside>
      <!--End widget-->

      <!-- widget start -->
      <aside class="widget">
        <!-- widget content -->
        <div class="p-4 border bg-light-dark text-center mb-4">
          <!--title-->
          <h4>Get Updates</h4>
          <p class="text-dark-light">
            Subscribe our newsletter to get the last update into your inbox!
          </p>
          <!--form start-->
          <div class="mx-auto">
            <form
              id="subscribe"
              class="needs-validation"
              action="#"
              novalidate=""
            >
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  required=""
                  aria-label="email form"
                  placeholder="Enter your email address"
                />
                <button class="btn btn-primary" type="submit">Subscribe</button>
                <div class="invalid-feedback">Please insert email address.</div>
              </div>
            </form>
          </div>
          <!--end form-->
          <p class="small text-center text-dark-light mt-3">
            hate spammers, and never spam
          </p>
        </div>
        <!-- end widget content -->
        <div class="gap-0"></div>
      </aside>
    </div>
    <!--end Sidebar sticky-->
  </aside>
</template>
<script>
import { allArticles } from "@/graphql/articles";
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
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require(`~/assets/img/placeholder-jaridaa.png`);
    },
  },
};
</script>
