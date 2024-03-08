import * as S from './styles'

export type Props = {
  displayBarra?: string
}

const BarraDeAcoes = (props: Props) => (
  <S.BarraAcao displayBarra={props.displayBarra}>
    <S.BotaoCancelar>Cancelar</S.BotaoCancelar>
    <S.BotaoRemover>Remover</S.BotaoRemover>
    <S.BotaoSalvar>Salvar</S.BotaoSalvar>
  </S.BarraAcao>
)

export default BarraDeAcoes
