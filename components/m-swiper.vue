<template>
	<view class="swiperContent">
		<swiper class="swiper" circular indicator-dots autoplay>
			<swiper-item>
				<image src="https://www.ficgra.cn/design/wp-content/uploads/2019/03/fuzhuangbanner.png" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://img.zcool.cn/community/01018e5bb03efaa801213dea907342.jpg@1280w_1l_2o_100sh.jpg" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://img.zcool.cn/community/017d105ac6de7ba8012062e39683a8.jpg@1280w_1l_2o_100sh.jpg" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "m-swiper",
		props:{
			list:{
				default:[],
				type:Array
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
