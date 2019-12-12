import React, { Component } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './komen.css';


function Comment() {
    return (
        <div>
            <div className="comment">
                <Row style={{ marginBottom: '15px' }}>
                    <Avatar style={{ fontSize: '20px', height: '50px', width: '50px', marginLeft: '0.8rem' }}>R</Avatar>
                    <Col>
                        <p class="name">Rizal Imam Nugraha<br></br>
                            <span class='date'>@rizalin</span></p>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat quam ligula, non auctor arcu accumsan sit amet. Aliquam eget erat magna. Proin at nunc ut risus dictum malesuada vitae sit amet magna. Nunc porttitor orci nec mollis posuere. Nunc rhoncus urna sed libero vulputate, sit amet rhoncus est porttitor. Sed pharetra ex condimentum, eleifend turpis rutrum, feugiat eros. Ut at lectus nec enim dapibus bibendum ac ac lacus. Aliquam erat volutpat. Praesent sagittis nulla odio, vestibulum volutpat nulla tempor nec. Cras condimentum, urna non blandit tempor, eros ligula consectetur ex, ac finibus ex orci ac neque. Morbi gravida, nibh vel fringilla ultricies, nibh ex euismod augue, id porttitor ligula tortor feugiat nibh. Ut vehicula, urna eu facilisis vulputate, leo nulla dictum felis, quis dignissim enim nulla nec sapien. In condimentum arcu vel ipsum consectetur interdum. Etiam ut urna urna. Vivamus in viverra turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
                <Row className='justify-content-between'>
                    <Col md={3}>
                        <Row style={{ marginLeft: '0px' }}>
                            <ThumbUpAltIcon />
                            <p>1k</p>
                        </Row>
                    </Col>
                    <Col md={4} style={{ paddingRight: '0px' }}>
                        <Row className='justify-content-end' >
                            <p>10 Respons</p>
                            <BookmarkBorderIcon />
                            <KeyboardArrowDownIcon />
                        </Row>
                    </Col>
                </Row>

            </div>
            <br></br>
            <br></br>
        </div>





    )
}

export default Comment;