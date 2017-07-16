import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './MediaCard.css'
import SearchPage from '../SearchPage'
import onClickOutside from 'react-onclickoutside'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import BusinessResultPage from '../BusinessResultPage'
class MediaCard extends Component {
   constructor() {
     super();

     this.state = {
       clicked: false,
       height: "100%"
     };

     this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      this.setState({
         clicked: true
       });
     }

   handleClickOutside (e) {
      // ..handling code goes here...
      // <SearchPage/>
    }
    render () {
      {document.addEventListener('click', this.handleClick, false)};

        return (
            //
            // <div className="col-md-4">
            //
            // {this.state.clicked ? <BusinessResultPage /> :
            //    <Card>
            //        <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
            //        <CardBlock>
            //        <CardTitle>{this.props.businessName}</CardTitle>
            //        <CardSubtitle>{this.props.subTitle}</CardSubtitle>
            //        <CardText>{this.props.businessText}</CardText>
            //        <Button>{this.props.buttonText}</Button>
            //        </CardBlock>
            //    </Card>}
            //
            // </div>

            <div className="col-md-4">
       
               <Card>
                   <CardImg top width="100%" height={this.state.height} src={this.props.image} alt="Card image cap" />
                   <CardBlock>
                   <CardTitle>{this.props.businessName}</CardTitle>
                   <CardSubtitle>{this.props.subTitle}</CardSubtitle>
                   <CardText>{this.props.businessText}</CardText>
                   <Button>{this.props.buttonText}</Button>
                   </CardBlock>
               </Card>}
               {this.state.clicked ? (

                  // this.props.businessName == "Food" (
                     <BusinessResultPage/>
                  // )

               ):null}
            </div>
        )
    }
};

MediaCard.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  className: PropTypes.string,
  businessName: PropTypes.string,
  xpos: PropTypes.number,
  ypos: PropTypes.number,
  image: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  businessText: PropTypes.string,
  buttonText: PropTypes.string,
  category: PropTypes.string,
};

export default onClickOutside(MediaCard);
