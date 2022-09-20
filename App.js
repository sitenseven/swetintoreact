import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactDOM from 'react-dom';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
function Jumbotron() {
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col text-center" style={{paddingTop: '80px'}}>
              <div className="text-center col-12"><img className="imageres" src={require('./assets/img/clipboard-image.png')} width={350} /></div>
              <p className="text-center" style={{fontSize: '11px', textAlign: 'left'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Swéy is the perfect location to sell your products, or shop globally for all your needs </p>
            </div>
          </div>
          <div className="row">
            <div className="col text-center" style={{paddingTop: '30px', paddingBottom: '30px'}}>
              <div className="text-center col-12"><button className="btn btn-primary" type="button" style={{background: 'linear-gradient(96.26deg, #5AB0FF 21.99%, #0079FF 68.41%)', borderWidth: '0px', borderRadius: '60px', width: '267px', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', lineHeight: '21px', height: '72px'}}>Go shopping?</button><span style={{marginRight: '20px', marginLeft: '20px'}}>or</span><span style={{marginRight: '20px', marginLeft: '20px', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '25px', color: 'rgb(90,176,255)'}}>Get to know us &gt;</span></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-end" style={{padding: '0px'}}><img className="imageres" src={require('./assets/img/clipboard-image-34.png')} /></div>
      </div>
    </div>
  );
}
function Cover() {
  return (
    <nav className="navbar navbar-light navbar-expand-md py-3" style={{background: 'linear-gradient(180deg, #E7EFFF 0%, rgba(233, 240, 255, 0) 682.64%)', boxShadow: '0 0 48px 33px #e9f1ff'}}>
    <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span className="bs-icon-sm bs-icon-rounded d-flex justify-content-center align-items-center me-2 bs-icon"><img src={require('./assets/img/clipboard-image-33.png')} width={29} height="27.5" /></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 20" width={90} height={90} fill="none" style={{fontSize: '28px', borderRadius: '50px', /*width: '40px', */height: '40px', color: 'rgb(255,229,0)', padding: '7px'}}>
            {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
            <path d="M8.82861 15.0317C8.82861 14.7993 8.79443 14.5908 8.72607 14.4062C8.65771 14.2148 8.53125 14.0371 8.34668 13.873C8.16211 13.709 7.89551 13.5449 7.54688 13.3809C7.20508 13.21 6.75391 13.0322 6.19336 12.8477C5.53711 12.6289 4.90479 12.3828 4.29639 12.1094C3.68799 11.8291 3.14453 11.5044 2.66602 11.1353C2.1875 10.7593 1.80811 10.3218 1.52783 9.82275C1.24756 9.31689 1.10742 8.729 1.10742 8.05908C1.10742 7.4165 1.25098 6.83887 1.53809 6.32617C1.8252 5.80664 2.2251 5.36572 2.73779 5.00342C3.25732 4.63428 3.86572 4.354 4.56299 4.1626C5.26025 3.96436 6.02246 3.86523 6.84961 3.86523C7.94336 3.86523 8.90723 4.05664 9.74121 4.43945C10.582 4.81543 11.2383 5.35205 11.71 6.04932C12.1885 6.73975 12.4277 7.55664 12.4277 8.5H8.84912C8.84912 8.12402 8.77051 7.79248 8.61328 7.50537C8.46289 7.21826 8.23389 6.99268 7.92627 6.82861C7.61865 6.66455 7.23242 6.58252 6.76758 6.58252C6.31641 6.58252 5.93701 6.65088 5.62939 6.7876C5.32178 6.92432 5.08936 7.10889 4.93213 7.34131C4.7749 7.56689 4.69629 7.81641 4.69629 8.08984C4.69629 8.31543 4.75781 8.52051 4.88086 8.70508C5.01074 8.88281 5.19189 9.05029 5.42432 9.20752C5.66357 9.36475 5.95068 9.51514 6.28564 9.65869C6.62744 9.80225 7.01025 9.94238 7.43408 10.0791C8.22705 10.332 8.93115 10.6157 9.54639 10.9302C10.1685 11.2378 10.6914 11.5898 11.1152 11.9863C11.5459 12.376 11.8706 12.8203 12.0894 13.3193C12.3149 13.8184 12.4277 14.3823 12.4277 15.0112C12.4277 15.6812 12.2979 16.2759 12.0381 16.7954C11.7783 17.3149 11.4058 17.7559 10.9204 18.1182C10.4351 18.4736 9.854 18.7437 9.17725 18.9282C8.50049 19.1128 7.74512 19.2051 6.91113 19.2051C6.14551 19.2051 5.39014 19.1094 4.64502 18.918C3.90674 18.7197 3.23682 18.4189 2.63525 18.0156C2.03369 17.6055 1.55176 17.0825 1.18945 16.4468C0.833984 15.8042 0.65625 15.042 0.65625 14.1602H4.26562C4.26562 14.5977 4.32373 14.9668 4.43994 15.2676C4.55615 15.5684 4.72705 15.811 4.95264 15.9956C5.17822 16.1733 5.45508 16.3032 5.7832 16.3853C6.11133 16.4604 6.4873 16.498 6.91113 16.498C7.36914 16.498 7.73828 16.4331 8.01855 16.3032C8.29883 16.1665 8.50391 15.9888 8.63379 15.77C8.76367 15.5444 8.82861 15.2983 8.82861 15.0317ZM22.9585 17.6465L25.9321 4.07031H27.7061L28.6699 5.229L25.5015 19H23.543L22.9585 17.6465ZM22.1689 4.07031L24.6812 17.749L24.0352 19H21.769L18.6006 4.07031H22.1689ZM30.3003 17.6772L32.792 4.07031H36.3501L33.1816 19H30.9258L30.3003 17.6772ZM28.9878 4.07031L32.0332 17.7285L31.418 19H29.4595L26.2192 5.2085L27.2241 4.07031H28.9878ZM53.269 16.2314V19H45.312V16.2314H53.269ZM46.5938 4.07031V19H42.9946V4.07031H46.5938ZM52.2437 9.99707V12.6733H45.312V9.99707H52.2437ZM53.2998 4.07031V6.84912H45.312V4.07031H53.2998ZM46.8809 3.29102L48.9111 0.0712891H52.5615L49.7007 3.29102H46.8809ZM62.6821 4.07031L65.4302 10.5508L68.1885 4.07031H72.0645L67.2656 13.6372V19H63.605V13.6372L58.7959 4.07031H62.6821Z" fill="black" />
          </svg></span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-3"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navcol-3" style={{fontStyle: 'normal', fontWeight: 100, lineHeight: '21px', fontSize: '14px', fontFamily: 'Roboto, sans-serif', textAlign: 'center'}}>
        <ul className="navbar-nav d-xl-flex mx-auto align-items-xl-center">
          <li className="nav-item"><a className="nav-link active" href="#">Sell</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Marketplace</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Community</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Join Swey</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About Us&nbsp;</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
          <li className="nav-item" />
          <li className="nav-item"><img className="imageres" src={require('./assets/img/clipboard-image-24.png')}  style={{width: '94px'}} /></li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
}


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <div>
 <Cover />
 <Jumbotron />
</div>);

// ReactDOM.render(
//   <div>
//     <MainMenu />
//     <Jumbotron />
//   </div>,
//   document.querySelector("#root")
// );
