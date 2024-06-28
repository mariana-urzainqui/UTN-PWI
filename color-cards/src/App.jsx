import React from 'react'
import CardContainer from './Components/CardContainer/CardContainer'

function App() {
  const colorCards = [
    {
      colors: ['#667BC6', '#FDFFD2', '#FFB4C2', '#DA7297'],
      likes: 444,
      update: '3 days',
    },
    {
      colors: ['#402E7A', '#4C3BCF', '#4B70F5', '#3DC2EC'],
      likes: 789,
      update: '1 week',
    },
    {
      colors: ['#FF76CE', '#FDFFC2', '#94FFD8', '#A3D8FF'],
      likes: 2811,
      update: '2 months',
    },
    {
      colors:['#B0C5A4', '#D37676', '#EBC49F', '#F1EF99'],
      likes: '3107',
      update: '3 months',
    },
  ]
  
  return (
    <>
    <CardContainer colorCards={colorCards}/>
    </>
  )
}

export default App

