<template>
	<div class="main">
		<div class="left">
			<h1>项目列表</h1>
			<div v-for="(item,index) in allProjects" :key="item[0]" class="all">
				<a @click="handle(item[2])">{{item[3]}}</a>
			</div>
		</div>

		<div class="right">
			<div v-for="item in detailOne">
				<div>{{item[0]}}</div>
				<div>id:{{item[1]}},uuid:{{item[2]}}</div>
				<div>创建者:{{item[3]}},姓名:{{item[4]}}</div>
				<div>开始时间:{{item[5]}}</div>
				<div>结束时间:{{item[6]}}</div>
				<div>零部件数量:{{lnum}}</div>
				<div>加工单数量:{{jnum}}</div>
				<div v-if="imgUrl!=''">
					<img :src="imgUrl" />
				</div>
				<div v-else>

				</div>

				<div class="title">零部件总表</div>
				<table class="gridtable">
					<tr>
						<th>id</th>
						<th>编码</th>
						<th>种类</th>
						<th>优先级</th>
					</tr>
					<tr v-for="item in allLData">
						<td>{{item[0]}}</td>
						<td>{{item[6]}}</td>
						<td>{{item[14]}}</td>
						<td>{{item[17]}}</td>
					</tr>
				</table>

				<div class="title">计划时间表</div>
				<table class="gridtable">
					<tr>
						<th>id</th>
						<th>零件</th>
						<th>计划工序</th>
						<th>计划开始</th>
						<th>计划结束</th>
					</tr>
					<tr v-for="item in allPlanData">
						<td>{{item[0]}}</td>
						<td>{{item[12]}}</td>
						<td>{{item[6]}}</td>
						<td>{{item[10]}}</td>
						<td>{{item[11]}}</td>
					</tr>
				</table>

				<div style="margin-top: 30px;">加工单:</div>
				<div v-for="item in allJData">
					<div>id:{{item[0]}}，{{item[4]}}</div>
					<div>创建者:{{item[6]}}</div>
					<div>创建时间:{{item[8]}}</div>
					<div>加工内容:{{item[4]}}</div>
					<div>预期加工时间:{{item[22]}}-{{item[23]}}</div>
					<div>要求内容:{{item[24]}}</div>
					<div>状态:{{item[10]}}</div>
					<div style="margin-bottom: 18px;">安排时间:{{item[22]}}-{{item[23]}}</div>
				</div>

				<div class="title">流转记录表</div>
				<table class="gridtable">
					<tr>
						<th>id</th>
						<th>操作</th>
						<th>操作员</th>
						<th>时间</th>
					</tr>
					<tr v-for="item in allReverseData">
						<td>{{item[0]}}</td>
						<td>{{item[3]}}</td>
						<td>{{item[6]}}</td>
						<td>{{item[8]}}</td>
					</tr>
				</table>

				<div class="title">操作时间对照表</div>
				<table class="gridtable">
					<tr>
						<th>操作</th>
						<th>计划时长</th>
						<th>预计时长</th>
						<th>比计划延后</th>
						<th>比计划延后</th>
						<th>启动延后</th>
						<th>结束延后</th>
					</tr>
					<tr v-for="item in allOperatorData">
						<td>{{item[34]}}</td>
						<td>{{item[23]}}</td>
						<td>{{item[24]}}</td>
						<td>{{item[25]}}</td>
						<td>{{item[27]}}</td>
						<td>{{item[28]}}</td>
						<td>{{item[29]}}</td>
					</tr>
				</table>

				<div class="title">计划时间表</div>
				<table class="gridtable" style="margin-bottom: 80px;">
					<tr>
						<th>id</th>
						<th>零件</th>
						<th>计划工序</th>
						<th>计划开始</th>
						<th>计划结束</th>
						<th>天</th>
						<th>实际完成日期</th>
						<th>延期</th>
					</tr>
					<tr v-for="item in allPlanData">
						<td>{{item[0]}}</td>
						<td>{{item[12]}}</td>
						<td>{{item[6]}}</td>
						<td>{{item[10]}}</td>
						<td>{{item[11]}}</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg:null,
				allProjects: null,
				detailOne: null,
				lnum: null,
				jnum: null,
				imgUrl: '',
				allLData: [],
				allPlanData: [],
				allJData: [],
				allReverseData: [],
				allOperatorData: []
			}
		},

		methods: {
			loadProjects: function() {
				var that = this;
				this.axios.get('http://118.24.215.80/webserver/mapi/api.php/viewMoldProjectInfo').then(function(res) {
					if (res != null) {
						that.allProjects = res.data.viewMoldProjectInfo.records;
					}
				})
			},

			handle: function(message) {
				var that = this;
				var url = 'http://118.24.215.80/webserver/mapi/api.php/viewMoldOnes?filter=uuid,eq,' + message;
				this.axios.get(url).then(function(res) {
					if (res != null) {
						that.detailOne = res.data.viewMoldOnes.records;
						that.msg= res.data.viewMoldOnes.records[0][0];
						that.moldProjectName = res.data.viewMoldOnes.records[0][2];

						var url2 = 'http://118.24.215.80/webserver/mapi/api.php/viewMoldProjectPart?filter=MoldProjectCode,eq,' + message;
						that.axios.get(url2).then(function(res) {
							if (res != null) {
								that.allLData = res.data.viewMoldProjectPart.records;
								var len = (res.data.viewMoldProjectPart.records).length;
								that.lnum = len;
							}
						});

						var url3 = 'http://118.24.215.80/webserver/mapi/api.php/viewWorkTaskRecordAndContentToChartInfo?filter=MoldProjectCode,eq,' +
							message;
						that.axios.get(url3).then(function(res) {
							if (res != null) {
								var len2 = (res.data.viewWorkTaskRecordAndContentToChartInfo.records).length;
								that.jnum = len2;
							}
						});

						var urls = 'http://118.24.215.80/webserver/mapi/api.php/viewMoldProjectInfo?filter=MoldProjectName,eq,' +
							that.msg;
						that.axios.get(urls).then(function(res) {
							if (res != null) {
								that.imgUrl = res.data.viewMoldProjectInfo.records[0][6];
							}
						});

						var url4 = 'http://118.24.215.80/webserver/mapi/api.php/viewMoldProjectPlanToChartInfo?filter=MoldProjectCode,eq,' +
							message;
						that.axios.get(url4).then(function(res) {
							if (res != null) {
								that.allPlanData = res.data.viewMoldProjectPlanToChartInfo.records;
							}
						});

						var url5 = 'http://118.24.215.80/webserver/mapi/api.php/viewWorkTaskRecordAndContentToChartInfo?filter=MoldProjectCode,eq,' +
							message;
						that.axios.get(url5).then(function(res) {
							if (res != null) {
								that.allJData = res.data.viewWorkTaskRecordAndContentToChartInfo.records;
							}
						});

						var url6 = 'http://118.24.215.80/webserver/mapi/api.php/viewWorkTaskEventRecordToChartInfo?filter=ChainedWorkTaskUuid,sw,' +
							that.msg;
						that.axios.get(url6).then(function(res) {
							if (res != null) {
								that.allReverseData = res.data.viewWorkTaskEventRecordToChartInfo.records;
							}
						});

						var url7 = 'http://118.24.215.80/webserver/mapi/api.php/ViewManufacturingPartActivity?filter=MoldProjectCode,sw,' +
							message;
						that.axios.get(url7).then(function(res) {
							if (res != null) {
								that.allOperatorData = res.data.ViewManufacturingPartActivity.records;
							}
						});
					}
				});
			}
		},
		mounted() {
			this.loadProjects();
			this.handle('OTM_MOLD_PROJECT_CODE_6p9p6ri8je');
		}

	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	.main {
		margin: 0px auto;
	}

	h1 {
		font-size: 30px;
		font-weight: normal;
		color: red;
	}

	.all {
		text-indent: 8px;
	}

	.left {
		width: 12%;
		height: auto;
		float: left;
		line-height: 32px;
	}

	.right {
		width: 85%;
		height: auto;
		float: left;
		margin-left: 3%;
	}

	.title {
		margin-top: 30px;
		margin-bottom: 5px;
		text-align: center;
		width: 1000px;
	}

	table.gridtable {
		width: 1000px;
		font-family: verdana, arial, sans-serif;
		font-size: 11px;
		color: #333333;
		border-width: 1px;
		border-color: #666666;
		border-collapse: collapse;
	}

	table.gridtable th {
		border-width: 1px;
		padding: 8px 0px 8px 0px;
		border-style: solid;
		border-color: #666666;
		background-color: #dedede;
	}

	table.gridtable td {
		text-align: center;
		border-width: 1px;
		padding: 8px 0px 8px 0px;
		border-style: solid;
		border-color: #666666;
		background-color: #ffffff;
	}
</style>
