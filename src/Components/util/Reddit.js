 const Reddit = {

    load(subreddit){
        
        
       
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response=> response.json())
        .then(jsonResponse=>{
           
            
            if(!jsonResponse.data.children){
                return [];
            }
            else{
                return jsonResponse.data.children.map(post =>(({
                    title: post.data.title,
                    num_comments: post.data.num_comments,
                    score: post.data.score,
                    url: post.data.url,
                    author: post.data.author,
                    id: post.data.id,
                    content:post.data.media_embed.content,
                    permalink: post.data.permalink,
                    selftext:post.data.selftext,
                    thumbnail: post.data.thumbnail,
                    subreddit_name_prefixed: post.data.subreddit_name_prefixed
                })))
            }
            
        })
    },
    
    search(term){
        return fetch(`https://www.reddit.com/search.json?q=${term}`)
        .then(response=> response.json())
        .then(jsonResponse=>{
            
            if(!jsonResponse.data.children){
                return [];
            }
            else{
                return jsonResponse.data.children.map(post =>(({
                    title: post.data.title,
                    num_comments: post.data.num_comments,
                    score: post.data.score,
                    url: post.data.url,
                    author: post.data.author,
                    id: post.data.id,
                    content:post.data.media_embed.content,
                    permalink: post.data.permalink,
                    selftext:post.data.selftext,
                    thumbnail: post.data.thumbnail,
                    subreddit_name_prefixed: post.data.subreddit_name_prefixed


                })))
            }
        })
    },
    see(permalink){
        return fetch(`https://www.reddit.com${permalink}.json`)
        .then(response=> response.json())
        .then(jsonResponse=>{
            
            if(!jsonResponse[1].data.children){
                return [];
            }
            else{
                return jsonResponse[1].data.children.slice(0,10).map(post =>(({
                    body: post.data.body,
                    replies: post.data.replies,
                    score: post.data.score,
                    author: post.data.author,
                    id: post.data.id,
                    permalink: post.data.permalink
                    
                })))
            }
        })
    }
}
export default Reddit;