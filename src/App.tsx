import './App.css'
//components
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";


function App() {
  return ( 
    <div className="app-layout">
      <Sidebar/>
      <main className="app-content">
        <Dashboard/>
      </main>
    </div>
  )
}

export default App;
