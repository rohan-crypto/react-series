import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // In order to use redux we use Provider mostly in our main file to wrap the child components
    // Then we pass our store in store property
    <Provider store={store}>
      <App/>
    </Provider>

)
