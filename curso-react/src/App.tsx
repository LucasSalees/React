import { useState } from "react"

export function App() {
  const [list, setList] = useState([
    {id: 1, label: 'item 1'},
    {id: 2, label: 'item 2'},
    {id: 3, label: 'item 3'},
    {id: 4, label: 'item 4'},
  ]); 

  return (
    <div>
      
      <input/>

      <button>
        adicionar
      </button>

      <ol>
        {list.map(listItem => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>

    </div>
  )
}
