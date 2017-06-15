import React from 'react'

import './style.less'
import Feed from './Feed'

class Feeds extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section id="main-feeds">
        <div id="zh-home-list-title" className="zg-section clearfix">
          <i className="zg-icon zg-icon-feedlist"></i>
          <span>最新动态</span>
          <span className="pull-right">
            <a className="settings pointer">
              <i className="zg-icon zg-icon-settings"></i>
              <span>设置</span>
            </a>
          </span>
        </div>

      </section>
    )
  }
}

Feeds.defaultProps = {
  feeds: [
    {
      avatar: 'dyanamic/imgs/feed-avatar1.jpg',
      upvote: 5110,
      annotaion: {
        type: '赞同',
        users: [{username: '青岚', userId: 'qinglan-id'}, {username: '大漠', userId: 'damo-id'}]
      },
      time: (new Date()).getTime() - 1000 * 60 * 24,
      
    }
  ]
}

export default Feeds
