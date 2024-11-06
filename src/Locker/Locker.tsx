import {NUMBERS} from "../numbers";
import './Locker.css'
import {useDispatch, useSelector} from "react-redux";
import {addNum} from "./lockerSlice";
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
            {NUMBERS.map((number) => (
                <button onClick={() => dispatch(addNum(number.number))} className='numberBtn' key={number.id} value={number.number} type='button'>{number.number}</button>
            ))}
                </div>
            </div>
        </div>
    );
};

export default Locker;