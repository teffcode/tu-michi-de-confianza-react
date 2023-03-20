import { createContext, useEffect, useState } from 'react'
import Title from '../../components/Title'
import Card from '../../components/Card'
import Toast from '../../components/Toast'
import { BASE_API } from '../../utils'
import { Header, Section, Footer } from './styles.jsx'

export const michiContext = createContext({})

const App = () => {
  const [toastVisibility, setToastVisibility] = useState('hidden')
  const [michis, setMichis] = useState(null)
  const [sendRequest, setSendRequest] = useState(true)

  useEffect(() => {
    if (sendRequest) {
      (async () => {
        const response = await fetch(BASE_API)
        const michi = await response.json()
        setMichis(michi[0].url)
        setSendRequest(false)
      })()
    }
  }, [sendRequest])

  return (
    <michiContext.Provider value={{
      toastVisibility,
      setToastVisibility,
      michis,
      setSendRequest
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
