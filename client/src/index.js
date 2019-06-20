import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { configureStore } from './Redux/configureStore'

const store = configureStore()

render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'))
	
	serviceWorker.unregister()
