import React, { Component } from 'react';
import PersonData from '../data/data';

import PersonDetail from './PersonDetail';
import SearchBar from './SearchBar';
import '../App.css';

class PersonList extends Component {
    constructor() {
        super();
        this.state = {
            list: PersonData,
            currentPage: 1,
            listPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        // console.log(PersonData);

        //Sort from large to small (both by pageviews and by name):
        (function sorting() {
            for (let i=0;
                 i < PersonData.sort(function(obj1, obj2){
                     if (obj1.name > obj2.name) {
                         return 1;
                     }
                     if (obj1.name < obj2.name) {
                         return -1;
                     };
                 }).length;
                 i++) {
                // console.log(PersonData[i].name);
            }

            for (let i=0;
                 i < PersonData.sort(function(obj1, obj2){
                     return obj2.pageviews-obj1.pageviews;
                 }).length;
                 i++) {
                // console.log(PersonData[i].pageviews);
            }
        }());

        const { list, currentPage, listPerPage } = this.state;

        // Logic for displaying current list
        const indexOfLastTodo = currentPage * listPerPage; //10
        const indexOfFirstTodo = indexOfLastTodo - listPerPage; //1
        const currentList = list.slice(indexOfFirstTodo, indexOfLastTodo); //slice.(1,10)

        const renderList = currentList.map((item, index) => {
            return <PersonDetail person={item} key={`person-list-key ${index}`} />
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / listPerPage); i++) {
            pageNumbers.push(i);
        }
        // console.log(pageNumbers); //[1,2,3,4]

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div className='wrapper'>
                <div className='mainContainer'>

                    <div className='searchMain'>
                        <SearchBar />
                    </div>

                    <div className='blockPerson'>
                        <ol>
                                {/*{PersonData.map((item, index) => {*/}
                                    {/*return <PersonDetail person={item} key={`person-list-key ${index}`} />*/}
                                {/*})}*/}
                            {renderList}
                        </ol>
                    </div>

                </div>

                <div>
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>

            </div>
        );
    }
}

export default PersonList;
