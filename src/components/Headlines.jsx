import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header'
import Footer from './Footer';
import Loader from './Loader';

const key = process.env.REACT_APP_API_KEY;

const NewsApp = () => {
    const [headlines, setHeadlines] = useState([]);
    const [worldwideNews, setWorldwideNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading1, setIsLoading1] = useState(true);


    useEffect(() => {
        // Fetch Worldwide News (no country parameter needed)
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
            .then((res) => {
                setWorldwideNews(res.data.articles);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching worldwide news:', error);
                setIsLoading(true);
            });

        // Fetch Indian News
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`)
            .then((res) => {
                setHeadlines(res.data.articles);
                setIsLoading1(false);
            })
            .catch((error) => {
                console.error('Error fetching Indian news:', error);
                setIsLoading1(true);
            });
    }, [headlines, worldwideNews]);

    return (
        <>
            <Header />
            <div className='main_container'>
                <div>
                    <h1>Today's Worldwide News</h1>
                    {
                        isLoading ? <Loader /> : <>
                            <div className='headlines_container1'>
                                {worldwideNews.map((news) => {
                                    return (
                                        news?.urlToImage && (
                                            <Link key={news.url} to={news.url} target='_blank' rel='noopener noreferrer' className='link'>
                                                <div className='head_contain'>
                                                    <img src={news.urlToImage} alt={news.title} />
                                                    <div className='head_content'>
                                                        <div className='hd_title'>
                                                            <h5>{news.title}</h5>
                                                        </div>
                                                        <div className='hd_btn'>
                                                            <button>View</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    );
                                })}
                            </div>
                        </>
                    }
                </div>

                <div className='ind_news'>
                    <h1>What's Happening In India</h1>
                    {
                        isLoading1 ? <Loader /> : <>
                            <div className='indian_news_container'>
                                {headlines.map((headline) => {
                                    return (
                                        headline?.urlToImage && (
                                            <Link key={headline.url} to={headline.url} target='_blank' rel='noopener noreferrer' className='link'>
                                                <div className='indian_news_contain'>
                                                    <div className='ind_news_title'>
                                                        <img src={headline.urlToImage} alt={headline.title} />
                                                        <h5>{headline.title}</h5>
                                                    </div>
                                                    <div className='indian_news_content'>
                                                        <p>{headline.description}</p>
                                                        <button>View</button>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    );
                                })}
                            </div>
                        </>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsApp;
