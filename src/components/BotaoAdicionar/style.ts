import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Botao = styled(Link)`
  background-color: #611c78;
  padding: 10px;
  border: solid 2px var(--Primary, #fff);
  border-radius: 8px;
  color: var(--Primary, #fff);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
`
