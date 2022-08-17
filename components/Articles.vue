<template>
  <div>
    <div class="col-md-12">
      <div class="block-area">
        <div class="block-title-6">
          <h2 class="h5 border-primary">
            <span class="bg-primary text-white">Latest post</span>
          </h2>
        </div>
        <!-- <Articles :articles="articles"></Articles> -->
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
                  <p class="card-text" v-if="article.attributes.description">
                    {{ article.attributes.description | truncate(200) }}
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
</template>

<script>
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      loading: 0,
    };
  },
  props: {
    articles: Object,
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.data.length / 5);
    },
    leftArticles() {
      return this.articles.data.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.data.slice(
        this.leftArticlesCount,
        this.articles.length
      );
    },
  },
};
</script>
