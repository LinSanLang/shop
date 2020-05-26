<template>
	<div class="page" v-if="pagedatas">
		<div class="section" v-for="(item,index) in pagedatas">
			<div class="gallery" v-if="item.view_type=='gallery'">
				<van-swipe :autoplay="3000" indicator-color="white">
				  <van-swipe-item v-for="(item1,index) in item.body.items">
					  <img :src="item1.img_url" alt="" :style="{width:item1.w/2+'px',height:item1.h/2+'px'}">
				  </van-swipe-item>
				</van-swipe>
			</div>
			
			<div class="cells_auto_fill" v-if="item.view_type=='cells_auto_fill'">
				<div :style="{width:item.body.w/2+'px',height:item.body.h/2+'px'}" style="position: relative;">
					<div v-for="(item1,index) in item.body.items" style="position: absolute; " :style="{left:item1.x/2+'px',width:item1.w/2+'px',height:item1.h/2+'px',top:item1.y/2+'px'}">
						<img :src="item1.img_url" alt="" style="width:100%">
					</div>
				</div>
			</div>
			
			<div class="divider_line" v-if="item.view_type=='divider_line'">
				<van-divider/>
			</div>
			
			<div class="list_two_type13" v-if="item.view_type=='list_two_type13'">
				<div class="item1" v-for="(item1,index) in item.body.items">
					<div>
						<img :src="item1.img_url" alt="">
						<div>
							<div style="white-space: nowrap;overflow: hidden; text-overflow: ellipsis;">
								{{item1.product_name}}
							</div>
							
							<div style="font-size: .22rem; margin-top: .06rem;line-height: .3rem;color: rgba(0,0,0,.54);">
								{{item1.product_brief}}
							</div>
						</div>
						<div>
							<div v-if="item1.product_price==item1.product_org_price">
								￥{{item1.product_org_price}}起
							</div>
							<div v-else>
								￥{{item1.product_price}}起
								<div style="text-decoration:line-through ">￥{{item1.product_org_price}}</div>
							</div>
						</div>
						<div class="but">立即购买</div>
					</div>
				</div>
			</div>
			
			<div class="list_action_title" v-if="item.view_type=='list_action_title'">
				<p>{{item.body.items[0].action_title}}</p>
			</div>
			
			<div class="list_one_type14" v-if="item.view_type=='list_two_type14'">
				<div class="item1" v-for="(item1,index) in item.body.items">
					<div>
						<img :src="item1.img_url" alt="">
					</div>
				</div>
			</div>
			
			
			
		</div>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pagedatas:null
			}
		},
		props:["item"],
		created() {
			this.$http({
				url:`http://biger.applinzi.com/page.php?page_id=${this.item.page_id}&page_type=${this.item.page_type}`,
				method:"get"
			}).then(res=>{
				console.log("success",res);
				this.pagedatas=res.data.data.data.sections
			})
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list_two_type13{
		display: flex;
		background-color: #FFFFFF;
		padding: 0 6px;
		.item1{
			margin-right: 6px;
		}
		
		img{
			width: 100%;
		}
		
		.but{
			width: 104px;height: 30px;
			background: rgb(234,98,91);
			color: #FFFFFF;
			line-height: 30px;
			text-align: center;
			margin: 0 auto;
		}
	}
	// .but{
	// 	width: 104px;height: 30px;
	// 	background: rgb(234,98,91);
	// 	color: #FFFFFF;
	// 	text-align: center;
	// }
</style>
