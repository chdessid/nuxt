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
      <aside class="widget">
                <div class="hover-a text-center">
                  <!--title-->
                  <div class="py-2">
                    <span class="text-mute small">- Advertisement -</span>
                  </div>
                  <!--content-->
                  <a href="#">
                    <img class="img-fluid bg-light" src="@/assets/img/300x300-jaridaa.jpg" alt="ads space">
                  </a>
                </div>
                <div class="gap-15"></div>
              </aside>

      <aside class="widget">
                <div class="block-title-4">
                  <h4 class="h5 title-arrow"><span>Travelling</span></h4>
                </div>
                <!--style 2-->
                <div class="small-post">
                  <!--post list-->
                  <article class="card card-full hover-a mb-2">
                    <div class="card-body pt-0">
                      <!--title-->
                      <h3 class="card-title h5">
                        <a href="#">Fans celebrate in Paris after side reaches World Cup final</a>
                      </h3>
                      <!--date-->
                      <div class="card-text small text-muted">
                        <time datetime="2019-06-16">Jun 16, 2019</time>
                      </div>
                    </div>
                  </article>
                  <!--post list-->
                  <article class="card card-full hover-a mb-2">
                    <div class="card-body pt-0">
                      <!--title-->
                      <h3 class="card-title h5">
                        <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                      </h3>
                      <!--date-->
                      <div class="card-text small text-muted">
                        <time datetime="2019-06-16">Jun 16, 2019</time>
                      </div>
                    </div>
                  </article>
                  <!--post list-->
                  <article class="card card-full hover-a mb-2">
                    <div class="card-body pt-0">
                      <!--title-->
                      <h3 class="card-title h5">
                        <a href="#">The 52 Places Traveler: Summer in France, in Two Very Different Ways</a>
                      </h3>
                      <!--date-->
                      <div class="card-text small text-muted">
                        <time datetime="2019-06-16">Jun 16, 2019</time>
                      </div>
                    </div>
                  </article>
                  <!--post list-->
                  <article class="card card-full hover-a mb-2">
                    <div class="card-body pt-0">
                      <!--title-->
                      <h3 class="card-title h5">
                        <a href="#">6 Simple Tips to Help Vegetarian or Vegan Travelers Eat Well, Anywhere</a>
                      </h3>
                      <!--date-->
                      <div class="card-text small text-muted">
                        <time datetime="2019-06-16">Jun 16, 2019</time>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="gap-0"></div>
              </aside>
      <!--End widget-->

    </div>
    <!--end Sidebar sticky-->
  </aside>
</template>
<script>
import { allArticles } from "@/graphql/articles";
import { allArticlesByCategory } from "~/graphql/categories";

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
  },
};
</script>
