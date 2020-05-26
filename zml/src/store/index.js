import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goodList:[]
  },
  getters:{
	getGoodList(state){
		return state.goodList
	}  
  },
  mutations: {
	  addGood(state,newGood){
		  let addCan=true;
		  let indexNew=-1;
		  state.goodList.forEach((item,index)=>{
			  if(item.id==newGood.id){
				  indexNew=index;
				  addCan=false;
			  }
		  })
		  if(addCan){
			  state.goodList.push(newGood)
		  }
		  else{
			  state.goodList[indexNew].num+=newGood.num
		  }
	  },
	  changeGoodNUm(state,indexAndNum){
		  state.goodList[indexAndNum[0]].num=indexAndNum[1]
	  },
	  remGood(state,index){
		  state.goodList.splice(index,1)
	  }
  },
  actions: {
  },
  modules: {
  }
})
