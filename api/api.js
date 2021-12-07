const BaseURL = 'http://localhost:8888/api'
export const http = (options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BaseURL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			// if(options.method.toUpperCase() =='POST'){}
			header: {
				'Content-type':'application/json',
				// 'X-Auth-Token':uni.getStorageSync('authtoken')
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