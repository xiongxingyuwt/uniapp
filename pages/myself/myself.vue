<template>
	<view class="myselfcontent">
		<view class="topbg-box">
			<image class="banner" src="../../static/images/tx.png" mode="aspectFit"></image>
			<view class="photo-box">
				<image class="temphone" src="../../static/images/tx.png" mode="center"></image>
			</view>
			<view class="userinfo">
				<view class="uiusername fc3">莫妮卡盖勒</view>
				<view class="uitemphone frd">156****9616</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {uniList,uniListItem},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.topbg-box{
	position: relative;
	border: 1px solid red;
}
.banner{
	width: 100%;
	top: -40px;
}
.photo-box{
	position: absolute;
	bottom: 87px;
	left: 150px;
	width: 122rpx;
	height: 122rpx;
	overflow: hidden;
	border-radius: 50%;
	.temphone{
		width: 100%;
		height: 100%;
	}
}
.userinfo{
	position: absolute;
	bottom: 60rpx;
	left: 0;
	width: 100%;
	text-align: center;
	border: 1px solid red;
}

</style>
