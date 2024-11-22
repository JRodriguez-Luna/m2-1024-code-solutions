import { useState } from 'react'
import './App.css'
import { RotatingBanner } from './RotatingBanner';

function App() {

  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  return <RotatingBanner
  items={items}
  count={items.length}
  />
}

export default App
