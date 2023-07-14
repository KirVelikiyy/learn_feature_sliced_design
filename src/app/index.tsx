import { withProviders } from "./providers";
import { Routing } from "pages";
import React from 'react';
import './index.scss';

function App() {
  return (
      <Routing />
  );
}

export default withProviders(App);
