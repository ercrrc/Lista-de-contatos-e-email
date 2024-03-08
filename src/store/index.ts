import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'

// Amazendo os reducers na store
const store = configureStore({
  reducer: {
    // Mapeando os reducers para função reducer. contatosReucer será chamada quando contatos for despachado
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

// RootReducer é o retorno de getState. Define o estado da store
export type RootReducer = ReturnType<typeof store.getState>
export default store
