import React, { Component } from 'react'

const Header = props => (
    <header className={`pageHeader ${!!props.fixed ? 'absolute' : ''}`}>
        <div className="container flex flex-auto w-100 justify-between items-start ph4 ph0-ns">
            Head
        </div>
    </header>
)

export default Header
