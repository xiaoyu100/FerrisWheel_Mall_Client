<template>
	<view>
		<u-toast ref="uToast" />

		<view class="header">
			<view class="h_left">
				<u-avatar size="large" src="https://c-ssl.duitang.com/uploads/item/202001/28/20200128152551_gevul.thumb.400_0.jpg">
				</u-avatar>
				<text class="username">laohuang123</text>
			</view>
			<view class="h_right">
				<view class="member_code iconfont icon-erweima "></view>
				<view class="setting iconfont icon-shezhi"></view>
				<view class="message iconfont icon-xinxi" @click="goMessage"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goMessage() {
				this.$refs.uToast.show({
					title: '敬请期待...',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		height: 200rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40rpx 20rpx;
		background-color: #fff;

		.h_left {
			display: flex;
			align-items: center;

			.username {
				margin-left: 20rpx;
				font-size: 32rpx;
				font-weight: 700;
			}
		}

		.h_right {
			display: flex;
			justify-content: space-between;

			.iconfont {
				font-size: 56rpx;
				margin: 0 10rpx;
			}
		}
	}
</style>
