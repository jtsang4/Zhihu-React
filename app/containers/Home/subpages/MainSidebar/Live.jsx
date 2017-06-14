// 侧边栏导航中的Live入口
import React from 'react'

import './style.less'

class Live extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="side-live" className="side-nav-group border-side-nav-group">
        <div className="category-live clearfix">
          <h3 className="block-title pull-left">知乎 Live ⚡️</h3>
          <a className="pull-right pointer">查看全部 »</a>
        </div>
        <ul className="live-items">
          {
            // 如果数据过多，只显示前三条
            this.props.lives.slice(0, 3).map((live, index) => {
              return (
                <li className="live-item" key={index}>
                  <a className="pointer">
                    <img src={live.avatar} className="live-avatar"/>
                    <span>{live.title}</span>
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

Live.defaultProps = {
  lives: [
    { avatar: 'dynamic/imgs/live-icon1.jpg', title: '如何成为自由职业译员？' },
    { avatar: 'dynamic/imgs/live-icon2.jpg', title: '非法本零基础如何一次过司考？' },
    { avatar: 'dynamic/imgs/live-icon3.jpg', title: '床垫大坑，跳坑指南！' }
  ]
}

export default Live