import React from 'react';

export default class Pageheader extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="text-center text-white">Employee Directory</h1>
                        <p className="lead text-center text-white">Click on arrows to filter or utilize search bar</p>
                    </div>
                </div>
            </div>
        )
    }
}