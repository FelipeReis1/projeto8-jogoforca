import LetraPalavra from "./LetraPalavra";
export default function Jogo(props) {
  let palavra = props.palavra;
  let novaPalavra = palavra.split("");
  for (let i = 0; i < novaPalavra.length; i++) {}

  return (
    <>
      <img
        data-test="game-image"
        className="forca"
        src={props.imagem}
        alt=""
      ></img>
      {palavra === "" || props.fimDeJogo !== "" ? (
        <button
          data-test="choose-word"
          onClick={props.funcao}
          className="escolherPalavra"
        >
          <p>Escolher Palavra</p>
        </button>
      ) : (
        <button
          onClick={props.funcao}
          className="escolherPalavra escolherPalavraOpaca"
        >
          <p>Escolher Palavra</p>
        </button>
      )}

      {props.fimDeJogo === "ganhou" ? (
        <div className="placeHolderLetras">
          <p data-test="word" data-answer={props.palavra} className="green">
            {novaPalavra.map((p, index) => (
              <LetraPalavra
                key={index}
                letra={p}
                selecionadas={props.selecionadas}
                acertos={props.acertos}
                setAcertos={props.setAcertos}
                palavra={props.palavra}
                fimDeJogo={props.fimDeJogo}
                setFimDeJogo={props.setFimDeJogo}
              />
            ))}
          </p>
        </div>
      ) : props.fimDeJogo === "perdeu" ? (
        <div className="placeHolderLetras">
          <p data-test="word" data-answer={props.palavra} className="red">
            {novaPalavra.map((p, index) => (
              <LetraPalavra
                key={index}
                letra={p}
                selecionadas={props.selecionadas}
                acertos={props.acertos}
                setAcertos={props.setAcertos}
                palavra={props.palavra}
                fimDeJogo={props.fimDeJogo}
                setFimDeJogo={props.setFimDeJogo}
              />
            ))}
          </p>
        </div>
      ) : (
        <div className="placeHolderLetras">
          <p data-test="word" data-answer={props.palavra}>
            {novaPalavra.map((p, index) => (
              <LetraPalavra
                key={index}
                letra={p}
                selecionadas={props.selecionadas}
                acertos={props.acertos}
                setAcertos={props.setAcertos}
                palavra={props.palavra}
                fimDeJogo={props.fimDeJogo}
                setFimDeJogo={props.setFimDeJogo}
              />
            ))}
          </p>
        </div>
      )}
    </>
  );
}
