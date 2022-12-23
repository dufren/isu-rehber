import React from "react";

function Layout(props) {
    return (
        <div className="px-10 mx-auto">
            {props.children}
        </div>
    )
}

export default Layout;