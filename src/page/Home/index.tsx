import BotaoAdicionar from '../../components/BotaoAdicionar'
import CampoPesquisar from '../../components/CampoPesquisar'
import ListaDeContatosExibicao from '../../containers/ListaDeContatosExibicao'

const Home = () => (
  <>
    <CampoPesquisar />
    <ListaDeContatosExibicao />
    <BotaoAdicionar />
  </>
)

export default Home
