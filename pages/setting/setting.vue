<template>
	<view>
		<view class="baseInfo">
			<view class="settingItem">
				<text class="itemName">头像</text>
				<view class="itemContent">
					<image src="../../static/images/avatar.jpg" mode="widthFix"></image>
					<u-icon name="arrow-right" color="#ccc" size="28"></u-icon>
				</view>
			</view>
			<u-line color="#ccc" />
			<view class="settingItem">
				<text class="itemName">昵称</text>
				<view class="itemContent">
					<text>老黄</text>
					<u-icon name="arrow-right" color="#ccc" size="28"></u-icon>
				</view>
			</view>
			<u-line color="#ccc" />
			<view class="settingItem">
				<text class="itemName">性别</text>
				<view class="itemContent">
					<text>男</text>
					<u-icon name="arrow-right" color="#ccc" size="28"></u-icon>
				</view>
			</view>
		</view>
		<view class="addrManage">
			<view class="settingItem">
				<text class="itemName">地址管理</text>
				<view class="itemContent">
					<text>新增/修改地址</text>
					<u-icon name="arrow-right" color="#ccc" size="28"></u-icon>
				</view>
			</view>
		</view>
		<view class="certification">
			<view class="settingItem">
				<text class="itemName">实名认证</text>
				<view class="itemContent">
					<text>去实名</text>
					<u-icon name="arrow-right" color="#ccc" size="28"></u-icon>
				</view>
			</view>
		</view>
		<view class="logoff">
			<view class="settingItem">
				<text class="itemName">注销账号</text>
				<view class="itemContent">
					<text>去注销</text>
					<u-icon name="arrow-right" color="#ccc" size="28"></u-icon>
				</view>
			</view>
		</view>
		<view class="logout">
			<u-button type="error">退出登录</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.settingItem {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		align-items: center;
		padding: 20rpx 40rpx;

		.itemContent {
			display: flex;

			image {
				width: 88rpx;
				border-radius: 50%;
				margin-right: 16rpx;
			}

			text {
				margin-right: 16rpx;
				font-weight: 700;
			}
		}
	}

	.addrManage,
	.logoff {
		margin: 30rpx 0;
	}

	.logout {
		padding: 0 20rpx;
		position: fixed;
		bottom: 18rpx;
		left: 0;
		right: 0;
	}
</style>
