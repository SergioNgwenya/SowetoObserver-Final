import React, { Component } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import { connect } from 'react-redux';


class TopHead extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
      items : [
        {
          src: 'https://s.inyourpocket.com/gallery/179169.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'https://www.thenation.com/wp-content/uploads/2017/11/Donald-Trump-big-mouth-img.jpg?scale=896&amp;compress=80    ',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'http://www.diskifans.com/wp-content/uploads/2014/09/Kaizer-Chiefs1.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ]
     };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentWilMount(){
    //this.setState({items: [...this.props.articles] })
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, items } = this.state;
    const {articles} = this.props;
    
    if(articles){
    const slides = articles.map((article) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={article.src}
        >
          <img src={article.picture} alt={article.title} style={{height: 350, width: 800}} />
          <CarouselCaption captionHeader={article.title} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
    }
    else{
      return <div>loading</div>
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(TopHead);