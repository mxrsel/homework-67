import {NUMBERS_FIRST, NUMBERS_SECOND, NUMBERS_THIRD} from "../numbers";
import './Locker.css'
import {useDispatch, useSelector} from "react-redux";
import {addNum, deleteNum} from "./lockerSlice";
import {RootState} from "../app/store";
import {useEffect, useState} from "react";

const Locker = () => {
    const pinValue = useSelector((state: RootState) => state.locker.value)
    const dispatch = useDispatch()
    const [displayNum, setDisplayNum] = useState<string>('');

    useEffect(() => {
        setDisplayNum(pinValue)
    }, [pinValue]);

    return (
        <div className='container mainContainer'>
            <div className='cardLocker'>
                <div className='cardHeader'>
                    {displayNum}
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
        </div>
    );
};

export default Locker;