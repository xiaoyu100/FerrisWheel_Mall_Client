<template>
	<view>
		<view class="back" @click="goBack">
			<u-icon name="arrow-left"></u-icon>
		</view>

		<swiper class="swiper" indicator-dots>
			<swiper-item>
				<image class="detailPic"
					src="https://pic.midea.cn/ImageStore/186733/pic/bf5f7e5f81e484fdA5632/bf5f7e5f81e484fdA5632.jpg"
					mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image class="detailPic"
					src="https://pic.midea.cn/ImageStore/177684/pic/2008ef5381a6a95aA13248/2008ef5381a6a95aA13248.jpg"
					mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image class="detailPic"
					src="https://pic.midea.cn/ImageStore/202308/pic/c67da6644196712fA16299/c67da6644196712fA16299.jpg"
					mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image class="detailPic" src="https://dsdcp.smartmidea.net/mcsp/prod/20210422/1619027921346.jpg"
					mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image class="detailPic" src="https://pic.mdcdn.cn/pc/pic/202107/748a87045146822413ca172a5cc47900.jpg"
					mode="widthFix"></image>
			</swiper-item>
		</swiper>

		<view class="goodsInfo">
			<view class="priceAndName">
				<view class="price">￥168.00</view>
				<view class="name">LUCKYMELIFE积财纳福金米储蓄瓶项链 加油包（3粒，送简易包装瓶）</view>
			</view>
			<view class="follow">
				<u-icon name="star" color="#2979ff" size="28"></u-icon>
				<view>关注</view>
			</view>
		</view>

		<view class="distribution">
			<text>配送</text>
			<view class="address">
				广东省广州市天河区石牌
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>

		<view class="cu-bar bg-white tabbar border shop footerBar">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green"></view>
				客服
			</button>
			<view class="action" @click="goCart">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="bg-orange submit">加入购物车</view>
			<view class="bg-red submit">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goCart() {
				uni.switchTab({
					url: '/pages/cart/cart'
				})
			},
			goBack(){
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back {
		position: fixed;
		left: 46rpx;
		top: 108rpx;
		width: 86rpx;
		height: 54rpx;
		border-radius: 30rpx;
		background-color: rgba(255, 255, 255, 0.6);
		z-index: 999;
		text-align: center;
		line-height: 54rpx;
		font-size: 30rpx;
	}

	.swiper {
		height: 600rpx;

		.detailPic {
			width: 100%;
		}
	}

	.goodsInfo {
		display: flex;
		background-color: #fff;
		margin: 14rpx 0;
		padding: 30rpx 20rpx;

		.priceAndName {
			flex: 9;

			.price {
				font-size: 48rpx;
				color: red;
			}

			.name {
				font-weight: 700;
				margin-top: 14rpx;
			}
		}

		.follow {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	.distribution {
		display: flex;
		background-color: #fff;
		padding: 30rpx 16rpx;

		text {
			margin-right: 24rpx;
			color: #bbb;
		}

		.address {
			flex: 1;
			display: flex;
			justify-content: space-between;
		}
	}

	.footerBar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
