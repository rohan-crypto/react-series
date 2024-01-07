// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
// we are getting several currencies in response, we can't give id to all, use using this hook
import {useId} from 'react'
import PropTypes from 'prop-types';

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    //currencyOptions will store all currency options, by default empty array
    currencyOptions = [],
    selectCurrency = "usd",
    //if we want to disable amount or currency, not mandatory
    amountDisable = false,
    currencyDisable = false,
    className = "",
  }) => {

    // will generate a random string
    // Do not call useId to generate keys in a list.
    // Here, we will use it to bind label and input
    const amountInputId = useId();

  return (
    //doing in this syntax, so that user can give some extra tailwind classes if want
    <div className={`bg-white/90 p-3 rounded-lg text-sm flex ${className}`}>
      
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input 
          id={amountInputId}
          type="number" 
          className="outline-none w-full bg-transparent py-1.5"
          placeholder='Amount'
          value={amount}
          disabled={amountDisable}
          // using this syntax, as onAmountChange can be blank or null also, so fetch the 
          // value only if it is present
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          // using this syntax, as onCurrencyChange can be blank or null also, so fetch the 
          // value only if it is present
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {/* iterate through all the currency options using map */}
          {/* remember key in loop in react as it optimizes performance greatly */}
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

// either do this
// InputBox.propTypes = {
//   label: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   onAmountChange: PropTypes.func,
//   onCurrencyChange: PropTypes.func.isRequired,
//   currencyOptions: PropTypes.array.isRequired,
//   selectCurrency: PropTypes.string.isRequired,
//   amountDisable: PropTypes.bool,
//   currencyDisable: PropTypes.bool,
//   className: PropTypes.string,
// };

//or write a rule in eslintrc.cjs file
// "react/prop-types": "off"

export default InputBox
