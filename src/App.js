import React from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import Chute from "./components/Chute";
const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function App() {
  const [imagemAtual, setImagemAtual] = React.useState(imagensForca[0]);
  const [contErros, setContErros] = React.useState(0);
  const [habilitado, setHabilitado] = React.useState(false);
  const [palavraAtual, setPalavraAtual] = React.useState("");
  const [letrasSelecionadas, setLetrasSelecionadas] = React.useState([]);
  const [chute, setChute] = React.useState("");

  function escolherPalavra() {
    const palavra = Math.floor(Math.random() * palavras.length);
    const palavraSorteada = palavras[palavra];
    setPalavraAtual(palavraSorteada);

    if (habilitado === false) {
      setHabilitado(true);
    }
  }
  console.log(contErros);

  return (
    <div className="containerPrincipal">
      <Jogo
        imagem={imagemAtual}
        funcao={escolherPalavra}
        palavra={palavraAtual}
        selecionadas={letrasSelecionadas}
      />
      <div className="teclado">
        {alfabeto.map((a) => (
          <Letras
            letra={a}
            palavra={palavraAtual}
            letraSelecionada={letrasSelecionadas}
            setLetrasSelecionada={setLetrasSelecionadas}
            contErros={contErros}
            setContErros={setContErros}
            setImagemAtual={setImagemAtual}
            imagensForca={imagensForca}
          />
        ))}
      </div>

      <Chute
        chute={chute}
        setChute={setChute}
        palavra={palavraAtual}
        imagensForca={imagensForca}
        setImagemAtual={setImagemAtual}
        contErros={contErros}
        setContErros={setContErros}
      />
    </div>
  );
}
