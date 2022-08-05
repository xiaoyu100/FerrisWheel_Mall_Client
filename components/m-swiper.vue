<template>
	<view class="swiperContent">
		<swiper class="swiper" circular indicator-dots autoplay>
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "m-swiper",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
</style>
