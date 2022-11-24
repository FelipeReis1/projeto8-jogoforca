export default function App() {
  return (
    <div className="containerPrincipal">
      <img className="forca" src="./assets/forca0.png" alt=""></img>
      <button className="escolherPalavra">
        <p>Escolher Palavra</p>
      </button>
      <div className="placeHolderLetras">
        <p>_ _ _ _ _ _ _ _</p>
      </div>
      <div className="teclado">
        <button className="botaoLetra">
          <p>A</p>
        </button>
      </div>
      <div className="resposta">
        <p>Já sei a palavra!</p>
        <input></input>
        <button className="chutar">
          <p>Chutar</p>
        </button>
      </div>
    </div>
  );
}
