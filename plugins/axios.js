export default function (res) {
    let { $axios, redirect } = res
    let token = res.store.state.token
    let devToken = "debug"
    // console.log(res.store.state.token) // 利用状态管理器设置token
    $axios.onRequest(config => {
        // console.log(process.env) // 为空的map {}
        // console.log(process.env.NODE_ENV)
        // console.log(window)
        // console.log(111)
        let NODE_ENV = process.env.NODE_ENV
        if(NODE_ENV === 'dev'){
            config.headers.token = devToken
        }else{
            config.headers.token = token
        }
        // console.log('Making request to ' + config.url)
        return config
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}
