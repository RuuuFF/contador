import ReactDOM from 'react-dom';

import './index.css';

import Contador from './Contador';

ReactDOM.render(
  <Contador />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}