<template>
	<view>
		<scroll-view class="scroll_content" :scroll-x="true">
			<!-- <m-goods-item v-for="(item,index) in list" :key="item.id"></m-goods-item> -->
			<m-goods-item class="scroll_item"></m-goods-item>
			<m-goods-item class="scroll_item"></m-goods-item>
			<m-goods-item class="scroll_item"></m-goods-item>
			<m-goods-item class="scroll_item"></m-goods-item>
			<m-goods-item class="scroll_item"></m-goods-item>
			<m-goods-item class="scroll_item"></m-goods-item>
		</scroll-view>
	</view>
</template>

<script>
	import mGoodsItem from '@/components/m-goods-item.vue';

	export default {
		name: "m-scrollX",
		components: {
			mGoodsItem
		},
		props: {
			list: {
				default: [],
				type: Array
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.scroll_content {
		white-space: nowrap;
		.scroll_item {
			display: inline-block;
			width: 33.33%;
			margin: 0 10rpx;
		}
	}
</style>
