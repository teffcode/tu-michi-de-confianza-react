import { useContext } from 'react'
import { michiContext } from '../../pages/App/index.jsx'
import { Container, Emoji, P, CloseIcon } from './styles.jsx'
import { phrases } from '../../utils/index.js'

const Toast = () => {
  const context = useContext(michiContext)

  const setPhrase = () => {
    const randomNumber = Math.floor(Math.random() * phrases.length)
    return phrases[randomNumber]
  }

  const handleClick = () => {
    context.setToastVisibility('hidden')
    context.setSendRequest(true)
  }

  return (
    <Container visibility={context.toastVisibility}>
      <Emoji>{setPhrase().emoji}</Emoji>
      <P>{setPhrase().phrase}</P>
      <CloseIcon onClick={() => handleClick()}></CloseIcon>
    </Container>
  )
}

export default Toast