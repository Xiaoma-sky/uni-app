import { http } from './api.js'
export const getList = (id) =>{
	return http({
		url:'/seller',
		data:{ id },
	})
}
export const postList = (params) =>{
	return http({
		url:'/seller',
		method:'post',
		data:params,
	})
}