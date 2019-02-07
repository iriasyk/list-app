import React, { Component } from 'react';
import PersonData from '../data/data';

import PersonDetail from './PersonDetail';
import SearchBar from './SearchBar';
import '../App.css';

class PersonList extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='mainContainer'>

                    <div className='searchMain'>
                        <SearchBar />
                    </div>

                    <div className='blockPerson'>
                        <ol>
                                {PersonData.map((item, index) => {
                                    return <PersonDetail person={item} key={`person-list-key ${index}`} />
                                })}
                        </ol>
                    </div>

                </div>
            </div>
        );
    }
}

export default PersonList;
