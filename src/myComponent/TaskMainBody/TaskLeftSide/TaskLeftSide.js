import React from 'react';
import './TaskLeftSide.css';
import TaskBar from './TaskBar';

export default function TaskLeftSide() {

  return (
    <div>
      <div >
        <p className='display-5 second'>Your Daily Work Sir</p>
      </div>

      <TaskBar />
    </div>
  );
}
