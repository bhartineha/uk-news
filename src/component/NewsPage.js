import React, { useState, useEffect } from 'react';
import { getTopNews } from '../api/newsApi';
import DetailsList from './DetailsList';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    const [searchValue, setSearchValue] = useState({
        inputVal: ""
    });

    const handleChange = event => {
        setSearchValue({ inputVal: event.target.value });
    }

    const [searchStr, setSearchStr] = useState({
        queryStr: ""
    });

    const handleSubmit = event => {
        event.preventDefault();
        setSearchStr({ queryStr: searchValue.inputVal })
    }

    useEffect(() => {
        searchStr.queryStr ? getTopNews(searchStr.queryStr).then(_news => setNews(_news)) : getTopNews().then(_news => setNews(_news));
    }, [searchStr])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="textfield" name="searchValue" onChange={handleChange} value={searchValue.inputVal}></input>
                <input type="submit" className="btn-primary" value="Search" />
            </form>
            <DetailsList news={news} />
        </>

    )
}

export default NewsPage;