<template>
	<div class="main">
		<div class="head-img">
			<img src="../assets/logo-circle.gif"/>
		</div>
		
		<div class="login">
			<router-link :to="{path:'/login'}" style="color: white;">Login</router-link>
		</div>
		
		<div class="content">
			<div>
				<div>
					Seed Lv0
					<img src="../assets/level.gif" class="level"/>
				</div>
				<div>
					0 pay
					<img src="../assets/money.gif" class="money"/>
				</div>
				<img src="../assets/tree.gif" class="tree"/>
			</div>
			<div>
				Collections
				<img src="../assets/love.gif" class="love"/>
			</div>
			<div>
				Setting
				<img src="../assets/set.gif" class="set"/>
			</div>
		</div>
		
		<div class="foot-text">
			<img src="../assets/foot-text.gif"/>
		</div>
	</div>
</template>

<script>
</script>

<style lang="css" scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.main{
		width: 100%;
		height: 1334px;
		margin: 0px auto;
		background: url(../assets/bg.gif) repeat-x;
	}
	
	.head-img{
		text-align: center;
		width: 100%;
		height: 200px;
		margin: 0px auto;
	}
	.head-img>img{
		width: 140px;
		height: 140px;
		border-radius: 50%;
		margin-top: 60px;
	}
	
	.login{
		font-size: 24px;
		color: white;
		text-align: center;
		width: 224px;
		height: 58px;
		line-height: 58px;
		margin: 0px auto;
		margin-top: 30px;
		border: 2px solid white;
		border-radius: 30px;
	}
	
	.content{
		width: 660px;
		height: 268px;
		margin: 0px auto;
		margin-top: 40px;
		border-bottom: 2px solid #eda3ac;
		border-top: 2px solid #EDA3AC;
		position: relative;
	}
	.tree{
		width: 2px;
		height: 70px;
		position: absolute;
		top: 10px;
		left: 328px;
	}
	.love{
		width: 50px;
		height: 43px;
		position: absolute;
		top: 115px;
		left: 2px;
	}
	.set{
		width: 52px;
		height: 52px;
		position: absolute;
		top: 200px;
		left: 0;
	}
	.level,.money{
		width: 42px;
		height: 42px;
	}
	.level{
		position: absolute;
		top: 20px;
		left: 92px;
	}
	.money{
		position: absolute;
		top: 20px;
		left: 434px;
	}
	
	.content>div{
		text-indent: 80px;
		color: white;
		font-size: 28px;
		width: 660px;
		height: 88px;
		line-height: 88px;
		float: left;
	}
	.content>div:first-of-type{
		text-indent: 0;
		font-size: 25px;
	}
	.content>div:first-of-type>div{
		text-align: center;
		width: 330px;
		float: left;
	}
	.content>div:first-of-type>div:first-of-type{
		text-indent: 60px;
	}
	.content>div:first-of-type>div:last-of-type{
		text-indent: 55px;
	}
	.content>div:nth-of-type(2){
		border-bottom: 2px solid #EDA3AC;
		border-top: 2px solid #EDA3AC;
	}
	
	.foot-text{
		text-align: center;
		width: 100%;
		margin: 0px auto;
		margin-top: 560px;
	}
	.foot-text>img{
		width: 198px;
		height: 53px;
	}
</style>