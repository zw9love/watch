<template>
  <div class="video-player-container320">
    <div class="video-player-wrapper320">
      <div class="video-player-box320"
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
      <!--<div class="video-js video-player-poster" v-if="!playActive" @click="videoPlay(item)">-->
        <!--<button class="vjs-big-play-button" type="button" title="Play Video" aria-disabled="false">-->
          <!--<span aria-hidden="true" class="vjs-icon-placeholder"></span>-->
          <!--<span class="vjs-control-text" aria-live="polite">Play Video</span>-->
        <!--</button>-->
        <!--<img :src="item.playerOptions.poster" alt="">-->
      <!--</div>-->
      <div class="main320-article-shadow" v-if="!playActive">
        <span class="main320-article-info">{{item.info}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VideoMobile",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        playActive: false,
        player: null
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // this.openActive = true
        // player.play()
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
        this.$emit('stopOther', this.index)
        // this.playActive = true
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
        // console.log('开始播放playerReadied')
        this.player = player
        // this.playActive = true
        // if(!this.player){ this.player = player}
        // console.log('example 01: the player is readied', player)
        // setTimeout(o => {player.muted(false)}, 3000)
        // console.log(player.languages())
        // player.pause()
        // this.player = player
        // if(this.firstPlay){
        //   this.firstPlay = false
        //   this.videoMobileIndex = -1
        // }
      },
      videoPlay(item){
        this.playActive = true
        // item.playActive = true
        this.$nextTick(() => {
          setTimeout(o => {
            // console.log(this.player)
            this.player.play()
          }, 1000)
        })
      },
    }
  }
</script>

<style scoped>
  @media (max-width: 768px) {
    .video-player-container320 {
      position: relative;
      /*height: 300px;*/
      margin-top: 10px;
      padding-top: calc(57.5431% + 40px);
    }

    .video-player-wrapper320 {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .video-player-container320 .video-player-poster {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .video-player-container320 .video-player-poster > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .vjs-big-play-button {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: rgba(200, 147, 107, .7);
      z-index: 100;
      border: 0.06666em solid #fff;
    }

    .vjs-control-text {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    .video-player-container320 > .video-player-button320 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: rgba(200, 147, 107, .7);
      z-index: 1;
      border: 0.06666em solid #fff;
    }

    .video-player-box320 {
      width: 100%;
      height: calc(100% - 30px);
      /*margin-top: 10px;*/
      background-color: #000;
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
</style>
