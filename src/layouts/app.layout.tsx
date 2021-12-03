import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as classes from './app.layout.styles';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <h2>Ejercicio 01 ApiRest .- Rick & Morty https://rickandmortyapi.com/ </h2>
          {/* <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
