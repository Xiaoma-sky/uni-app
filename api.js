// 接口配置地址

const BaseURL = 'http://localhost:8888/api'
export const http = (options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BaseURL + options.url,
			method: options.method || 'Get',
			data: {} || options.data,
			header: {
				'Content-type':'application/json',
				'X-Auth-Token':uni.getStorageSync('authtoken')
			},
			dataType: 'json',
			success: (res) => {
				if(res.data.code !== 0){}
				resolve(res)
			},fail: (err) => {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}