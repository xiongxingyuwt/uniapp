<template>
	<view class="w702rpx bgx">
		<view class="olderinfo">
			<uni-list>
			    <uni-list-item title="订单信息" :show-arrow="false" rightText="退款中"></uni-list-item>
			    <uni-list-item :title="'订单编号:  '+ olderinfo.number" :show-arrow="false"></uni-list-item>
			    <uni-list-item :title="'订单时间:  '+ olderinfo.getoldertime" :show-arrow="false"></uni-list-item>
				<uni-list-item title="自动取货" :note="'店铺地址：'+ olderinfo.addr"></uni-list-item>
			</uni-list>
		</view>
		<view class="goodsinfo-box margin-tp-20">
			<uni-list>
			    <uni-list-item title="商品信息" :show-arrow="false" :rightText="'共 '+getinfo.num+' 件'"></uni-list-item>
			</uni-list>
			<view class="goodsinfo">
				<view class="margin-bt-20 everygoodsinfo clearfix" v-for="(item,index) in goodsinfo" :key="index">
					<view class="imgbox fl">
						<image :src="item.goodsimg"></image>
					</view>
					<view class="decortions">
						<view class="continer">{{item.goodscontainer}}</view>
						<uni-list>
						    <uni-list-item :title="'￥'+ item.evgoodsprice" :show-arrow="false" :rightText="'x'+ item.count"></uni-list-item>
						</uni-list>
					</view>
				</view>
			</view>
			<view class="allprice-box olderinfo margin-tp-35">
				<uni-list>
				    <uni-list-item title="订单价格" :show-arrow="false"></uni-list-item>
				    <uni-list-item title="商品金额" :show-arrow="false" :rightText="'￥'+ getinfo.allprice"></uni-list-item>
				    <uni-list-item title="积分抵扣" :show-arrow="false" :rightText="'-￥'+ jfeng "></uni-list-item>
				</uni-list>
				<view class="alpr margin-bt-20 padding-rg-20">总价: 
				<text class="price">￥{{parseFloat(getinfo.allprice) - parseFloat(jfeng)}}</text></view>
			</view>
			<button class="margin-tp-20" type="warn" @click="zifu()">支付订单</button>
			<button type="default" class="margin-tp-20" @click="qx()">取消订单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jfeng: 20.45,
				olderinfo: {
					number:'DD1552255663',
					getoldertime: '2019.01.02  10:33:30',
					addr: '重庆市江北区观音桥新一街五栋'
				},
				goodsinfo:[
					{
						goodsimg: '../../static/images/hft.png',
						goodscontainer: 'GuyLian吉利莲海马精选松露拿铁分享装 比利时进口生日礼物 情人节礼物 148g',
						evgoodsprice: 468.90,
						count: 1
					},
					{
						goodsimg: '../../static/images/mzhf.png',
						goodscontainer: 'GuyLian吉利莲海马精选松露拿铁分享装 比利时进口生日礼物 情人节礼物 148g',
						evgoodsprice: 46,
						count: 1
					},
					{
						goodsimg: '../../static/images/yzsn.png',
						goodscontainer: 'GuyLian吉利莲海马精选松露拿铁分享装 比利时进口生日礼物 情人节礼物 148g',
						evgoodsprice: 39,
						count: 1
					},
					{
						goodsimg: '../../static/images/hzz.png',
						goodscontainer: 'GuyLian吉利莲海马精选松露拿铁分享装 比利时进口生日礼物 情人节礼物 148g',
						evgoodsprice: 299.89,
						count: 1
					},
					{
						goodsimg: '../../static/images/hf2.png',
						goodscontainer: 'GuyLian吉利莲海马精选松露拿铁分享装 比利时进口生日礼物 情人节礼物 148g',
						evgoodsprice: 299,
						count: 1
					}
				]
			}
		},
		computed:{
			getinfo(){
				var num = 0;
				var allprice = 0;
				this.goodsinfo.forEach((item)=>{
					num += parseInt(item.count)
					allprice += parseFloat(item.evgoodsprice)
				})
				return {
					num,
					allprice
				}
			}
		},
		methods: {
			zifu(){
				console.log('支付订单')
			},
			qx(){
				console.log('取消订单')
			}
		}
	}
</script>

<style>
	@import url("../../static/css/common.css");
	.alpr{
		width: 100%;
		text-align: right;
		font-size: 32rpx;
		font-weight: bold;
	}
	.alpr .price{
		color: #FF2D52;
		font-weight: normal;
	}
	.w702rpx .uni-list-item.data-v-1093b690{
		padding-left: 0;
	}
	.olderinfo .uni-list-item__extra-text.data-v-1093b690{
		color: #FF2D52;
		font-size: 30rpx;
	}
	.olderinfo .uni-list-item__content-title.data-v-1093b690{
		font-size: 30rpx;
		color: #333;
		font-weight: bold;
	}
	.imgbox{
		width: 148rpx;
		height: 145rpx;
		border: 1px solid #EEEEEE;
	}
	.imgbox image{
		max-width: 100%;
		max-height: 100%;
	}
	.decortions{
		width: 100%;
		padding-left: 200rpx;
	}
	.decortions .uni-list-item__content-title.data-v-1093b690{
		font-size: 24rpx;
	}
	.continer{
		height: 66%;
		overflow: hidden;
		font-size: 28rpx;
	}
</style>