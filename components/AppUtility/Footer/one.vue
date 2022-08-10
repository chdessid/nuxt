<template>
  <!--Footer start-->
  <footer>
    <!--Footer content-->
    <div id="footer" class="footer-dark bg-dark bg-footer py-5 px-3">
      <div class="container">
        <div class="row">
          <!-- left widget -->
          <div class="widget col-md-4">
            <h3 class="h5 widget-title border-bottom border-smooth">
              About Jaridaa
            </h3>
            <div class="widget-content">
              <nuxt-img
                class="footer-logo img-fluid mb-2"
                src="jaridaa_white.png"
                alt="jaridaa_footer_logo"
                width="100%"
                height="100%"
              />
              <p>
                Jaridaa News provides the latest articles, news and topics from
                around the world.
              </p>
              <p class="footer-info mb-1">Email : support@jaridaa.com</p>
            </div>
          </div>
          <!-- center widget -->
          <div class="widget col-sm-6 col-md-4">
            <h3 class="h5 widget-title border-bottom border-smooth">
              Jaridaa News on your Mobile
            </h3>
            <p>Connect with the definitive source for global and local news</p>
            <ul>
              <li class="nav-item">
                <NuxtLink class="nav-link" :to="`/category/`">Android</NuxtLink>
              </li>
              <li>IOS Apple</li>
              <li>Smart TV</li>
            </ul>
          </div>
          <!-- right widget -->
          <div class="widget col-sm-6 col-md-4">
            <h3 class="h5 widget-title border-bottom border-smooth">
              MORE FROM JARIDAA
            </h3>
            <ul>
              <li class="nav-item">
                <NuxtLink class="nav-link" :to="`/category/`"
                  >Jaridaa Books</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" :to="`/category/`"
                  >Jaridaa Explore</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" :to="`/category/`"
                  >Jaridaa Courses</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" :to="`/category/`"
                  >Jaridaa Business</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" :to="`/category/`"
                  >Jaridaa Products</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--End footer content-->
    <div id="newsletterfooter" class="py-5 px-3">
      <div class="container">
        <div class="row">
          <h1 class="text-dark-light text-center">
            Get Jaridaa Top News Updates
          </h1>
          <p class="text-dark-light text-center">
            Subscribe our newsletter to get the last update into your inbox!
          </p>
          <!--form start-->
          <div class="mx-auto">
            <form
              id="subscribe"
              class="needs-validation"
              action="#"
              novalidate=""
            >
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  required=""
                  aria-label="email form"
                  placeholder="Enter your email address"
                />
                <button class="btn btn-primary text-center" type="submit">
                  Subscribe
                </button>
                <div class="invalid-feedback">Please insert email address.</div>
              </div>
            </form>
            <p class="small text-center text-dark-light mt-3">
              hate spammers, and never spam
            </p>
          </div>
          <!-- end widget content -->
          <div class="gap-0"></div>
        </div>
      </div>
      <!--end form-->
    </div>
    <!-- footer copyright menu -->
    <div class="footer-copyright bg-secondary">
      <div class="container">
        <!--Navbar-->
        <nav class="navbar navbar-expand navbar-dark px-0">
          <!--footer left menu-->
          <ul class="navbar-nav footer-nav text-center first-start-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/pg/about" target="_blank">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pg/contact" target="_blank">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pg/policy" target="_blank">Policy</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/pg/advertise" target="_blank"
                >Advertise</a
              >
            </li>
          
            <NuxtLink
              v-if="!isAuthenticated"
              class="text-white p-2 hover:bg-gray-700"
              to="/user/login"
              >Sign In</NuxtLink
            >
            <NuxtLink
              v-if="!isAuthenticated"
              class="text-white p-2 hover:bg-gray-700"
              to="/user/register"
              >Sign Up</NuxtLink
            >
            <NuxtLink
              v-if="isAuthenticated"
              class="text-white p-2 hover:bg-gray-700"
              to="/user/me"
              >Your profile</NuxtLink
            >
            <a
              v-if="isAuthenticated"
              class="text-white p-2 hover:bg-gray-700"
              href="/logout"
              @click.prevent="userLogout"
              >Logout</a
            >
          </ul>
          <!--end footer left menu-->

          <!-- footer copyright -->
          <ul class="navbar-nav ms-auto text-center">
            <li class="d-inline navbar-text">
              Copyright &copy; Jaridaa News - All rights reserved.
            </li>
          </ul>
          <!-- end footer copyright -->
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
    <!--end copyright menu-->
  </footer>
  <!-- End Footer -->
</template>
    <script>
    import { mapGetters } from 'vuex'
    export default {
      computed: {
        ...mapGetters(['isAuthenticated']),
      },
      methods: {
        async userLogout() {
          await this.$auth.logout()
        },
      },
    }
    </script>