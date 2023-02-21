import { Navbar,  Welcome, Footer, Services, Transactions} from './components'

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        </div>
        <div>
          <Services />
          <Transactions />
          <Footer />
        </div>
         
    </div>
  )
}

console.log('Hello from App.jsx');

export default App
