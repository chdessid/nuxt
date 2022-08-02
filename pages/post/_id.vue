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
            <div class="col-md-8">
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
                    {{ article.data.attributes.name }}
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
                  {{ article.data.attributes.name }}
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
                    :src="`${uploadpath}/${article.data.attributes.devimages}`"
                    :alt="`${article.data.attributes.slug}`"
                    sizes="(max-width: 750px) 100vw, 750px"
                    data-hero-candidate=""
                    data-hero=""
                  />
                  <figcaption>{{ article.data.attributes.name }}</figcaption>
                </figure>
                <p>{{ article.data.attributes.description }}</p>
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
<post_right_column />
            <!-- <Aside_single/> -->
          </div>
        </div>
      </main>
                      

    </div>
    <!-- ========== END WRAPPER ========== -->
  </body>
</template>

<script>
import post_right_column from "@/components/AppUtility/Posts/post_right_column.vue";
import { allArticles } from "@/graphql/articles";

import { singlearticle } from "@/graphql/article";
export default {
  components: {
    post_right_column,
  },
  data() {
    return {
      uploadpath: process.env.UPLOADS_URL,
      article: [],
      articles: [],
    };
  },

  apollo: {
    article: {
      prefetch: true,
      query: singlearticle,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
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

<style></style>
