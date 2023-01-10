import React from 'react'
import { useQuery } from 'react-query'

const fetcher = url => fetch(url).then(res => res.json())

const Post = ({ postID, goBack}) => {

    const { data, isLoading } = useQuery(["post", postID], () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postID}`),
    {
        cacheTime: 10000
    })

    if(isLoading) {
        return <p>Loading post...</p>
    }
    return <div>
        <a href='#' onClick={goBack}>Go Back</a>
        <h1>{data.title} </h1>
        <p>{data.body} </p>
    </div>
}

export default Post