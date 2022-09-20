import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactDOM from 'react-dom';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.css';





function MainMenu() {
  return (
<div className="container-fluid" style={{textAlign: 'center', padding: '30px',position: 'relative'}}>
        <h1 style={{textAlign: 'center', fontFamily: '"DM Sans"', fontStyle: 'normal', fontWeight: 700, fontSize: '40px', lineHeight: '70px'}}>Your e-Commerce&nbsp;<br />made simple</h1><button className="btn btn-primary" type="button" style={{background: 'linear-gradient(96.26deg, #5AB0FF 21.99%, #0079FF 68.41%)', borderWidth: '0px', borderRadius: '60px', width: '267px', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', lineHeight: '21px', height: '72px'}}>Go shopping?</button>
      </div>
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
function Dfun() {
  return (
    <div className="container-fluid" style={{position: 'relative'}}>
        <div className="row" style={{filter: 'blur(0px)', WebkitFilter: 'blur(0)!important'}}>
          <div className="col-md-6" style={{}}><img className="imageres" src={require('./assets/img/clipboard-image-31.png')} style={{maxWidth: '671px'}} /></div>
          <div className="col-md-6" style={{padding: '30px'}}>
            <div className="row" style={{padding: '35px', marginTop: '49px'}}>
              <div className="col col-6"><img className="imageres" src={require('./assets/img/clipboard-image-4.png')} /></div>
              <div className="col col-6"><img className="imageres" src={require('./assets/img/clipboard-image-4.png')} /></div>
            </div>
            <div className="row" style={{padding: '35px', marginTop: '49px'}}>
              <div className="col col-6"><img className="imageres" src={require('./assets/img/clipboard-image-4.png')} /></div>
              <div className="col col-6"><img className="imageres" src={require('./assets/img/clipboard-image-4.png')} /></div>
            </div>
          </div>
        </div>
        <div style={{top: 0, right: 0, left: 0, bottom: 0, position: 'absolute', background: 'linear-gradient(90deg, rgba(204, 255, 0, 0.63) 3.9%, rgba(0, 117, 225, 0.897067) 12.17%, rgba(80, 241, 106, 0.727264) 25.81%, rgba(0, 133, 255, 0.567282) 38.66%, rgba(218, 112, 112, 0.433478) 49.41%, rgba(218, 86, 86, 0.297312) 60.35%, rgba(64, 218, 61, 0.160554) 71.34%, rgba(0, 38, 239, 0.291393) 77.38%, rgba(36, 0, 255, 0.44) 84.24%)', filter: 'blur(109px)', pointerEvents: 'none', zIndex: -100}} />
      </div>
  
  );
}
function Efun() {
  return (
    <div>
        <div className="container-fluid" style={{position: 'relative'}}>
          <div className="row" style={{paddingBottom: '35px', paddingTop: '35px', paddingLeft: '24px'}}>
            <div className="col col-12 col-sm-12 col-md-5" style={{position: 'relative'}}>
              <h1 style={{fontFamily: '"DM Sans"', fontStyle: 'normal', fontWeight: 700, fontSize: '36px', lineHeight: '47px', color: '#2568B4', paddingTop: '375px', marginLeft: '137px', textAlign: 'left'}}>Swéy Coin</h1>
              <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '18px', textAlign: 'justify', color: '#545454', lineHeight: '30px', marginLeft: '137px'}}>The Swéy Platform features a modern reward system, designed specifically to give you the best possible value. You can accumulate coins by using the store. <br />Once you have some coins they will fluctuate in value over time going up and down based on the activity we see on the store. Making Swéy coin a free investment in modern shopping.</p><img src={require('./assets/img/clipboard-image-29.png')} style={{/*padding: '10px', *//*paddingTop: '66px', */position: 'absolute', width: '225px', zIndex: -100, /*right: 0, */top: '143px'}} />
            </div>
            <div className="col col-12 col-sm-12 col-md-3" style={{paddingBottom: '56px', background: 'url('+require("./assets/img/clipboard-image-17.png")+')) top right / 69px no-repeat'}}>
              <h1 style={{fontFamily: '"DM Sans"', fontStyle: 'normal', fontWeight: 700, fontSize: '36px', lineHeight: '47px', color: '#2568B4', paddingTop: '59px'}}>Shop</h1>
              <p style={{fontFamily: '"DM Sans"', fontStyle: 'normal', fontWeight: 700, fontSize: '36px', lineHeight: '47px', color: '#2568B4'}}><strong>Without Limits</strong><br /></p>
              <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '18px', textAlign: 'justify', color: '#545454', lineHeight: '30px'}}>The Swéy Platform is designed for users to find exactly what they are looking for, at the best rates across the internet. The app works with you to match your intentions, help you find sustainable clothing, or help you find sold out items around the world.</p>
              <div className="text-center col-12"><button className="btn btn-primary" type="button" style={{height: '64px', width: '256px', top: '351px', borderRadius: '60px', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 500, lineHeight: '21px', letterSpacing: '0em', textAlign: 'center', background: '#70C217', border: 'none'}}>Go To Shop</button></div>
            </div>
            <div className="col col-12 col-sm-12 col-md-4" style={{background: 'url('+require("./assets/img/clipboard-image-30.png")+') no-repeat', backgroundSize: 'contain', position: 'relative'}}><img className="imageres" src={require('./assets/img/clipboard-image-15.png')} style={{padding: '10px', paddingTop: '99px'}} /><img src={require('./assets/img/clipboard-image-17.png')} style={{position: 'absolute', width: '195px', right: '90px', top: '216px', left: '18px'}} /><img src={require('./assets/img/clipboard-image-32.png')} style={{position: 'absolute', width: '110px',right: '90px', top: '-14px', left: '120px'}} /></div>
          </div>
        </div>
        <div className="container-fluid" style={{paddingBottom: '77px'}}>
          <div className="row">
            <div className="col">
              <h1 className="text-center" style={{marginRight: '158px'}}>The Modern Fashion Scene:</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" style={{textAlign: 'center'}}><img className="imageres" src={require('./assets/img/clipboard-image-19.png')} /></div>
            <div className="col-md-6">
              <div className="col-12"><img className="imageres" src={require('./assets/img/clipboard-image-20.png')} style={{width: '200px', paddingTop: '16px', paddingRight: '12px', paddingBottom: '16px'}} />
                <p>“Wölv is a streetwear fashion brand launched in South Africa in 2016 by Stefano Cavalieri and Mandla Koyabe. Wölv Clothing has found the perfect blend of timeless contemporary styles, the highest quality fabrics and craftsmanship for everyday essential wear. We at Wölv believe that luxury should be embroidered in your everyday life, which is why with our Lusso collection, comfort and luxury will now become apart of your everyday activity. As a brand, we don’t support fast fashion or any other forms of environmental harm, we create timeless pieces that are made to last years, not seasons. The Lusso collection was made to fit with every outfit, in every season for years to come”.</p>
              </div>
              <div className="row">
                <div className="col-6"><img className="imageres" src={require('./assets/img/clipboard-image-25.png')} style={{maxWidth: '259px', /*marginTop: '71px', */marginBottom: '116px'}} /></div>
                <div className="col-6">
                  <p style={{fontFamily: '"DM Mono"', fontStyle: 'normal', fontWeight: 557, fontSize: '21px', /*textAlign: 'center', */color: '#272D4E', lineHeight: '70px'}}>CLEAN CUT THRIFT</p>
                  <p style={{/*fontSize: '11px', */letterSpacing: '-1px'}}>Clean Cut Thrift is a modern day renewal of the past. Bringing good quality clothing to fashion forward Thrifters. Thrifting is an effective method of being good for the environment, while maintaining modern Fashion Aesthetics at a very affordable price.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{background: '#0079FF'}}>
          <div className="row text-center" style={{color: '#0079FF', padding: '17px'}}>
            <div className="col-md-6 text-center">
              <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '52px', color: 'var(--bs-white)'}}>Swéy:&nbsp;your shopping... made simple, the best way to get your store on a Global Platform</p>
            </div>
            <div className="col-md-6 text-center align-self-center"><button className="btn btn-primary text-center" type="button" style={{boxSizing: 'border-box', width: '207px',border: '2px solid #FFFFFF', borderRadius: '60px'}}>GET THE APP</button></div>
          </div>
        </div>
      </div>
  
  );
}
function Footer() {
  return (
    <footer>
        <div className="container-fluid" style={{background: 'var(--gray-dark)',padding: '0px'}}>
          <div style={{background: '#5AB0FF', padding: '16px'}}>
            <div className="row" style={{margin: '0px', padding: '0px'}}>
              <div className="col d-lg-flex justify-content-lg-center text_lg_center" style={{padding: '10.5px'}}>
                <div style={{width: '260px'}}><img src={require('./assets/img/clipboard-image-6.png')} style={{width: '41px', height: '41px', margin: '12px'}} /><small style={{color: '#FFFFFF', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', lineHeight: '52px'}}>Constant quality checks</small></div>
              </div>
              <div className="col d-lg-flex justify-content-lg-center text_lg_center" style={{padding: '10.5px'}}>
                <div style={{width: '260px'}}><img src={require('./assets/img/clipboard-image-8.png')} style={{width: '41px', height: '41px', margin: '12px'}} /><small style={{color: '#FFFFFF', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', lineHeight: '52px'}}>Support teams available</small></div>
              </div>
              <div className="col d-lg-flex justify-content-lg-center text_lg_center" style={{padding: '10.5px'}}>
                <div style={{width: '260px'}}><img src={require('./assets/img/clipboard-image-7.png')} style={{width: '41px', height: '41px', margin: '12px'}} /><small style={{color: '#FFFFFF', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', lineHeight: '52px'}}>Safe &amp; Secure online payment</small></div>
              </div>
            </div>
          </div>
          <div style={{background: '#5AB0FF', padding: '16px'}}>
            <div className="row" style={{margin: '0px', padding: '0px'}}>
              <div className="col text-center" style={{padding: '10.5px'}}><img src={require('./assets/img/clipboard-image-5.png')} style={{width: '85px', height: '80px'}} /></div>
            </div>
          </div>
          <div style={{background: '#5AB0FF', padding: '16px'}}>
            <div className="row" style={{margin: '0px', padding: '0px', textAlign: 'center'}}>
              <div className="col text-start d-grid justify-content-center" style={{padding: '10.5px'}}>
                <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '52px', textTransform: 'uppercase', color: '#FFFFFF'}}>MEET SWÉy</p><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>About</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Team</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Work With Us</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Invest In&nbsp;Swéy</small>
              </div>
              <div className="col text-start d-grid justify-content-center" style={{padding: '10.5px'}}>
                <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '52px', textTransform: 'uppercase', color: '#FFFFFF',}}>Work with Swéy</p><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Features</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Mobile App</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Email NewsLetter</small>
              </div>
              <div className="col text-start d-grid justify-content-center" style={{padding: '10.5px'}}>
                <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '52px', textTransform: 'uppercase', color: '#FFFFFF',}}>Shopping</p><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Stores</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Shops</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Work With Us</small><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Invest In&nbsp;Swéy</small>
              </div>
              <div className="col text-start d-grid justify-content-center" style={{padding: '10.5px'}}>
                <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '52px', textTransform: 'uppercase', color: '#FFFFFF',}}>Support</p><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Support Policy</small>
              </div>
              <div className="col text-start d-grid justify-content-center" style={{padding: '10.5px'}}>
                <p style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '52px', textTransform: 'uppercase', color: '#FFFFFF',}}>We recommend</p><small style={{color: '#d0d0d0', fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '22px'}}>Contact Swéy</small>
              </div>
            </div>
          </div>
          <div style={{background: 'var(--bs-white)', padding: '16px'}}>
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col" style={{textAlign: 'center'}}><img src={require('./assets/img/clipboard-image-9.png')} style={{padding: '10px', width: '40px'}} /><img src={require('./assets/img/clipboard-image-10.png')} style={{padding: '10px', width: '40px'}} /><img src={require('./assets/img/clipboard-image-11.png')} style={{padding: '10px', width: '40px'}} /></div>
              <div className="col d-lg-flex align-items-lg-center" style={{fontFamily: '"Roboto"', fontStyle: 'normal', fontWeight: 400, fontSize: '12px', color: '#272D4E', lineHeight: '22px'}}>
                <div className="text-center col-12" style={{paddingTop: '10px'}}>
                  <p className="d-inline-block" style={{color: 'var(--bs-secondary)'}}>COPYRIGHT SWÉY -&nbsp;<br /></p><a className="d-inline-block" href="#" style={{color: '#272D4E'}}>TERMS &amp; CONDITIONS PRIVACY POLICY</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
  );
}


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <div  style={{width: '100%'}}>
 <Cover />
 <Jumbotron />
 <MainMenu />
 <Dfun />
 <Efun />
 <Footer />
</div>);

// ReactDOM.render(
//   <div>
//     <MainMenu />
//     <Jumbotron />
//   </div>,
//   document.querySelector("#root")
// );
