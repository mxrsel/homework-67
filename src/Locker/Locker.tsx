import {NUMBERS_FIRST, NUMBERS_SECOND, NUMBERS_THIRD} from "../numbers";
import './Locker.css'
import {useDispatch, useSelector} from "react-redux";
import {addNum, checkout, deleteNum} from "./lockerSlice";
import {RootState} from "../app/store";
import {useEffect, useState} from "react";
import * as React from "react";

const Locker = () => {
    const {value, message} = useSelector((state: RootState) => state.locker);
    const dispatch = useDispatch()
    const [displayNum, setDisplayNum] = useState<string>('');

    useEffect(() => {
        setDisplayNum(value)
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayNum(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(checkout(displayNum))
    }

    return (
        <form className='container mainContainer' onSubmit={handleSubmit}>
            <div className='cardLocker'>
                <div className='cardHeader'>
                    {message !== null &&(
                        <p>
                            {message ? 'Access Granted' : 'Access Denied'}
                            <input
                                style={{backgroundColor: message ? 'green' : 'red' }}
                            name='pin'
                            type='text'
                            placeholder='Enter PIN'
                            value={displayNum}
                            onChange={handleChange}/>
                        </p>
                    )}
                </div>
                <div className='buttonsCol'>
            {NUMBERS_FIRST.map((number) => (
                <button
                    onClick={() => dispatch(addNum(number.number))}
                    className='numberBtn' key={number.id}
                    value={number.number} type='button'
                >{number.number}
                </button>
            ))}
                </div>

                <div className='buttonsCol'>
                    {NUMBERS_SECOND.map((number) => (
                        <button
                            onClick={() => dispatch(addNum(number.number))}
                            className='numberBtn' key={number.id}
                            value={number.number} type='button'
                        >{number.number}
                        </button>
                    ))}
                </div>

                <div className='buttonsCol'>
                    {NUMBERS_THIRD.map((number) => (
                        <button
                            onClick={() => dispatch(addNum(number.number))}
                            className='numberBtn' key={number.id}
                            value={number.number} type='button'
                        >{number.number}
                        </button>
                    ))}
                </div>

                <div className='buttonsCol'>
                    <button className='numberBtn' onClick={() => dispatch(deleteNum())}>delete</button>
                    <button className='numberBtn'  onClick={() => dispatch(addNum('0'))} >0</button>
                    <button className='numberBtn'>enter</button>
                </div>
            </div>
        </form>
    );
};

export default Locker;