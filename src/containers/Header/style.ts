import styled from 'styled-components'
import { Container } from '../../styles/styles'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  height: 20vh;
  background-color: #b554d7;
  display: flex;
  align-items: flex-end;
`

export const ContainerDiv = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Button = styled(Link)`
  border-radius: 8px 8px 0px 0px;
  padding: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f4eeee;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #121d2b;
    color: #fff;
  }
`

export const Imagem = styled.div`
  display: flex;
  position: absolute;
  align-self: center;
  justify-self: center;
  top: 20px;
  left: 30px;
  align-items: center;
  opacity: 80%;
  img {
    width: 50px;
    height: 50px;
  }
`
