<template>
  <div>
    <div class="row pt-5">
      <div class="col-sm-12">
        <div class="col-sm-12 col-sm-offset-1 text-center">
          <h4 v-if="error.statusCode === 404" class="h1">
            Ooops !! Unexpected error we are working on fixing the problem,
            Please back soon
          </h4>

          <h3 class="h2" v-else>
            Ooops !! Unexpected error we are working on fixing the problem,
            Please back soon
            Page will refresh 
          </h3>

          <NuxtLink class="btn btn-primary" to="/">Home page</NuxtLink>
          <div class="four_zero_four_bg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.redirectFunc()
  },

  props: ["error"],
  methods:{
redirectFunc() {
        window.location.replace('/');

      }

  }
      
};
</script>
<style>
/*======================
    404 page
=======================*/

.four_zero_four_bg {
  background-image: url("~/assets/img/errorpage.gif");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
