<template>
	<div>
		
	</div>
</template>

<script>
	// import vv from '../../vue.config.js'
	
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handle:function(){
				this.axios.get('http://118.24.215.80/webserver/mapi/api.php/viewMoldOnes').then(function(res){
					console.log(res);
				})
			}
		},
		mounted() {
			this.handle();
		}
	}
</script>

<style>
</style>
