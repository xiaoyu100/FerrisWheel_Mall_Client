<template>
	<view class="goodsItem" @click="goDetail">
		<image src="https://img.zcool.cn/community/00ec5d5abb196ea8012062e3c1a231.jpg@520w_390h_1c_1e_2o_100sh.jpg"
			mode="widthFix"></image>

		<view class="goodsInfo">
			<text class="goodsName">格力（GREE）新风空调 京东小家智能生态 1.5匹 云舒氧1级能效 壁挂式卧室挂机 </text>
			<view class="price">
				<text class="afterPrice">￥999</text>
				<text class="beforePrice">￥1999</text>
			</view>
			<view class="preferential">8.5折</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "m-goods-item",
		data() {
			return {

			};
		},
		methods:{
			goDetail(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goodsItem {
		text-align: center;
		.goodsInfo {
			padding: 10rpx 0 30rpx;
			.goodsName {
				font-size: 28rpx;
				
				// 溢出2行显示...
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.price {
				margin: 16rpx 0 10rpx;
				
				.afterPrice{
					font-size: 36rpx;
					font-weight: 700;
				}
				.beforePrice{
					color: #bbb;
					font-size: 28rpx;
					margin-left: 8rpx;
					text-decoration: line-through;
				}
			}
			.preferential {
				display: inline-block;
				font-size: 24rpx;
				color: red;
				padding: 6rpx;
				border: 1px solid red;
			}
		}
	}
</style>
