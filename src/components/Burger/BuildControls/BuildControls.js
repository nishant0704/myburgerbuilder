import React from 'react';
import {Button} from 'mdbreact';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Paneer', type: 'paneer' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Veg', type: 'veg' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price : <strong> &#8377; {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <Button>LETS ORDER IT</Button>
    </div>
);

export default buildControls;