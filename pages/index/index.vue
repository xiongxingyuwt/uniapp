<template>
	<view class="container">
		<movable-area 
			class="movable-area-box"
		>
			<movable-view 
				class="move-view-box"
				direction="horizontal"
				:inertia="true"
			>
				<text class="movitem" :key="index" v-for="(item,index) in navlist">{{item}}</text>
			</movable-view>
		</movable-area>
		<view class="">
			<image src="../../static/images/bqk.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
	.movable-area-box{
		width: 100%;
		height: 40px;
	}
	.move-view-box{
		white-space: nowrap;
	}
	.movitem{margin: 0 30px;}
	.movitem:hover{color:#FF0000}
	.container{}
</style>
