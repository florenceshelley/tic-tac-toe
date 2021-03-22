import React, { useState, FunctionComponent } from 'react'
import styled from 'styled-components'

const BoardWrapper = styled.div`
  background-color: #ddd;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 7px;
  row-gap: 7px;
`

export type CellValue = 'x' | 'o' | undefined

type Winner = CellValue | "tie"
type BoardProps = {
  onGameEnd(winner: Winner): void;
}

const Cell = styled.div`
  background: #fff;
`

const Board: FunctionComponent<BoardProps> = ({ onGameEnd }) => {
  // we need to define the state to represent the board (we need to represent the list of cells somehow)
  // we can have a 2d array (this approach might be good for a bigger field if it's hard to see it as a flat/1d array)
  // in this case, we will go with a 1d array
  // we can define the type of the initial state using a generic property
  // in the case of our cells state, we know that our cells will be an array of CellValues
  // `Array(9).fill(undefined)` is a more condensed and cleaner way of writing:
  // `[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]`
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

  return (
    <BoardWrapper>
      {
        cells.map((cell, i) => (
          <Cell
            key={i}
          />
        ))
      }
    </BoardWrapper>
  )
}

export default Board;
