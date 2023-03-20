import { Container, Figure, Img, P, Button } from './styles.jsx'

const Card = () => {
  return (
    <Container>
      <Figure>
        <Img
          src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="michi de confianza" />
      </Figure>
      <P>Soy tu michi de confianza y estoy aquí para que le eches más ganas a todo we</P>
      <Button>Pedir aiuda</Button>
    </Container>
  )
}

export default Card