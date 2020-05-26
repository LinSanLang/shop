<template>
	<div class="cart">
		<van-nav-bar
		  title="购物车"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		<div class="Cont1" v-if="$store.getters.getGoodList.length">
			
			<div style="position: relative;">
				<div class="kuang" v-for="(item,index) in $store.getters.getGoodList">
					<div>
						<van-checkbox v-model="checkedAll">
						</van-checkbox>
					</div>
					<div>
						<van-card 
						  :price="item.price"
						  :title="item.name"
						  :thumb="item.img"
						> 
						
						<van-stepper class="Cont3" @change="change(index,item.num)" v-model="item.num" slot="bottom" />
						
						 <div style="position: relative;" slot="footer">
												  <van-icon class="Cont2" name="close" size="20" @click="remove(index)" />
						 </div>
						
						</van-card>
					</div>
				</div>
				
					
					  
			</div>	
			
			
			
			
			<div class="foot">
				<van-submit-bar
				  :price="priceALl"
				  button-text="提交订单"
				  @submit="onSubmit"
				>
				  <van-checkbox v-model="checkedAll">全选</van-checkbox>
				  <span slot="tip">
				    你的收货地址不支持同城送, <span>修改地址</span>
				  </span>
				</van-submit-bar>
			</div>
			
		</div>
		
		<div v-else>
			<div class="shopBg">
				<img src="img/shopCart.png" alt="">
				<van-button type="default" to="/">随便逛逛</van-button>
			</div>
			
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				checkedAll: true,
				sumAll:0,
				checked:true
			}
		},
		computed:{
			priceALl(){
				let temp=this.$store.getters.getGoodList
				let temp1=0
				// for(let i=0;i<temp.length;i++){
				// 	this.sumAll+=temp[i].num*temp[i].price*100
				// }
				// return this.sumAll
				if(this.checkedAll){
					temp.forEach(item=>{
						this.sumAll+=item.num*item.price*100
					})
					temp1=this.sumAll
					this.sumAll=0
					return temp1
				}
				else{
					return 0
				}
				
			}
		},
		methods:{
			onSubmit(){
				this.$toast('提交了订单');
			},
				change(index,num){
					console.log(num,index);
					this.$store.commit("changeGoodNUm",[index,num]);
					
				},
				onClickLeft() {
				  // this.$toast('返回');
							this.$router.go(-1);
							
				},
				onClickRight() {
				  // this.$toast('按钮');
							// this.$router.push("/search")
				},
				remove(index){
					this.$store.commit("remGood",index)
				}
		}
		

	}
</script>

<style scoped="scoped" lang="less">
	.kuang{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.cart{
		position: relative;
		width: 100%;
		.Cont1{
			position: relative;
			.van-card__title{
				text-align: left;
				width: 200px;
			}
			.van-card__price{
				position: absolute;
				color: #DB4453;
				font-weight: 600;
				left: 0;
				bottom: 5px;
			}
			.Cont2{
				position: absolute;
				bottom: 70px;
				right: -15px;
			}
			.Cont3{
				position: absolute;
				right: 0;
				bottom: 5px;
			}
		}
		.shopBg{
			width: 100%;
			height: 600px;
			background: rgb(245,245,245);
		}
	}
</style>
