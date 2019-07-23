<template>
	<div>
		<div v-for='item in name' style="color: red;margin-bottom: 30px;">
			<span @click="tap($event,item)">{{item}}</span>
			<div v-for='item1 in part' style="text-indent: 2em;color: green;">
				<span @click="touch(item1)" class="level2">{{item1}}</span>
				<div v-for='item2 in desc' style="text-indent: 4em;color: blue;">
					<div>{{item2.ManufacturingTypeCode}}</div>
					<div>预计开始时间:{{item2.ExpectedStartTime}}&nbsp;&nbsp;&nbsp;预计结束时间:{{item2.ExpectedEndTime}}&nbsp;&nbsp;&nbsp;预计周期时长(分钟):{{item2.ExpectedPeriodInMinute}}</div>
					<div>实际开始时间:{{item2.RealStartTime}}&nbsp;&nbsp;&nbsp;实际结束时间:{{item2.RealEndTime}}&nbsp;&nbsp;&nbsp;实际周期时长(分钟):{{item2.DelayAfterExpectedInMinute}}</div>
					<div>创建者:{{item2.CreatorUuid}}</div>
					<div>加工状态:{{item2.TaskStatus}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				name: null,
				part: null,
				message: null,
				desc: null
			}
		},
		methods: {
			handle: function() {
				var that = this;
				this.axios.get('/api/webserver/mapi/api.php/viewall?transform=1').then(function(res) {
					if (res) {
						var obj = res.data.viewall;
						var one = [];
						for (var i = 0; i < obj.length; i++) {
							one.push(obj[i].MoldProjectName);
						}
						var two = one.sort();
						var three = [two[0]];
						for (var i = 1; i < two.length; i++) {
							if (two.indexOf(two[i]) == i) {
								three.push(two[i]);
							}
						}
						that.name = three;
					}
				});
			},
			tap: function(e,message) {
				alert($(e.target).css("display"));
				
				var that = this;
				that.message = message;
				var url = '/api/webserver/mapi/api.php/viewall?filter=MoldProjectName,eq,' + message + '&transform=1';
				this.axios.get(url).then(function(res) {
					if (res) {
						var obj = res.data.viewall;
						var one = [];
						for (var i = 0; i < obj.length; i++) {
							one.push(obj[i].MoldProjectPartName);
						}
						var two = one.sort();
						var three = [two[0]];
						for (var i = 1; i < two.length; i++) {
							if (two.indexOf(two[i]) == i) {
								three.push(two[i]);
							}
						}
						that.part = three;
					}
				});
			},
			touch: function(message2) {
				var that = this;
				var url = '/api/webserver/mapi/api.php/viewall?filter[]=MoldProjectName,eq,' + that.message +
					'&filter[]=MoldProjectPartName,eq,' + message2 + '&transform=1';
				this.axios.get(url).then(function(res) {
					if (res) {
						that.desc = res.data.viewall;
					}
				})
			}
		},
		mounted() {
			this.handle();
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
</style>
