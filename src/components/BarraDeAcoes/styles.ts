import { styled } from 'styled-components'
import { Botao } from '../../styles/styles'

import { Props } from '.'

export const BarraAcao = styled.div<Props>`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: ${(props) => (props.displayBarra ? props.displayBarra : 'none')};
`
export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`
export const BotaoRemover = styled(Botao)`
  background-color: #c23616;
`
export const BotaoCancelar = styled(Botao)`
  background-color: #1e90ff;
`
