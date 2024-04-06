import './App.css'
import React, {Suspense} from 'react'

const Navbar = React.lazy(() => import('./components/Navbar'));
const Content = React.lazy(() => import("./components/Content"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <Navbar />
        <Content />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
