<template>
	<view>
		商品列表页
		{{word}}
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.word = option.word;
		},
		data() {
			return {
				word:""
			};
		}
	}
</script>

<style lang="scss">

</style>
