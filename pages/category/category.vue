<template>
	<view class="categoryPage">
		<view class="pLeft">
			<scroll-view scroll-y="true" style="height:100%">
				<view v-for="(item,index) in classifyList" :key="item.id" class="item"
					:class="{'active_item':index===activeIndex}" @click="handleClick(index)">
					<view class="sign"></view>
					<view class="itemName">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>

		<view class="pRight">
			<scroll-view scroll-y="true" style="height: 100%;">
				<!-- 二级分类遍历 -->
				<view v-for="item2 in childClassification" :key="item2.id">
					<view class="title">{{item2.name}}</view>
				
					<view class="childItemWrap">
						<view class="childItem" v-for="item3 in item2.children" :key="item3.id" @click="goGoodsList">
							<image class="itemIcon" :src="item3.iconPath" mode="widthFix"></image>
							<view class="itemName">{{item3.name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classifyList: [{
						id: "001",
						name: "热门推荐",
					},
					{
						id: "002",
						name: "食品酒水"
					},
					{
						id: "003",
						name: "居家生活"
					},
					{
						id: "004",
						name: "苏宁生鲜"
					},
					{
						id: "005",
						name: "手机数码"
					},
					{
						id: "006",
						name: "生活家电"
					},
					{
						id: "007",
						name: "电脑办公"
					},
					{
						id: "008",
						name: "珠宝首饰"
					},
					{
						id: "009",
						name: "运动户外"
					},
					{
						id: "010",
						name: "男装男鞋"
					},
					{
						id: "011",
						name: "苏宁生鲜"
					},
					{
						id: "012",
						name: "智能设备"
					},
					{
						id: "013",
						name: "玩具"
					},
					{
						id: "014",
						name: "图书"
					},
					{
						id: "015",
						name: "钟表眼睛"
					},
					{
						id: "016",
						name: "内衣配饰"
					}
				],
				activeIndex: 0,
				//二级及三级分类列表
				childClassification: [{
						id: "0001",
						name: "热门推荐",
						//三级分类
						children: [{
								id: "00001",
								name: "新品首发",
								iconPath: "https://www.wanwupai.com/upload/product/20190716-1/7228ca1a94d0c9189ecfa2880f30bda1.jpg"
							},
							{
								id: "00002",
								name: "休闲零食",
								iconPath: "https://img.alicdn.com/bao/uploaded/TB1QzQld5pE_u4jSZKbXXbCUVXa.png"
							},
							{
								id: "00003",
								name: "微波炉",
								iconPath: "https://tse3-mm.cn.bing.net/th/id/OIP-C.qwKDY9-JQVVqtSMzPgFoIwHaHa?pid=ImgDet&rs=1"
							},
							{
								id: "00004",
								name: "电视",
								iconPath: "https://ts1.cn.mm.bing.net/th/id/R-C.abc3449e0bebfb5db2576a3f10e906a7?rik=QIavpR1V3aGMWQ&riu=http%3a%2f%2ffile.c.haier.net%2fimages%2f2020%2f01%2f11%2fabc3449e0bebfb5db2576a3f10e906a7.png&ehk=PwpgW11I8D0JkAPdpslKkV%2brUpQvcszqDEV2fA7ffM8%3d&risl=&pid=ImgRaw&r=0"
							},
							{
								id: "00005",
								name: "洗衣机",
								iconPath: "https://ts1.cn.mm.bing.net/th/id/R-C.295bf942f935bf27c80bacc50b106123?rik=jUsunjGhMJ5Xrw&riu=http%3a%2f%2ffile.c.haier.net%2fimages%2f2018%2f12%2f03%2f295bf942f935bf27c80bacc50b106123.png&ehk=2EX7xO%2br9Fiuyk%2fJxyxzercVEqxHHKZERUEdAdjtbGI%3d&risl=&pid=ImgRaw&r=0"
							},
							{
								id: "00006",
								name: "笔记本",
								iconPath: "https://www.wanwupai.com/upload/jdimgs/20210725/975cee2676d511fd777ce0ace96c07a9.png"
							}
						]
					},
					{
						id: "0002",
						name: "中外酒水",
						//三级分类
						children: [{
								id: "00007",
								name: "白酒",
								iconPath: "https://img.alicdn.com/bao/uploaded/i2/O1CN01AwRxry1uJpjJnLRf3_!!2-paimai.png"
							},
							{
								id: "00008",
								name: "葡萄酒",
								iconPath: "https://www.winex-hk.com/upload/20200617/20200617171440_4049.png"
							},
							{
								id: "00009",
								name: "啤酒",
								iconPath: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152102/23/749/537059/5f6c7294E2dc43509/a3ba0801d2101c38.png!q80.dpg"
							},
							{
								id: "00010",
								name: "鸡尾酒",
								iconPath: "https://www.wanwupai.com/upload/jdimgs/20210728/272f205f93f1ac3e36c0acd16e85ea90.png"
							},
						]
					},
					{
						id: "0003",
						name: "饮料饮品",
						//三级分类
						children: [
							{
							id: "00011",
							name: "纯牛奶",
							iconPath: "https://www.wanwupai.com/upload/product/20190921-1/0bee8f8110ec05c88ec088c67de8c9b2.png"
						},
						{
							id: "00012",
							name: "酸奶",
							iconPath: "https://img.alicdn.com/i1/1954271860/O1CN012A3V5Z1PbvFco29zx_!!1954271860.png"
						},
						{
							id: "00013",
							name: "茶",
							iconPath: "https://img.nichaw.cn/photo/201908/20190815_0793C670D51AB85824671EF46AE6269E.png?x-bce-process=style/i360"
						},
						{
							id: "00014",
							name: "功能饮料",
							iconPath: "https://ts1.cn.mm.bing.net/th/id/R-C.fb5a2770ccdb4e2e9692cf68554a414f?rik=az5HSJ1IXPRgJg&riu=http%3a%2f%2fimgs.xrrjdyf.com%2fuploads%2f2017%2f10%2f11%2f10%2f59dd809ec0447.png&ehk=2Ryf83mM1r%2fSCqmEWM2jt1Ah87n0d57h68jLh7UAJ8o%3d&risl=&pid=ImgRaw&r=0"
						},
						{
							id: "00015",
							name: "苏打水",
							iconPath: "https://img.alicdn.com/bao/uploaded/O1CN01U2EVA41HdjvHJ0bb7_!!2-item_pic.png"
						},
						{
							id: "00016",
							name: "矿泉水",
							iconPath: "https://gouwu.pai-hang-bang.cn/img.php?img=http:%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2FTB1NDSXd4D1gK0jSZFsXXbldVXa.png"
						},
						{
							id: "00017",
							name: "碳酸饮料",
							iconPath: "https://tse2-mm.cn.bing.net/th/id/OIP-C.ku8manrYxadVopzFTkS-jwHaHa?pid=ImgDet&rs=1"
						}]
					},
					{
						id: "0004",
						name: "生鲜蔬果",
						//三级分类
						children: [{
							id: "00018",
							name: "鲜肉",
							iconPath: "https://img.599ku.com/element_min_new_pic/75/49/13/8/33261eb83075a18bd1bb7c9d42c9ef00.png"
						},
						{
							id: "00019",
							name: "水果",
							iconPath: "https://www.ourqm.com/upload/2019/03/17/20190317202342948.png"
						},{
							id: "00020",
							name: "海鲜水产",
							iconPath: "https://img14.360buyimg.com/pop/jfs/t1/55457/9/12093/707780/5d901cd0E7880c164/45d1520e8411d77c.png"
						},
						{
							id: "00021",
							name: "时蔬",
							iconPath: "https://ts1.cn.mm.bing.net/th/id/R-C.2a7206cb6c1176282174efdd78735f20?rik=LKeuGH55BR84Mg&riu=http%3a%2f%2fnbqiwen.com%2fupload%2f2020060311430724.png&ehk=14KDmKsaxBCDmVHMH5mOwTERkmfi23NLN%2bQmiEpXu9g%3d&risl=&pid=ImgRaw&r=0"
						}]
					}
				]
			}
		},
		methods: {
			handleClick(index) {
				this.activeIndex = index;
				//获取该一级分类下的二级和三级分类
			},
			goGoodsList(){
				uni.navigateTo({
					url:"/pages/goodsList/goodsList"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.categoryPage {
		display: flex;
		height: 100vh;

		.pLeft {
			flex: 2;

			.item {
				display: flex;
				align-items: center;
				height: 100rpx;
				padding: 0 16rpx;

				.sign {
					flex: 1;
					height: 20%;
					background-color: transparent;
					border-radius: 10rpx;
				}

				.itemName {
					flex: 15;
					text-align: center;
					font-size: 32rpx;
				}
			}

			.active_item {
				font-weight: 700;
				background-color: #fff;

				.sign {
					background-color: $bc-color;
				}
			}
		}

		.pRight {
			flex: 5;
			background-color: #fff;
			padding: 0 20rpx;
			.title {
				font-weight: 700;
				padding: 20rpx 0;
				margin-left: 20rpx;
			}
			.childItemWrap {
				display: flex;
				flex-wrap: wrap;
				.childItem{
					width: 33.33%;
					display: flex;
					flex-direction: column;
					align-items: center;
					.itemIcon {
						width:100%;
					}
					.itemName {
						margin: 16rpx 0;
					}
				}
				
			}
		}
	}
</style>
