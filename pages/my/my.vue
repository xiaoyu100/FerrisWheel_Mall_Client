<template>
	<view>
		<u-toast ref="uToast" />

		<view class="header">
			<view class="h_left">
				<u-avatar size="large"
					src="https://c-ssl.duitang.com/uploads/item/202001/28/20200128152551_gevul.thumb.400_0.jpg">
				</u-avatar>
				<text class="username">laohuang123</text>
			</view>
			<view class="h_right">
				<view class="member_code iconfont icon-erweima "></view>
				<view class="setting iconfont icon-shezhi"></view>
				<view class="message iconfont icon-xinxi" @click="goMessage"></view>
			</view>
		</view>

		<view class="cu-card article">
			<view class="cu-item shadow">
				<view class="title">
					<view class="myOrder">
						<view class="left_text">我的订单</view>
						<view class="queryAll">查看全部<u-icon class="icon" name="arrow-right" color="#111" size="20">
							</u-icon>
						</view>
					</view>
				</view>
				<view class="content">
					<view class="itemList">
						<view class="item">
							<view class="itemIcon iconfont icon-daizhifu"></view>
							待支付
						</view>
						<view class="item">
							<view class="itemIcon iconfont icon-daifahuo"></view>
							待发货
						</view>
						<view class="item">
							<view class="itemIcon iconfont icon-daishouhuo"></view>
							待收货
						</view>
						<view class="item">
							<view class="itemIcon iconfont icon-daipingjia"></view>
							待评价
						</view>
						<view class="item">
							<view class="itemIcon iconfont icon-shouhouwuyou "></view>
							退换/售后
						</view>
					</view>
				</view>
			</view>
		</view>

		<u-card :show-head="false" padding="20">
			<view class="activityList" slot="body">
				<view class="item">
					<image class="icon"
						src="https://tse2-mm.cn.bing.net/th/id/OIP-C.JpAjIw66_evtOG8kBPrkiQHaHa?pid=ImgDet&rs=1"
						mode="widthFix"></image>
					<text class="mainName">会员中心</text>
					<text class="subName">查看权益</text>
				</view>
				<view class="item">
					<image class="icon" src="https://wimg.588ku.com/gif/19/11/25/47579cdbc73dc963cc82d44132e18a04.gif"
						mode="widthFix"></image>
					<text class="mainName">限时秒杀</text>
					<text class="subName">低价专场</text>
				</view>
				<view class="item">
					<image class="icon"
						src="https://ts1.cn.mm.bing.net/th/id/R-C.5f57a704bc2b8c6848a0b8183c93ab64?rik=HqK%2bpLNUm25gig&riu=http%3a%2f%2fwq.imlehu.com%2faddons%2fmeepo_xianchang%2ftemplate%2fmobile%2fapp%2fimages%2fdmredpack%2fimages%2fredpack2.png&ehk=VAxLyltghQvm1ed84uYhFrDE0C7BXzX931Q%2bFHVzh3Q%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
						mode="widthFix"></image>
					<text class="mainName">红包卡券</text>
					<text class="subName">查看优惠</text>
				</view>
				<view class="item">
					<image class="icon"
						src="https://file.uizhw.com/czsj/works/pic/eca1a302-8caf-48f4-83ab-318c35dafe75.gif"
						mode="widthFix"></image>
					<text class="mainName">红包签到</text>
					<text class="subName">每天领红包</text>
				</view>
			</view>
		</u-card>

		<m-card title="我的专属频道"></m-card>
	</view>
</template>

<script>
	import mCard from '@/components/m-card.vue';
	export default {
		components: {
			mCard
		},
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

	.myOrder {
		display: flex;
		justify-content: space-between;

		.left_text {
			font-weight: 700;
		}

		.queryAll {
			font-size: 26rpx;
			display: flex;
			align-items: center;

			.icon {
				background-color: #ff9900;
				border-radius: 50%;
				margin-left: 10rpx;
				color: #111;
				padding: 4rpx;

				text {
					font-size: 10px;
				}
			}
		}
	}

	.content {
		padding: 0 !important;

		.itemList {
			width: 100%;
			display: flex;
			margin-top: 10rpx;

			.item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;

				.itemIcon {
					margin-bottom: 16rpx;
					font-size: 66rpx;
					color: #ff9900;
				}
			}
		}
	}

	.activityList {
		display: flex;

		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;

			.icon {
				width: 88rpx;
				height: 88rpx;
			}

			.mainName {
				margin: 14rpx;
				font-size: 32rpx;
				font-weight: 700;
			}

			.subName {
				color: #bbb;
			}
		}
	}
</style>
