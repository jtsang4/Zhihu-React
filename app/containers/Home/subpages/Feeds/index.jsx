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
        {
          this.props.feeds.map((item, index) => {
            return <Feed feed={item} key={index}/>
          })
        }
      </section>
    )
  }
}

Feeds.defaultProps = {
  feeds: [
    {
      feedId: 'feed1-id',
      feedType: 0, //0代表问题，1代表文章, 2代表回答
      content: '大概是二十几年前的时候，我们那有人抓了一黑袋子老鼠拿下去处理，被飞车党抢夺。',
      upvote: 152,
      annotation: {
        type: 0, // 0代表回答，1代表赞同, 2代表提出
        users: 
        [
          {
            username: 'vczh',
            userId: 'vczh-id',
            signature: '专业造轮子，拉黑抢前排。http://gaclib.net',
            avatar: 'dynamic/imgs/feed-avatar1.jpg'
          }
        ]
      },
      time: (new Date()).getTime() - 60000 * 60,
      comments: 56
    }
  ]
}

export default Feeds
