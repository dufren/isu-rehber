import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList({ data }) { // another fancy destructuring to avoid typing props.data.map down below
    let content = (
        data &&
        data.map(employee => (
            <EmployeeCard
                key={employee.id}
                image={employee.Foto}
                name={employee.Ad}
                campus={employee.Kampus}
                dept={employee.Departman}
                faculty={employee.Fakulte}
                program={employee.Program}
                title={employee.GorevTuru}
                title2={employee.Unvan}
                room={employee.OdaNo}
                phone={employee.DahiliTel}
                email={employee.Email}
            />
        ))
    )
    return (
        <>
            <div className="overflow-auto rounded-lg shadow">
            <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-400 shadow">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center">#</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Mail</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Ünvan</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">İsim</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Kadro</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Fakülte/Departman</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Bölüm/Birim</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Program/Görev</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Kampüs</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Oda No</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Dahili</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {content}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default EmployeeCardList;