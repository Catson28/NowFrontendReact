// JobBoardAccountSavedJobs.tsx
import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f9fa;
  }

  .page-loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .4s .2s ease-in-out;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
  }
  .page-loading.active {
    opacity: 1;
    visibility: visible;
  }
  .page-loading-inner {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);
    transition: opacity .2s ease-in-out;
    opacity: 0;
  }
  .page-loading.active > .page-loading-inner {
    opacity: 1;
  }
  .page-loading-inner > span {
    display: block;
    font-size: 1rem;
    font-weight: normal;
    color: #666276;
  }
  .page-spinner {
    display: inline-block;
    width: 2.75rem;
    height: 2.75rem;
    margin-bottom: .75rem;
    vertical-align: text-bottom;
    border: .15em solid #bbb7c5;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner .75s linear infinite;
  }
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const BtnScrollTop = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const JobBoardAccountSavedJobs: React.FC = () => {
  useEffect(() => {
    const preloader = document.querySelector('.page-loading');
    preloader?.classList.remove('active');
    setTimeout(() => {
      preloader?.remove();
    }, 2000);
  }, []);

  return (
    <>










<div className="modal fade" id="signup-modal" 
// tabIndex="-1"
 aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{ maxWidth: '734px' }}>
        <div className="modal-content">
          <div className="modal-body p-sm-5">
            <button className="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
            <ul className="nav nav-pills flex-column flex-sm-row border-bottom pb-4 mt-sm-n2 my-4" role="tablist">
              <li className="nav-item me-sm-3 mb-sm-0" role="presentation">
                <a className="nav-link active" href="#job-seeker" data-bs-toggle="tab" role="tab" aria-controls="job-seeker" aria-selected="true">
                  <i className="fi-user me-2"></i>I am job seeker
                </a>
              </li>
              <li className="nav-item mb-sm-0" role="presentation">
                <a className="nav-link" href="#employer" data-bs-toggle="tab" role="tab" aria-controls="employer" aria-selected="false" 
                // tabIndex="-1"
                >
                  <i className="fi-briefcase me-2"></i>I am employer
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="job-seeker" role="tabpanel">
                <h3>Register to add a resume</h3>
                <p className="pb-3">Get access to all the functions of the site that will help you find a great job.</p>
                <div className="row gx-2 gx-md-4">
                  {/* Botões de login com Google e Facebook */}
                </div>
                <div className="d-flex align-items-center py-2 mb-2">
                  <hr className="w-100" />
                  <div className="px-3">Or</div>
                  <hr className="w-100" />
                </div>
                <form className="needs-validation" noValidate>
                  {/* Campos de formulário para job-seeker */}
                </form>
              </div>
              <div className="tab-pane fade" id="employer" role="tabpanel">
                <h3>Register to post a vacancy</h3>
                <p className="pb-3">Get access to all special services for employers on Finder.</p>
                <form className="needs-validation" noValidate>
                  {/* Campos de formulário para employer */}
                </form>
              </div>
            </div>
            <div className="pt-4 pb-3 pb-sm-0 mt-2">Already have an account? <a href="#signin-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a></div>
          </div>
        </div>
      </div>
    </div>





























      <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" data-scroll-header="">
      <div className="container">
        <a className="navbar-brand me-0 me-xl-4" href="https://finder.createx.studio/job-board-home-v1.html">
          <img className="d-block" src="./style/logo-light.svg" width="116" alt="Finder" />
        </a>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3" href="https://finder.createx.studio/job-board-home-v1.html#signin-modal"
          data-bs-toggle="modal">
          <i className="fi-user me-2"></i>Sign in
        </a>
        <a className="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" href="https://finder.createx.studio/job-board-post-resume-1.html">
          <i className="fi-plus me-2"></i>Post resume
        </a>
        <a className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3 pe-0 ms-2" href="https://finder.createx.studio/job-board-home-v2.html">
          For employers<i className="fi-arrow-long-right ms-2"></i>
        </a>
        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav navbar-nav-scroll" style={{ maxHeight: '35rem' }}>
            {/* Adicione aqui os itens do menu */}
          </ul>
        </div>
      </div>
    </header>





    <section className="bg-dark pb-4 pt-5">
      <div className="container py-5">
        <div className="row align-items-center mt-2 mt-md-0 pt-md-4 pt-lg-5 pb-5">
          <div className="col-md-5 order-md-2 mb-5 mb-md-0">
            {/* Parallax layers and images */}
          </div>
          <div className="col-md-7 order-md-1">
            <h1 className="display-4 text-light pb-2 mb-4 mb-lg-5" style={{ maxWidth: '29.5rem' }}>
              Hack your way to the <span className="text-primary">dream job</span>
            </h1>
            <h2 className="h5 text-light mb-4">Popular requests:</h2>
            <div className="d-flex flex-wrap">
              {/* Buttons for job categories */}
            </div>
          </div>
        </div>
        {/* Search form */}
        <form className="form-group form-group-light d-block rounded-xl-pill mt-n3 mt-md-4 mt-xl-5 mb-md-4">
          <div className="row align-items-center g-0 ms-n2">
            <div className="col-md-5 col-xl-3">
              {/* Input for search term */}
            </div>
            {/* Dropdowns for location and distance */}
            <div className="col-md-7 col-xl-4 d-sm-flex">
              {/* Dropdown for location */}
              {/* Dropdown for distance */}
            </div>
            {/* Slider for salary range */}
            <div className="col-xl-5 d-sm-flex align-items-center">
              {/* Slider for salary range */}
              <button className="btn btn-primary btn-lg w-100 w-sm-50 w-lg-auto rounded-pill mt-4 mt-sm-0" type="button">
                Find jobs
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>























    </>
  );
};

export default JobBoardAccountSavedJobs;
