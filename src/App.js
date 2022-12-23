import React, { useState } from 'react';
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import employees from "./data/employees.json";
import PaginatedList from './components/PaginatedList';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const data = employees

    function handleSearchTerm(event) {
        setSearchTerm(event.target.value)
    }

    // the filteredEmployees variable only stores employee names that start with with the matching string you type
    const filteredEmployees = data.filter(employee => {
        return (
            employee.Ad.toLowerCase().includes(searchTerm.toLowerCase())
            || employee.Fakulte.toLowerCase().includes(searchTerm.toLowerCase())
            || employee.Departman.toLowerCase().includes(searchTerm.toLowerCase())
            || employee.Program.toLowerCase().includes(searchTerm.toLowerCase())
            || employee.Kampus.toLowerCase().includes(searchTerm.toLowerCase())
        )
    });
    return (
        <div>
            <Layout>
                {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                <Navigation
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <PaginatedList itemsPerPage={10} items={filteredEmployees}/>
                <Footer />
            </Layout>
        </div>
    )
}

export default App;
