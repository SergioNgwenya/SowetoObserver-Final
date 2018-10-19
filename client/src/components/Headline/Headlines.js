import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Headlines extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <ListGroup flush className="headlines" style={{ height: 300, overflowY: 'scroll' }}>
        {articles ?
          articles.map((art, ind) => {
            return (
              <Link to={"/viewstory/" + art._id}><ListGroupItem tag="a" href="#">{art.title} </ListGroupItem></Link>
            )
          })
          : <div>loading</div>
        }
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(Headlines);
