import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';
import 'tachyons';




ReactDom.render(
	<div> 
		<App />
	</div>
	,document.getElementById('root'));
