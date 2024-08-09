import { ReactNode } from 'react'
import { Appbar } from './components/AppBar/Appbar'

interface IAppProps {
  children:ReactNode
}

export const App = ({children}:IAppProps) =>{
  return (
    <>
      <Appbar/>
      {children}
      
    </>
  )
}

export default App
