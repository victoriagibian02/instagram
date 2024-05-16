import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
    const [ posts ] = useState([
        {
            user: "victoria",
            postImage: "https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg",
            likes: 77,
            timestamp: "12h",
        },
        {
            user: "chrissy",
            postImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlD7uc2CqI-BFm8yS3JVrEZK8ylpTn7KzrEyI2QkuP5aB6yYE2ZvGAQlw7nGekEytGPcU&usqp=CAU",
            likes: 99,
            timestamp: "2d",
        },
        {
            user: "rebecca",
            postImage: "https://assets.vogue.com/photos/5d4c4ab1051fb100082dcb10/master/w_1600%2Cc_limit/VO090119_INSIDE_no_coverlines.jpg",
            likes: 111,
            timestamp: "5d",
        },
    ]);
  return ( 
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
            {posts.map((post) => (
              <Post
               user={post.user}
               postImage={post.postImage}
               likes={post.likes}
               timestamp={post.timestamp}
             />
            ))}
        </div>
    </div>
    <div className="timeline__right">
        <Suggestions />
    </div>
  </div>
  );
}

export default Timeline