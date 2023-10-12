import React from 'react';
import TaskLeftSide from './TaskLeftSide/TaskLeftSide';
import TaskRightSide from './TaskRightSide/TaskRightSide';
import "./TaskRightSide.css"

export default function TaskMainBody() {
  return (
    <div >
      <div className=' todo-list '>
      <TaskLeftSide />
      </div>
      
      <TaskRightSide />
    </div>
  );
}
// style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
/*
style={{
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 1fr)',
   gridTemplateRows: '1fr',
   gridColumnGap: '0px',
   gridRowGap: '0px'

   display: flex;
    align-items: center;
    justify-content: center;
 }}
*/