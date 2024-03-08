import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Nome } from '../../components/Contato/styles'
import ContatoExibicao from '../../components/ContatosExibicao'
import { Container } from './styles'

const ListaDeContatosExibicao = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo != undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    const complementacao =
      termo !== undefined && termo.length > 0 ? `${termo}` : ''

    const mensagem = `${quantidade} contatos: ${complementacao}`

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <>
      <Container>
        <Nome as="p">{mensagem}</Nome>
        <ul>
          {contatos.map((c) => (
            <li key={c.nome}>
              <ContatoExibicao
                id={c.id}
                nome={c.nome}
                email={c.email}
                numero={c.numero}
              />
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default ListaDeContatosExibicao
