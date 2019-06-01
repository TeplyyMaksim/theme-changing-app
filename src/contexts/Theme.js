import React, { createContext, Component } from 'react';
import { connect } from 'react-redux';
import colors from '../config/colors.json';

const Context = createContext({});
const ThemeProvider = ({ children, brand }) => {
  console.log('Theme Store rendered with', brand, 'theme');

  return (
    <Context.Provider value={colors[brand]}>
      {children}
    </Context.Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    brand: state.app.brand,
  };
};

const connectedProvider = connect(mapStateToProps)(ThemeProvider)

export { connectedProvider as ThemeProvider };
export default Context;