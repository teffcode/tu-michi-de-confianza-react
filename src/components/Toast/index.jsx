import { Container, Emoji, P, CloseIcon } from './styles.jsx'

const Toast = () => {
  return (
    <Container>
      <Emoji>🌷</Emoji>
      <P>"Florecer exige pasar por todas las estaciones."</P>
      <CloseIcon></CloseIcon>
    </Container>
  )
}

export default Toast