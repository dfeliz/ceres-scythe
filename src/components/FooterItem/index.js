import React from 'react';
import './style.css';

const FooterItem = (props) => (
    <div className="FooterItem">
        <a href={props.url}>{props.name}</a>
    </div>
)

export default FooterItem;