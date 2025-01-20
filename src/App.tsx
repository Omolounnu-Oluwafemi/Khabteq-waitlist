import { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css";
import './App.css';

// const RealtyPage = () => {


//   return (
//     <div
//       className="bg-light vh-100"
//       style={{
//         backgroundImage: "url('./assests/backgroundImage.png')",
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//       }}
//     >

//       <header className="d-flex justify-content-between px-5 align-items-center">
//         <img
//           src="/assets/logo1.png"
//           alt="Khabi-Teq Realty"
//           className="mb-3"
//           style={{ maxWidth: "150px" }}
//         />

//           <button className="btn btn-success btn-lg mt-3">
//             Join our Waitlist
//           </button>
//       </header>
//       {/* Header Section */}
//       <header className="py-4 text-center" data-aos="fade-down">

//         <h1 className="fw-bold text-success">
//           Be Among the First to Join <br />
//           <span className="text-dark">Khabi-Teq Realty</span> Exclusive Agent
//           Network
//         </h1>
//         <p className="text-muted">
//           Submit your details to access exclusive listings, referral
//           commissions, and unmatched support to grow your real estate business.
//         </p>
//       </header>

//       {/* Main Content Section */}
//       <section
//         className="container d-flex flex-column align-items-center justify-content-center py-5"
//         data-aos="fade-up"
//       >
//         <div
//           className="text-center bg-[#0A3E72] text-white p-4 rounded-3 shadow-lg d-flex"
//           style={{ maxWidth: "1000px" }}
//         >
//           <p>
//             Khabi-Teq is revolutionizing the real estate market by empowering
//             agents with tools to succeed. While our platform is being finalized,
//             secure your spot on our waitlist and be the first to access premium
//             opportunities.
//           </p>
//           <button className="btn btn-success btn-lg mt-3">
//             Join the Waitlist Now
//           </button>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer
//         className="text-center mt-5"
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           width: "100%",
//         }}
//       >
//         <p className="text-muted">Follow us on:</p>
//         <div className="d-flex justify-content-center gap-3">
//           <a href="#!" className="text-dark">
//             <i className="bi bi-facebook"></i>
//           </a>
//           <a href="#!" className="text-dark">
//             <i className="bi bi-instagram"></i>
//           </a>
//           <a href="#!" className="text-dark">
//             <i className="bi bi-linkedin"></i>
//           </a>
//           <a href="#!" className="text-dark">
//             <i className="bi bi-twitter"></i>
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };


const KhabiTeqPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations with a duration of 1000ms
  }, []);

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 bg-light text-dark py-5 mb-0" style={{backgroundImage: "url('/src/assets/backgroundImage.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundColor: '#E0FDFD'}}>
      <div className="flex-grow-1">
        <div className="text-center mb-4">
          <div className="d-flex justify-content-between align-items-center px-5">
            <img src="/src/assets/logo1.png" alt="Khabi-Teq Logo" className="mb-3" />
            <button className="btn px-4 py-3" style={{backgroundColor: '#8DDB90', color: '#fff', borderRadius: 0}}>Join the Waitlist</button>
          </div>
          <div className="mt-5"  data-aos="fade-down" >
            <h1 className="display-4 fw-bold text-wrap" style={{fontSize: '40px', fontWeight: '600'}}>Be Among the First to Join
              <span style={{color: '#8DDB90'}}> Khabi-Teq Realty</span>
            </h1>
            <h1 className="" style={{fontSize: '40px', fontWeight: '600'}}>Exclusive Agent Network</h1>

            <p className="lead px-2 mt-4 responsive-width" style={{fontSize: '18px', textAlign: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto'}} data-aos="fade-up">
              Submit your details to access exclusive listings, referral commissions, and unmatched support to grow your real estate business
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body text-center p-5" style={{backgroundColor: '#0A3E72'}}>
                <div className="row align-items-center p-3">
                  <div className="col-lg-8 mb-3 mb-lg-0">
                    <p className="card-text" style={{color: '#fff', textAlign: 'left'}}>
                      Khabi-Teq is revolutionizing the real estate market by empowering agents with tools to succeed. While our platform is being finalized, secure your spot on our waitlist and be the first to access premium opportunities
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <button className="btn py-3 px-5 responsive-width mobile-button" style={{backgroundColor: '#8DDB90', color: '#fff', borderRadius: 0}}>Join the Waitlist</button>
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
          <a href="#" className="text-dark">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
        <p className="mt-5 mb-0">© 2025 Khabi-Teq Realty. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KhabiTeqPage;


// export default RealtyPage;