<template>
	<div>
		<div v-for="item in obj">
			<a @click="handle2(item)">{{item}}</a>
			<div v-if="item==item2.MoldProjectName" v-for="item2 in obj2">
				{{item2.MoldProjectPartName}}
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				obj: null,
				obj2: null
			}
		},
		methods: {
			handle: function() {
				var that = this;
				this.axios.get('/api/webserver/mapi/api.php/viewProjectName?transform=1').then(function(res) {
					if (res) {
						var obj = res.data.viewProjectName;
						var one = [];
						for (var i = 0; i < obj.length; i++) {
							one.push(obj[i].MoldProjectName);
						}
						that.obj = one;
					}
				})
			},

			handle2: function(name) {
				var that = this;
				this.axios.get('/api/webserver/mapi/api.php/ManufacturingTaskTimeScore?filter[]=MoldProjectName,eq,' + name +
					'&transform=1').then(function(res) {
					if (res) {
						that.obj2 = res.data.ManufacturingTaskTimeScore;

						function unique(arr) {
							const res = new Map();
							return arr.filter((a) => !res.has(a) && res.set(a, 1))
						}
						console.log(unique(that.obj2));
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

	.level-one {
		text-indent: 1em;
	}

	.level-two {
		text-indent: 2em;
	}

	.level-three {
		text-indent: 3em;
	}
</style>
