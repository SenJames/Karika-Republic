import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";

const Read = ({text}) => {
    return (
      <ReactReadMoreReadLess
        charLimit={99}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
      
        {text}
      </ReactReadMoreReadLess>
    );
}

export default Read
