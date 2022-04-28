import { useState, useEffect, useContext } from "react";
import { setCurrentUserContext } from "../../App";

function UserID() {
    const setCurrentUser = useContext(setCurrentUserContext)

    function inputChange(event) {
        setCurrentUser(event.target.value)
    }

    function createOptions() {
        let options = []
        for (let i = 1; i <= 24; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }

    return (
        <div>
            <label>UserID between 1 and 24 </label>
            <select onChange={inputChange}>
                {createOptions()}
            </select>
        </div>
    );
}

export default UserID;