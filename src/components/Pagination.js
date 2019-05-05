import React from 'react';
import { button } from './Pagination.module.css';

const Pagination = props => {
    return (
    <> {props.nextPage ?
    <button className={button}>Next Page</button>
    :
    <button className={button}>New Search</button>
    }
    </>
    )
}

export default Pagination