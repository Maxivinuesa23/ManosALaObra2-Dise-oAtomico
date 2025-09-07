import React from "react";
import Input from "../atoms/Input/Input";
import Button from "../atoms/Button/Button";
import Heading from "../atoms/Heading/Heading";

const TaskItem = ({taskName, checkboxName}) => {
    return (
        <li>
            <input type="checkbox" name={checkboxName}/>
            {taskName}
            <Button>❌</Button>
        </li>
    );
};

export default TaskItem;
