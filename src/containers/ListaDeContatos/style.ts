import styled from 'styled-components'

export const MainContainer = styled.div`
  margin-top: 30px;
  max-height: 70vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none; /* Para navegadores baseados no motor WebKit (Chrome, Safari, etc.) */
  }
`
