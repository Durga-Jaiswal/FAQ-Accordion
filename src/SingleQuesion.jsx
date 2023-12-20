import {useState} from 'react'

import {CiCircleMinus, CiCirclePlus } from "react-icons/ci";
const SingleQuestion = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
return (
    <>
    <div className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>{showInfo? <CiCirclePlus /> : <CiCircleMinus />}
            </button>
        </header>
        {showInfo && <p >{info}</p>}
    </div>
    </>
)
}
export default SingleQuestion;
