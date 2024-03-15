import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ContactMe from './components/ContactMe'
import { Contact } from './components/Contact'


function App() {


  return (
    <div className='bg-zinc-900'>
      <Header />
      <Body >
        
      </Body>
      <Skills />
      <Experience />
      <div className='h-28 bg-zinc-900' />
      <Contact/>
      
    </div>
  )
}


export default App
