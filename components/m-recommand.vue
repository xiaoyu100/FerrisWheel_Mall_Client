<template>
	<view class="bg-recommand">
		<u-card :show-head="false" padding="0" :foot-border-top="false">
			<view class="banner" slot="body">
				<image
					src="https://img.zcool.cn/community/0199b35785d16e0000018c1b27c982.jpg@1280w_1l_2o_100sh.jpg"
					mode="widthFix" style="width:100%"></image>
			</view>
			<view class="item" slot="foot">
				<image
					src="https://ts1.cn.mm.bing.net/th/id/R-C.2d655b70b546a16b6203802e00107125?rik=MVLIUE6wQ9gxHw&riu=http%3a%2f%2fimg09.jiuxian.com%2f2020%2f0403%2f249aac2e47734c81b3db40b16fe47a965.jpg&ehk=4p0dcFhkmh%2fHEDwtz%2buqLN9oZJD3OrF5Mby7Z%2fryZ2E%3d&risl=&pid=ImgRaw&r=0"
					mode="widthFix"></image>
				<image
					src="https://pic.ulecdn.com/pic/user_800110136/product/prd20190529/2574f9aad032d81f_p800x800_xl.jpg"
					mode="widthFix"></image>
				<image
					src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/130097/18/12499/218338/5f892a3bE71456b3b/f6f2336dc473cd55.jpg"
					mode="widthFix"></image>
			</view>
		</u-card>
		
		<u-card :show-head="false" padding="0" :foot-border-top="false">
			<view class="banner" slot="body">
				<image
					src="https://img.zcool.cn/community/0199b35785d16e0000018c1b27c982.jpg@1280w_1l_2o_100sh.jpg"
					mode="widthFix" style="width:100%"></image>
			</view>
			<view class="item" slot="foot">
				<image
					src="https://ts1.cn.mm.bing.net/th/id/R-C.2d655b70b546a16b6203802e00107125?rik=MVLIUE6wQ9gxHw&riu=http%3a%2f%2fimg09.jiuxian.com%2f2020%2f0403%2f249aac2e47734c81b3db40b16fe47a965.jpg&ehk=4p0dcFhkmh%2fHEDwtz%2buqLN9oZJD3OrF5Mby7Z%2fryZ2E%3d&risl=&pid=ImgRaw&r=0"
					mode="widthFix"></image>
				<image
					src="https://pic.ulecdn.com/pic/user_800110136/product/prd20190529/2574f9aad032d81f_p800x800_xl.jpg"
					mode="widthFix"></image>
				<image
					src="https://img12.360buyimg.com/n1/s450x450_jfs/t1/130097/18/12499/218338/5f892a3bE71456b3b/f6f2336dc473cd55.jpg"
					mode="widthFix"></image>
			</view>
		</u-card>
	</view>
</template>

<script>
	export default {
		name: "m-recommand",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.bg-recommand {
		padding: 18rpx 0;
		background-color: $bc-color;
		.banner {
			height: 300rpx;
		}
		.item {
			display: flex;
			height: 250rpx;
			padding-top: 10rpx;
		}
	}
</style>
