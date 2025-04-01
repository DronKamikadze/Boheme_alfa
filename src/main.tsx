import App from './components/App/App'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './features/store';
//import styles from './styles/index.module.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>



  
  
  
  ,
)
