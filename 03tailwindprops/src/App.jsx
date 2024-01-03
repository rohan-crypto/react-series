import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "Ron",
    age: 23
  }
  let arr = [1,2,3];

  return (
    <>
      <h1 className='bg-pink-800 text-black mb-4'>Vite + React + Tailwind CSS</h1>
      <Card channel="Tea + Code" someObj={myObj} anotherObj={arr}/> 
      <Card btnText="Submit" /> 
    </>
  )
}

export default App
