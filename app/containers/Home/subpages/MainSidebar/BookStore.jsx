// 侧边栏导航中的知乎书店入口
import React from 'react'

import './style.less'

class BookStore extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="round-table" className="side-nav-group border-side-nav-group">
        <div className="category-round clearfix">
          <h3 className="block-title pull-left">知乎圆桌</h3>
          <a className="pull-right pointer">查看全部 »</a>
        </div>
        <ul className="round-items">
          {
            // 如果数据过多，只显示前三条
            this.props.rounds.slice(0, 3).map((round, index) => {
              return (
                <li className="round-item" key={index}>
                  <a className="pointer clearfix">
                    <img src={round.avatar} className="round-avatar"/>
                    <span>{round.title}</span>
                    <span className="remainder-time pull-right">
                      {
                        (() => {
                          const currentTime = (new Date()).getTime() // 获取当前时间
                          const diff = Math.round((round.time - currentTime) / 1000 / 60 / 60 / 24)
                          if (diff < 0) {
                            return '已经结束'
                          } else if (diff === 0) {
                            return '今天结束'
                          } else if (diff > 0) {
                            return `还有 ${diff}天结束`
                          }
                        })()
                      }
                    </span>
                    <span className="fav pull-right hidden">关注圆桌</span>
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
  rounds: [
    { avatar: 'dynamic/imgs/round-icon1.jpg', title: '消失的爸爸', time: '1497427058580' },
    { avatar: 'dynamic/imgs/round-icon2.jpg', title: '艺术的跨界之旅', time: '1497787200000' },
    { avatar: 'dynamic/imgs/round-icon3.jpg', title: '玩具有意思', time: '1497844800000' }
  ]
}

export default BookStore