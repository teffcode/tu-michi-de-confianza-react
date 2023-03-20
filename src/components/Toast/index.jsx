import { useContext } from 'react'
import { michiContext } from '../../pages/App/index.jsx'
import { Container, Emoji, P, CloseIcon } from './styles.jsx'

const Toast = () => {
  const context = useContext(michiContext)

  const handleClick = () => {
    context.setToastVisibility('hidden')
    context.setSendRequest(true)
  }

  return (
    <Container visibility={context.toastVisibility}>
      <Emoji>🌷</Emoji>
      <P>"Florecer exige pasar por todas las estaciones."</P>
      <CloseIcon onClick={() => handleClick()}></CloseIcon>
    </Container>
  )
}

export default Toast