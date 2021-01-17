import React from "react";
import Affairs from "./Affairs";
import {AffairPriorityType, AffairType, filterAffairs} from "./HW2";
//import any = jasmine.any;

type AffairPropsType = {
    // key не нужно типизировать
    affair: {_id: number, name: string, priority: AffairPriorityType}// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div>
            {props.affair._id} -
            {props.affair.name} -
            {props.affair.priority}
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
