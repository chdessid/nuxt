<template>
  <div>
    <div v-for="article in articles.data" :key="article.id">
  <h1>{{article.attributes.name}}</h1>

  </div>
  </div>
</template>
<script>
import { allArticles } from "../graphql/query";
export default {
  data() {
    return {
      articles: [],
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticles,
    },
  },
};

</script>
