<template>
	<view class="card-title">
		<text class="c-left">―</text>
		<text class="main-title">{{title}}</text>
		<text class="c-right">―</text>
	</view>
</template>

<script>
	export default {
		name: "m-card-title",
		props: {
			title: {
				default: "默认标题",
				type: String
			},
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.card-title {
		padding: 20rpx 0;
		text-align: center;
		font-weight: 700;

		.main-title {
			margin: 0 15rpx;
			font-size: 32rpx;
		}
	}
</style>
