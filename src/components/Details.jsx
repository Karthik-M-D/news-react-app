// Details.jsx
import React from 'react';
import { useNewsContext } from './NewsContext'; // Import the useNewsContext hook
import Header from './Header'
import Footer from './Footer'
import '../styles/details.css'

const Details = () => {
    // Use the context hook to get currNews state
    const { currNews } = useNewsContext();

    return (
        <>
            <Header />
            <div className='main'>
                <div className='details_container'>
                    <div className='details'>
                        <h2>{currNews.title}</h2>

                        <div className='img-div'>
                            <img src={currNews.urlToImage} alt={currNews.title} />
                        </div>
                        <div className='author'>
                            <p>Author: <span>{currNews.author}</span></p>
                            <div>
                                <p>Published at <span>{currNews.source.name}</span></p>
                                <p>Last Updated <span>{currNews.publishedAt}</span></p>
                            </div>
                        </div>

                        <p className='descp'>{currNews.content}<a href={currNews.url} target='_blank' rel='noopener noreferrer'>[Read more...]</a></p>
                    </div>
                </div>
            </div>
            <Footer />

        </>

    );
};

export default Details;
