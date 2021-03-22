import React from 'react'
import styled from 'styled-components'

import Board from './Board'
import './App.css'

const BoardContainer = styled.div`
  background: #fff;
  width: 500px;
  height: 500px;
  border-radius: 15px;
  box-shadow: -6px 10px 30px 4px #0003;
  border: 20px solid #fff;
`

const App = () => (
  <BoardContainer>
    <Board onGameEnd={(): void => {}} />
  </BoardContainer>
)

export default App
