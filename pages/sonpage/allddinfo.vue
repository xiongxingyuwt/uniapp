<template>
	<view class="myselfcontent">
		<view class="navlist margin-bt-20">
			<navigator class="linkto" :url="item.navto" :class="{'active':index===0}" :key="index" v-for="(item,index) in alnavlist">
				<text>{{item.navtite}}</text>
			</navigator>
		</view>
		<view class="w702rpx fc3">
			<view class="big-box margin-tp-20" :key="index1" v-for="(item1,index1) in dixboxdata">
				<view class="dingdan-header clearfix">
					<view class="dd-title fc3 fl">订单号:{{item1.idnumber}}</view>
					<view class="dd-gdu fr fc9">{{item1.status}}</view>
				</view>
				<view class="imggroup-box margin-tp-26">
					<view class="imgbox" :key="iindex" v-for="iindex in 3">
						<image class='img' :src="item1.imglist[iindex]" mode=""></image>
					</view>
					<view class="imgbox" @click="getdate(item1.status)">
						<image class='img' src="../../static/images/genduo.png" mode=""></image>
					</view>
				</view>
				<view class="allpayinfo">
					<text>总共{{item1.imglist.length}}件商品    总计金额{{parseFloat(item1.erprice)*parseInt(item1.imglist.length)}}</text>
				</view>
				<view class="paybutton">
					<button type="default" v-if="item1.status === '待取货'" size="mini" @click="tuihu(item1.idnumber)">申请退款</button>
					<button type="default" v-if="item1.status === '待支付'" size="mini" @click="quxiao(item1.idnumber)">取消订单</button>
					<button type="warn" v-if="item1.status === '待取货'" size="mini" @click="quhu(item1.idnumber)">我要取货</button>
					<button type="warn" v-if="item1.status === '退款中'" size="mini" @click="liexi()">联系客服</button>
					<button type="default" v-if="item1.status === '待支付'" size="mini" @click="zifu(item1.idnumber)">支付订单</button>
					<button type="warn" v-if="item1.status === '待取货' || item1.status === '已完成'" size="mini" @click="zaici()">再次购买</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				dixboxdata: [
					{
						erprice: 22.5,
						idnumber: '5505165156',
						status: '待支付',
						imglist:['../../static/images/hf2.png','../../static/images/hft.png','../../static/images/mzhf.png','../../static/images/yzsn.png','../../static/images/hf2.png']
					},
					{
						erprice: 22.5,
						idnumber: '5505165156',
						status: '待取货',
						imglist:['../../static/images/hf2.png','../../static/images/hft.png','../../static/images/mzhf.png','../../static/images/yzsn.png','../../static/images/hf2.png']
					},
					{
						erprice: 22.5,
						idnumber: '5505165156',
						status: '已完成',
						imglist:['../../static/images/hf2.png','../../static/images/hft.png','../../static/images/mzhf.png','../../static/images/yzsn.png','../../static/images/hf2.png']
					},
					{
						erprice: 22.5,
						idnumber: '5505165156',
						status: '退款中',
						imglist:['../../static/images/hf2.png','../../static/images/hft.png','../../static/images/mzhf.png','../../static/images/yzsn.png','../../static/images/hf2.png']
					}
				],
				alnavlist: [
					{
						navtite: '全部',
						navto: '#'
					},
					{
						navtite: '待支付',
						navto: '../sonpage/dfk'
					},
					{
						navtite: '待取货',
						navto: '../sonpage/dqh'
					},
					{
						navtite: '已完成',
						navto: '../sonpage/wcd'
					},
					{
						navtite: '退款中',
						navto: '../sonpage/tkd'
					}
				]
			}
		},
		methods: {
			getdate(index){
				console.log(index)
			},
			tuihu(idnumber){
				console.log("退款")
			},
			quxiao(idnumber){
				console.log("取消订单")
			},
			quhu(idnumber){
				console.log("我要取货")
			},
			zifu(idnumber){
				console.log('支付订单')
			},
			liexi(){
				console.log('客服')
			},
			zaici(){
				console.log('再次购买')
			}
		}
	}
</script>

<style>
@import url("../../static/css/common.css");

.linkto{
	display: inline-block;
	width: 20%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
}
.dingdan-header{
	height: 40rpx;
}
.allpayinfo,.paybutton{
	width: 100%;
	height: 60px;
	line-height: 60px;
	text-align: right;
}
.paybutton button{
	font-size: 12px;
	margin-right: 5px;
}
.ztitle{
	display: inline-block;
	width: 100%;
	height: 100%;
	line-height: 73rpx;
}
.dd-gdu{
	color: #f0827c;
}
.big-box{
	padding:20px 0;
}
.myselfcontent{
	border-top: 1px solid #eeeeee;
}

.imgbox{
	border: 1px solid #EEEEEE;
	width: 20%;
	height: 146rpx;
	display: inline-block;
	margin-right:14px;
	font-size: 12px;
}
.img{
	max-width: 100%;
	max-height: 100%;
}
.active{
	color: #ff2d52;
}
</style>
