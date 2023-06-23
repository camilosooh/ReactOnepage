import React from 'react';

function CompFour() {
  return (
    <section className="bg-section-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <h2 id="character" className="text-center fs-1 mt-5 mb-5">Personajes</h2>
          <div className="col-3 mb-5 card">
            <div className="front">
              <img src="./img/jhonatan2.png" alt="" />
            </div>
            <div className="back">
              <h2 className="text-center">Jhonatan</h2>
              <p>Este es el personaje histórico que en nuestro juego se encargará de salvar la ciudad de Kinston.</p>
            </div>
          </div>
          <div className="col-3 mb-5 card">
            <div className="front">
              <img src="./img/lars.png" alt="" />
            </div>
            <div className="back">
              <h2 className="text-center">Lars</h2>
              <p>Experto en el tema de la ciencia humana y animal, logró crear un aparato que permitió verbalizar los sonidos de los animales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompFour;
