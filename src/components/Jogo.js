import LetraPalavra from "./LetraPalavra";
export default function Jogo(props) {
  let palavra = props.palavra;
  let novaPalavra = palavra.split("");
  for (let i = 0; i < novaPalavra.length; i++) {}

  return (
    <>
      <img className="forca" src={props.imagem} alt=""></img>
      <button onClick={props.funcao} className="escolherPalavra">
        <p>Escolher Palavra</p>
      </button>
      <div className="placeHolderLetras">
        <p>
          {novaPalavra.map((p) => (
            <LetraPalavra letra={p} selecionadas={props.selecionadas} />
          ))}
        </p>
      </div>
    </>
  );
}
