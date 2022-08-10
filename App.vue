<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* UI框架 */
	@import "static/styles/uni.css";
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "uview-ui/index.scss";
	@import "static/iconfont/iconfont.css";
	
	/* 全局样式 */
	@import "static/styles/global.css";
	/*每个页面公共css */
</style>
