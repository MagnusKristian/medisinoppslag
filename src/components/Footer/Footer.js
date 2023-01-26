import "./FooterCss.css";
//https://www.bootdey.com/snippets/view/bs5-dark-footer#html

export const Footer = (props) => {
  //   let [footerStuff, setFooterStuff] = useState();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />
      <footer class="bg-dark-gradient footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-border-bottom pb-6 mb-5">
                <span class="h32"><div ><a href="#" style={{fontSize:"xx-large", fontWeight:"bold"}}>HOME</a></div></span>   
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-3 my-4">
                <div class="mb-4">
                  <img src="static/img/logo-light.svg" title="" alt="" />
                </div>
                <div class="text-white-65 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod.
                </div>
                <div class="nav footer-socila-icon">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-lg-2 my-4">
                <h5 class="text-white h6 mb-4">Customer</h5>
                <ul class="list-unstyled white-link footer-links">
                  <li>
                    <a href="#">Get Corpo</a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Help center</a>
                  </li>
                  
                </ul>
              </div>
              <div class="col-sm-6 col-lg-2 my-4">
                <h5 class="text-white h6 mb-4">Product</h5>
                <ul class="list-unstyled white-link footer-links">
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Join our team</a>
                  </li>
                  
                </ul>
              </div>
              <div class="col-sm-6 col-lg-2 my-4">
                <h5 class="text-white h6 mb-4">Company</h5>
                <ul class="list-unstyled white-link footer-links">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                    <li>
                        <a href="#">Legal &amp; Security</a>
                    </li>
                  
                </ul>
              </div>
              <div class="col-sm-6 col-lg-3 my-4">
                <h5 class="text-white h6 mb-4">Company</h5>
                <div class="white-link">
                  <div class="d-flex pb-3">
                    <div class="avatar avatar-lg rounded"></div>
                    <div class="col ps-3">
                      <small class="text-white-65">29 March 2021</small>
                      <h6 class="font-w-500 h6 m-0">
                        <a class="text-white" href="#">
                          Markdown Language Sample Blog Post Styling
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom footer-border-top light py-3">
        © 2023 copyright{" "}<a href="#" class="text-reset">
                x
              </a>
        
        </div>
      </footer>
    </>
  );
};
