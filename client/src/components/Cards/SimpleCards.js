import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const SingleCard = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="http://1.bp.blogspot.com/-vtXThXg7-Sc/UsMBUea6xAI/AAAAAAAAAOw/eD-BWXSxMSY/s1600/_MG_2517.jpg" alt="Dagga plant" />
        <CardImgOverlay>
          <CardTitle>Rumours of dagga being legalised in South Africa.</CardTitle>         
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SingleCard;