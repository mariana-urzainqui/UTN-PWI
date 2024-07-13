import React, { useState } from 'react'
import CardContainer from './Components/CardContainer/CardContainer'
import Counter from './Components/Counter/Counter'
import ColorCardForm from './Components/ColorCardForm/ColorCardForm'


function App() {
  const colorCards = [
    {
      colors: ['#667BC6', '#FDFFD2', '#FFB4C2', '#DA7297'],
      likes: 444,
      update: '3 days',
      id: 1
    },
    {
      colors: ['#402E7A', '#4C3BCF', '#4B70F5', '#3DC2EC'],
      likes: 789,
      update: '1 week',
      id: 2
    },
    {
      colors: ['#FF76CE', '#FDFFC2', '#94FFD8', '#A3D8FF'],
      likes: 2811,
      update: '2 months',
      id: 3
    },
    {
      colors: ['#B0C5A4', '#D37676', '#EBC49F', '#F1EF99'],
      likes: 3107,
      update: '3 months',
      id: 4
    },
  ]

  const [colorCardLista, setColorCardLista] = useState(colorCards)
  const handleSubmit = (e, formValues) => {
    e.preventDefault()
    const colors = []
    for(let i = 1; i < 4; i = i + 1){
      colors.push(formValues['color_' + i])
    }
    setColorCardLista([...colorCardLista, {colors: colors, likes: 0, id: 5, update: formValues.update}])
  }



  return (
    <>
      <CardContainer colorCards={colorCardLista} />
      <Counter limit={3}/>
      <ColorCardForm handleSubmit={handleSubmit}/>
    </>
  )
}

export default App

