import { useState } from 'react'
import Title from '../../components/Title'
import Card from '../../components/Card'
import Toast from '../../components/Toast'
import { Header, Section, Footer } from './styles.jsx'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <Title />
      </Header>
      <Section>
        <Card />
      </Section>
      <Footer>
        <Toast />
      </Footer>
    </>
  )
}

export default App
