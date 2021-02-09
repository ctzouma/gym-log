import { useState } from 'react';

type InputProps = {
    onClickAdd?: (f: any) => any;
    buttonLabel?: string;
}

function Input({onClickAdd = f => f, buttonLabel = "Add"}: InputProps) {
    const [value, setValue] = useState('');

    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button type="button" onClick={() => onClickAdd(value)}>{buttonLabel}</button>
        </>
    );
}

export default Input;