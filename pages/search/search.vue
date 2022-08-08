<template>
	<view class="searchPage">
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="请输入搜索关键字" confirm-type="search"
					v-model="keyword" @input="changeInput"></input>
			</view>
			<view class="action">
				<button class="cu-btn shadow-blur round searchBtn" @click="handleSearch">搜索</button>
			</view>
		</view>

		<view class="hotSearch">
			<view class="head">热门搜索</view>
			<view class="keywords">
				<u-tag class="hotword" v-for="item in tags" :key="item" :text="item" type="info" @click="handleClick(item)"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: "",
				tags: ["冰箱", "空调", "电风扇", "iPhone13 Pro Max", "微波炉", "手机", "电脑", "洗衣机", "华为P40"]
			}
		},
		methods: {
			changeInput() {
				console.log("自动检索提示功能");
			},
			handleSearch() {
				console.log(this.keyword);
				//展示对应商品列表
			},
			handleClick(keyword){
				console.log(keyword);
				uni.navigateTo({
					url:"/pages/goodsList/goodsList?word=" + keyword
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.searchPage {
		.searchBtn {
			background-color: $bc-color;
			color: $f-color;
		}

		.hotSearch {
			padding: 0 18rpx;

			.head {
				font-weight: 700;
				font-size: 28rpx;
				padding: 30rpx 0;
			}

			.keywords {
				.hotword {
					::v-deep .u-tag {
						margin: 10rpx !important;
						margin-left: 0 !important;
						color: $f-color !important;
					}
				}
			}
		}
	}
</style>
