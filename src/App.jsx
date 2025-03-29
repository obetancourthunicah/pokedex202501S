// Import vendor dependencies

// Import Local Components
import { DashBoard } from './pages/Dashboard'
// Import Assets

import { Header } from './components/Header'
import { Main } from './components/Main'
function App() {

  return (
    <>
      <Header
        title="Pokedex V-202501"
      />
      <Main>
        <DashBoard />
      </Main>
    </>
  )
}

export default App
