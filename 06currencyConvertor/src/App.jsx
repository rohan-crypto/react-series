import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
 
  const [amount, setAmount] = useState(0);//initial amount
  const [from, setFrom] = useState('usd');//currency to be converted from
  const [to, setTo] = useState('inr');//currency to be converted to
  const [convertedAmount, setConvertedAmount] = useState(0);//converted amount

  // currencyInfo will be an Object with whole data.
  const currencyInfo = useCurrencyInfo(from);
  // options will store all the keys
  const options = Object.keys(currencyInfo);
  console.log("options",options);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    // to convert into required currency
    setConvertedAmount(amount * currencyInfo[to]);
  }
  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/5466791/pexels-photo-5466791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}>

      <div className='w-full'>        
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          <form onSubmit={(e) => {
            e.preventDefault();
            convert()}}>

              <div className='w-full mb-1'>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 
                  border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  type='button'
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  amountDisable// to prevent amount change
                  selectCurrency={to}
                />
              </div>
              <button
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                type='submit'
              > 
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>

          </form>

        </div>
      </div>

    </div>
  )
}

export default App

