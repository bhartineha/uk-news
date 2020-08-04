import React from 'react';

const DetailNewsPage = props => {
    let detailSource = {};
    props.location.myCustomProps ? detailSource = props.location.myCustomProps : detailSource = {}
    console.log(detailSource);
    return (
        <div className="container">
            {JSON.stringify(detailSource).length !== 2 ?
                <div key={props.match.params.title}> 
                    <h3>{detailSource.title}</h3>
                    <p>{detailSource.description}</p>
                    <p>{detailSource.content}</p>
                    <a href={detailSource.url}> More Details</a>
                    <div className="row">
                        <h6 className="col-md-8">Author: {detailSource.author}</h6>
                        <p>Publiched At: {detailSource.publishedAt}</p>
                    </div>
                </div> 
                : <></>
            }
        </div>
    )
}

export default DetailNewsPage;