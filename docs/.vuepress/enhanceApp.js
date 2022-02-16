import baiduAnalytics from 'vue-baidu-analytics'

export default ({ Vue, router }) => {
  Vue.use(baiduAnalytics, {
    router: router,
    siteIdList: [
      '87772a70946d6fa993807ff07f725bf4',
    ],
    isDebug: true
  });
};

