import React from 'react';

function CompSeven() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="footer">
      <div className="container">
        <img src="./img/Logo.png" className="m0-a" alt="Logo" />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-1 m0-a">
            <img className="m0-a" src="./img/FB.png" alt="Facebook" />
          </div>
          <div className="col-1 m0-a">
            <img className="m0-a" src="./img/IG.png" alt="Instagram" />
          </div>
          <div className="col-1 m0-a">
            <img className="m0-a" src="./img/GM.png" alt="Gmail" />
          </div>
          <div className="col-1 m0-a">
            <img className="m0-a" src="./img/WH.png" alt="WhatsApp" />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col">
            <a href="#" className="text-center font">Terminos y condiciones</a>
          </div>
        </div>
      </div>
      <button onClick={scrollToTop} className="floating-button">↑</button>
    </section>
  );
}

export default CompSeven;
