import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ArticleDetail = () => {
    const [article, setArticle] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:3000/api/articles/${id}`)
                .then(response => {
                    setArticle(response.data);
                })
                .catch(error => console.error('Error fetching article:', error));
        }
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div style={styles.container}>
            {/* <h1>{article.title}</h1> */}
            <div dangerouslySetInnerHTML={{__html: article.content}}/>
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Category:</strong> {article.category}</p>
            <p><strong>Created At:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
};

export default ArticleDetail;
