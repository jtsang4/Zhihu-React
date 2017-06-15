// 侧边栏导航中的知乎书店入口
import React from 'react'

import './style.less'

class BookStore extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="book-store" className="side-nav-group border-side-nav-group">
        <div className="category-book clearfix">
          <h3 className="block-title pull-left">知乎圆桌</h3>
          <a className="pull-right pointer">查看全部 »</a>
        </div>
        <ul className="book-items">
          {
            // 如果数据过多，只显示前三条
            this.props.books.slice(0, 3).map((book, index) => {
              return (
                <li className="book-item" key={index}>
                  <a className="pointer clearfix">
                    <img src={book.icon} className="book-icon"/>
                    <span className="book-title">{book.title}</span>
                    <span className="up-time pull-right">
                      {
                        (() => {
                          const currentTime = (new Date()).getTime() // 获取当前时间
                          const diff = Math.round((currentTime - book.time) / 1000 / 60 / 60 / 24)
                          if (diff < 1) {
                            return '新上架'
                          }
                        })()
                      }
                    </span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

BookStore.defaultProps = {
  books: [
    { icon: 'dynamic/imgs/book-icon1.png', title: '不上班的理想生活', time: (new Date()).getTime() - 60 * 60 * 1000 },
    { icon: 'dynamic/imgs/book-icon2.png', title: '茶掌柜带你入门：年轻人的第一杯茶（乌龙茶篇）', time: (new Date()).getTime() - 24 * 60 * 60 * 1000 },
    { icon: 'dynamic/imgs/book-icon3.png', title: '刑事辩护指导书', time: (new Date()).getTime() - 3 * 24 * 60 * 60 * 1000 }
  ]
}

export default BookStore