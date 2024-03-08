import styled from 'styled-components'

export const CampoContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  color: #ccc;
  padding: 20px 0;
  h2 {
    margin-bottom: 10px;
  }
`
export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 40px;
  font-weight: bold;
  background-color: #ccc;
  color: #fff;
  border: 2px solid var(--default-10, rgba(255, 255, 255, 0.1));
  background: var(--default-10, rgba(255, 255, 255, 0.1));
`
