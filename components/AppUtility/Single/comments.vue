<template>
<div id="comments">
              <!--title-->
              <div class="block-title-6">
                <h4 class="h5 border-primary border-2">
                  <span class="bg-primary text-white">5 Comments</span>
                </h4>
              </div>
              <!--comment list-->
              <ol class="comment-list">
                <li>
                  <div class="user-comment u-hover">
                    <footer>
               <nuxt-img class="img-fluid bg-light" src="placeholder-jaridaa.png" alt="Image description"/>
                      <div class="title-comments">
                        <a class="authors" href="#" target="_blank">Jennifer Tan</a>
                        <span class="text-muted dates small">
                          <time datetime="2019-10-27">Oct 27, 2019 at 12:11 am</time>
                        </span>
                      </div>
                    </footer>
                    <div class="comment-content">
                      <p>News magazine bootstrap themes!</p>
                    </div>
                    <div class="btn-reply">
                      <a class="comment-reply" href="#comment-form">Reply</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="user-comment u-hover">
                    <footer>
               <nuxt-img class="img-fluid bg-light" src="placeholder-jaridaa.png" alt="Image description"/>
                      <div class="title-comments">
                        <a class="authors" href="#" target="_blank">Carlos vila</a>
                        <span class="text-muted dates small">
                          <time datetime="2019-10-27">Oct 27, 2019 at 15:11 am</time>
                        </span>
                      </div>
                    </footer>
                    <div class="comment-content">
                      <p>I like this themes, fast loading and look profesional</p>
                    </div>
                    <div class="btn-reply">
                      <a class="comment-reply" href="#comment-form">Reply</a>
                    </div>
                  </div>
                  <ul class="list-unstyled sub-comment">
                    <li>
                      <div class="user-comment u-hover">
                        <footer>
               <nuxt-img class="img-fluid bg-light" src="placeholder-jaridaa.png" alt="Image description"/>
                          <div class="title-comments">
                            <a class="authors" href="#" target="_blank">Jennifer Tan</a>
                            <span class="text-muted dates small">
                              <time datetime="2019-10-27">Oct 27, 2019 at 16:11 am</time>
                            </span>
                          </div>
                        </footer>
                        <div class="comment-content">
                          <p>Thank you Carlos!</p>
                        </div>
                        <div class="btn-reply">
                          <a class="comment-reply" href="#comment-form">Reply</a>
                        </div>
                      </div>
                      <ul class="list-unstyled sub-comment">
                        <li class="comment " id="comment-5">
                          <div class="user-comment u-hover">
                            <footer>
               <nuxt-img class="img-fluid bg-light" src="placeholder-jaridaa.png" alt="Image description"/>
                              <div class="title-comments">
                                <a class="authors" href="#" target="_blank">Carlos vila</a>
                                <span class="text-muted dates small">
                                  <time datetime="2019-10-27">Oct 27, 2019 at 17:11 am</time>
                                </span>
                              </div>
                            </footer>
                            <div class="comment-content">
                              <p>You're welcome!</p>
                            </div>
                            <div class="btn-reply">
                              <a class="comment-reply" href="#comment-form">Reply</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="user-comment u-hover">
                    <footer>
               <nuxt-img class="img-fluid bg-light" src="placeholder-jaridaa.png" alt="Image description"/>
                      <div class="title-comments">
                        <a class="authors" href="#" target="_blank">Jennifer Tan</a>
                        <span class="text-muted dates small">
                          <time datetime="2019-10-27">Oct 27, 2019 at 17:11 am</time>
                        </span>
                      </div>
                    </footer>
                    <div class="comment-content">
                      <p>Please support me with give positive rating!</p>
                    </div>
                    <div class="btn-reply">
                      <a class="comment-reply" href="#comment-form">Reply</a>
                    </div>
                  </div>
                  <ul class="list-unstyled sub-comment">
                    <li>
                      <div class="user-comment u-hover">
                        <footer>
               <nuxt-img class="img-fluid bg-light" src="placeholder-jaridaa.png" alt="Image description"/>
                          <div class="title-comments">
                            <a class="authors" href="#" target="_blank">Carlos vila</a>
                            <span class="text-muted dates small">
                              <time datetime="2019-10-27">Oct 27, 2019 at 16:15 am</time>
                            </span>
                          </div>
                        </footer>
                        <div class="comment-content">
                          <p>Yes Sure!</p>
                        </div>
                        <div class="btn-reply">
                          <a class="comment-reply" href="#comment-form">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ol>

              <!--comment form-->
              <div id="comment-form" class="my-5">
                <h3 class="h6 h4-md">LEAVE A REPLY</h3>
                <p>Your email address will not be published</p>
                <div class="comment-form">
                  <form class="needs-validation" action="single1.html" novalidate>
                    <div class="mt-2"></div>
                    <div class="mb-4">
                      <textarea aria-label="comment form" class="form-control" placeholder="Comment" rows="4" required></textarea>
                      <div class="invalid-feedback">Please insert your comment</div>
                    </div>
                    <div class="mb-4">
                      <input aria-label="name form" class="form-control" placeholder="Name" type="text" required>
                      <div class="invalid-feedback">Please insert your name</div>
                    </div>
                    <div class="mb-4">
                      <input aria-label="email form" class="form-control" placeholder="Email" type="text" required>
                      <div class="invalid-feedback">Please insert your email address</div>
                    </div>
                    <div class="mb-4">
                      <input aria-label="website form" class="form-control" placeholder="Website:" type="text">
                    </div>
                    <div class="mb-4">
                      <div class="form-check">
                        <input id="comment-cookies" class="form-check-input" name="comment-cookies" type="checkbox" value="yes">
                        <label for="comment-cookies" class="form-check-label">Save my name, email, and website in this browser for the next time I comment.</label>
                      </div>
                    </div>
                    <div class="mb-4">
                      <button type="submit" class="btn btn-primary">Post Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

</template>