import React from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigator/Toolbar/Toolbar'

import classes from './Layout.module.css'

const Layout = props =>
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

export default Layout
