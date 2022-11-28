export default function Letras(props) {
  function cliqueLetra() {
    const arrayLetra = props.letraSelecionada;
    const letra = props.letra;
    if (
      arrayLetra.includes(letra) === false &&
      props.palavra !== "" &&
      props.contErros !== 6
    ) {
      const novoArray = [...arrayLetra, letra];
      props.setLetrasSelecionada(novoArray);
      const palavraArray = props.palavra.split("");
      if (palavraArray.includes(letra) === false) {
        props.setContErros(props.contErros + 1);
        props.setImagemAtual(props.imagensForca[props.contErros + 1]);
      }
    }
  }
  return (
    <button
      onClick={cliqueLetra}
      className={
        props.letraSelecionada.includes(props.letra) === false &&
        props.palavra !== "" &&
        props.contErros !== 6
          ? "botaoLetraHabilitado"
          : "botaoLetra"
      }
    >
      <p> {props.letra.toUpperCase()}</p>
    </button>
  );
}
