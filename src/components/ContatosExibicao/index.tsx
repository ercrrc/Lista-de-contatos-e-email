import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { CardContato } from '../Contato/styles'

type Props = ContatoClass

const ContatoExibicao = ({ nome, email, numero }: Props) => {
  return (
    <CardContato>
      <S.Nome>{nome}</S.Nome>
      <S.Email>{email}</S.Email>
      <S.Numero>{numero}</S.Numero>
    </CardContato>
  )
}

export default ContatoExibicao
