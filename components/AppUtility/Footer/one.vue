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
              About Us
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
              <p class="footer-info mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                  class="bi bi-envelope-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                  /></svg
                >support@jaridaa.com
              </p>
              <div class="social mb-4">
                <!--facebook-->
                <span class="my-2 me-3">
                  <a
                    target="_blank"
                    href="https://facebook.com"
                    aria-label="Facebook"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      />
                    </svg>
                  </a>
                </span>
                <!--twitter-->
                <span class="my-2 me-3">
                  <a
                    target="_blank"
                    href="https://twitter.com"
                    aria-label="Twitter"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </a>
                </span>
                <!--youtube-->
                <span class="my-2 me-3">
                  <a
                    target="_blank"
                    href="https://youtube.com"
                    aria-label="Youtube"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                      />
                    </svg>
                  </a>
                </span>
                <!--instagram-->
                <span class="my-2 me-3">
                  <a
                    target="_blank"
                    href="https://instagram.com"
                    aria-label="Instagram"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                      />
                      <path
                        d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                      />
                      <path
                        d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                      />
                    </svg>
                  </a>
                </span>
                <!--end instagram-->
              </div>
            </div>
          </div>
          <!-- center widget -->
          <div class="widget col-sm-6 col-md-4">
            <h3 class="h5 widget-title border-bottom border-smooth">
              Popular Posts
            </h3>
            <div class="posts-list">
              <!--post list-->
              <article class="card card-full hover-a mb-4">
                <div class="row">
                  <!--thumbnail-->
                  <div class="col-3 col-md-4 pe-2 pe-md-0">
                    <div class="ratio_115-80 image-wrapper">
                      <a href="mypost1">
                        <nuxt-img
                          class="img-fluid lazy"
                          width="100%"
                          height="100%"
                          src="https://demo.bootstrap.news/bootnews/assets/img/assets/lazy-empty.png"
                          data-src="https://demo.bootstrap.news/bootnews/assets/img/115x80/img6.jpg"
                          alt="im4"
                        />
                      </a>
                    </div>
                  </div>
                  <!-- title & date -->
                  <div class="col-9 col-md-8">
                    <div class="card-body pt-0">
                      <h3 class="card-title h6">
                        <a href="post33"
                          >Why Apple went to war with Facebook and Google this
                          week</a
                        >
                      </h3>
                      <div class="card-text small text-light">
                        <time datetime="2019-10-16">Oct 16, 2019</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <!--post list-->
              <article class="card card-full hover-a mb-4">
                <div class="row">
                  <!--thumbnail-->
                  <div class="col-3 col-md-4 pe-2 pe-md-0">
                    <div class="ratio_115-80 image-wrapper">
                      <a href="mypost2">
                        <img
                          class="img-fluid lazy"
                          width="100%"
                          height="100%"
                          src="https://demo.bootstrap.news/bootnews/assets/img/assets/lazy-empty.png"
                          data-src="https://demo.bootstrap.news/bootnews/assets/img/115x80/img5.jpg"
                          alt="Imagepo09999"
                        />
                      </a>
                    </div>
                  </div>
                  <!-- title & date -->
                  <div class="col-9 col-md-8">
                    <div class="card-body pt-0">
                      <h3 class="card-title h6">
                        <a href="../post/eryt"
                          >The West Hoped for Democracy in Turkey. Erdogan Had
                          Other Ideas</a
                        >
                      </h3>
                      <div class="card-text small text-light">
                        <time datetime="2019-10-15">Oct 15, 2019</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <!--post list-->
              <article class="card card-full hover-a mb-4">
                <div class="row">
                  <!--thumbnail-->
                  <div class="col-3 col-md-4 pe-2 pe-md-0">
                    <div class="ratio_115-80 image-wrapper">
                      <a href="post34568">
                        <img
                          class="img-fluid lazy"
                          width="100%"
                          height="100%"
                          src="https://demo.bootstrap.news/bootnews/assets/img/assets/lazy-empty.png"
                          data-src="https://demo.bootstrap.news/bootnews/assets/img/115x80/img4.jpg"
                          alt="Image"
                        />
                      </a>
                    </div>
                  </div>
                  <!-- title & date -->
                  <div class="col-9 col-md-8">
                    <div class="card-body pt-0">
                      <h3 class="card-title h6">
                        <a href="posr33"
                          >Recalls Causing Shortages of Blood Pressure Drugs:
                          What You Can Do</a
                        >
                      </h3>
                      <div class="card-text small text-light">
                        <time datetime="2019-10-14">Oct 14, 2019</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <!--End post list-->
            </div>
          </div>
          <!-- right widget -->
          <div class="widget col-sm-6 col-md-4">
            <h3 class="h5 widget-title border-bottom border-smooth">
              Editor Picks
            </h3>
            <div class="posts-list">
              <!--post list-->
              <article class="card card-full hover-a mb-4">
                <div class="row">
                  <!--thumbnail-->
                  <div class="col-3 col-md-4 pe-2 pe-md-0">
                    <div class="ratio_115-80 image-wrapper">
                      <a href="post54">
                        <img
                          class="img-fluid lazy"
                          swidth="100%"
                          height="100%"
                          src="https://demo.bootstrap.news/bootnews/assets/img/assets/lazy-empty.png"
                          data-src="https://demo.bootstrap.news/bootnews/assets/img/115x80/img3.jpg"
                          alt="Image description"
                        />
                      </a>
                    </div>
                  </div>
                  <!-- title & date -->
                  <div class="col-9 col-md-8">
                    <div class="card-body pt-0">
                      <h3 class="card-title h6">
                        <a href="pos99">Erdogan Had Other Ideas</a>
                      </h3>
                      <div class="card-text small text-light">
                        <time datetime="2019-10-16">Oct 16, 2019</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <!--post list-->
              <article class="card card-full hover-a mb-4">
                <div class="row">
                  <!--thumbnail-->
                  <div class="col-3 col-md-4 pe-2 pe-md-0">
                    <div class="ratio_115-80 image-wrapper">
                      <a href="../post/pppp">
                        <img
                          class="img-fluid lazy"
                          width="100%"
                          height="100%"
                          src="https://demo.bootstrap.news/bootnews/assets/img/assets/lazy-empty.png"
                          data-src="https://demo.bootstrap.news/bootnews/assets/img/115x80/img2.jpg"
                          alt="Imajj"
                        />
                      </a>
                    </div>
                  </div>
                  <!-- title & date -->
                  <div class="col-9 col-md-8">
                    <div class="card-body pt-0">
                      <h3 class="card-title h6">
                        <a href="posty6"
                          >Dale Earnhardt Jr. Returns to the Racetrack and an
                          Old Hobby</a
                        >
                      </h3>
                      <div class="card-text small text-light">
                        <time datetime="2019-10-15">Oct 15, 2019</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <!--post list-->
              <article class="card card-full hover-a mb-4">
                <div class="row">
                  <!--thumbnail-->
                  <div class="col-3 col-md-4 pe-2 pe-md-0">
                    <div class="ratio_115-80 image-wrapper">
                      <a href="postaaas">
                        <img
                          class="img-fluid lazy"
                          width="100%"
                          height="100%"
                          src="https://demo.bootstrap.news/bootnews/assets/img/assets/lazy-empty.png"
                          data-src="https://demo.bootstrap.news/bootnews/assets/img/115x80/img1.jpg"
                          alt="Image post44"
                        />
                      </a>
                    </div>
                  </div>
                  <!-- title & date -->
                  <div class="col-9 col-md-8">
                    <div class="card-body pt-0">
                      <h3 class="card-title h6">
                        <a href="ss09"
                          >Yankees Party Like It’s 1998, at Least for a Day</a
                        >
                      </h3>
                      <div class="card-text small text-light">
                        <time datetime="2019-10-14">Oct 14, 2019</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <!--End post list-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End footer content-->
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
