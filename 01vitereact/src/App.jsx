import Comp1 from "./Comp1"

function App() {

  const v = " + Tea"

  return (
    <>
    {/* this {v} is called evaluated expression since we pass variable in it 
    which has an solved expression i.e. we don't pass any condition in it */}
      <h1>Vite + React {v}</h1>
      <Comp1/>
    </>
  )
}

export default App
