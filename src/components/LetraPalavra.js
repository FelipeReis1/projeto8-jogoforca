export default function LetraPalavra(props) {
  return (
    <>
      {props.selecionadas.includes(props.letra) ||
      props.fimDeJogo === "perdeu" ||
      props.fimDeJogo === "ganhou"
        ? props.letra
        : "_ "}
    </>
  );
}
