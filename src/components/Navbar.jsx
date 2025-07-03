import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex gap-6">
        <Link to="/" className="font-semibold hover:text-blue-600">Materi</Link>
        <Link to="/latihan" className="font-semibold hover:text-blue-600">Latihan Soal</Link>
        <Link to="/diskusi" className="font-semibold hover:text-blue-600">Diskusi</Link>
      </div>
    </nav>
  )
}
