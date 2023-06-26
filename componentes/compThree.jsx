import React from 'react';

function CompThree(props) {
  const toggleTexto = () => {
    const parrafo = document.getElementById('parrafo');
    parrafo.style.display = parrafo.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <section className="bg-section-4">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div>
            <div className="col-10 text-light mb-5 description">
              <h2 id="desc" className="m-2 text-center">{props.titulo}</h2>
              <hr style={{ padding: '0 0 10px 0', margin: '0 auto' }} />
              <p className="fs-6 px-5">Este juego fue creado con el fin de informar a las personas de forma didáctica acerca de la salud humana y animal. La historia gira en torno a Fleming, un científico que busca salvar la ciudad de Kingston de una nube tóxica que infecta a los animales mediante parásitos. El antídoto finalmente es encontrado gracias al trabajo conjunto del científico y los animales.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div id="" className="carousel slide">
                <img src="./img/immgcontr.png" alt="" srcSet="" />
              </div>
            </div>
            <div className="col-6">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./img/controles.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./img/controles.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./img/controles.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id="btnHistoria" className="btn mt-5" onClick={toggleTexto}>Historia ››</button>
      <p id="parrafo" style={{ display: 'none' }}>Fleming Es un personaje inspirado en uno de los más grandes científicos y médicos microbiólogo de Londres (Alexander Fleming) que trabajaba con cultivos de bacterias y descubrió una importante medicina para prevenir ciertas infecciones provocadas por estas, este es el personaje histórico que en nuestro juego se encargara de salvar la ciudad de Kinston.</p>
    </section>
  );
}

export default CompThree;