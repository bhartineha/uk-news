import React from 'react';
import { Link } from 'react-router-dom';

const DetailsList = (props) => {
    return (
        <div className="container">
            {props.news.map((head, index) => {
                return (
                    <div key={index}>
                        <h4>
                            {head.source.name}
                        </h4>
                        <p>
                            <Link to={
                                {
                                    pathname: "/details/" + index,
                                    myCustomProps: head
                                }
                            }>{head.title}  </Link>
                        </p>
                    </div>
                )
            })}

        </div>
    )
}

export default DetailsList;