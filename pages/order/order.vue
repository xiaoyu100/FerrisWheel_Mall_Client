<template>
	<view>
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>

		<u-card :head-border-bottom="false">
			<view class="head" slot="head">
				<view class="storeName">
					<text class="iconfont icon-motianlun icon"></text>
					摩天轮商城自营店
				</view>
				<view class="orderState">待发货</view>
			</view>
			<view class="body" slot="body" @click="goOrderDetail">
				<view class="u-body-item u-flex u-row-between u-p-b-0">
					<image src="https://www.hjiu.cn/images/202008/goods_img/1959_P_1596413228261.jpg" mode="widthFix">
					</image>
					<view class="u-body-item-title u-line-3">
						德龙（Delonghi）咖啡机 探索者 全自动咖啡机 家用 原装进口 智能互联 触控操作 ECAM450.76.T
					</view>
				</view>
				<view class="foot" slot="foot">
					<view class="price">合计：<text>999.99</text> </view>
				</view>
			</view>
		</u-card>
		<u-card :head-border-bottom="false">
			<view class="head" slot="head">
				<view class="storeName">
					<text class="iconfont icon-motianlun icon"></text>
					摩天轮商城自营店
				</view>
				<view class="orderState">待发货</view>
			</view>
			<view class="body" slot="body" @click="goOrderDetail">
				<view class="u-body-item u-flex u-row-between u-p-b-0">
					<image src="https://www.hjiu.cn/images/202008/goods_img/1959_P_1596413228261.jpg" mode="widthFix">
					</image>
					<view class="u-body-item-title u-line-3">
						德龙（Delonghi）咖啡机 探索者 全自动咖啡机 家用 原装进口 智能互联 触控操作 ECAM450.76.T
					</view>
				</view>
				<view class="foot" slot="foot">
					<view class="price">合计：<text>999.99</text> </view>
				</view>
			</view>
		</u-card>


		<!-- <u-empty text="暂无订单" mode="list"></u-empty> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '全部'
					}, {
						name: '待支付'
					}, {
						name: '待发货'
					}, {
						name: '待收货'
					},
					{
						name: '待评价'
					}, {
						name: '售后'
					}
				],
				current: 0,
			};
		},
		methods: {
			change(index) {
				this.current = index;
			},
			goOrderDetail(){
				uni.navigateTo({
					url:"/pages/orderDetail/orderDetail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
	}

	.u-body-item image {
		// width: 200px;
		flex: 0 0 180rpx;
		// height: 200rpx;
		border-radius: 8rpx;
		margin-right: 18rpx;
	}

	.head {
		display: flex;
		justify-content: space-between;
		.icon {
			font-size: 36rpx;
			color: orange;
			margin-right: 10rpx;
		}
	}

	.foot {
		display: flex;
		justify-content: flex-end;
		color: red;
		margin: 16rpx 30rpx 0;

		.price {
			text {
				font-size: 36rpx;
				font-weight: 700;
			}
		}
	}
</style>
