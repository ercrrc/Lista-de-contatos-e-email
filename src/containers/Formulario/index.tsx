import React, { FormEvent, useState } from 'react'
import { BotaoSalvar } from '../../components/BarraDeAcoes/styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { Campo, Container, Form, Titulo } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero,
        email
      })
    )
    navigate('/')
  }
  return (
    <Container>
      <Titulo>Novo Contato</Titulo>
      <Form>
        <Campo
          value={nome}
          type="text"
          placeholder="Nome"
          onChange={(evento) => setNome(evento.target.value)}
          required
        />
        <Campo
          value={email}
          type="text"
          placeholder="email"
          onChange={(evento) => setEmail(evento.target.value)}
          required
        />
        <Campo
          value={numero}
          type="text"
          placeholder="numero"
          onChange={(evento) => setNumero(evento.target.value)}
          required
        />
        <BotaoSalvar type="submit" onClick={cadastarContato}>
          Salvar Contato
        </BotaoSalvar>
      </Form>
    </Container>
  )
}

export default Formulario
