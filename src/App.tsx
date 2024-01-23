import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
// import NavBar from './components/NavBar'
import Configurator from './components/Configurator'
import { CutomizationProvider } from './contexts/Cutomization'

function App() {


  return (
    <CutomizationProvider>
      <div className='App' style={{ width: "100vw", height: "100vh" }}>
        {/* <NavBar/> */}
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <fog attach='fog' args={['#213547', 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CutomizationProvider>
  )
}

export default App
