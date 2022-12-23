import React from "react";

function Navigation({ onSearch, searchTerm}) { // The two props coming down from the Navigation Component
    return (
        <div className=" justify-between my-6">
            <form>
                <input
                    value={searchTerm} // value attribute here keeps what you type in sync
                    onChange={onSearch} // the onChange is the event listening attribute that uses the onSearch prop method let state know there was a change
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    placeholder="Ara"/>
            </form>
        </div>
    )
}

export default Navigation;