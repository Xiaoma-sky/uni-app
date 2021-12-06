<template>
	<view>
		<text>我是测试的个人提交页面</text>
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'个人'
			}
		},
		methods: {
				get() {
					this.$nextTick(function(){
						
					})
				}
		}
	}
</script>

<style scoped>


</style>
