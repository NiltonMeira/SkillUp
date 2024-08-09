import { ReactNode } from 'react'
import Header from './components/AppBar/Header'

interface IAppProps {
  children:ReactNode
}

export const App = ({children}:IAppProps) =>{
  return (
    <>
      <Header/>
      {children}
      
    </>
  )
}

export default App
