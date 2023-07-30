import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { NewsProvider, useNewsContext } from './NewsContext'; // Import the NewsProvider and useNewsContext hook
import { Link } from 'react-router-dom';
import '../styles/SearchNews.css'
import Loader from './Loader';

const key = process.env.REACT_APP_API_KEY;


const Categories = () => {
    const [category, setCategory] = useState("general");
    const [categoryNews, setCategoryNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);


    const { setCurrNews } = useNewsContext(); // Use the context hook to get setCurrNews

    const handleSearch = () => {
        setLoading(true);
        axios
            .get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${key}&pageSize=8&page=${page}`)
            .then((res) => {
                setCategoryNews(res.data.articles);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching worldwide news:', error);
                setLoading(true);
            });
    };

    const category_search = (cat) => {
        setCategory(cat);
        handleSearch();
    }

    const handleViewMore = (news) => {
        setCurrNews(news);
        handleSearch();
    };

    const prev = () => {
        setPage(page - 1);
        handleSearch();
    }

    const next = () => {
        setPage(page + 1);
        handleSearch();
    }

    useEffect(() => {
        handleSearch();
    }, [page, category]);

    return (
        <>
            <Header />
            <NewsProvider>

                <div className='categories_conatiner'>
                    <div className='category_box'>
                        <div className='categories_links'>
                            <button onClick={() => category_search("business")}>Business</button>
                            <button onClick={() => category_search("entertainment")}>Entertainment</button>
                            <button onClick={() => category_search("general")}>General</button>
                            <button onClick={() => category_search("health")}>Health</button>
                            <button onClick={() => category_search("science")}>Science</button>
                            <button onClick={() => category_search("sports")}>Sports</button>
                            <button onClick={() => category_search("technology")}>Technology</button>
                        </div>
                    </div>

                    {
                        loading ? <Loader /> : <>
                            <div>
                                <h2>{category} News</h2>
                                {categoryNews.length > 0 && (
                                    <div className='search_news_container'>
                                        <div className='news_boxes'>
                                            {categoryNews.map((news) => {
                                                return (
                                                    news?.urlToImage && (
                                                        <div key={news.id} className='search_news_res'>
                                                            <img src={news.urlToImage} alt={news.title} />
                                                            <div className='search_news_res_content'>
                                                                <p>{news.title}</p>
                                                                {/* Call handleViewMore when clicking "View More" */}
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
                            </div>
                        </>
                    }
                </div>
            </NewsProvider>
            <Footer />
        </>
    )
}

export default Categories
