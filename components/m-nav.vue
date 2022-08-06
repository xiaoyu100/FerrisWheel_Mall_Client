<template>
	<view class="nav">
		<view class="item">
			<image class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
		<view class="item">
			<image class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
		<view class="item">
			<image class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
		<view class="item">
			<image class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
		<view class="item">
			<image class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
		<view class="item">
			<image class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
		<view class="item">
			<image  class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
		<view class="item">
			<image class="icon" src="https://bpic.588ku.com/element_origin_min_pic/19/06/25/bc370128f472a89eaafbdb54d87d49ed.jpg" mode="widthFix"></image>
			<text class="name">跑步鞋</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"m-nav",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.nav {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	padding: 20rpx 0;
	.item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.icon {
			width: 128rpx;
			height: 128rpx;
		}
		.name {
			margin: 20rpx 0;
		}
	}
}
</style>