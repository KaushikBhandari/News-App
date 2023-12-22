import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const Newsboard = ({category}) => {

  const [article, setArticle] = useState([])

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=59ef012eea6e4444bb24e74ac3d0de3e`
    fetch(url).then(response=> response.json()).then(data=> 
   setArticle(data.articles));
  },[category])
  return (
    <div>
      <h2 className='text-center'>Latest<span className='badge bg-danger'> News</span></h2>
      {article.map((news,index)=>{
          return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
