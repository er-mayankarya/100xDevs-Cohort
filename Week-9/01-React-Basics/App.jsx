import { useState } from 'react';

export default function App(){
    const [count , setCount] = useState(0);

    function onClickHandler(){
        setCount(count + 1);
    }

    return (
        <div>
        <button btn="" onClick={onClickHandler}>
            Counter {count}
        </button>
        </div>
    )
}