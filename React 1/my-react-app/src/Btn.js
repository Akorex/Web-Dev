import React from "react";

function Btn() {

    const clickHandler = () => console.log("Click")

    return <button onClick={clickHandler}> click me</button>
}

export default Btn