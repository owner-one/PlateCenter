<template>
	<div class="main">
		<div class="title">Login</div>
		
		<form id="myform" action="" method="post">
			<input type="text" v-model="username" name="" class="username" placeholder="please write your username"/>
			<input type="password" v-model="password" name="" class="password" placeholder="please write your password"/>
			<div class="submit" v-on:click="login">
				Login
			</div>
			<div class="submit2" v-on:click="toRegister">
				toRegister
			</div>
		</form>
		
		<div class="link">
			Others login style
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			login:function(event){
				this.axios.post('/api/users/login',{username:this.username,password:this.password}
			).then((data)=>{
				if(data!=null){
					if(data.data.status==1){
						alert(data.data.message);
						this.$router.push('/home');
					}else{
						alert(data.data.message);
					}
				}
			})
			},
			toRegister:function(){
				this.$router.push('/register');
			}
		}
	}
</script>

<style lang="css" scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	input,button{
		outline:none;
	}
	.main{
		margin: 0px auto;
	}
	
	.title{
		color: #e52274;
		font-size: 35px;
		text-align: center;
		width: 100%;
		height: 106px;
		line-height: 106px;
		margin: 0px auto;
	}
	
	#myform{
		width: 660px;
		margin: 0px auto;
		margin-top: 170px;
	}
	.username,.password{
		font-size: 30px;
		color: #e52274;
		text-align: center;
		border: 0;
		width: 660px;
		height: 86px;
		float: left;
		border-bottom: 2px solid #e52274;
	}
	.submit,.submit2{
		background: white;
		text-align: center;
		color: #E52274;
		font-size: 30px;
		width: 276px;
		height: 56px;
		line-height: 56px;
		float: left;
		border: 2px solid #E52274;
		border-radius: 30px;
		margin-left: 190px;
	}
	.submit{
		margin-top: 60px;
		margin-bottom: 45px;
	}
	.submit2{
		margin-bottom: 110px;
	}
	
	.link{
		clear: both;
		text-align: center;
		color: #b2b2b2;
		font-size: 30px;
		width: 100%;
		height: 54px;
		line-height: 54px;
		margin: 0px auto;
	}
</style>