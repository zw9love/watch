/**
 @author zengwei
 @time 2018/6/11
 **/
export default function ({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}

