<template>
  <div>
    <lg-preview />
    <div class="container">

      <!--Header-->
      <Header :pageIndex="2"/>

      <!--banner-->
      <div class="banner" @click="bannerClick">
        <img :src="require('../assets/img/case_banner@2x.png')" alt="" />
      </div>

      <!--main-->
      <main class="main">

        <div class="video">
          <div class="video-banner">
            <div class="video-player-box"
                 v-for="(item, key) in list"
                 :key="key"
                 v-if="key === videoIndex && !mobileActive"
                 :playsinline="playsinline"
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"
                 @ready="playerReadied"
                 @statechanged="playerStateChanged($event)"
                 v-video-player:myVideoPlayer="item.playerOptions">
            </div>
            <!--<img src="../assets/img/case_images1@2x.png" alt="">-->
            <!--<img src="../assets/img/case_icon1@2x.png" alt="" class="open-icon" @click="openVideo" v-if="!openActive">-->
          </div>
          <div class="video-list">
            <div class="video-list-title">
              <span>热门案例</span>
            </div>
            <div class="video-list-cell" v-for="(item, key) in list" :key="key" :style="{margin: key === 0 ? '0': ''}"
                 @click="videoCellClick(item, key)">
              <x-img :src="require('../assets/img/case_images2@2x.png')" alt="" />
              <div class="content">
                <p>修表即修行，西亨给您的腕表一份尊贵礼遇</p>
                <div class="fixed">
                  <span class="fixed-icon"></span>
                  <span class="fixed-num">42</span>
                </div>
              </div>
            </div>

          </div>
          <div class="title-bottom">
            <p>追光机：百达翡丽手工精饰机芯部件 (Caliber CHR 29-535 PS)</p>
          </div>
        </div>

        <div class="image-artical">
          <div class="image-artical-container">
            <div class="image-artical-left">
              <nuxt-link to="/show/1">
                <img src="../assets/img/case_images7@2x.png" alt="">
              </nuxt-link>
              <div class="title-bottom">
                <p>追光机：百达翡丽手工精饰机芯部件</p>
              </div>
            </div>
            <div class="image-artical-right">
              <div class="image-artical-right-cell">
                <nuxt-link to="/show/2">
                  <img src="../assets/img/case_images8@2x.png" alt="">
                </nuxt-link>
                <div class="title-bottom">
                  <p>追光机：百达翡丽手工精饰机芯部件</p>
                </div>
              </div>
              <div class="image-artical-right-cell">
                <nuxt-link to="/show/3">
                 <img src="../assets/img/case_images9@2x.png" alt="">
               </nuxt-link>
                <div class="title-bottom">
                  <p>追光机：百达翡丽手工精饰机芯部件</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="single-artical">
          <nuxt-link to="/show/4">
            <img src="../assets/img/case_images9@2x.png" alt="">
          </nuxt-link>
          <div class="title-bottom">
            <p>追光机：百达翡丽手工精饰机芯部件</p>
          </div>
        </div>

      </main>

      <!--line-->
      <div class="line"></div>

      <!--用户评价-->
      <div class="comment">
        <h1>用户评价</h1>
        <div class="comment-cell"  v-for="(item, key) in commentList" :key="key">
          <div class="comment-cell-top">
            <div class="comment-img">
              <x-img :src="item.headImg" alt="" />
            </div>
            <div class="comment-user">
              <p class="phone">{{item.phone}}</p>
              <p class="count">
                <span class="count-info">评分</span>
                <span v-for="item in 5" :key="item">
                  <x-img :src="require('../assets/img/case_images11@2x.png')" alt="" />
                </span>
              </p>
            </div>
            <div class="comment-date">
              <span>{{item.time}}</span>
            </div>
          </div>
          <div class="comment-cell-content">
            <p>
              {{item.content}}
            </p>
            <ul class="content-img">
              <li v-for="(src, index) in item.imgList" :key="index">
                <x-img :src="src" alt=""  preview-nav-enable="false" v-preview="src" />
              </li>
            </ul>
          </div>
          <div class="comment-cell-line"></div>
        </div>

        <div class="more-comment">
          <span @click="moreComment" v-show="!moreCommentActive">查看更多 >></span>
        </div>
      </div>


      <!--Footer-->
      <Footer/>

      <Sidebar />
    </div>

    <div class="container320">
      <!--<Tabbar />-->
      <HeaderMobile title="维修案例"/>
      <div class="main320">
        <div class="main320-video">
          <VideoMobile @stopOther="stopOther" v-for="(item, key) in list" :key="key" :item="item" :index="key" :ref="'player' + key"/>
        </div>
        <div class="main320-article">
          <div class="main320-article-left">
            <nuxt-link to="/show/1">
              <img src="../assets/img/case_images7@2x.png" alt="">
            </nuxt-link>
            <div class="main320-article-shadow">
              <span class="main320-article-info">追光者百达斐丽翻新</span>
            </div>
          </div>
          <div class="main320-article-right">
            <div class="main320-article-right-cell">
              <nuxt-link to="/show/2">
                <img src="../assets/img/case_images7@2x.png" alt="">
              </nuxt-link>
              <div class="main320-article-shadow">
                <span class="main320-article-info">追光者百达斐丽翻新</span>
              </div>
            </div>
            <div class="main320-article-right-cell">
              <nuxt-link to="/show/3">
                <img src="../assets/img/case_images7@2x.png" alt="">
              </nuxt-link>
              <div class="main320-article-shadow">
                <span class="main320-article-info">追光者百达斐丽翻新</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main320-banner-article">
          <nuxt-link to="/show/4">
            <img src="../assets/img/case_images7@2x.png" alt="">
          </nuxt-link>
          <div class="main320-article-shadow">
            <span class="main320-article-info">追光者百达斐丽翻新</span>
          </div>
        </div>
      </div>
      <div class="line320"></div>
      <div class="comment320" style="position: relative;">
        <p class="comment-title">用户评价</p>
        <scroller
          :on-refresh="refresh"
          :on-infinite="infinite"
          style="position: relative;left: 0;top:0; padding-bottom: 92px"
        >
          <div v-for="(item, index) in items" class="row" :key="index" :class="{'grey-bg': index % 2 === 0}" >
            {{ item }}
          </div>
          <!--<div class="comment320-cell" v-for="(item, key) in commentList" :key="key">-->
            <!--<div class="comment320-cell-top">-->
              <!--<div class="comment320-img">-->
                <!--<x-img :src="item.headImg" alt="" />-->
              <!--</div>-->
              <!--<div class="comment320-user">-->
                <!--<p class="phone320">{{item.phone}}</p>-->
                <!--<p class="count320">-->
                  <!--<span class="count-info320">评分</span>-->
                  <!--<span v-for="item in 5" :key="item">-->
                    <!--<x-img :src="require('../assets/img/case_images11@2x.png')" alt="" />-->
                  <!--</span>-->
                <!--</p>-->
              <!--</div>-->
              <!--<div class="comment320-date">-->
                <!--<span>{{item.time}}</span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="comment320-cell-content">-->
              <!--<p>-->
                <!--{{item.content}}-->
              <!--</p>-->
              <!--<ul class="content320-img" v-if="item.imgList">-->
                <!--<li v-for="(src, index) in item.imgList" :key="index">-->
                  <!--<x-img :src="src" alt=""  preview-nav-enable="false" v-preview="src" />-->
                <!--</li>-->
              <!--</ul>-->
              <!--<div class="seller">-->
                <!--<p>-->
                  <!--<span>商家回复：</span>-->
                  <!--<span>感谢您选择西亨维修服务中心，祝您生活愉快，欢迎下次光临。</span>-->
                <!--</p>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import HeaderMobile from '../components/HeaderMobile'
  import VideoMobile from '../components/VideoMobile'
  import Sidebar from '../components/Sidebar'
  import Tabbar from '../components/Tabbar'

  export default {
    name: "case",
    components: {
      Header,
      Footer,
      HeaderMobile,
      VideoMobile,
      Sidebar,
      Tabbar
    },
    data() {
      return {
        playsinline: true,
        mobileActive: false,
        moreCommentActive: false,
        player: null,
        playItem: null,
        videoIndex: 0,
        videoMobileIndex: 0,
        commentList: [
          {phone: '159*****399', time: '2018-07-18', content: '这家店面服务真的很棒，我去了很多家都说修不了，这家特意帮我请了瑞士国际钟表协会的技师，虽然期间时间有些长，但是全程都很耐心帮我服务，推荐！', headImg: require('../assets/img/case_images_head1@2x.jpg'),imgList: [require('../assets/img/customer1_1.jpg'), require('../assets/img/customer1_2.jpg'), require('../assets/img/customer1_3.jpg')]},
          {phone: '150*****888', time: '2018-07-15', content: '换了一个鳄鱼皮皮带，整体服务还不错！', headImg: require('../assets/img/case_images_head2@2x.jpg'), imgList: [require('../assets/img/customer2_1.jpg'), require('../assets/img/customer2_2.jpg'), require('../assets/img/customer2_3.jpg')]},
          {phone: '158*****688', time: '2018-07-06', content: '手表镜面破了，在网上了解到这家平台，到店接待的小妹妹很热情，全程帮我指引，门店环境也不错，整体过程挺快', headImg: require('../assets/img/case_images_head3@2x.jpg'), imgList: [require('../assets/img/customer3_1.jpg')]},
          {phone: '139*****997', time: '2018-06-19', content: '刚开始以为手表不走了还以为是上弦的问题，自己捣鼓了很久还是不走，后来拿到西亨这边来修，技师很专业，帮我检测后，说是游丝问题，帮我配换了原装的游丝后恢复正常了', headImg: require('../assets/img/case_images_head4@2x.jpg'), imgList: [require('../assets/img/customer4_1.jpg')]},
          {phone: '150*****818', time: '2018-06-18', content: '和官方那边费用对比了下，这边价格挺实在，技师也不错，挺好的', headImg: require('../assets/img/case_images_head5@2x.jpg')},
          // {phone: '187*****001', time: '2018-06-12', content: '表用了几年了，需要洗油保养，朋友介绍的这家，到店觉得服务各方面还不错，接待的小妹妹服务也很周到'},
        ],
        moreCommentList: [
          {phone: '187*****001', time: '2018-06-12', content: '表用了几年了，需要洗油保养，朋友介绍的这家，到店觉得服务各方面还不错，接待的小妹妹服务也很周到', headImg: require('../assets/img/case_images_head6@2x.jpg'),imgList: [require('../assets/img/customer6_1.jpg')]},
          {phone: '136*****888', time: '2018-06-05', content: '手表不小心摔坏了，多方对比后最后选择了这家，设备及技师各方面都不错，配件也是原装进口的，价格还算公道，推荐', headImg: require('../assets/img/case_images_head7@2x.jpg'),imgList: [require('../assets/img/customer7_1.jpg')]},
          {phone: '187*****767', time: '2018-05-28', content: '技师很专业，表壳翻新后都看不出来了之前划痕了，门店环境挺高大上的，价格也挺实在', headImg: require('../assets/img/case_images_head8@2x.jpg'),imgList: [require('../assets/img/customer8_1.jpg')]},
          {phone: '182*****774', time: '2018-05-10', content: '挺好的，配件都是原装进口帮我提前配好的，到了门店全程服务很贴心，也很快！', headImg: require('../assets/img/case_images_head9@2x.jpg'),imgList: [require('../assets/img/customer9_1.png')]},
          {phone: '183*****550', time: '2018-04-30', content: '老古董拿来修复下，技师很专业，服务也很好', headImg: require('../assets/img/case_images_head10@2x.jpg'),imgList: [require('../assets/img/customer10_1.jpg')]},
        ],
        list: [
          {
            playerOptions: {
              // height: '100%',
              // width: '100%',
              // aspectRatio: '16:9',
              autoplay: false,
              muted: true,
              language: 'ch',
              playbackRates: [0.7, 1.0, 1.5, 2.0],
              // https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535907347807&di=a5c1b8cf17ab5126cc3642d3da7f6b78&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0160d65549eb9900000115a832d224.jpg%402o.jpg
              // poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535116654791&di=4291caaeb7eda1d8bf3336f39ff8b30b&imgtype=0&src=http%3A%2F%2Fa1.hoopchina.com.cn%2Fattachment%2FDay_090602%2F49_709415_948e4af50e5ed27.jpg',
              poster: require('../assets/img/case_images9@2x.png'),
              sources: [
                {
                  type: "video/mp4",
                  src: "http://vjs.zencdn.net/v/oceans.mp4"
                }
              ]
            },
            playActive: false
          },
          {
            playerOptions: {
              // height: '100%',
              // width: '100%',
              // aspectRatio: '16:9',
              autoplay: false,
              muted: true,
              language: 'ch',
              playbackRates: [0.7, 1.0, 1.5, 2.0],
              // poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535907347807&di=a5c1b8cf17ab5126cc3642d3da7f6b78&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0160d65549eb9900000115a832d224.jpg%402o.jpg',
              poster: require('../assets/img/case_images9@2x.png'),
              sources: [
                {
                  type: "video/mp4",
                  src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L"
                }
              ]
            },
            playActive: false
          },
          {
            playerOptions: {
              height: '100%',
              width: '100%',
              // aspectRatio: '16:9',
              autoplay: false,
              muted: true,
              language: 'ch',
              playbackRates: [0.7, 1.0, 1.5, 2.0],
              // poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535907347807&di=a5c1b8cf17ab5126cc3642d3da7f6b78&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0160d65549eb9900000115a832d224.jpg%402o.jpg',
              poster: require('../assets/img/case_images9@2x.png'),
              sources: [
                {
                  type: "video/mp4",
                  src: "http://vjs.zencdn.net/v/oceans.mp4"
                }
              ]
            },
            playActive: false
          }
        ],
        items: []
      }
    },
    async asyncData({app}) {

    },
    created(){
      for (var i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.');
      }
      this.top = 1;
      this.bottom = 20;
    },
    mounted(){
      // alert('mounted钩子')
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        console.log('暂停onPlayerPause')
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        console.log('开始播放onPlayerPlaying')
        // if(!this.playItem){ this.list[0].playActive = true}
        // this.playItem.playActive = true
        // this.player = player
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('开始播放playerReadied')
      },
      videoCellClick(item, key) {
        this.videoIndex = key
      },
      bannerClick(){
        this.$router.push({path: '/servicelist'})
      },

      articalClick(){
        this.$router.push({path: '/show'})
      },
      moreComment(){
        if(this.commentList.length > 5) return
        this.moreCommentActive = true
        this.commentList = this.commentList.concat(this.moreCommentList)
      },
      stopOther(key){
        // this.list.forEach((o, i) => {
        //   this.$refs['player' + i][0].player.pause()
        // })
        //
        // this.$nextTick(() => {
        //   setTimeout(o => {
        //     // console.log(this.player)
        //     this.$refs['player' + key][0].player.play()
        //   }, 1000)
        // })
      },
      refresh: function (done) {
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
          }
          self.top = self.top - 10;
          done();
        }, 1500)
      },
      infinite: function (done) {
        var self = this
        setTimeout(function () {
          var start = self.bottom + 1;
          for (var i = start; i < start + 10; i++) {
            self.items.push(i + ' - keep walking, be 2 with you.');
          }
          self.bottom = self.bottom + 10;
          done();
        }, 1500)
      }
    }
  }
