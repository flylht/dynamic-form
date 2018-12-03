<template>
  <div class="hello">
    <!-- <h1>{{ msg }}<router-link to="/">home</router-link></h1> -->
    <dynamic-form :config="formConfig" :dataSource="formData" @submit="submitForm"></dynamic-form>
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
        "name":"formname",//表单名字
        "inline": false, // 是否使用inline排版
        "labelPosition": 'right', // 标签对齐方式
        "labelWidth": '80px', // 标签宽度
        "size": 'medium', // 尺寸
        "statusIcon": true, // 显示验证图标
        "asterisk":false
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
            "subtype": "text"
          }
          ],
          [{
            "type": "input",
            "label": "年龄",
            "readonly": false,
            "value": "20",//v-model绑定得值
            "placeholder": "请输入年龄",
            "span":16,//占位的列数，共24列
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
            "options": [
              {
                "value": "default",
                "label": "默认"
              },
              {
                "value": "medium",
                "label": "中"
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
            "value": "2018-10-10"
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
            "valueFormat":"timestamp",//返回值的格式 yyyy-MM-dd HH:mm:ss
            //"value": "2018-10-10 15:30:00"
          }]
      ]}
    }
  },
  methods: {
    submitForm(data){
      debugger;
    }
  }
}
</script>
