import "./Footer.css";
import Phone from "../Photo/logo.png";

function Footer() {
  return (
    <>
      <section class="section_footer">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
            <div class="col mb-3">
              <div class="lc-block mb-3">
                <a
                  class="navbar-brand"
                  href="https://library.livecanvas.com/sections/"
                >
                  <img
                    class="img-fluid me-1"
                    src={Phone}
                    alt="my brand"
                    width="48px"
                    height="48px"
                    lc-helper="image"
                  />
                </a>
              </div>
              <div class="lc-block">
                <div editable="rich">
                  <p class="text-muted">
                    © All rights reserved to Donuts Factory 2024
                  </p>
                </div>
              </div>
            </div>
            <div class="col offset-md-2 mb-3">
              <div class="lc-block mb-4">
                <div editable="rich">
                  <h4>Get Started</h4>
                </div>
              </div>

              <div class="lc-block small">
                <div editable="rich" class="footer-links-list">
                  <ul>
                    <li>
                      <a href="#">Heart</a>
                    </li>
                    <li>
                      <a href="#">brain</a>
                    </li>
                    <li>
                      <a href="#">blood</a>
                    </li>
                    <li>
                      <a href="#">Bone</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col mb-3">
              <div class="lc-block mb-4">
                <div editable="rich">
                  <h4>About us</h4>
                </div>
              </div>

              <div class="lc-block small">
                <div editable="rich" class="footer-links-list">
                  <ul>
                    <li>
                      <a href="#">Story</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col mb-3">
              <div class="lc-block mb-4">
                <div editable="rich">
                  <h4>Location</h4>
                </div>
              </div>

              <div class="lc-block small">
                <div editable="rich" class="footer-links-list">
                  <ul>
                    <li>
                      <a href="#">al'azraq </a>
                    </li>
                    <li>
                      <a href="#">Amman</a>
                    </li>
                    <li>
                      <a href="#">Irbid</a>
                    </li>
                    <li>
                      <a href="#">aqaba</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
