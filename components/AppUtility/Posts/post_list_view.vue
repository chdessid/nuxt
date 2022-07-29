<template>
  <div class="col-md-8">
    <!-- block start -->
    <div class="block-area">
      <!-- block title -->
      <div class="block-title-6">
        <h2 class="h5 border-primary">
          <span class="bg-primary text-white">Latest post</span>
        </h2>
      </div>
      <!-- block content -->
      <div class="border-bottom-last-0 first-pt-0">
        <!--post start-->
        <article v-for="post in datas" class="card card-full hover-a py-4">
          <div class="row">
            <div class="col-sm-6 col-md-12 col-lg-6">
              <!--thumbnail-->
              <div class="ratio_360-202 image-wrapper">
                <a href="#">
                  <NuxtImg 
                    class="img-fluid"
                    :src="`${uploadpath}/${post.attributes.devimages}`"
                    :alt="`${post.attributes.slug}`"
                    width="300"
                    height="300"
                    sizes="sm:300 md:300 lg:300"
                  />
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-12 col-lg-6">
              <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                <!--title-->
                <h3 class="card-title h2 h3-sm h2-md">
                  <nuxt-link :to="`/article/${post.id}`">{{
                    post.attributes.name
                  }}</nuxt-link>
                </h3>
                <!--author and date-->
                <div class="card-text mb-2 text-muted small">
                  <span class="d-none d-sm-inline me-1">
                    <a class="fw-bold" href="#">John Doe</a>
                  </span>
                  <time datetime="2019-10-21">Oct 21, 2019</time>
                </div>
                <!--description-->
                <p class="card-text" v-if="post.attributes.description">
                  {{ post.attributes.description | truncate(200) }} ...
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <!-- end block content -->
    </div>
    <!--end block-->

    <!--Pagination-->
    <div class="clearfix my-4">
      <nav class="float-start" aria-label="Page navigation example">
        <!--page number-->
        <ul class="pagination">
          <li class="page-item active"><span class="page-link">1</span></li>
          <li class="page-item">
            <a class="page-link" href="../category/category.html">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="../category/category.html">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="../category/category.html">4</a>
          </li>
          <li class="page-item">
            <span class="page-link disabled">....</span>
          </li>
          <li class="page-item">
            <a class="page-link" href="../category/category.html">12</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="../category/category.html"
              aria-label="Next"
              title="Next page"
            >
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <polyline
                    points="184 112 328 256 184 400"
                    style="
                      fill: none;
                      stroke: currentColor;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 48px;
                    "
                  />
                </svg>
              </span>
              <span class="visually-hidden">Next</span>
            </a>
          </li>
        </ul>
        <!--end page number-->
      </nav>
      <span class="py-2 float-end">Page 1 of 12</span>
    </div>
    <!--end pagination-->
  </div>
</template>
<script>
export default {
  props: {
    datas: [],
  },
  filters: {
    truncate: function (data, num) {
      const reqdString = data.split("").slice(0, num).join("");
      return reqdString;
    },
  },
  data() {
    return {
      uploadpath: process.env.UPLOADS_URL,

    }
    }
};
</script>
