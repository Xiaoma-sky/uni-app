<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<view class="">测试代码提交</view>
			<view class="">测试代码二提交</view>
			<view class="">测试代码三提交</view>
			<view class="">测试代码四提交</view>
		</view>
	</view>
</template>

<script>
	import { getList, postList } from '../../api/http.js'
	export default {
		data() {
			return {
				title: 'Hello',
				id:'1',
				params:{
					name:'token',
					id:'007'
				}
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData(){
			     await getList(this.id).then((res)=> {
					console.log(res)
				})
				await postList(this.params).then((res)=> {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
