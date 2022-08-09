<template>
	<view class="login">
		<view class="avatar">
			<u-avatar size="240" src="https://marketplace.canva.cn/2g_yM/MAB-8u2g_yM/2/tl/canva-MAB-8u2g_yM.png">
			</u-avatar>
		</view>

		<view class="font">请绑定手机</view>
		<text>以便我们为您提供更好的服务</text>

		<view class="bindBtn">
			<u-button type="success" size="medium" @click="handleBind">
				<u-icon name="weixin-circle-fill"></u-icon> 一键绑定
			</u-button>
		</view>

		<view class="agreement">
			<view class="audioBtn">
				<radio value="r1" :checked="isAgree" class="audioBtn" />
			</view>
			绑定即代表您同意摩天轮商城 ⟪摩天轮会员章程⟫ ⟪摩天轮隐私政策⟫ ⟪摩天轮商城协议⟫
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAgree: false
			};
		},
		methods: {
			handleBind() {
				uni.authorize({
					scope: 'scope.userInfo',
					success(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
	
	.avatar {
			margin: 80rpx;
		}

		.font {
			font-weight: 700;
		}

		.bindBtn {
			margin: 80rpx 0 60rpx;
			font-size: 36rpx !important;
		}

		.agreement {
			display: flex;
			padding: 0 18rpx;

			.audioBtn {
				margin-right: 10rpx;
			}
		}
	}
</style>
