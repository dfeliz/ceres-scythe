import React from 'react';
import './style.css';

const Container = (props) => (
    <div className="Container">
        {props.children}
    </div>
)

export default Container;