import React from 'react';
import TaskItem from '../molecules/TaskItem';

const TaskList = () => {
    return (
        <div name = "listaDeTareas"> 
            <ul>
                <TaskItem taskName="Tarea 1" checkboxName="taskN1"/>
                <TaskItem taskName="Tarea 2" checkboxName="taskN2"/>
                <TaskItem taskName="Tarea 3" checkboxName="taskN3"/>
                <TaskItem taskName="Tarea 4" checkboxName="taskN4"/>
            </ul>
        </div>
    );
};

export default TaskList;