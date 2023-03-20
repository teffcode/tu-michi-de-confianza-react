import { useContext } from 'react'
import { michiContext } from '../../pages/App/index.jsx'
import { Container, Emoji, P, CloseIcon } from './styles.jsx'

const Toast = () => {
  const context = useContext(michiContext)

  return (
    <Container visibility={context.toastVisibility}>
      <Emoji>🌷</Emoji>
      <P>"Florecer exige pasar por todas las estaciones."</P>
      <CloseIcon onClick={() => context.setToastVisibility('hidden')}></CloseIcon>
    </Container>
  )
}

export default Toast