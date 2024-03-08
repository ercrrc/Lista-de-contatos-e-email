import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles/styles'
import Header from './containers/Header'
import { Outlet } from 'react-router-dom'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Provider>
  )
}

export default App
// Qual é a função do fragmento no React? : Possibilitar o retorno de mais de uma tag
// npm i
// npm i --save styled-components
// npm install --save-dev @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npm install @types/react --save-dev
