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
                      <!--END CATEGORY MENU HEADER -->
                      <!-- start block area-->
                      <div class="block-area">
                        <div class="block-title-6">
                          <h4 class="h5 border-primary">
                            <span class="bg-primary text-white">{{
                              category.attributes.name
                            }}</span>
                          </h4>
                        </div>
                        <!--block content-->
                        <div class="row">
                          <!--post left start-->
                          <div class="col-lg-6">
                            <div v-if="category.attributes.articles.data[0]">
                              <article class="card card-full hover-a mb-4">
                                <!--thumbnail-->
                                <div class="ratio_360-202 image-wrapper">
                                  <a href="#">
                                    <img
                                      class="img-fluid lazy entered loaded"
                                      :src="`${uploadpath}/${category.attributes.articles.data[0]}`"
                                      data-src=""
                                      :alt="`${category.attributes.articles.data[0]}`"
                                      data-ll-status="loaded"
                                      @error="setFallbackImageUrl"
                                    />
                                  </a>
                                </div>
                                <div class="card-body">
                                  <!-- title -->
                                  <h2 class="card-title h1-sm h3-lg">
                                    <nuxt-link
                                      :to="`/post/${category.attributes.articles.data[0].id}`"
                                      >{{
                                        category.attributes.articles.data[0]
                                          .attributes.name
                                      }}</nuxt-link
                                    >

                                    <!-- <a href="#">{{
                                      category.attributes.articles.data[0]
                                        .attributes.name
                                    }}</a> -->
                                  </h2>
                                  <!-- author, date and comments -->
                                  <div class="card-text mb-2 text-muted small">
                                    <span class="d-none d-sm-inline me-1">
                                      <a class="fw-bold" href="#">John Doe</a>
                                    </span>
                                    <time datetime="2019-10-22"
                                      >Oct 22, 2019</time
                                    >
                                    <span title="9 comment" class="float-end">
                                      <span class="icon-comments"></span> 9
                                    </span>
                                  </div>
                                  <!--description-->
                                  <p class="card-text">
                                    {{
                                      category.attributes.articles.data[0]
                                        .attributes.description | truncate(200)
                                    }}
                                  </p>
                                </div>
                              </article>
                            </div>
                          </div>
                          <!--end post left-->
                          <!--post right list start-->
                          <div class="col-lg-6">
                            <!--post list-->
                            <article
                              v-for="article_list in category.attributes
                                .articles.data"
                              class="card card-full hover-a mb-4"
                            >
                              <div class="row">
                                <!--thumbnail-->
                                <div class="col-3 col-md-4 pe-2 pe-md-0">
                                  <div class="ratio_115-80 image-wrapper">
                                    <a href="#">
                                      <img
                                        class="img-fluid lazy entered loaded"
                                        :src="`${uploadpath}/${category.attributes.articles.data[0]}`"
                                        data-src=""
                                        :alt="`${category.attributes.articles.data[0]}`"
                                        data-ll-status="loaded"
                                        @error="setFallbackImageUrl"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <!-- title & date -->
                                <div class="col-9 col-md-8">
                                  <div class="card-body pt-0">
                                    <h3 class="card-title h6 h5-sm h6-lg">
                                      <a href="#">{{
                                        article_list.attributes.name
                                      }}</a>
                                    </h3>
                                    <div class="card-text">
                                      <p>
                                        {{
                                          article_list.attributes.description
                                            | truncate(100)
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>

                            <!--End post list-->
                          </div>
                          <!--end post right list-->
                        </div>
                        <!-- end block content -->
                      </div>
                      <!-- end block area-->
                    </div>
                    <div class="col-md-12">
                      <div class="block-area">
                        <!--block title-->
                        <div class="block-title-6">
                          <h4 class="h5 border-primary">
                            <span class="bg-primary text-white"
                              >Food & Lifestyle</span
                            >
                          </h4>
                        </div>
                        <!-- block content -->
                        <div
                          v-for="categoryFood in categories.data"
                          v-if="categoryFood.attributes.name == 'Food'"
                          class="row"
                        >
                          <article
                            v-for="singleArticle in categoryFood.attributes
                              .articles.data"
                            class="col-sm-6 col-md-12 col-lg-6"
                          >
                            <div class="card card-full hover-a mb-4">
                              <div class="ratio_360-202 image-wrapper">
                                <nuxt-link :to="`/post/${singleArticle.id}`">
                                  <img
                                    class="img-fluid lazy entered loaded"
                                    :src="`${uploadpath}/${singleArticle.attributes.devimages}`"
                                    data-src=""
                                    :alt="`${singleArticle.attributes.slug}`"
                                    data-ll-status="loaded"
                                    @error="setFallbackImageUrl"
                                  />
                                </nuxt-link>
                              </div>
                              <a
                                class="bg-full-shadow"
                                aria-label="overlay article"
                                href="#"
                              ></a>
                              <div
                                class="position-absolute px-3 top-3 w-100 z-index-5 text-center"
                              >
                                <!--title-->
                                <a href="#">
                                  <h5
                                    class="card-title h3 h4-sm h3-md text-white my-1"
                                  >
                                    {{ singleArticle.attributes.name }}
                                  </h5>
                                </a>
                                <!--author-->
                                <span
                                  class="d-inline d-sm-none d-md-inline me-1"
                                >
                                  <a class="fw-bold text-white" href="#"
                                    >John Doe</a
                                  >
                                </span>
                                <!--date-->
                                <time
                                  class="d-sm-none d-md-inline m-0 text-white"
                                  datetime="2019-10-21"
                                  >Oct 21, 2019</time
                                >
                              </div>
                            </div>
                          </article>

                          <div class="gap-05"></div>
                        </div>
                        <!-- end block content -->
                      </div>
                    </div>
                    <div class="col-12 mb-4"></div>
                  </div>
                </div>
              </div>
              <post_right_column />
              <!--end left post-->

              <!-- START LATEST POSTS -->
              <div class="col-md-8">
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
    category: {
      prefetch: true,
      query: singleCategory,
      variables() {
        return { id: parseInt("1") };
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
