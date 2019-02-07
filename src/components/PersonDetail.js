import React, { Component } from 'react';
import PersonData from "../data/data";

class PersonDetail extends Component {
    render() {
        const {person} = this.props;

        function getRandomColor () {
            var hex = Math.floor(Math.random() * 0xFFFFFF);
            return "#" + ("000000" + hex.toString(16)).substr(-6);
        }

        let colorCircle = {
            backgroundColor: getRandomColor()
        };

        return (
                    <li>
                        <div className='liWrapper'>
                            <div className='leftInfo'>
                                <div className='circle' style={colorCircle}>
                                    <span>{person.name[0]}</span>
                                </div>

                                <div>
                                    <h1>{person.name}</h1>
                                        <p className='propertyForP'>{person.count_pub} публ.</p>
                                </div>
                            </div>

                            <span>{person.pageviews}</span>
                        </div>
                    </li>
        );
    }
}

export default PersonDetail;
