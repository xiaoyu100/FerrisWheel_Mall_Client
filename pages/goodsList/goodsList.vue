<template>
	<view>
		<view class="searchWrap">
			<view class="cu-bar search">
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input disabled type="text" placeholder="点击搜索商品" @click="goSearch"></input>
				</view>
			</view>
		</view>

		<u-tabs :list="list" :is-scroll="false" :current="current" :show-bar="false" @change="change"></u-tabs>

		<scroll-view scroll-y="true" class="scroll_area">
			<view class="goodsList">
				<view class="cu-card article no-card">
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-item shadow goodsItem" @click="goDetail">
						<view class="content">
							<image
								src="https://ts1.cn.mm.bing.net/th/id/R-C.fa83e9360de6e5ba63a4f35ad17fcc62?rik=ZVcjBQ%2fYoIK74Q&riu=http%3a%2f%2fpic11.secooimg.com%2fproduct%2f500%2f500%2f2020%2f0302%2f36b251c6029b48bebc2493d46b5e3af8.png&ehk=drvC0vgJeUsNjVvKUo0qLhvQytQOJUlmIbs6qOA9mvc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
								mode="widthFix">
							</image>
							<view class="desc">
								<view class="text-content goodsName">
									【中秋送礼 华致老酒行】贵州茅台 茅台小酒 酱香型白酒 惠群贵礼礼盒 53度 茅台小白条2020年50ml*5
								</view>
								<view class="goodsPrice">
									<text class="unit">￥</text>
									<text class="price">499.00</text>
								</view>
								<view class="goodsTag">
									<view class="cu-tag bg-red light sm round">摩天轮商城自营</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<u-loadmore status="loadmore" margin-top="20" />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.word = option.word;
		},
		data() {
			return {
				word: "",
				list: [{
					name: '默认'
				}, {
					name: '价格'
				}],
				current: 0,
			};
		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search',
					animationType: "fade-in",
					animationDuration: 100
				})
			},
			goDetail() {
				uni.navigateTo({
					url: '/pages/detail/detail'
				})
			},
			change(index) {
				this.current = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.searchWrap {
		background-color: #fff;

		.radius {
			border-radius: 44rpx;
		}
	}

	.scroll_area {
		height: calc(100vh - 180rpx);
	}

	.goodsList {
		background-color: #fff;
		padding-bottom: 20rpx;

		.goodsItem {
			.content {
				.desc {
					padding: 24rpx 0;

					.goodsName {
						height: 84rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						color: #111;
					}

					.goodsPrice {
						font-weight: 700;
						color: red;
						margin-top: 28rpx;

						.unit {}

						.price {
							font-size: 36rpx;
						}
					}
				}
			}
		}
	}
</style>
