import React from 'react';
// import TaskLeftSide from './TaskMainBody/TaskLeftSide/TaskLeftSide'
import TaskBar from './TaskMainBody/TaskLeftSide/TaskBar';
import CustomDataForm from "./TaskMainBody/CustomDataForm"

const AboutUs = () => {
    return (
        <div>
            <p className='display-3'>About Us</p>

            <div>
                <p className='container display-6'>
                    Hello! I'm Dev, the creator behind this React project.
                    I'm thrilled to introduce you to my task manager to-do list with a twist.
                    In this project, I've combined functionality with a touch of inspiration.
                </p>

                <div style={{ marginTop: '50px' }}>
                    <div>
                        <p className='display-6'> Task Management with a Time and Date Feature</p>
                        <p className='container' style={{ textAlign: 'left', fontSize: '25px' }}>
                            In a world where time is of the essence, I decided to create a solution that makes your daily tasks a breeze to manage. Say hello to the Task Manager To-Do List! With this intuitive tool, you can easily organize your tasks, set priorities, and track your progress. But that's not all. I've gone a step further by incorporating a dynamic feature - the current time display.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginLeft: '480px' }}>
                        <TaskBar />
                    </div>
                </div>

                <div className='container display-6' style={{ marginTop: '50px' }}>
                    Quotes for Inspiration
                </div>

                <div>

                    <div cclassName='container' style={{ textAlign: 'left', fontSize: '20px', marginTop: '30px' }}>
                        Life can get overwhelming, and sometimes all you need is a little inspiration to keep going. That's why I've included a dedicated quote section. Here, you'll find a collection of thought-provoking and motivational quotes to brighten your day.

                        And if you're in the mood for more wisdom, just click the "Load" button, and watch as new and inspiring quotes appear. It's a simple way to infuse positivity into your day and find the motivation you need to tackle your tasks.
                        <br />
                        I created this project with the goal of making your daily routine more organized, efficient, and inspiring. Thank you for visiting and using my React project. I hope it enhances your life and helps you make the most of each moment.
                    </div>

                    {/* <div>
                        <CustomDataForm/>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
