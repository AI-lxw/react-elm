import React, { Component } from 'react';
import './index.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul className="list">
                <li>
                    <a href="/">
                        <img src={require( './img/1.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/2.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/3.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/4.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/5.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/6.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/7.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/8.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require( './img/9.jpeg' )} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
                <li>
                    <a hre="/">
                        <img  src={require('./img/10.jpeg')} alt=""/>
                        <span className={'lists_msg'}>美食美食</span>
                    </a>
                </li>
            </ul>
         );
    }
}
 
export default Index;