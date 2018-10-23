import React from 'react';
import { Media } from 'reactstrap';

const MediaCard = () => {
  return (
    <Media>

      <Media >
           style={{
                background: news.picture ? `url(${news.picture})` : 'red',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: 200,
                width: 270,
                margin: 5,
                
            }}>
      </Media>
      <Media body>
        <Media heading>
        {news.title}
        </Media>
      </Media>
    </Media>
  );
};

export default MediaCard;