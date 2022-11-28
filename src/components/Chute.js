export default function Chute(props) {
  function chutar() {
    if (props.palavra !== "") {
      if (props.palavra === props.chute) {
        console.log("ganhou");
      } else {
        props.setContErros(6);
        props.setImagemAtual(props.imagensForca[6]);
        console.log("perdeu");
      }
    } else {
      alert("Você precisa escolher uma palavra para chutar!");
    }
  }

  return (
    <div className="resposta">
      <p>Já sei a palavra!</p>
      <input onChange={(e) => props.setChute(e.target.value)}></input>
      <button onClick={chutar} className="chutar">
        <p>Chutar</p>
      </button>
    </div>
  );
}
