<template>
	<view class="cardContainer">
		
		<m-card-title :title="title"></m-card-title>

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
	import mCardTitle from '@/components/m-card-title.vue';

	export default {
		name: "m-card",
		components: {
			mGoodsItem,
			mCardTitle
		},
		props: {
			title: {
				default: "主标题",
				type: String
			},
			gutter: {
				default: "16",
				type: String
			},
			// oneCol为单列模式,twoCol为双列，threeCol为三列
			colTyle: {
				default: "twoCol",
				type: String
			}
		},
		data() {
			return {

			};
		},
		methods: {

		},
		computed: {
			spanComp() {
				switch (this.colTyle) {
					case "oneCol":
						return "12";
						break;
					case "twoCol":
						return "6";
						break;
					case "threeCol":
						return "4";
						break;
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
