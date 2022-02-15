import React, { useReducer, useState } from 'react'
import ItemsList from '../components/ItemsList/ItemsList'

export default function Home() {
    const [items, dispatch] = useReducer(itemsReducer, [])
    const itemsReducer = (state, action) => {
        switch(action.type) {
            case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
        }
    }
  return (
    <div>
        <ItemsList items={items} />
    </div>
  )
}
