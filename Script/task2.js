(function () {
  let user;

  // FIXME:hashtags
  function getTweets(skip = 0, top = 10, filterConfig) {
    if(typeof skip == "object"){filterConfig=skip; skip=0};
    let getTweetsArr = tweets.slice(skip, skip + top).sort((a, b) => a.createdAt - b.createdAt);
    return filterConfig == undefined? getTweetsArr: getTweetsArr.filter((obj) => obj[Object.keys(filterConfig)[0]] == Object.values(filterConfig)[0]);
  }

  function getTweet(id){
    return tweets.filter(obj=>obj.id==id)
  }
  
})();



