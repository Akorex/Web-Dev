import { Outlet } from "react-router-dom"

function CommonLayout(){
    return (
        <div>
            <h1> This is a common container</h1>
            <Outlet/>
        </div>
    )

}

export default CommonLayout