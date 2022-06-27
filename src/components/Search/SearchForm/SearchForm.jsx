import React from 'react'
import { ReactComponent as SearchIcon } from '../../../img/search-icon.svg';
import './SearchForm.css';

export default function SearchForm({ handleInputChange, handleSelectChange, handleSubmit, searchTerm, type }) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <form className="search__container" onSubmit={handleSubmit}>
            <select name="type" onChange={handleSelectChange} className='search__type'>
                <option value="movie">Movie</option>
                <option value="tv">TV</option>
                <option value="person">Person</option>
            </select>

            <input
                className='search__input'
                type="text"
                placeholder={`Search...${capitalizeFirstLetter(type)}`}
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className='search__btn' type="submit"><SearchIcon className='search__btnIcon' style={{ height: 15, width: 15, fill:'#111111'}} /></button>
           </form>
    )
}
