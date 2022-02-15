import React from 'react'

export default function ItemsList({ items, deleteItem, editItem }) {
  return (
    <div className="items-list">{items.map((item) => (
      <div key={item.id}>
        <span>{item.content}</span>
        <button onClick={deleteItem}>delete</button>
        <button onClick={editItem}>edit</button>
      </div>
    )
    )}</div>
  )
}
