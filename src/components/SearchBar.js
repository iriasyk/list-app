import React, { Component } from 'react';
// import PersonData from '../data/data';

class SearchBar extends Component {
    render() {
        return (
                <div className='search'>
                    <input type='submit' src='../images/search.png' value=''/>
                    <input
                        type='search'
                        placeholder='Поиск автора по имени'
                    />
                </div>
        );
    }
}

export default SearchBar;
