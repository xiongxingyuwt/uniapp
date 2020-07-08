<template>
	<view class="bgx">
		<view class="navlist">
			<text class="movitem" :key="index" v-for="(item,index) in navlist">{{item}}</text>
		</view>
		<view class="uni-padding-wrap">
		    <view class="page-section swiper">
		        <view class="page-section-spacing">
		            <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="200" :circular="true">
		                <swiper-item v-for="(item,index) in swipers" :key='index'>
		                    <view class="swiper-item uni-bg-red">
								<image :src="item" mode=""></image>
							</view>
		                </swiper-item>
		            </swiper>
		        </view>
		    </view>
		</view>
		<view class="w702rpx">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: ['../../static/images/byrl.png','../../static/images/bfs.png','../../static/images/hft.png','../../static/images/hzz.png','../../static/images/byrl.png'],
				actstyle: 'rfs-80',
				navlist:['热销','现货','酒饮','美护','餐厨','出行']
			}
		},
		methods: {
			clckactstyle(index){
			}
		}
	}
</script>

<style>
	@import url("../../static/css/common.css");
</style>
