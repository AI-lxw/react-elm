import React, { Component } from 'react';
import './index.scss'
import List from '../list';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <div className="location">
                    <span className="items"><i className={' iconfont icon-location'}></i></span>
                    <span className="location_msg one-txt-cut">中南大学升华学生公寓</span>
                    <span className="triangle">
                        <i className={'iconfont icon-icon_sanjiaoxing'}></i>
                    </span>
                </div>
                <div className="search">
                    <div className="search_box">
                        <i className={'iconfont icon-sousuo'}></i>
                        <span>搜索饿了么商家、商品名称</span>
                    </div>
                </div>
                <List></List>
                <div className="shoplist-title">
                推荐商家
                </div>
            </div>
            

         );
    }
}
 
export default Index;