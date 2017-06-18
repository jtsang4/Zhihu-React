// 一个feed所需要的数据
/*
  {
    feedId: 'feed1-id',
    feedType: 0, //0代表问题，1代表文章,2代表回答
    content: '大概是二十几年前的时候，我们那有人抓了一黑袋子老鼠拿下去处理，被飞车党抢夺。',
    upvote: 152,
    annotaion: {
      type: 0, // 0代表回答，1代表赞同, 2代表提出
      users: 
      [
        {
          username: 'vczh',
          userId: 'vczh-id',
          signature: '专业造轮子，拉黑抢前排。http://gaclib.net',
          avatar: 'dyanamic/imgs/feed-avatar1.jpg'
        }
      ]
    },
    time: (new Date()).getTime() - 1000 * 60 * 60,
    comments: 56
  }
*/
import React from 'react'

import './style.less'

class Feed extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    const feed = this.props.feed
    const feedType = ['问题', '文章', '回答'][feed.feedType] // feed的类型
    const manType = ['回答', '赞同'][feed.annotation.type] // 操作的类型
    const difference = (new Date()).getTime() - feed.time
    // 计算当前feed距今过去的时间
    let time = Math.round(difference / 60000)
    if (time < 60) {
      time = time + '分钟前'
    } else if (time >= 60 && time < 60 * 24) {
      time = Math.ceil(time / 60) + '小时前'
    } else {
      time = Math.floor(time / 60 / 24) + '天前'
    }
    return (
      <div className="feed-item clearfix">
        <div className="avatar pull-left">
          <a>
            <img className="avatar-img" src={feed.annotation.users[0].avatar} alt={feed.annotation.users[0].username}/>
          </a>
        </div>
        <div className="feed-main">
          <div className="feed-source">
            {
              feed.annotation.users.map((item, index) => {
                const punctuation = index === feed.annotation.users.length - 1 ? '' : '、'
                return (
                  <a key={index} href={`/user/${item.userId}`}>{item.username + punctuation}</a>
                )
              })
            }
            <span>{manType + '了' + feedType + ' • ' + time}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Feed
