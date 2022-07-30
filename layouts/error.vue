<template>
  <div class="container ">
    <div class="row">
      <div class="col-sm-12 ">
        <div class="col-sm-10 col-sm-offset-1 text-center">
          <div class="four_zero_four_bg">
            <h3 v-if="error.statusCode === 404" class="display-1">
              Ooops !! An error occurred
            </h3>
            <h3 class="display-1 " v-else>Ooops !! An error occurred</h3>
                        <NuxtLink class="btn btn-primary " to="/">Home page</NuxtLink>

          </div>

          <div class="contant_box_404">
            <h3 class="h2">it can be a temporarily technical issue</h3>
            <p>please try again later , THANK YOU!</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
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
}

</style>
