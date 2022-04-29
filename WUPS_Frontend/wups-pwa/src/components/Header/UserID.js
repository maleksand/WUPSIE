import { useState, useEffect, useContext } from "react";
import { setAppStateContext } from "../../App";

function UserID() {
    const globalState = useContext(setAppStateContext)

    function inputChange(event) {
        globalState.setCurrentUser(event.target.value)
        globalState.setIsloading(true)
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
            <label>UserID</label>
            <select onChange={inputChange}>
                {createOptions()}
            </select>
        </div>
    );
}

export default UserID;