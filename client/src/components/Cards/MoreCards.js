import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const MoreCards = (props) => {
    return (
        <div>
            <Card inverse>
                <CardImg width="100%" height="150px" src="http://kdaniellesmedia.com/wp-content/uploads/2018/04/Winnie-Mandela...jpg" alt="Mama Winnie" />
                <CardImgOverlay>
                    <CardTitle>Winnies 70th birthday</CardTitle>
                </CardImgOverlay>
            </Card>
            {/* <Card inverse>
                <CardImg width="100%" height="81px"src="http://2.bp.blogspot.com/-lBr07Lbvtfw/UYO22t4m8kI/AAAAAAAAAlo/AOr9LxiXLOU/s1600/IMG_0404.jpg" alt="Gusheshe" />
                <CardImgOverlay>
                    <CardTitle>amaGusheshe</CardTitle>
                </CardImgOverlay>
            </Card> */}
            <Card inverse>
                <CardImg width="100%" height="143px" src="https://tse1.mm.bing.net/th?id=OIP.jFrq2KYch84xCozjYxb3VQHaFj&amp;pid=Api" alt="Local soccer" />
                <CardImgOverlay>
                    <CardTitle>Protea vs Protea Glen</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default MoreCards;