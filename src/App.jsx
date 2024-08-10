import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
/* -------------------------- PAGES AND COMPONENTS -------------------------- */
import PageLayout from './pages/PageLayout/PageLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
