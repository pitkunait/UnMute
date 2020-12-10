import React, { useState } from 'react';
import { history } from '../../services/history';

interface Page1Props {
    var3: number;
    incrementVar: any;
}

const Page1 = (props: Page1Props) => {
    let variable = 1;

    const [var2, setVar2] = useState(5);

    const onClickHandler = () => {
        console.log('suka nazhala !');
        variable++;
        setVar2(var2 + 1);
        console.log(variable);
        console.log(var2);
        props.incrementVar();
    };

    const goNahuj = () => {
        console.log('123');
        history.push('/page0');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div>This is shit: {variable}</div>
            <div>This is from useState hook: {var2}</div>
            <div>This is from prop: {props.var3}</div>

            <button onClick={onClickHandler}>CLICK ME SUKA</button>

            <button onClick={goNahuj}>Go to page</button>
        </div>
    );
};

export default Page1;
