// 配置
window.Config = {

  // 站点名
  SiteName: '系统状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784345383-76da07daefb1dd03b06f1fb9',
    'm785509387-f91bbf337c75ef869cc0d308',
    'm785511125-c4c4a4b679d64308024dfa8c',
    'm785511126-5620e18cbad1d586e96ab058',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '主站',
      url: 'https://2890.ltd/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/givenhyh'
    }
  ]
};
