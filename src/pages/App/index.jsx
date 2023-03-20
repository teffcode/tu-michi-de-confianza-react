import { createContext, useState } from 'react'
import Title from '../../components/Title'
import Card from '../../components/Card'
import Toast from '../../components/Toast'
import { Header, Section, Footer } from './styles.jsx'

export const michiContext = createContext({})

const App = () => {
  const [toastVisibility, setToastVisibility] = useState('hidden')

  return (
    <michiContext.Provider value={{
      toastVisibility,
      setToastVisibility
    }}>
      <Header>
        <Title />
      </Header>
      <Section>
        <Card />
      </Section>
      <Footer>
        <Toast />
      </Footer>
    </michiContext.Provider>
  )
}

export default App
