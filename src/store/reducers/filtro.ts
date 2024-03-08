import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// PayloadAction: Descreve a estrutura de uma ação. createSlice: função para criar um pedaço de estado Redux

// Definição do tipo de estado. FiltroState descreve a estrutura do estado que será gerenciado no slice
type FiltroState = {
  termo?: string
}

// Definição do estado inicial do slice
const initialState: FiltroState = {
  termo: ''
}

// Criando um slice com a função createSlice.
const filtroSlice = createSlice({
  // Passamos um objeto com três propriedades. Name, estadoinicial definido anteriomente, reducers
  name: 'filtro',
  initialState,
  // Reducers: objeto que define as ações que podem ser executadas neste slice
  reducers: {
    // Ação alterar termo, recebe um parâmetro action, que é uma instância de PayloadAction.
    // PayloadAction<string> : espera receber uma string como payload
    // Quando a ação é disparada, ela atualiza a propriedade termo do estado com o valor do payload
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filtroSlice.actions
export default filtroSlice.reducer
