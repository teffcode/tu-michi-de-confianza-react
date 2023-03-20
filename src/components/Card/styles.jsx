import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24rem;
  height: auto;
  border: 0.1rem solid var(--gray);
  border-radius: 1.6rem;
  padding: 2.4rem 1.6rem;
`

export const Figure = styled.figure`
  border-radius: 1.6rem;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  margin: 0;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const P = styled.p`
  font-size: 1.4rem;
  font-weight: 100;
  text-align: center;
`

export const Button = styled.button`
  background-color: var(--purple);
  border: none;
  border-radius: 1.6rem;
  cursor: pointer;
  margin-top: 1.2rem;
  padding: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
`