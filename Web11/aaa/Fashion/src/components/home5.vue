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
			<div>
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
			<div class="div-yes">
				<span style="margin-top: 5px;color: #000000">Club</span><br/>
				<span style="color: #4d4d4d">
					<router-link :to="{path:'/home5'}" style="color: black;">优家荟</router-link>
				</span>
			</div>
		</nav>
		
		<div class="content">
			<img src="../assets/img.gif" class="img"/>
			<img src="../assets/img2.gif" class="img2" style="margin-right: 2px;"/>
			<img src="../assets/img3.gif" class="img3"/>
			<img src="../assets/img4.gif" class="img4"/>
			<img src="../assets/img5.gif" class="img5"/>
			<img src="../assets/img6.gif" class="img6"/>
			<img src="../assets/img7.gif" class="img7"/>
			<img src="../assets/img8.gif" class="img8"/>
			<img src="../assets/img9.gif" class="img9"/>
		</div>
		
		<section>
			<img src="../assets/image5.gif"/>
			<img src="../assets/image6.gif"/>
			<img src="../assets/image7.gif"/>
		</section>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/home5.css");
</style>