import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  align-items: center;
`

export const Titulo = styled.h1`
  color: #ccc;
`
export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Campo = styled.input`
  width: 100%;
  padding: 15px 8px;
  border-radius: 8px;
  font-weight: bold;
  margin: 10px auto;
`
