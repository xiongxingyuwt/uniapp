<template>
	<view class="w702rpx bgx">
		<view class="z-goods-info">
			<uni-list>
			    <view class="margin-bt-20 everygoodsinfo clearfix" v-for="(item,index) in goodsinfo" :key="index">
			    	<view class="imgbox fl">
			    		<image :src="item.goodsimg"></image>
			    	</view>
			    	<view class="decortions">
			    		<view class="continer">汉服精选{{goodsinfo.length}}样商品</view>
			    		<uni-list>
			    		    <uni-list-item :title="'店铺地址: ' + item.adrr" :show-arrow="true"></uni-list-item>
			    		</uni-list>
			    	</view>
			    </view>
			</uni-list>
		</view>
		<view class="big-imgbox">
			<image src="../../static/images/erwm.png" mode="aspectFill"></image>
			<view title>取货码:{{quhma}}</view>
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
				quhma: 'W125 3546 666',
				goodsinfo:[
					{
						goodsimg: '../../static/images/hft.png',
						adrr: '重庆市江北区观音桥新一街五栋'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("../../static/css/common.css");
	.w702rpx .uni-list-item.data-v-1093b690{
		padding-left: 0;
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
	.decortions{
		width: 100%;
		padding-left: 180rpx;
	}
	.decortions .uni-list-item__content-title.data-v-1093b690{
		font-size: 24rpx;
	}
	.continer{
		height: 30px;
		width: 200px;
		overflow: hidden;
		font-size: 38rpx;
		line-height: 30px;
	}
	
	.big-imgbox{
		margin-top: 200rpx;
		width: 100%;
		height: 300px;
		text-align: center;
	}
	.big-imgbox image{
		width: 200px;
		height: 200px;
	}
</style>
