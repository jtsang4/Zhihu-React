// 侧边栏导航中的知乎圆桌入口
import React from 'react'

import './style.less'

class RoundTable extends React.PureComponent {
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
                    <img src={round.icon} className="round-icon"/>
                    <span className="round-title">{round.title}</span>
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

RoundTable.defaultProps = {
  rounds: [
    { icon: 'dynamic/imgs/round-icon1.jpg', title: '消失的爸爸', time: (new Date()).getTime() + 60 * 60 * 1000 },
    { icon: 'dynamic/imgs/round-icon2.jpg', title: '艺术的跨界之旅', time: (new Date()).getTime() + 3 * 24 * 60 * 60 * 1000 },
    { icon: 'dynamic/imgs/round-icon3.jpg', title: '玩具有意思', time: (new Date()).getTime() + 4 * 24 * 60 * 60 * 1000 }
  ]
}

export default RoundTable