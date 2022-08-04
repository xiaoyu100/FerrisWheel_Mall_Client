<template>
	<view class="indexContent">
		<div class="searchAndMessage">
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
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {

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
