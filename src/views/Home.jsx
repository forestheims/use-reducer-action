import React, { useReducer } from 'react'
import ItemControls from '../components/ItemControls/ItemControls';
import ItemsList from '../components/ItemsList/ItemsList'

export default function Home() {
  
  const itemsReducer = (state, action) => {
    switch(action.type) {
      case 'add':
        return {items: [...state.items, {id: items.length, content: }]};
        case 'delete':
          return {items: items.filter((item) => item.id !== id)};
          case 'edit':
            return {};
          default:
            throw new Error();
          }
        }

  const [items, dispatch] = useReducer(itemsReducer, [])

  const addItem = () => {
    dispatch({
      type: 'add'
    })
  }

  const deleteItem = () => {
    dispatch({
      type: 'delete'
    })
  }

  const editItem = () => {
    dispatch({
      type: 'edit'
    })
  }
  
  return (
    <>
      <ItemControls addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} editItem={editItem} />
    </>
  )
}
