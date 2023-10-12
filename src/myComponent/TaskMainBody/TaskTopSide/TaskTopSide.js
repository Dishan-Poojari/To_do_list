import React from 'react';
import CustomDataForm from "../CustomDataForm";
import TimePicker from "../TimePicker";
import './TaskTopSide.css'

const TaskTopSide = () => {
    return (
        <>
            <div className="top-bar" style={{display:'flex',flexDirection:"row", justifyContent:"space-evenly",marginTop:'50px'}}>
                <div className='display-6' style={{marginLeft:"-80px"}}>
                    <CustomDataForm />
                </div>

                <div className='display-6' >
                    <TimePicker />
                </div>
            </div>
        </>
    );
}

export default TaskTopSide;
