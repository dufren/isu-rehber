import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import EmployeeCardList from './EmployeeCardList';
import '../../src/assets/paginationStyle.css';

const PaginatedList = ({ itemsPerPage, items }) => {

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <EmployeeCardList data={currentItems} />
            <ReactPaginate
                className='pt-10'
                previousLinkClassName="sr-only"
                nextLinkClassName="sr-only"
                breakLinkClassName="block px-3 py-2 ml-1 leading-tight text-gray-600 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                pageLinkClassName="block px-3 py-2 ml-1 leading-tight text-gray-600 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                breakLabel="..."
                nextLabel="Sonraki"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Önceki"
                renderOnZeroPageCount={null}
            />
        </>
    );
}


export default PaginatedList