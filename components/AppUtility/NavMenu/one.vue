<template>
  <!--Main menu-->
  <div>
    <div class="container">
      <nav
        id="main-menu"
        class="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0"
      >
        <!--Navbar menu-->
        <div
          id="navbarTogglerDemo1"
          class="collapse navbar-collapse hover-mode"
        >
        

          <!--left main menu start-->
          <ul
            v-for="category in categories.data"
            id="start-main"
            class="navbar-nav main-nav navbar-uppercase first-start-lg-0"
          >
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :to="`/category/${category.attributes.name}`"
                >{{ category.attributes.name }}</NuxtLink
              >
            </li>
          </ul>
          <!--end left main menu-->

          <!--Search form-->
          <div class="navbar-nav ms-auto d-none d-lg-block">
            <div class="search-box">
              <!--hide search-->
              <div class="search-menu no-shadow border-0 py-0">
                <form
                  class="form-src form-inline"
                  action="../category/search.html"
                >
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control end-0"
                      name="keywords"
                      value=""
                      placeholder="Search..."
                      aria-label="search"
                    />
                    <span class="icones">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ms-n4"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                          style="
                            fill: none;
                            stroke: currentColor;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                        />
                        <line
                          x1="338.29"
                          y1="338.29"
                          x2="448"
                          y2="448"
                          style="
                            fill: none;
                            stroke: currentColor;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                        />
                      </svg>
                    </span>
                  </div>
                </form>
              </div>
              <!--end hide search-->
            </div>
          </div>
          <!--end search form-->
        </div>
        <!--End navbar menu-->
      </nav>
    </div>
  </div>
  <!-- End main menu -->
</template>
<script>
import { allArticlesByCategory } from "~/graphql/categories";

export default {
  data() {
    return {
      categories: [],
    };
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
};
</script>
