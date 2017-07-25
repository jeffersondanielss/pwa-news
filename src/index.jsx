import React from 'react'
import ReactDOM from 'react-dom'
import startServiceWorker from 'scripts/utils/startServiceWorker'

import styles from 'scripts/utils/app.css'
import fonts from 'scripts/utils/fonts.css'
import App from 'scripts/app/app'

startServiceWorker() 

ReactDOM.render( <App />, document.getElementById('app') )