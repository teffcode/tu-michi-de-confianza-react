import { useContext } from 'react'
import { michiContext } from '../../pages/App/index.jsx'
import { Container, Figure, Img, P, Button } from './styles.jsx'

const Card = () => {
  const context = useContext(michiContext)

  return (
    <Container>
      <Figure>
        <Img
          src={context.michis}
          alt="michi de confianza" />
      </Figure>
      <P>Soy tu michi de confianza y estoy aquí para que le eches más ganas a todo we</P>
      <Button onClick={() => context.setToastVisibility('visible')}>Pedir aiuda</Button>
    </Container>
  )
}

export default Card