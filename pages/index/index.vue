<template>
	<view class="indexContent">
		<view class="searchAndMessage">
			<view class="cu-bar search">
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input disabled type="text" placeholder="点击搜索123" @click="goSearch"></input>
				</view>
				<view class="action">
					<u-badge bgColor="#B22222" count="999" :offset="[13,25]"></u-badge>
					<text class="cuIcon-message message" @click="goMessage"></text>
				</view>
			</view>
		</view>

		<u-tabs-swiper ref="uTabs" :bold="false" :list="tabList" :is-scroll="false" @change="tabsChange"
			:current="tabCurrent">
		</u-tabs-swiper>

		<swiper class="swiper_container" :current="swiperCurrent" @transition="transition"
			@animationfinish="animationfinish">
			<swiper-item>
				<scroll-view scroll-y style="height: 100%;width: 100%;">

					<m-swiper></m-swiper>

					<m-recommand></m-recommand>

					<m-card title="猜你喜欢"></m-card>

				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y style="height: 100%;width: 100%;">
					<m-nav></m-nav>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import mSwiper from '@/components/m-swiper.vue';
	import mRecommand from '@/components/m-recommand.vue';
	import mCard from '@/components/m-card.vue';
	import mGoodsItem from '@/components/m-goods-item.vue';
	import mNav from '@/components/m-nav.vue';
	import mScrollX from '@/components/m-scrollX.vue';

	export default {
		components: {
			mSwiper,
			mRecommand,
			mCard,
			mGoodsItem,
			mNav,
			mScrollX
		},
		data() {
			return {
				tabList: [{
					name: '推荐'
				}, {
					name: '运动户外'
				}, {
					name: '大家电'
				}, {
					name: '手机'
				}, {
					name: '电脑'
				}, {
					name: '休闲零食'
				}, {
					name: '当季爆品'
				}, {
					name: '地方特色'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				tabCurrent: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
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
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.tabCurrent = current;
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

	.swiper_container {
		height: calc(100vh - 180rpx);
	}
</style>
