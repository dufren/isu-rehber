import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";


function EmployeeCard({ image, name, surname, campus, dept, faculty, program, title, title2, room, phone, email }) { 

    return (
        <tr className="shadow-md border border-gray-300">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <img
                    style={{ maxWidth: "60px" }}
                    className="rounded-full shadow-md border border-gray-300"
                    src={image}
                    alt="employee"
                />
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><button onClick={() => window.location = `mailto:${email}`}><FontAwesomeIcon icon={faEnvelope} /></button> </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{title2}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{name}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{surname}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{title}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{faculty}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{dept}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{program}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{campus}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{room}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{phone}</td>
        </tr>
    )
}

export default EmployeeCard;