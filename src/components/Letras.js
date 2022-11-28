export default function Letras(props) {
  function cliqueLetra() {
    const arrayLetra = props.letraSelecionada;
    const letra = props.letra;
    const tentativas = [...arrayLetra, letra];
    if (
      arrayLetra.includes(letra) === false &&
      props.palavra !== "" &&
      props.contErros !== 6 &&
      props.fimDeJogo !== "ganhou"
    ) {
      const novoArray = [...arrayLetra, letra];
      props.setLetrasSelecionada(novoArray);
      const palavraArray = props.palavra.split("");
      if (palavraArray.includes(letra) === false) {
        if (props.contErros + 1 === 6) {
          props.setFimDeJogo("perdeu");
        }
        props.setContErros(props.contErros + 1);
        props.setImagemAtual(props.imagensForca[props.contErros + 1]);
      } else {
        let checar;
        for (let i = 0; i < palavraArray.length; i++) {
          if (tentativas.includes(palavraArray[i])) {
            checar = true;
          } else {
            checar = false;
            break;
          }
        }
        if (checar === true) {
          props.setFimDeJogo("ganhou");
        }
      }
    }
  }
  return (
    <button
      onClick={cliqueLetra}
      className={
        props.letraSelecionada.includes(props.letra) === false &&
        props.palavra !== "" &&
        props.contErros !== 6 &&
        props.fimDeJogo !== "ganhou"
          ? "botaoLetraHabilitado"
          : "botaoLetra"
      }
    >
      <p> {props.letra.toUpperCase()}</p>
    </button>
  );
}
