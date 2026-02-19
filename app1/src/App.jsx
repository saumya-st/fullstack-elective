import './App.css'
import Header from'./components/Header.jsx'
// import Footer from'./components/Footer.jsx'

import Registration from './components/Registration.jsx'
function App() {
  
const y =[2024,2025,2026]
// const c ={name:"KIET",location:"Ghaziabad",estdyear:1998};
  return (
    <div>
      <Header title="hieee"/>
      <Header title="web dev full stack"/>
      <Registration />
      <Footer year={y}/> 
      {/* <Footer company={c}/> */}
      
      <h1>Hello world</h1>
      <h2>Welcome to React</h2>
    </div>
  )
}

export default App
