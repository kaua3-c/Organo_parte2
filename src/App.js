import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',

    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },

  ])

  const inicial = [
    { 
      id: uuidv4(),
      nome: 'Pamela',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://turismo.pi.gov.br/wp-content/uploads/2020/03/86d682a0-048f-455a-a373-8bd79452a0df.jpg',
      time: times[0].nome
    },
    { 
      id: uuidv4(),
      nome: 'José',
      cargo: 'Engenheiro de Software',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[0].nome
    },
    { 
      id: uuidv4(),
      nome: 'Ricardo',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[0].nome
    },
    { 
      id: uuidv4(),
      nome: 'Carlos',
      cargo: 'CEO',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/por-que-cavalo-usa-ferradura-2.jpg',
      time: times[0].nome
    },
    { 
      id: uuidv4(),
      nome: 'Pamela',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://turismo.pi.gov.br/wp-content/uploads/2020/03/86d682a0-048f-455a-a373-8bd79452a0df.jpg',
      time: times[1].nome
    },
    { 
      id: uuidv4(),
      nome: 'José',
      cargo: 'Engenheiro de Software',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[1].nome
    },
    { 
      id: uuidv4(),
      nome: 'Ricardo',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[1].nome
    },
    { 
      id: uuidv4(),
      nome: 'Carlos',
      cargo: 'CEO',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/por-que-cavalo-usa-ferradura-2.jpg',
      time: times[1].nome
    },
    { 
      id: uuidv4(),
      nome: 'Pamela',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://turismo.pi.gov.br/wp-content/uploads/2020/03/86d682a0-048f-455a-a373-8bd79452a0df.jpg',
      time: times[2].nome
    },
    { 
      id: uuidv4(),
      nome: 'José',
      cargo: 'Engenheiro de Software',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[2].nome
    },
    { 
      id: uuidv4(),
      nome: 'Ricardo',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[2].nome
    },
    { 
      id: uuidv4(),
      nome: 'Carlos',
      cargo: 'CEO',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/por-que-cavalo-usa-ferradura-2.jpg',
      time: times[2].nome
    },
    { 
      id: uuidv4(),
      nome: 'Pamela',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://turismo.pi.gov.br/wp-content/uploads/2020/03/86d682a0-048f-455a-a373-8bd79452a0df.jpg',
      time: times[3].nome
    },
    { 
      id: uuidv4(),
      nome: 'José',
      cargo: 'Engenheiro de Software',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[3].nome
    },
    { 
      id: uuidv4(),
      nome: 'Ricardo',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[3].nome
    },
    { 
      id: uuidv4(),
      nome: 'Carlos',
      cargo: 'CEO',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/por-que-cavalo-usa-ferradura-2.jpg',
      time: times[3].nome
    },
    { 
      id: uuidv4(),
      nome: 'Pamela',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://turismo.pi.gov.br/wp-content/uploads/2020/03/86d682a0-048f-455a-a373-8bd79452a0df.jpg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      nome: 'José',
      cargo: 'Engenheiro de Software',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      nome: 'Ricardo',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      nome: 'Carlos',
      cargo: 'CEO',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/por-que-cavalo-usa-ferradura-2.jpg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      nome: 'Pamela',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://turismo.pi.gov.br/wp-content/uploads/2020/03/86d682a0-048f-455a-a373-8bd79452a0df.jpg',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      nome: 'José',
      cargo: 'Engenheiro de Software',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      nome: 'Ricardo',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: 'https://thispersondoesnotexist.com/',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      nome: 'Carlos',
      cargo: 'CEO',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/por-que-cavalo-usa-ferradura-2.jpg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }
  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }
    ))

  }

function cadastrarTime(novoTime){
  setTimes([...times, {...novoTime, id: uuidv4()}])
}
function adicionarFavorito(id){
  setColaboradores(colaboradores.map(colaborador => {
    if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
  return colaborador
}))
}
  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, { ...colaborador, id: uuidv4()}])}/>
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
          aoFavoritar={adicionarFavorito}
          mudarCor={mudarCorDoTime}
          key={indice} 
          time={time} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}/>)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
