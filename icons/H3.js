import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('H3', 'h-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 14a2 2 0 1 0 -2 -2" />
  <path d="M17 16a2 2 0 1 0 2 -2" />
  <path d="M4 6v12" />
  <path d="M12 6v12" />
  <path d="M11 18h2" />
  <path d="M3 18h2" />
  <path d="M4 12h8" />
  <path d="M3 6h2" />
  <path d="M11 6h2" />
</svg>
));
