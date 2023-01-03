import "./App.css";
import About from "./component/About";
import Carousel from "./component/Carousel";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Appoint from "./component/Appoint";
import Feature from "./component/Feature";
import Action from "./component/Action";
import Team from "./component/Team";
import Test from "./component/Test";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 bg-secondary d-none d-lg-block">
            <a
              href="index.html"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <h1 className="m-0 display-4 text-primary text-uppercase">
                Justice
              </h1>
            </a>
          </div>
          <div className="col-lg-9">
            <div className="row bg-white border-bottom d-none d-lg-flex">
              <div className="col-lg-7 text-left">
                <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                  <i className="fa fa-envelope text-primary mr-2" />
                  <small>info@example.com</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                  <i className="fa fa-phone-alt text-primary mr-2" />
                  <small>+012 345 6789</small>
                </div>
              </div>
              <div className="col-lg-5 text-right">
                <div className="d-inline-flex align-items-center p-2">
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                    href=""
                  >
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <Navbar></Navbar>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Carousel Start */}
      <Carousel></Carousel>
      {/* Carousel End */}
      {/* About Start */}
      <About></About>
      {/* About End */}
      {/* Services Start */}
      <Service></Service>
      {/* Services End */}
      {/* Appointment Start */}
      <Appoint></Appoint>
      {/* Appointment End */}
      {/* Features Start */}
      <Feature></Feature>
      {/* Features End */}
      {/* Action Start */}
      <Action></Action>
      {/* Action End */}
      {/* Team Start */}
      <Team></Team>
      {/* Team End */}
      {/* Testimonial Start */}
      <Test></Test>
      {/* Testimonial End */}
      {/* Footer Start */}
      <Footer></Footer>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary px-3 back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
