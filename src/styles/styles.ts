import { styled, createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins;

}

body{
  background-color: #121d2b;
  margin-bottom: 20px;
}
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90%;
  }
`

export const Botao = styled.button`
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 8px;
`
