/**
 @author zengwei
 @time 2018/9/11
 **/
export default function ({$axios, redirect}) {
  // console.log('----------------------------------------')
  // console.log(context.$axios.request.session)
  // console.log('----------------------------------------')
  $axios('/refresh', {
    // 发送客户端 cookies 到服务端
    credentials: 'same-origin',
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  })
    .then((res) => {
      if (!res.data.ok) {
        redirect(302, '/process')
      }
    })
}
