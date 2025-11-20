import HomePage from './pages/HomePage.jsx'
import {Route, Routes} from 'react-router'
import './App.css'
import CheckoutPage from './pages/CheckoutPage.jsx'
import TrackingPage from './pages/TrackingPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/checkout'  element={<CheckoutPage/>}/>
            <Route path='/tracking'  element={<TrackingPage/>}/>
<Route path='/orders' element={<OrdersPage/>}/>
    </Routes>
    
  )
}

export default App
