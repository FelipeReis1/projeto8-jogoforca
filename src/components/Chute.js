export default function Chute(props) {
  function chutar() {
    if (props.palavra !== "") {
      if (props.palavra === props.chute) {
        props.setFimDeJogo("ganhou");
      } else {
        props.setContErros(6);
        props.setImagemAtual(props.imagensForca[6]);
        props.setFimDeJogo("perdeu");
      }
    } else {
      alert("Você precisa escolher uma palavra para chutar!");
    }
  }

  return (
    <div className="resposta">
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        onChange={(e) => props.setChute(e.target.value)}
        value={props.chute}
      ></input>
      <button data-test="guess-button" onClick={chutar} className="chutar">
        <p>Chutar</p>
      </button>
    </div>
  );
}
