<template>
	<div>
		<show-news v-for="item in items" :key="item._id" :newsImg="item.newsImg"></show-news>
	</div>
</template>

<script>
	import showNews from '@/components/showNews'
	export default{
		data(){
			return{
				items:[]
			}
		},
		created(){
			this.axios.get('/api/showNews').then((data)=>{
				this.items=data.data.data;
				console.log(data.data.data);
			})
		},
		components:{
			showNews
		}
	}
</script>

<style>
</style>