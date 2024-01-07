import { useState } from "react"

function App() {

  const [color, setColor] = useState("lightblue");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
            px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "red"}}
                // onClick expects a func, so if we want to pass a func with parameters then
                // we can pass like below
                // onClick={setColor}

                //but if we want to pass with parameters then we can pass callback func
                onClick={() => setColor("red")}
              >
                Red
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "green"}}
                onClick={() => setColor("green")}
              >
                Green
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "black"}}
                onClick={() => setColor("black")}
              >
                Black
              </button>
            </div>
      </div>
    </div>
  )
}

export default App
