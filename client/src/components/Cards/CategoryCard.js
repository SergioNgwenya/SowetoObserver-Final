import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CategoryCard = (props) => {
    return (
        <Card>
            <CardTitle style={{textAlign: 'center', fontSize: '20px', fontFamily: 'Nova Flat' }}>Businesses in the townships are on a rise. Watch out!</CardTitle>
            <div style={{textAlign: 'center', color: 'blue', fontSize: '13px'}}>
            <em>Khanyisile Mahlangu</em>
            <br/>
            <em>04 October 2018</em>
            </div>
            <CardImg top width="100%" src="https://www.procurious.com/blog-content/2016/04/Small-Business.jpg" alt="Card image cap" />
            <CardBody>
                <CardText>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CardText>
            </CardBody>
        </Card>
    );
};

export default CategoryCard;