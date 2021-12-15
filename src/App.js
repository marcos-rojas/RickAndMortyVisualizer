import React, { Fragment } from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './App.scss'
import './components/Header.css'

export default function App(){
    return (
        <Fragment>
            <Header title="Rick and Morty API"/>
            <Characters />
        </Fragment>
    )
}
