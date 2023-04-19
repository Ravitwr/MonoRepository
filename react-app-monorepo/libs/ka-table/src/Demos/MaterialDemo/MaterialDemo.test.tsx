import React from 'react';
import ReactDOM from 'react-dom';

import BootstrapDemo from './MaterialDemo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
