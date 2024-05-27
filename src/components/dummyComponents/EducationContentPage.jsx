import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const EducationalContentPage = () => {
    const [activeTab, setActiveTab] = useState('articles');
    const [articles, setArticles] = useState([]);
    const [videos, setVideos] = useState([]);
    const [healthGuides, setHealthGuides] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch articles
        axios.get('http://127.0.0.1:3000/api/articles')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => console.error('Error fetching articles:', error));

        // Fetch videos
        axios.get('http://127.0.0.1:3000/api/videos')
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => console.error('Error fetching videos:', error));

        // Fetch health guides
        axios.get('http://127.0.0.1:3000/api/healthGuides')
            .then(response => {
                setHealthGuides(response.data);
            })
            .catch(error => console.error('Error fetching health guides:', error));
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'articles':
                return (
                    <div style={styles.grid}>
                        {articles.map(article => (
                            <div key={article._id} style={styles.card}
                                 onClick={() => navigate(`/article/${article._id}`)}>
                                <h2>{article.title}</h2>
                                <p><strong>Author:</strong> {article.author}</p>
                                <p><strong>Category:</strong> {article.category}</p>
                                <p><strong>Created At:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'videos':
                return (
                    <div style={styles.grid}>
                        {videos.map(video => (
                            <div key={video._id} style={styles.card}>
                                <h2>{video.title}</h2>
                                <p>{video.description}</p>
                                <a href={video.url} target="_blank" rel="noopener noreferrer">Watch Video</a>
                            </div>
                        ))}
                    </div>
                );
            case 'healthguides':
                return (
                    <div style={styles.grid}>
                        {healthGuides.map(guide => (
                            <div key={guide._id} style={styles.card}
                                 onClick={() => navigate(`/healthGuide/${guide._id}`)}>
                                <h2>{guide.title}</h2>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Educational Content</h1>
            <div>
                <button style={styles.button} onClick={() => setActiveTab('articles')}>Articles</button>
                <button style={styles.button} onClick={() => setActiveTab('videos')}>Videos</button>
                <button style={styles.button} onClick={() => setActiveTab('healthguides')}>Health Guides</button>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridAutoRows: 'auto',
        gap: '20px',
        padding: '20px',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    button: {
        margin: '0 5px',
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    },
};

export default EducationalContentPage;
