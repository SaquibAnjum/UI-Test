import { useState } from 'react'
import './App.css'
import Cards from './Cards'
import Process from './Process'

function App() {
  const [currentPage, setCurrentPage] = useState('headings')
  const headingText = "Features that save time";

  if (currentPage === 'cards') {
    return <Cards onNavigateBack={() => setCurrentPage('headings')} />
  }

  if (currentPage === 'process') {
    return <Process onNavigateBack={() => setCurrentPage('headings')} />
  }

  return (
    <div className="app">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">15 Different Heading Styles & Animations</h1>
          <nav className="navigation">
            <button 
              className="nav-button"
              onClick={() => setCurrentPage('cards')}
            >
              View Cards Page →
            </button>
            <button 
              className="nav-button"
              onClick={() => setCurrentPage('process')}
            >
              View Process Page →
            </button>
          </nav>
        </div>
        
        <div className="headings-container">
          <h1 className="heading-1">{headingText}</h1>
          <h1 className="heading-2">{headingText}</h1>
          <h1 className="heading-3">{headingText}</h1>
          <h1 className="heading-4">{headingText}</h1>
          <h1 className="heading-5">{headingText}</h1>
          <h1 className="heading-6">{headingText}</h1>
          <h1 className="heading-7">{headingText}</h1>
          <h1 className="heading-8">{headingText}</h1>
          <h1 className="heading-9">{headingText}</h1>
          <h1 className="heading-10">{headingText}</h1>
          <h1 className="heading-11">{headingText}</h1>
          <h1 className="heading-12">{headingText}</h1>
          <h1 className="heading-13">{headingText}</h1>
          <h1 className="heading-14">{headingText}</h1>
          <h1 className="heading-15">{headingText}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
