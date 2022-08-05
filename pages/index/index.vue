<template>
	<view class="indexContent">
		<view class="searchAndMessage">
			<view class="cu-bar search">
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input disabled type="text" placeholder="点击搜索" @click="goSearch"></input>
				</view>
				<view class="action">
					<u-badge bgColor="#B22222" count="999" :offset="[13,25]"></u-badge>
					<text class="cuIcon-message message" @click="goMessage"></text>
				</view>
			</view>
		</view>

		<u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper>

		<m-swiper></m-swiper>

		<m-recommand></m-recommand>

		<m-card title="猜你喜欢"></m-card>
		
		<m-nav></m-nav>
	</view>
</template>

<script>
	import mSwiper from '@/components/m-swiper.vue';
	import mRecommand from '@/components/m-recommand.vue';
	import mCard from '@/components/m-card.vue';
	import mGoodsItem from '@/components/m-goods-item.vue';
	import mNav from '@/components/m-nav.vue';

	export default {
		components: {
			mSwiper,
			mRecommand,
			mCard,
			mGoodsItem,
			mNav
		},
		data() {
			return {
				list: [{
					name: '推荐'
				}, {
					name: '运动户外'
				}, {
					name: '待评价'
				}, {
					name: '待评价'
				}, {
					name: '待评价'
				}, {
					name: '待评价'
				}, {
					name: '待评价'
				}, {
					name: '待评价'
				}, {
					name: '待评价'
				}],
			}
		},
		onLoad() {

		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			goMessage() {
				uni.navigateTo({
					url: '/pages/message/message'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		background-color: $bc-color;
	}

	.message::before {
		font-size: 26px;
	}
</style>