</script>

<style scoped>

  .video-player-box {
    height: 534px;
    width: 928px;
  }

  .container320 {
    display: none;
  }

  .banner {
    position: relative;
    padding-top: 26.04%;
  }

  .banner img {
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
    position: absolute;
    left: 0;
    top: 0
  }

  .main {
    max-width: 1280px;
    margin: 0 auto;
  }

  .video {
    padding-top: 610px;
    background-color: #1F1F1F;
    margin-top: 100px;
    position: relative;
  }

  .video .video-banner {
    position: absolute;
    left: 0;
    top: 0;
  }

  .video .video-banner > img {
    width: 100%;
    vertical-align: middle;
  }

  .video .video-banner > img.open-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    cursor: pointer;
  }

  .video-list {
    position: absolute;
    width: 352px;
    height: 534px;
    right: 0;
    top: 0;
    padding: 0 20px;
    overflow-y: auto;
  }

  .video-list-title {
    height: 60px;
    line-height: 60px;
  }

  .video-list-title span {
    font-size: 18px;
    color: #fff;
  }

  .video-list-cell {
    height: 80px;
    margin-top: 20px;
    /*background-color: skyblue;*/
  }

  .video-list-cell > img {
    width: 145px;
    height: 100%;
    margin-right: 20px;
    float: left;
    cursor: pointer;
  }

  .video-list-cell .content {
    width: 147px;
    height: 100%;
    /*background-color: yellow;*/
    float: left;
    position: relative;
  }

  .video-list-cell .content p {
    font-size: 14px;
    color: #999;
    line-height: 2em;
    cursor: pointer;
  }

  .video-list-cell .content p:hover {
    text-decoration: underline;
  }

  .video-list-cell .content .fixed {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .fixed .fixed-icon {
    width: 20px;
    height: 15px;
    background-color: #666;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
  }

  .fixed .fixed-icon:after {
    content: "";
    position: absolute;
    left: calc(50% + 3px);
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-left: 6px solid #1F1F1F;
    border-top: 4px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 4px solid transparent;
  }

  .fixed .fixed-num {
    color: #666;
    font-size: 13px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
  }

  .title-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 76px;
    background-color: #1F1F1F;
  }

  .title-bottom p {
    padding: 0 20px;
    color: #BF9571;
    font-size: 26px;
    line-height: 76px;
  }

  .image-artical {
    padding-top: 53.125%;
    position: relative;
    margin-top: 60px;
  }

  .image-artical-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .image-artical-left {
    float: left;
    width: 630px;
    height: 100%;
    cursor: pointer;
    position: relative;
  }

  .image-artical-left a{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .image-artical img {
    vertical-align: middle;
    width: 100%;
    height: 100%
  }

  .image-artical-left .title-bottom {
    width: 630px;
    /*bottom: -76px*/
  }

  .image-artical-right {
    float: right;
    width: 630px;
    height: 100%;
  }

  .image-artical-right-cell {
    height: 330px;
    position: relative;
    cursor: pointer;
  }

  .image-artical-right-cell:last-child {
    margin-top: 20px;
  }
  .image-artical-right-cell a{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }


  .image-artical-right-cell img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .single-artical {
    position: relative;
    margin-top: 60px;
    /*padding-top: 47.96875%;*/
  }
  .single-artical a{
    display: block;
  }

  .single-artical img {
    /*position: absolute;*/
    width: 100%;
  }

  .line {
    margin: 60px 0;
    height: 20px;
    background-color: #F5F4F8
  }

  .comment {
    max-width: 1280px;
    background-color: #1F1F1F;
    margin: 0 auto;
    padding: 50px 45px;
  }

  .comment h1 {
    color: #fff;
    font-family: "PingFangSC-Medium";
    font-size: 48px;
    text-align: center;
    font-weight: 500;
  }

  .comment-cell {
    position: relative;
  }

  .comment-cell-top {
    position: relative;
  }

  .comment-img {
    /*float: left;*/
    display: inline-block;
    vertical-align: middle;
  }

  .comment-img img {
    width: 80px;
    border-radius: 50%;
  }

  .comment-user {
    display: inline-block;
    vertical-align: middle;
    margin-left: 30px;
  }

  .comment-user .phone {
    color: #fff;
    font-size: 26px;
  }

  .comment-user .count span {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px
  }

  .comment-user .count span img {
    vertical-align: middle;
  }

  .comment-user .count span.count-info {
    color: #fff;
    opacity: 0.5;
    font-size: 24px;
  }

  .comment-date {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .comment-date span {
    color: #fff;
    font-size: 20px;
  }

  .comment-cell-content {
    padding-left: 110px;
  }

  .comment-cell-content p {
    color: #BF9571;
    line-height: 58px;
    font-size: 24px;
  }

  .content-img {
    overflow: hidden;
    margin-top: 10px;
  }

  .content-img li {
    width: calc((100% - 80px) / 3);
    float: left;
    margin-right: 40px;
    height: 300px;
  }

  .content-img li img{
    /*max-width: 100%;*/
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .content-img li:last-child {
    margin: 0
  }

  .comment-cell-line {
    height: 1px;
    background-color: #aaa;
    margin: 60px 0;
    opacity: .1;
  }

  .more-comment {
    text-align: center;
    cursor: pointer;
  }

  .more-comment span {
    color: #666;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    .container {
      display: none;
    }

    .container320 {
      display: block;
      padding-bottom: 14.285714%;
    }

    .main320 {
      padding: 0 10px 20px 10px;
      margin-top: 56px;
    }

    .line320 {
      height: 10px;
      background-color: #f5f4f8;
    }

    .comment-title {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #eee;
      color: #000;
      font-size: 18px;
      text-align: center;
    }

    .comment320-cell {
      margin-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }

    .comment320-cell-top {
      display: flex;
      align-items: center;
      padding: 0 10px;
      position: relative;
    }

    .comment320-img {
      margin-right: 10px;
    }

    .comment320-img img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .count320 {
      margin-top: 5px;
    }

    .count320 img {
      width: 13px;
      height: 13px;
      margin-right: 2px;
    }

    .count-info320 {
      margin-right: 3px
    }

    .comment320-user {
      font-size: 13px
    }

    .comment320-date {
      /*align-self: flex-start;*/
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }

    .comment320-date span {
      font-size: 12px;
    }

    .comment320-cell-content {
      margin-top: 10px;
      padding: 0 10px 0 70px;
    }

    .comment320-cell-content p {
      color: #666;
      line-height: 1.5em;
      font-size: 13px;
    }

    .content320-img {
      display: flex;
    }

    .content320-img li {
      flex: 1;
      margin-right: 5px;
      margin-top: 10px;
      position: relative;
      padding-top: calc((100% - 10px) / 3);
      width: calc((100% - 10px) / 3);
      max-width: calc((100% - 10px) / 3);;
    }

    .content320-img li:last-child {
      margin-right: 0;
    }

    .content320-img li img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .seller {
      padding: 10px;
      background-color: #f8f8f8;
      margin-top: 10px;
    }

    .seller p span:first-child {
      font-size: 13px;
      color: #c8936b;
    }

    .seller p span:last-child {
      font-size: 13px;
      color: #999
    }

    .main320-article{
      display: flex;
      height:210px;
      margin-top: 10px;
    }

    .main320-article-left{
      flex: 1;
      margin-right: 10px;
      position: relative;
    }

    .main320-article-left a{
      display: inline-block;
      width: 100%;
      height: 100%
    }


    .main320-article-left img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }

    .main320-article-right{
      flex: 1;
      display:flex;
      flex-direction: column;
    }

    .main320-article-right-cell{
      flex: 1;
      height: calc((100% - 10px) / 2);
      position: relative;
    }

    .main320-article-right-cell:first-child{
      margin-bottom: 10px;
    }

    .main320-article-right-cell a{
      display: inline-block;
      width: 100%;
      height: 100%
    }

    .main320-article-right-cell img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }


    .main320-banner-article{
      position: relative;
      padding-top: 56%;
      margin-top: 10px;
    }

    .main320-banner-article a{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0
    }

     .main320-banner-article img{
      position: absolute;
      left: 0;
      top: 0;
      width:100%;
      height:100%;
    }

    .main320-article-shadow {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 30px;
      width: 100%;
      background-color: rgba(0, 0, 0, 1);
      padding: 0 10px;
      line-height: 30px;
      border-top:1px solid rgba(200, 147, 107, .1);
    }

    .main320-article-shadow .main320-article-info {
      color: #c8936b;
      font-size: 13px;
    }
  }

  html, body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }

  .grey-bg {
    background-color: #eee;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
  }

  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
</style>
