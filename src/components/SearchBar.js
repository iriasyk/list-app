import React, { Component } from 'react';

import PersonData from '../data/data';
import PersonDetail from './PersonDetail';
import './css/App.css';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            users: [],

            currentPage: 1,
            listPerPage: 10,
        };
        this.handleChange = this.handleChange.bind(this); //for search
        this.handleClick = this.handleClick.bind(this); //for pagination
    }

    // ---Search start
    componentDidMount() {
        this.setState({
            users: PersonData,
        });
        this.refs.search.focus();
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }
    // ---Search end

    // ---pagination start
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    // ---pagination end

    render() {
        // ---Search start
        let _users = this.state.users;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _users = _users.filter(function(user) {
                return user.name.toLowerCase().match(search);
            });
        }
        // ---Search end

        //Sort from large to small (both by pageviews and by name):
        (function sorting() {
            for (let i=0;
                 i < _users.sort(function(obj1, obj2){
                     if (obj1.name > obj2.name) {
                         return 1;
                     }
                     if (obj1.name < obj2.name) {
                         return -1;
                     };
                 }).length;
                 i++) {
                // console.log(_users[i].name);
            }

            for (let i=0;
                 i < _users.sort(function(obj1, obj2){
                     return obj2.pageviews-obj1.pageviews;
                 }).length;
                 i++) {
                // console.log(_users[i].pageviews);
            }
        }());

        // ---pagination start:
        const { currentPage, listPerPage } = this.state;

        // Logic for displaying current list
        const indexOfLastTodo = currentPage * listPerPage; //10
        const indexOfFirstTodo = indexOfLastTodo - listPerPage; //1
        const currentList = _users.slice(indexOfFirstTodo, indexOfLastTodo); //slice.(1,10)

        const renderList = currentList.map((item, index) => {
            return <PersonDetail person={item}/>
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(_users.length / listPerPage); i++) {
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
        // ---pagination end;

        return (
            <div className='App'>
                <div className='wrapper'>
                    <div className='mainContainer'>

                        <div className='searchMain'>
                            <form>
                                <input type='submit' src='../images/search.png' value=''/>
                                <input
                                    type="text"
                                    value={this.state.searchString}
                                    ref="search"
                                    onChange={this.handleChange}
                                    placeholder='Поиск автора по имени'
                                />
                            </form>
                        </div>

                        <div className='blockPerson'>
                            <ol start={1+(currentPage-1)*listPerPage}>
                                {renderList}
                            </ol>
                        </div>

                    </div>


                    <div className='pagination'>
                        <ul id="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;