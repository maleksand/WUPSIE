import React, { useState, useEffect } from "react";

function UserID() {
    const [currentUser, setCurrentUser] = useState(1)
    

    function inputChange(event) {
        setCurrentUser(event.target.value)
    }
    
    return (
        <div>
            <label /*for="userID"*/>UserID between 1 and 24 </label>
            <input type="number" id="userID" name="userID" min="1" max="24" value={currentUser} onChange={inputChange} />
        </div>
    );
}

export default UserID;