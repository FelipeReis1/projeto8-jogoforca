import Jogo from "./Jogo";
export default function LetraPalavra(props) {
  return <>{props.selecionadas.includes(props.letra) ? props.letra : "_ "}</>;
}
