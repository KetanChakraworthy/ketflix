import React, { useState } from 'react'
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';
import axios from '../../api/index';
import requests from '../../api/requests';
import './Search.css'

export default function Search() {
    // State
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('movie');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    //handle Functions
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleSelectChange = (e) => {
        setType(e.target.value);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        const query = searchTerm.replace(/\s+/g, '+');
        const { data: { results} } = await axios(requests.searchByType(type, query));
        setSearchResults(results);
        setLoading(false);
    }
    return (
        <main className='search'>
            <SearchForm
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                handleSubmit={handleSubmit}
                searchTerm={searchTerm}
                type={type}
            />
            <SearchResults
                type={type}
                searchTerm={searchTerm}
                searchResults={searchResults}
                loading={loading}
            />
        </main>
  )
}
