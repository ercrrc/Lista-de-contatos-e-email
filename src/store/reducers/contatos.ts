import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

// Definindo o tipo
type ContatoState = {
  itens: Contato[]
}

// Definindo o estado inicial
const initialState: ContatoState = {
  itens: [
    {
      nome: 'Erivelton',
      email: 'erivelton@gmail.com',
      numero: '98984532123',
      id: 1
    },
    {
      nome: 'Lucas',
      email: 'lucas@gmail.com',
      numero: '98984532123',

      id: 2
    },
    {
      nome: 'Patricia',
      email: 'patricia@gmail.com',
      numero: '98984532123',

      id: 3
    },
    {
      nome: 'Juruna',
      email: 'juruna@gmail.com',
      numero: '98984532123',

      id: 4
    },
    {
      nome: 'Beatriz',
      email: 'beatriz@gmail.com',
      numero: '98984532123',

      id: 5
    },
    {
      nome: 'Celia',
      email: 'celia@gmail.com',
      numero: '989845323345',

      id: 6
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      // Código para remover um contato pelo ID
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      // Código para editar um contato
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      // Código para cadastrar um novo contato
      const contatoJaExiste = state.itens.find(
        (contato) => contato.numero === action.payload.nome
      )
      if (contatoJaExiste) {
        alert('Este contato já existe na sua lista de contatos')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
