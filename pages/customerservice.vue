<template>
  <div>
    <lg-preview v-if="previewActive"/>
    <div class="container">
      <!--nav-->
      <div class="nav">
        <div class="nav-title">
          <span><span class="spe-info">名表维修服务中心</span> {{serviceName}} 正在为您服务...</span>
        </div>
        <div class="nav-end" @click="endTalk">
            <span class="nav-end-icon">
                <img src="../assets/img/customer_service_end.png"/>
            </span>
          <span class="nav-end-info">结束对话</span>
        </div>
      </div>
      <!--banner-->
      <!--<div class="banner">-->
      <!--<img src="../assets/img/customer_service_banner.jpg" />-->
      <!--</div>-->

      <!--main-->
      <main class="main" ref="main">
        <div class="main-container" ref="mainContainer">
          <div class="banner">
            <img src="../assets/img/customer_service_left.jpg"/>
            <img src="../assets/img/customer_service_right.jpg"/>
          </div>
          <!--<div class="main-tip"><span>2018-8-10 09:23:23 请求了对话</span></div>-->
          <ChatCell v-for="(entry, key) in list" :key="key" :entry="entry"/>
        </div>
      </main>

      <!--用户输入-->
      <div class="input">
        <div class="input-nav">
          <img src="../assets/img/smile.png" alt="" id="btn" @click.stop="smilePCClick"/>
          <!--onclick="document.getElementById('upload-txt').click()"-->
          <img src="../assets/img/add.png" alt="" id="upload" @click.stop="uploadPc"/>
          <form ref="formObject">
            <input type="file" name="file" hidden id="upload-txt" accept="image/*" ref="uploadPc"
                   @change="uploadPcChange">
          </form>
          <div class="call-back">
            <input type="text" maxlength="11" class="call-back-txt" placeholder="请输入手机号码" @keyup.enter="callYouBack"
                   v-model="phoneNumber">
            <span class="call-back-btn" @click="callYouBack">给您回电</span>
          </div>
        </div>
        <div id="editor" class="input-txt" placeholder="请在此输入..." contenteditable="true" ref="editorPC"
             @keydown="editorPCKeydown"></div>
        <button class="send" @click.stop="send">发送</button>
        <div class="emoji" v-show="emojiActive">
          <ul class="emoji-container">
            <li v-for="(item, key) in emojis" :key="key" @click.stop="emojiClick(item)">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container320">

      <HeaderMobile title="在线客服"></HeaderMobile>

      <!--<div class="nav320">-->
      <!--<span class="nav320-title">在线客服</span>-->
      <!--</div>-->

      <main class="main320" @click.stop="mainMobileClick" ref="mainMobile" :style="{paddingBottom}">
        <div class="main-container320" ref="mainContainerMobile">
          <!--<p class="store-info">您正在咨询深圳数码-南山店</p>-->

          <div class="banner320">
            <img src="../assets/img/customer_service_banner320.jpg" alt="">
          </div>

          <div style="padding: 0 10px">
            <div class="welcome">
              <span>欢迎咨询在线客服，本次由{{serviceName}}为您服务</span>
            </div>

            <ChatCellMobile v-for="(entry, key) in list" :key="key" :entry="entry"/>
          </div>
        </div>
      </main>

      <!--底部输入和按钮-->
      <div class="connect-btn320">
        <span>重新连接</span>
      </div>

      <div class="input320" :style="{bottom}">
        <div class="operation">
          <span>
            <img src="../assets/img/smile.png" alt="" id="btn320" @click.stop="smileMobileClick">
          </span>
          <span>
            <img src="../assets/img/add.png" alt="" class="add" @click.stop="addMobileClick">
          </span>
          <!--<input id="editor320" class="input-txt320" placeholder="请在此输入111..." type="search" autocomplete="off" autocomplete="off">-->
          <div class="test-textarea" contenteditable="true" placeholder="请输入描述内容..." @focus="editorMobileFocus"
               @blur="editorMobileBlur" ref="editorMobile"></div>
          <!--<textarea id="editor320" class="input-txt320" placeholder="请在此输入..."></textarea>-->
          <!--<button class="send320">发送</button>-->
          <!--<button id="openwebsocket">开启</button>-->
          <button class="send320" id="send" @click="sendMobile">发送</button>
        </div>
        <div class="popup">
          <div class="popup-emoji" v-if="emojiActive">
            <ul>
              <li v-for="(item, key) in emojis" :key="key" @click.stop="emojisMobileClick(item)">{{item}}</li>
            </ul>
          </div>
          <div class="popup-photo" v-else>
            <div class="popup-photo-cell" @click.stop="orderStore">
               <span class="popup-photo-img">
                  <img src="../assets/img/write.png" alt="">
              </span>
              <span class="popup-photo-info">预约到店</span>
            </div>
            <div class="popup-photo-cell" @click.stop="photoMobile">
              <span class="popup-photo-img" id="photo-wrapper">
                  <img src="../assets/img/photo.png" alt="">
              </span>
              <span class="popup-photo-info">相册</span>
              <input type="file" name="file" accept="image/*" class="upload-txt320" hidden ref="photoMobile"
                     @change="photoMobileChange">
            </div>
            <div class="popup-photo-cell" @click.stop="camera">
              <span class="popup-photo-img" id="camera-wrapper">
                  <img src="../assets/img/camera.png" alt="">
              </span>
              <span class="popup-photo-info">拍照</span>
              <input type="file" name="file" accept="image/*" capture="camera" class="camera-txt" hidden ref="camera"
                     @change="photoMobileChange">
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import HeaderMobile from '../components/HeaderMobile'
  import ChatCell from '../components/ChatCell'
  import ChatCellMobile from '../components/ChatCellMobile'
  import Modal from '../components/Modal'

  let ws = null
  export default {
    name: "customerservice",
    components: {
      HeaderMobile,
      ChatCell,
      ChatCellMobile,
      Modal
    },
    data() {
      return {
        inputVal: '',
        phoneNumber: '',
        bottom: '-125px',
        paddingBottom: '40px',
        emojiActive: false,
        emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️', '🇨🇳'],
        list: [
          // {time: '2018-08-04 12:33:06', content: '手机进水了，还可以修吗？', type: 'customer', infoType: 'text'},
          // {time: '2018-08-04 12:33:06', content: '手机进水了，还可以修吗？', type: 'customer', infoType: 'text'},
          // {time: '2018-08-04 12:33:06', content: '手机进水了，还可以修吗？', type: 'customer', infoType: 'text'},
          // {time: '2018-08-04 12:33:06', content: '手机进水了，还可以修吗？', type: 'customer', infoType: 'text'},
          // {time: '2018-08-04 12:33:06', type: 'customer', infoType: 'image', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535116654791&di=4291caaeb7eda1d8bf3336f39ff8b30b&imgtype=0&src=http%3A%2F%2Fa1.hoopchina.com.cn%2Fattachment%2FDay_090602%2F49_709415_948e4af50e5ed27.jpg'},
        ],
        previewActive: false,
        serviceName: ''
      }
    },
    created() {
      // this.previewActive = true
    },
    mounted() {
      // alert(111)
      this.previewActive = true
      let mobileActive = window.innerWidth <= 768
      let username = this.randomWord(false, 32)
      window.addEventListener('click', () => {
        this.bottom = '-125px'
        this.paddingBottom = '40px'
        this.emojiActive = false
      })

      // console.log(username)

      // ws = new WebSocket("ws://localhost:9090");
      // ws = new WebSocket("ws://192.168.16.5:8981/api/Chat/Connect?type=0&pwd=123456&user=" + username);
      ws = new WebSocket("ws://180.76.160.14:8981/api/Chat/Connect?type=0&pwd=123456&user=" + username);
      // ws = new WebSocket("ws://api.pgwxd.com/api/Chat/Connect?type=0&pwd=123456&user=" + username);
      // // ws = new WebSocket("ws://192.168.1.216:1000/api/Chat/Connect?type=0&pwd=123456&user=cyf");
      //
      ws.onopen = () => {
        // Web Socket 已连接上，使用 send() 方法发送数据
        // let json = {
        //   name: '大熊',
        //   age: 30
        // }
        // ws.send(JSON.stringify(json));
        console.log("连接打开成功，数据发送中...");
      }

      ws.onmessage = (evt) => {
        let received_msg = JSON.parse(evt.data);
        // received_msg.infoType = 'text'

        if(received_msg.MesgType === 'getkflist'){
          return this.serviceName = received_msg.Content.UserName
        }
        console.log(received_msg)
        let obj = {}
        obj.type = 'service'
        obj.infoType = received_msg.ContentType
        obj.content = received_msg.Content
        obj.time = received_msg.MsgTime
        /**
         // 客服发送消息json
         {
               "contentType": "内容的类型", // text 或 image
               "content": "内容",
               "name": "客服名"，
               "number": "客服编号"，
               "time": "时间戳"
           }
         */
        this.list.push(obj)
        if (mobileActive) {
          this.mobileToBottom()
        } else {
          this.pcToBottom()
        }
      }

      ws.onclose = () => {
        // 关闭 websocket
        console.log("连接已关闭...");
        // ws = new WebSocket("ws://192.168.1.216:1000/api/Chat/Connect?type=0&pwd=123456&user=" + username);
        // ws = new WebSocket("ws://api.pgwxd.com/api/Chat/Connect?type=0&pwd=123456&user=" + username);
        ws = new WebSocket("ws://180.76.160.14:8981/api/Chat/Connect?type=0&pwd=123456&user=" + username);
      }

      window.addEventListener('beforeunload', () => {
        ws.close()
      })
    },
    destroyed() {
      ws.close()
    },
    methods: {
      randomWord(randomFlag, min, max){
        var str = "",
          range = min,
          arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let pos = ''
        // 随机产生
        if(randomFlag){
          range = Math.round(Math.random() * (max-min)) + min;
        }
        for(var i=0; i<range; i++){
          pos = Math.round(Math.random() * (arr.length-1));
          str += arr[pos];
        }
        return str;
      },
      getDouble(val) {
        val = val + ''
        if (val.length > 1) {
          return val
        } else {
          return '0' + val
        }
      },
      getTime() {
        let date = new Date()
        return date.getFullYear() + '-' + this.getDouble(date.getMonth() + 1) + '-' + this.getDouble(date.getDate()) + ' ' + this.getDouble(date.getHours()) + ':' + this.getDouble(date.getMinutes()) + ':' + this.getDouble(date.getSeconds())
      },
      emojiClick(item) {
        let editorPC = this.$refs.editorPC
        editorPC.innerHTML += item
        // editorPC.focus()
        this.emojiActive = false
      },
      smilePCClick() {
        this.emojiActive = true
      },
       uploadPcChange(e) {
        let reads = new FileReader();
        let file = e.target.files[0];
        let root = this
        let form = new FormData(this.$refs.formObject)
        form.append('name', 'daxiong')
        // this.$axios('/sendPhoto', {
        //   method: 'POST',
        //   data: form,
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   },
        // })
        //   .then((res) => {
        //     console.log(res)
        //   })
        //   .catch((error)=>{
        //     console.log(error)
        //   })

        if (file) {
          reads.readAsDataURL(file)
          reads.onload = function () {
            let img = new Image()
            let result = this.result
            img.src = result
            // console.log(result)
            img.onload = async function () {
              let time = root.getTime()
              await ws.send(JSON.stringify({
                MesgType: "Sent",
                User: "游客",
                SelectUser: root.serviceName,
                Content: result,
                ContentType: 'images',
                MsgTime: time,
                time,
                type: 'customer'
              }))
              //
              // let width = this.width < 760 ? this.width : 760
              // let time = root.getTime()
              // root.list.push({infoType: 'image', type: 'customer', time: time, src: result, width: width})
              // root.$nextTick(function () {
              //   root.pcToBottom()
              // })
              let fd = new FormData()
              fd.append('base64str', result)
              root.$axios('/api/Chat/ExchangeImg', {
                method: 'POST',
                data: fd,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
              })
                .then(res => {
                  let width = this.width < 760 ? this.width : 760
                  root.list.push({infoType: 'images', type: 'customer', time: time, src: result, content: result, width: width})
                  root.$nextTick(function () {
                    root.pcToBottom()
                  })
                })
                .catch(error => {
                  root.$store.dispatch({type: 'setModalInfo', val: '文件上传失败！'})
                  root.$store.dispatch({type: 'setSuccessActive', val: false})
                  root.$store.dispatch({type: 'setModalActive', val: true})
                })
              // console.log(result)
              root.$refs.uploadPc.value = ''
            }
          }
        }
      },
      uploadPc() {
        this.$refs.uploadPc.click()
      },
      pcToBottom() {
        setTimeout(o => {
          this.$refs.main.scrollTop = this.$refs.mainContainer.clientHeight
        }, 0)
      },
      send() {
        let editorPC = this.$refs.editorPC
        let html = this.$refs.editorPC.innerHTML
        if (!html) return
        let time = this.getTime()
        this.list.push({time, content: html, infoType: 'text', type: 'customer'})
        editorPC.innerHTML = ''
        ws.send(JSON.stringify({
          MesgType: "Sent",
          User: "游客",
          SelectUser: this.serviceName,
          Content: html,
          ContentType: 'text',
          time,
          MsgTime: time,
          type: 'customer'
        }))
        this.$nextTick(function () {
          // DOM 现在更新了
          this.pcToBottom()
        })
      },
      editorPCKeydown(e) {
        let editorPC = this.$refs.editorPC
        if (e.keyCode === 13 && e.ctrlKey) {
          console.log(editorPC.innerHTML)
          editorPC.innerHTML += '\n'
          // editorPC.innerHTML += 100
          // 这里实现换行
          // $('.input-txt').val($('.input-txt').val() + "\n")
        } else if (e.keyCode === 13) {
          e.preventDefault();
          // 避免回车键换行
          // 下面写你的发送消息的代码
          this.send()
        }
      },
      smileMobileClick() {
        this.bottom = '0'
        this.emojiActive = true
        this.mobilePaddingBottom()
      },
      addMobileClick() {
        this.bottom = '0'
        this.emojiActive = false
        this.mobilePaddingBottom()
      },
      mainMobileClick() {
        this.bottom = '-125px'
        this.paddingBottom = '40px'
      },
      emojisMobileClick(item) {
        let editorMobile = this.$refs.editorMobile
        editorMobile.scrollTop = 1000000
        editorMobile.innerHTML += item
      },
      mobileToBottom() {
        setTimeout(o => {
          this.$refs.mainMobile.scrollTop = this.$refs.mainContainerMobile.clientHeight
        }, 0)
      },
      mobilePaddingBottom() {
        this.paddingBottom = '165px'
        this.$nextTick(function () {
          // DOM 现在更新了
          // `this` 绑定到当前实例
          this.mobileToBottom()
        })
      },
      sendMobile() {
        // console.log(this.$refs.mainMobile.scrollTop)
        // console.log(this.$refs.mainContainerMobile.clientHeight)
        let editorMobile = this.$refs.editorMobile
        let editorMobileHtml = editorMobile.innerHTML.trim()
        if (!editorMobileHtml) return
        let time = this.getTime()
        this.list.push({time: time, content: editorMobileHtml, infoType: 'text', type: 'customer'})
        editorMobile.innerHTML = ''
        ws.send(JSON.stringify({
          MesgType: "Sent",
          User: "游客",
          SelectUser: this.serviceName,
          Content: editorMobileHtml,
          ContentType: 'text',
          time,
          MsgTime: time,
          content: editorMobileHtml,
          infoType: 'text',
          type: 'customer'
        }))
        this.$nextTick(function () {
          // DOM 现在更新了
          // `this` 绑定到当前实例
          this.mobileToBottom()
        })
      },
      orderStore() {
        this.$router.push({path: '/servicelist'})
      },
      photoMobile() {
        this.$refs.photoMobile.click()
      },
      camera() {
        this.$refs.camera.click()
      },
      editorMobileFocus() {
        this.mobileToBottom()
        setTimeout(() => {
          document.body.scrollTop = 1000000
        }, 200)
      },
      editorMobileBlur() {
        // console.log(this.$refs.editorMobile.innerHTML)
      },
      photoMobileChange(e) {
        let reads = new FileReader();
        let file = e.target.files[0];
        let root = this
        // console.log(file)
        if (file) {
          reads.readAsDataURL(file)
          reads.onload = function () {
            let img = new Image()
            let result = this.result
            img.src = result
            img.onload = async function () {
              let time = root.getTime()
              await ws.send(JSON.stringify({
                MesgType: "Sent",
                User: "游客",
                SelectUser: root.serviceName,
                Content: result,
                ContentType: 'images',
                time,
                MsgTime: time,
                type: 'customer'
              }))
              //
              // let width = this.width < 230 ? this.width : 230
              // let time = root.getTime()
              // root.list.push({infoType: 'image', type: 'customer', time: time, src: result, width: width})
              // root.$nextTick(function () {
              //   root.mobileToBottom()
              // })

              let fd = new FormData()
              fd.append('base64str', result)
              root.$axios('/api/Chat/ExchangeImg', {
                method: 'POST',
                data: fd,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
              })
                .then(res => {
                  let width = this.width < 230 ? this.width : 230
                  root.list.push({infoType: 'images', type: 'customer', time: time, src: result, content: result, width: width})
                  root.$nextTick(function () {
                    root.mobileToBottom()
                  })
                })
                .catch(error => {
                  // root.$store.dispatch({type: 'setModalInfo', val: '文件上传失败！'})
                  // root.$store.dispatch({type: 'setSuccessActive', val: false})
                  // root.$store.dispatch({type: 'setModalActive', val: true})
                })
              // console.log(result)
              root.$refs.photoMobile.value = ''
              root.$refs.camera.value = ''
            }
          }
        }
      },
      async callYouBack() {
        let number = this.phoneNumber.trim()
        let modalInfo = ''
        let successFlag = false
        let checkFlag = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(number)
        if (checkFlag) {
          await this.$axios(`/api/CallBack?Mobile=${number}&SiteId=${this.$store.state.siteId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => {
              console.log(res)
              modalInfo = '您已成功提交！请保持电话畅通'
              successFlag = true
              // if (res.status === 401) {
              //   throw new Error('Bad credentials')
              // } else {
              //   return res.data.username
              // }
            })
            .catch((error) => {
              modalInfo = '对不起！您的手机号码格式有误'
              console.log(error)
            })
        } else {
          modalInfo = '对不起！您的手机号码格式有误'
        }
        this.$store.dispatch({type: 'setModalInfo', val: modalInfo})
        this.$store.dispatch({type: 'setSuccessActive', val: successFlag})
        this.$store.dispatch({type: 'setModalActive', val: true})
      },
      endTalk() {
        window.close()
      }
    }
  }
</script>

<style scoped>

  .banner {
    margin-top: 20px;
    /*height: 380px;*/
  }

  .banner img {
    vertical-align: middle;
    height: 100%
  }

  .banner img:first-child {
    margin-right: 20px;
    width: calc((100% - 20px) * 0.511326);
  }

  .banner img:last-child {
    width: calc((100% - 20px) * 0.488674);
  }

  img {
    vertical-align: middle;
  }

  img.emoji_icon {
    width: 30px
  }

  .container320 {
    display: none;
  }

  .nav {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    background-color: #333;
  }

  .nav:after {
    content: "";
    display: inline-block;
    clear: both;
  }

  .nav .nav-title {
    float: left;
    color: #fff;
    font-size: 20px;
  }

  .nav .nav-title span {
    color: #fff;
  }

  span.spe-info {
    color: #BF9571 !important;
  }

  .nav .nav-end {
    float: right;
  }

  .nav-end > span {
    display: inline-block;
    cursor: pointer;
    line-height: 60px;
  }

  .nav-end > span.nav-end-icon {
    width: 20px;
  }

  .nav-end > span.nav-end-info {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }

  main {
    padding: 0 20px;
    overflow-x: hidden;
    overflow-y: auto;
    /*max-width: 1200px;*/
    /*margin: 0 auto;*/
    width: 100%;
    height: calc(100vh - 270px);
    background-color: #EBEBEB;
  }

  main .main-tip {
    margin: 35px auto;
    /*max-width: 280px;*/
    text-align: center;
  }

  main .main-tip span {
    display: inline-block;
    background-color: #f1f1f1;
    height: 40px;
    font-family: "PingFangSC-Regular";
    line-height: 40px;
    color: #999;
    font-size: 12px;
    border-radius: 2px;
    padding: 0 20px;
  }

  main .main-tip span a {
    color: #C8936B
  }

  .input {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .input-nav {
    height: 50px;
    background-color: #f1f1f1;
    position: relative;
    padding: 0 20px;
    line-height: 50px;
  }

  .input-nav img {
    width: 30px;
    vertical-align: middle;
    /*margin-top: 14px;*/
    margin-right: 20px
  }

  .input-nav .call-back {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: 36px;
    line-height: 36px;
    width: 302px;
    border-radius: 5px;
    /*border: 1px solid #C8936B;*/
  }

  .call-back .call-back-txt {
    display: inline-block;
    width: 180px;
    color: #333;
    font-size: 14px;
    padding: 5px 10px;
    /*border: none;*/
    height: 100%;
    border: 1px solid #C8936B;
    vertical-align: middle;
  }

  .call-back .call-back-btn {
    display: inline-block;
    width: 120px;
    background-color: #C8936B;
    color: #fff;
    font-size: 16px;
    text-align: center;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
    vertical-align: middle;
  }

  .input-txt {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    height: 160px;
    resize: none;
    font-family: "PingFangSC-Regular";
    font-size: 20px;
  }

  .input-txt span.input-txt-emoji {
    font-size: 24px;
  }

  .input-txt img {
    width: 30px;
  }

  .send {
    width: 100px;
    border-radius: 3px;
    border: 1px solid #C8936B;
    font-size: 16px;
    padding: 10px 0;
    text-align: center;
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-color: transparent;
    cursor: pointer;
    color: #C8936B;
    outline: none;
  }

  .emoji {
    position: absolute;
    left: 35px;
    top: -270px;
    width: 540px;
    height: 277px;
    padding: 5px;
    background-color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 300ms ease;
  }

  .emoji ul.emoji-container:after {
    content: "";
    display: block;
    clear: both;
  }

  .emoji ul.emoji-container li {
    float: left;
    width: 54px;
    height: 54px;
    border: 1px solid #e3e3e3;
    margin-top: -1px;
    margin-left: -1px;
    font-size: 32px;
    line-height: 54px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .container {
      display: none;
    }

    .container320 {
      display: block;
      /*overflow-x: hidden;*/
      /*overflow-y: auto;*/
    }

    .nav320 {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, .9);
      z-index: 100;
      text-align: center;
      line-height: 50px;
    }

    .nav320-title {
      color: #fff;
    }

    .banner320 {
      position: relative;
      padding-top: 40%;
      margin-top: 46px;
    }

    .banner320 .banner320-swiper-img {
      width: 100%
    }

    .banner320 img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0
    }

    main.main320 {
      height: calc(100vh - 50px);
    }

    .welcome {
      text-align: center;
      margin-top: 24px;
    }

    .welcome span {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 100px;
      background-color: #cfcfcf;
      font-size: 12px;
      color: #fff;
    }

    .connect-btn320 {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      height: 40px;
      width: calc(100% - 34px);
      background-color: #C8936B;
      bottom: 30px;
      border-radius: 3px;
      text-align: center;
      /*margin: 30px auto*/
      display: none;
    }

    .connect-btn320 span {
      color: #fff;
      font-size: 14px;
      font-family: "PingFangSC-Regular";
      line-height: 40px;
    }

    .input320 {
      position: fixed;
      width: 100%;
      bottom: -125px;
      left: 0;
      transition: all 300ms ease;
    }

    #editor320 img {
      width: 24px;
      height: 24px
    }

    .operation {
      /*height: 50px;*/
      background-color: #f3f3f3;
      padding: 10px 10px;
      display: flex;
      justify-content: space-between;
      /*align-items: center;*/
    }

    .operation > span:first-child {
      margin-right: 10px;
    }

    .operation > span img {
      width: 35px;
      height: 35px;
    }

    /*.operation > #editor320 {*/
    /*!*min-height: 30px;*!*/
    /*height: 30px;*/
    /*max-height: 120px;*/
    /*flex: 1;*/
    /*margin: 0 10px;*/
    /*background-color: #fff;*/
    /*border-radius: 7px;*/
    /*outline: none;*/
    /*border: none;*/
    /*padding: 0 15px;*/
    /*line-height: 30px;*/
    /*font-size: 12px;*/
    /*!*overflow: hidden;*!*/
    /*}*/
    .test-textarea {
      flex: 1;
      min-height: 35px;
      line-height: 35px;
      _height: 30px;
      max-height: 100px;
      margin: 0 10px;
      padding: 0 15px;
      outline: 0;
      background-color: #fff;
      /*border: 1px solid #ccc;*/
      font-size: 12px;
      word-wrap: break-word;
      overflow-x: hidden;
      overflow-y: auto;
      /*-webkit-user-modify: read-write-plaintext-only;*/
      border-radius: 4px;
    }

    .test-textarea:empty:before {
      content: attr(placeholder);
      font-size: 12px;
      color: #999;
      height: 35px;
      line-height: 35px;
    }

    .test-textarea:focus {
      content: none;
    }

    .popup {
      background-color: #f3f3f3;
      height: 125px;
    }

    .popup-emoji ul {
      display: flex;
      /*justify-content: space-between;*/
      padding: 0 10px;
      flex-wrap: wrap;
      height: 125px;
      overflow-y: auto;
      /*padding-bottom: 11px;*/
      background-color: #f3f3f3;
    }

    .popup-emoji ul li {
      font-size: 25px;
      /*padding: 2px;*/
      display: flex;
      width: 11.11%;
      justify-content: center;
      margin-top: 5px;
    }

    /*.popup-emoji > span {*/
    /*display: flex;*/
    /*width: 11.11%;*/
    /*justify-content: center;*/
    /*margin-top: 5px;*/
    /*}*/
    /*.popup-emoji > span img {*/
    /*width: 32px;*/
    /*height: 32px;*/
    /*vertical-align: middle;*/
    /*!*padding: 0 10px*!*/
    /*}*/
    .popup-photo {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }

    .popup-photo .popup-photo-cell {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .popup-photo .popup-photo-cell > span.popup-photo-info {
      margin-top: 10px;
      font-family: PingFangSC-Regular;
      color: #333;
      font-size: 12px;
    }

    .popup-photo .popup-photo-cell > span.popup-photo-img {
      display: flex;
      width: 60px;
      height: 60px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 2px;
    }

    .popup-photo .popup-photo-cell > span.popup-photo-img img {
      width: 20px;
      height: 20px;
    }

    .main320 {
      padding: 0;
    }

    .chat-end-info {
      text-align: center;
      color: #666;
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      margin-top: 50px;
      font-weight: 600;
    }

    .send320 {
      width: 60px;
      /*height: 30px;*/
      border: 1px solid #C8936B;
      outline: none;
      background-color: #C8936B;
      border-radius: 3px;
      color: #fff;
      max-height: 35px;
    }

  }
</style>
