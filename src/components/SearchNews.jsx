// SearchNews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NewsProvider, useNewsContext } from './NewsContext'; // Import the NewsProvider and useNewsContext hook
import Header from './Header';
import Footer from './Footer';
import '../styles/SearchNews.css'
import Loader from './Loader';


const key = process.env.REACT_APP_API_KEY;


const SearchNews = () => {

    const [keyword, setKeyword] = useState('');
    const [newsArticles, setNewsArticles] = useState([]);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);


    const { setCurrNews } = useNewsContext(); // Use the context hook to get setCurrNews

    const handleSearch = () => {
        setLoading(true);
        const apiKey = key;

        axios
            .get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}&from=${fromDate}&to=${toDate}&pageSize=8&page=${page}`)
            .then((response) => {
                setNewsArticles(response.data.articles);
                setTotalPages(response.data.totalResults);
                setLoading(false);
                console.log(response);
            })
            .catch((error) => {
                console.error('Error fetching news articles:', error);
                setLoading(false);
            });
    };

    const handleViewMore = (news) => {
        setCurrNews(news);
        handleSearch();
    };

    const prev = () => {
        setPage((prevPage) => prevPage - 1);
        handleSearch();
    }

    const next = () => {
        setPage((prevPage) => prevPage + 1);
        handleSearch();
    }

    useEffect(() => {
    }, [page]);

    return (
        <>
            <Header />
            <NewsProvider>
                <div className='search_news_keyword'>
                    <div className='search_input'>
                        <div className='inp_search'>
                            <h3>Enter a keyword to Search!</h3>
                            <input type='text' placeholder='Tech/ Elon Musk/ Cricket' className='inp1' value={keyword} onChange={(e) => setKeyword(e.target.value)} /><br />
                        </div>
                        <div className='inp_date'>
                            <h3>Select from and to date of news to be displayed!<h5>(Optional)</h5></h3>
                            From: <input type='date' className='inp2' value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                            To: <input type='date' className='inp2' value={toDate} onChange={(e) => setToDate(e.target.value)} />
                        </div>
                        <button onClick={handleSearch} className='srch_clk'>Search</button>
                    </div>

                    {
                        loading ? <Loader /> : <>
                            {newsArticles.length > 0 && (
                                <div className='search_news_container'>
                                    <h2>News about {keyword} :</h2>
                                    <div className='news_boxes'>
                                        {newsArticles.map((news) => {
                                            return (
                                                news?.urlToImage && (
                                                    <div key={news.id} className='search_news_res'>
                                                        <img src={news.urlToImage} alt={news.title} />
                                                        <div className='search_news_res_content'>
                                                            <p>{news.title}</p>
                                                            <Link to={'/news'} onClick={() => handleViewMore(news)} className='lnk'>
                                                                View More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            );
                                        })}
                                    </div>
                                    <div className='page_btns'>
                                        {
                                            (page > 1) ?
                                                (<button onClick={prev}>Previous</button>) :
                                                (<button onClick={prev} disabled>Previous</button>)
                                        }
                                        <p>Page{page}</p>
                                        {
                                            (page < totalPages / 10) ?
                                                (<button onClick={next}>Next</button>) :
                                                (<button onClick={next}>Next</button>)
                                        }
                                    </div>
                                </div>
                            )}
                        </>
                    }
                </div>
            </NewsProvider>
            <Footer />
        </>
    );
};

export default SearchNews;
