<template>
	<div class="main">
		<header>
			<router-link :to="{path:'/door'}"><img src="../assets/logo.gif" class="logo"/></router-link>
			<img src="../assets/logo-text.gif" class="logo-text"/>
			<img src="../assets/logo2.gif" class="logo2"/>
		</header>
		
		<nav>
			<div>
				<span style="margin-top: 5px;color: #000000">Home</span><br/>
				<span style="color: #4d4d4d">
					<router-link :to="{path:'/home'}" style="color: black;">首页</router-link>
				</span>
			</div>
			<div class="div-yes">
				<span style="margin-top: 5px;color: #000000">Fashion</span><br/>
				<span style="color: #4d4d4d">
					<router-link :to="{path:'/home2'}" style="color: black;">时尚</router-link>
				</span>
			</div>
			<div>
				<span style="margin-top: 5px;color: #000000">Beauty</span><br/>
				<span style="color: #4d4d4d">
					<router-link :to="{path:'/home3'}" style="color: black;">美容</router-link>
				</span>
			</div>
			<div>
				<span style="margin-top: 5px;color: #000000">Fun</span><br/>
				<span style="color: #4d4d4d">
					<router-link :to="{path:'/home4'}" style="color: black;">好玩</router-link>
				</span>
			</div>
			<div>
				<span style="margin-top: 5px;color: #000000">Club</span><br/>
				<span style="color: #4d4d4d">
					<router-link :to="{path:'/home5'}" style="color: black;">优家荟</router-link>
				</span>
			</div>
		</nav>
		
		<section>
			<div class="div">
				<img src="../assets/image.gif"/>
				<div>
					Angelababy的丹宁LOOK怎么那么好看!
					<span>2019/3/11</span>
					<img src="../assets/point.gif" class="point"/>
					<img src="../assets/shopCar.gif" class="shopCar"/>
				</div>
			</div>
			<div class="ads">
				<img src="../assets/ad.gif"/>
				<img src="../assets/ad2.gif"/>
			</div>
			<div class="div">
				<img src="../assets/image2.gif"/>
				<div>
					躲不开雨季?那就给自己来一场花瓣雨吧
					<span>2019/3/11</span>
				</div>
			</div>
			<div class="div">
				<img src="../assets/image3.gif"/>
				<div>
					Hailey Baldwin如何美得攻气十足
					<span>2019/3/11</span>
					<img src="../assets/shopCar.gif" class="shopCar2"/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/home2.css");
</style>