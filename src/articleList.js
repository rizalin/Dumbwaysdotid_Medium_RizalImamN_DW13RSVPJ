import React, { Component } from 'react';
import Article from './article';
import ArticleData from './articleData';

function ArticleList() {
   const articleComponents = ArticleData.map(article => <Article key={article.id} title={article.title} brief={article.brief} 
                                writers={article.writers} time={article.time} read={article.read} />)

                                return (
                                    <div>
                                        {articleComponents}
                                    </div>
                                )
}

export default ArticleList