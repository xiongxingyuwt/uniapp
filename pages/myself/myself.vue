<template>
	<view class="myselfcontent fc3">
		<view class="topbg-box">
			<image class="banner" src="../../static/images/tx.png" mode="aspectFit"></image>
			<view class="photo-box">
				<navigator url="../sonpage/userinfo" open-type="navigate">
					<image class="temphone" src="../../static/images/tx.png" mode="center"></image>
				</navigator>
			</view>
			<view class="userinfo">
				<view class="uiusername fc3">莫妮卡盖勒</view>
				<view class="uitemphone frd fc9">156****9616</view>
			</view>
		</view>
		<view class="tongji w702rpx">
			<view class="ji fl">
				<view class="number fc3">0</view>
				<view class="text fc9">积分余额</view>
			</view>
			<text class="xc fc9">|</text>
			<view class="goods fr">
				<view class="number fc3">0</view>
				<view class="text fc9">收藏商品</view>
			</view>
		</view>
		<view class="mydingdan w702rpx margin-tp-35 padding-all clearfix">
			<view class="dingdan-header">
				<view class="dd-title fc3 fl">我的订单</view>
				<navigator url=""><view class="dd-gdu fr fc9">全部订单>></view></navigator>
			</view>
			<view class="mdd-allinfo">
				<navigator open-type="navigate" :key="index" :url="item.navgateurl" class="mdd-item" v-for="(item,index) in mddlist" >
					<image class="img-mdd" :src="item.iconpath" mode=""></image>
					<view class="textdect">{{item.ntitle}}</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {uniList,uniListItem},
		data(){
			return {
				mddlist: [
					{
						ntitle:'待付款',
						iconpath:'../../static/images/safe.png',
						navgateurl:'../sonpage/dfk'
					},
					{
						ntitle:'待取货',
						iconpath:'../../static/images/getmoney.png',
						navgateurl:'../sonpage/dqh'
					},
					{
						ntitle:'已完成',
						iconpath:'../../static/images/success.png',
						navgateurl:'../sonpage/wcd'
					},
					{
						ntitle:'已退款',
						iconpath:'../../static/images/tuikuai.png',
						navgateurl:'../sonpage/tkd'
					}
				],
				itemlists: [
					{
						ntitle:'个人中心',
						iconpath:'../../static/images/pressonal.png',
						navgateurl:''
					},
					{
						ntitle:'',
						iconpath:'',
						navgateurl:''
					}
				]
			}
		}
	}
</script>


<style>
@import url("../../static/css/common.css");
/*  1px = 2.18rpx */
.img-mdd{
	height: 25px;
	width: 25px;
}
.mdd-allinfo{
	width: 100%;
}
.mdd-item{
	margin-top: 40px;
	width: 25%;
	text-align: center;
	display: inline-block;
}
.dingdan-header{
	height: 40px;
}
.tongji{
	padding: 21rpx 80rpx;
}
.xc{
	display: inline-block;
	margin: 40rpx 20px;
}
.ji,.goods{
	width: 220rpx;
	height: 110rpx;
	text-align: center;
}
.topbg-box{
	position: relative;
}
.banner{
	width: 100%;
	top: -40px;
}
/* #ifdef */
/* #endif */
.photo-box{
	position: absolute; 
	bottom: 125rpx;
	left: 315rpx;
	width: 124rpx;
	height: 124rpx;
	overflow: hidden;
	border-radius: 50%;
}
.userinfo{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	text-align: center;
}

</style>
