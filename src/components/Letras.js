export default function Letras(props) {
  function cliqueLetra() {
    const arrayLetra = props.letraSelecionada;
    const letra = props.letra;
    if (arrayLetra.includes(letra) === false) {
      console.log(letra);
      const novoArray = [...arrayLetra, letra];
      props.setLetrasSelecionada(novoArray);
    }
  }
  return (
    <button
      onClick={cliqueLetra}
      className={
        props.letraSelecionada.includes(props.letra) === false
          ? "botaoLetraHabilitado"
          : "botaoLetra"
      }
    >
      <p> {props.letra.toUpperCase()}</p>
    </button>
  );
}
