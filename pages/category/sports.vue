<template>
  <div>
    <div>
      <body class="bg-repeat font-family">
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
import { allArticlesByCategory } from "@/graphql/categories";
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
