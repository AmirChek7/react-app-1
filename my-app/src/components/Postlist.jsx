import React from 'react';
import Postitem from './Postitem';

const Postlist = ({posts, title}) => {
  return (
    <div>
        {title}
      {posts.map((post) => 
          <Postitem post={post} key={post.id}/>
        )}
    </div>
  )
}

export default Postlist