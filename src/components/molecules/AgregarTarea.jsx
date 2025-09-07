import React from "react";
import Input from "../atoms/Input/Input";
import Button from "../atoms/Button/Button";
import Heading from "../atoms/Heading/Heading";

const AddTaskForm = () => {
    return (
        <div name = "nuevasTareas" > 

            <input type="text"/>
            <Button> ADD </Button>
        </div>
        
    );
};

export default AddTaskForm;
