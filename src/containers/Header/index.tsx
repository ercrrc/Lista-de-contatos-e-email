import * as S from './style'
import Logo from '../../Assests/img/AdobeStock_535011716.svg'

const Header = () => {
  return (
    <>
      <S.Header>
        <S.ContainerDiv>
          <S.Imagem>
            <img src={Logo} alt="figura de uma agenda de contatos" />
          </S.Imagem>
          <S.Button to="/">Contatos</S.Button>
          <S.Button to="/editar">Editar</S.Button>
        </S.ContainerDiv>
      </S.Header>
    </>
  )
}

export default Header
