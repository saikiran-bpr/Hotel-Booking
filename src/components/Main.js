
import Card from './Card'

const Main = ({data, setterFn}) => {
  return (
    <div className='main'>
      <h1>Main Page</h1>
      <div className='content'>
        {data.map(it => {
          return <Card key={it.id} isFavorite={it.favourite} setterFn={setterFn} item={it}/> 
        })}
      </div>
    </div>
  )
}

export default Main
