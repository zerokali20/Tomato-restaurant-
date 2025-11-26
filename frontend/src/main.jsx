import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
impport {BrowserRouter} from 'react-router-dom'
import StroeContextProvider from './context/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StoreContextProvider>
			<App/>
		</StoreContextProvider>
	</BrowserRouter>
)

