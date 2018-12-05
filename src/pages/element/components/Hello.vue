<template>
  <div class="hello">
    <!-- <h1>{{ msg }}<router-link to="/">home</router-link></h1> -->
    <el-button @click="btnclick">修改</el-button>
    <dynamic-form :formConfig="formConfig" :dataSource="formData" @submit="submitForm"></dynamic-form>
  </div>
</template>

<script>
import dynamicForm from '@/components/dynamic-form/DynamicForm'
export default {
  name: 'Hello',
  components:{
    'dynamic-form' : dynamicForm
  },
  data () {
    var checkNumber = (rule, value, callback) => {
      if (isNaN(value) || value == "") {
        callback(new Error('请输入数字值'));
      } else {
        callback();
      }
      };
    return {
      msg: '动态表单',
      formConfig:{
        // "name":"formname",//表单名字
        // "inline": false, // 是否使用inline排版
        // "labelPosition": 'right', // 标签对齐方式
        // "labelWidth": '100px', // 标签宽度
        // "size": 'medium', // 尺寸
        // "statusIcon": true, // 显示验证图标
        // "asterisk":true,//必填项*是否隐藏显示
      },
      formData: {
        "rules":{
          name: [
            { required: true, message: '请输入活动名称'},
          ],
          name1: [
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          age: [
            //{ required: true, message: '年龄不能为空'},
            { validator: checkNumber, message: '年龄必须为数字值', trigger: 'blur' }
          ],
          desc: [
            //{ required: true, message: '年龄不能为空'},
            { validator: this.checkDesc, message: '请填写描述', trigger: 'blur' }
          ],
        },
        "data":[
          [{
            "type": "input",
            "label": "姓氏",
            "readonly": false,
            "value": "123",//初始值
            "placeholder": "请输入姓",
            "span":10,//占位的列数，共24列
            "key": "name",
            "isSlot":true,
            "slot":"prepend",
            "slotVal":"$",
            // "isBtnSlot":true,
            // "btnSlot":"prepend",
            "subtype": "text"
          },
          {
            "type": "input",
            "label": "我的名",
            "readonly": false,
            "value": "",//v-model绑定得值
            "placeholder": "请输入名",
            "span":10,
            "key": "name1",
            "isBtnSlot":true,
            "btnSlot":"append",
            "btnClass":"el-upload-btn-append",
            "btnIcon":"el-icon-delete",//el-icon-delete
            "btnTxt":"",
            "subtype": "text"
          }
          ],
          [{
            "type": "input",
            "label": "年龄",
            "readonly": false,
            "value": "20",//v-model绑定得值
            "placeholder": "请输入年龄",
            "span":8,//占位的列数，共24列
            "key": "age",
            "subtype": "number"
          }],
          [{
            "type": "radio",
            "label": "性别",
            "value": "0",
            "button": false,
            "border": false,
            "span": 10,
            "key": "gender",
            "callback":(ret)=>{debugger;},
            "options": [{
              "value": "1",
              "label": "男",
              "disabled": false
            }, {
              "value": "0",
              "label": "女",
              "disabled": false
            }]
          },
          {
            "type": "switch",
            "label": "开关",
            "key": "lock",
            "span": 10,
            "value": false
          }],
          [{
            "type": "radio",
            "label": "标签对齐",
            "key": "labelPosition",
            "value": "right",
            "button": true,
            "options": [
              {
                "value": "left",
                "label": "左对齐"
              },
              {
                "value": "top",
                "label": "顶部对齐"
              },
              {
                "value": "right",
                "label": "右对齐"
              }
            ]
          }],
          [{
            "type": "select",
            "label": "尺寸",
            "key": "size",
            "value": "default",
            //"popperClass":"abcd",//下拉框的类名
            "isSlot":true,
            "options": [
              {
                "value": "default",
                "label": "默认"
              },
              {
                "value": "medium",
                "label": "中",
                "disabled": true
              },
              {
                "value": "small",
                "label": "小"
              },
              {
                "value": "mini",
                "label": "迷你"
              }
            ]
          }],
          [{
            "type": "slider",
            "label": "进度",
            "key": "progress",
            "min":10,
            "max":80,
            "step":1,
            "span":16,
            "value": 30
          }],
          [{
            "type": "checkbox",
            "label": "选择城市",
            "key": "city",
            //"min":1,
            //"max":3,
            "options":[
              {"label":"上海","value":"sh","disabled":false}, 
              {"label":"北京","value":"bj","disabled":false},
              {"label":"广州","value":"gz","disabled":false}, 
              {"label":"深圳","value":"sz","disabled":false}
            ],
            "callback":(e)=>{debugger;},
            "value": ["sh"]
          }],
          [{
            "type": "date",
            "label": "选择日期",
            "key": "seldate",
            "subtype":"date",//daterange类型
            "placeholder": "请选择日期",
            "editable":false,//文本框是否可输入
            "viewFormat":"yyyy 年 MM 月 dd 日",//显示的格式
            "valueFormat":"yyyy-MM-dd",//返回值的格式
            "value": "2018-10-12"
          }],
          [{
            "type": "datetime",
            "label": "日期时间",
            "key": "selDT",
            "subtype":"datetime",//datetimerange类型
            "placeholder": "请选择日期及时间",
            "editable":false,//文本框是否可输入
            "size":"large",
            "defaultTime":"['12:22:00','08:00:00']",//起始和结束时间
            "viewFormat":"yyyy-MM-dd HH:mm:ss",//显示的格式 yyyy 年 MM 月 dd 日  HH小时mm分ss秒
            "valueFormat":"yyyy-MM-dd HH:mm:ss",//返回值的格式 yyyy-MM-dd HH:mm:ss & timestamp
          }],
          [{
            "type": "upload",
            "label": "上传图片",
            "key": "upload",
            "span": 16,
            "action":"https://jsonplaceholder.typicode.com/posts/",
            //"accept":".png",
            "handlePreview":undefined,//点击文件列表中已上传的文件时的钩子
            "handleRemove":undefined,//文件列表移除文件时的钩子
            "handleExceed":(files, fileList)=>{console.log("文件超出个数限制")},//文件超出个数限制时的钩子
            "handleSuccess":(response, file, fileList)=>{
              console.log("文件上传成功");
              debugger;
              let upload = this.formData.data[9][0];
              upload.loading = false;
              upload.isShowTxt = true;
              upload.imgTxtVal = file.name;
              upload.btnVal = "重新选择";
              fileList.pop();
            },
            "handleChange":(files, fileList)=>{},
            "beforeUpload":undefined,//上传文件之前的钩子
            "beforeUpload":(file)=>{
              this.formData.data[9][0].loading = true;
            },
            "beforeRemove":undefined,//移除之前的钩子
            "httpRequest":(options)=>{
              debugger;
            },//覆盖默认的上传行为，可以自定义上传的实现
            "httpRequest":undefined,
            "multiple":false,//是否支持多选文件
            "limit":10,//最大允许上传个数
            "loading":false,
            "image":"https://segmentfault.com/u/xingxingcifu",
            "showFileList":false,//是否显示上传文件
            "fileList":[],//上传的文件列表
            "listType":"",//文件列表的类型text/picture/picture-card
            "isShowTxt":false,
            "imgTxtClass":"el-upload-txt",
            "imgTxtVal":"图片名称",
            "btnVal":"选择文件",
            "btnSize":"small",
            "btnClass":"el-upload-btn",
            "isShowTip":true,
            "tipVal":"只能上传jpg/png文件，且不超过500kb",
            "tipClass":"el-upload-tip",
          }],
          [{
            "type": "input",
            "label": "描述",
            "readonly": false,
            "value": "",//初始值
            "placeholder": "请输入描述内容",
            "span":18,//占位的列数，共24列
            "key": "desc",
            "subtype": "textarea"
          }
          ],
      ]}
    }
  },
  methods: {
    submitForm(data){
      debugger;
    },
    checkDesc(rule, value, callback){
      if (value == "") {
        callback(new Error('check'));
      } else {
        callback();
      }
    },
    btnclick(e){
      //this.formData.data[0][0].value = "哈哈";
      this.formData.data[1].push({
        "type": "input",
        "label": "生肖",
        "readonly": false,
        "value": "20",//v-model绑定得值
        "placeholder": "请输入年龄",
        "span":8,//占位的列数，共24列
        "key": "age",
        "subtype": "number"
      })
    }
  }
}
</script>

<style scoped>
  .hello >>> .el-upload-txt{
    font-size: 14px;
    float: left;
    color:#923;
    margin-right: 5px;
  }
  .hello >>> .el-upload-btn{
    font-size: 14px;
  }
  .hello >>> .el-upload-tip{
    font-size: 12px;
    color: #888;
  }
  .hello >>> .el-input-group__append{
    background-color: #fff;
    color: #909399;
    right: -3px;
    border-left: 1px solid #dcdfe6;
    border-radius: 2px;
    padding: 0 10px;
  }
  .hello >>> .el-upload-btn-append{
    font-size: 14px;
  }
  .hello >>> .el-input-group__append:hover{
    color: #900;
    border-color:#900;
  }
</style>
