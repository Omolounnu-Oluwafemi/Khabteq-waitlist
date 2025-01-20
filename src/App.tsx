import { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css";
import './App.css';


const KhabiTeqPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 bg-light text-dark py-5 mb-0 bg-custom" style={{backgroundImage: "url('/assets/backgroundImage.png')", backgroundRepeat: "no-repeat", backgroundColor: '#E0FDFD'}}>
      <div className="flex-grow-1">
        <div className="text-center mb-4">
          <div className="d-flex justify-content-between align-items-center nav-space" data-aos="fade-down">
            <img src="/assets/logo1.png" alt="Khabi-Teq Logo" className="mb-3" />
            <a href="https://forms.gle/rgmS5cSyB9FKFEvS8" target="_blank" rel="noopener noreferrer">
              <button className="btn px-4 py-3 nav-button" style={{ backgroundColor: '#8DDB90', color: '#fff', borderRadius: 0 }}>Join the Waitlist</button>
            </a>
          </div>
          <div className="mt-5"  data-aos="fade-up" >
            <h1 className="display-4 fw-bold text-wrap" style={{fontSize: '40px', fontWeight: '600'}}>Be Among the First to Join
              <span style={{color: '#8DDB90'}}> Khabi-Teq Realty</span>
            </h1>
            <h1 className="" style={{fontSize: '40px', fontWeight: '600'}}>Exclusive Agent Network</h1>

            <p className="lead px-2 mt-4 responsive-width" style={{fontSize: '18px', textAlign: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto'}} data-aos="fade-up">
              Submit your details to access exclusive listings, referral commissions, and unmatched support to grow your real estate business
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5 ">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body text-center p-5" style={{backgroundColor: '#0A3E72'}}>
                <div className="row align-items-center p-3">
                  <div className="col-lg-8 mb-3 mb-lg-0"  data-aos="fade-right">
                    <p className="card-text" style={{color: '#fff', textAlign: 'left'}}>
                      Khabi-Teq is revolutionizing the real estate market by empowering agents with tools to succeed. While our platform is being finalized, secure your spot on our waitlist and be the first to access premium opportunities
                    </p>
                  </div>
                  <div className="col-lg-4" data-aos="fade-left">
                    <a href="https://forms.gle/rgmS5cSyB9FKFEvS8" target="_blank" rel="noopener noreferrer">
                      <button className="btn py-3 px-5 responsive-width mobile-button" style={{ backgroundColor: '#8DDB90', color: '#fff', borderRadius: 0 }}>Join the Waitlist</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>

      <footer className="text-center mt-5 mb-0">
        <div className="mt-5" style={{ width: '90%', height: '2px', margin: '0 auto', backgroundColor: '#09391C' }} ></div>
        <div className="d-flex justify-content-center gap-3 mt-5 mb-0">
          <a href="#" className="text-dark icon-circle">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-dark icon-circle">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-dark icon-circle">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-dark icon-circle">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default KhabiTeqPage;