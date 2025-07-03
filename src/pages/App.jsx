import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Materi from './Materi'
import Latihan from './Latihan'
import Diskusi from './Diskusi'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<Materi />} />
          <Route path="/latihan" element={<Latihan />} />
          <Route path="/diskusi" element={<Diskusi />} />
        </Routes>
      </div>
    </div>
  )
}
