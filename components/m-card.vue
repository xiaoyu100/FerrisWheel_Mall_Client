<template>
	<view class="cardContainer">
		<view class="card-header">
			<text class="h-left">―</text>
			<text class="card-title">{{title}}</text>
			<text class="h-right">―</text>
		</view>

		<view class="goodsList">
			<u-row :gutter="gutter">
				<u-col :span="spanComp">
					<m-goods-item></m-goods-item>
				</u-col>
				<u-col :span="spanComp">
					<m-goods-item></m-goods-item>
				</u-col>
				<u-col :span="spanComp">
					<m-goods-item></m-goods-item>
				</u-col>
				<u-col :span="spanComp">
					<m-goods-item></m-goods-item>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	import mGoodsItem from '@/components/m-goods-item.vue';
	
	export default {
		name: "m-card",
		components:{
			mGoodsItem
		},
		props: {
			title: {
				default: "默认标题",
				type: String
			},
			gutter:{
				default: "16",
				type: String
			},
			// single为单列模式,double为双列
			colTyle:{
				default: "double",
				type: String
			}
		},
		data() {
			return {

			};
		},
		methods:{
			
		},
		computed:{
			spanComp(){
				return this.colTyle === "single" ? "12" : "6";
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-header {
		padding: 20rpx 0;
		text-align: center;
		font-weight: 700;

		.card-title {
			margin: 0 15rpx;
			font-size: 32rpx;
		}
	}
</style>
