<template>
<div class="form">
    <el-form :model="formData" :ref="config.name" :label-width="config.labelWidth" :label-position="config.labelPosition" :size="config.size || 'medium'" :inline="config.inline || false" :rules="dataSource.rules" :hide-required-asterisk="config.asterisk">
      <el-row v-for="(formitem,index) in dataSource.data" :key="index">
        <el-col v-for="(item,itemindex) in formitem" :key="itemindex" :span="item.span">
          <dynamic-form-item :item="item" :value="formData[item.key]" @input="handleInput($event,item)">
            <div>Http://</div>
          </dynamic-form-item>
        </el-col>
      </el-row>
      <el-form-item>
          <el-button v-for="btn in config.btns" :type="btn.subtype" :disabled="btn.disable" :round="btn.round" :loading="btn.loading" @click="handleClick(btn.key,config.name)" :key="btn.key">{{btn.value}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import dynamicFormItem from '@/components/dynamic-form/DynamicFormItem'

export default {
  name: 'dynamicForm',
  components:{
    'dynamic-form-item': dynamicFormItem
  },
  props: {
    formConfig: {
     type: Object
    },
    dataSource: {
     type: Object,
     required: true
    }
  },
  data () {
    return{
      config : {
        "name":"formname",//表单名字
        "inline": false, // 是否使用inline排版
        "labelPosition": 'right', // 标签对齐方式
        "labelWidth": '80px', // 标签宽度
        "size": 'medium', // 尺寸
        "statusIcon": true, // 显示验证图标
        "asterisk":true,//必填项*是否隐藏显示
        "btns":[{
          "label":"",
          "value": "提交",
          "key": "submit",
          "loading": false,
          "round": false,
          "disable": false,
          "subtype":"primary",//primary / success / warning / danger / info / text
        },{
          "label":"",
          "value": "取消",
          "key": "reset",
          "loading": false,
          "round": false,
          "disable": false,
          "subtype":"",//primary / success / warning / danger / info / text
        }]
      },
      formData : {}
    }
  },
  methods: {
    handleInput(val, item) {
      this.formData[item.key] = val;
      this.$nextTick(()=>{
        item.callback && item.callback(this.formData);
      });
    },
    handleClick(type,form) {
      if(type == "submit"){
        this.submitForm(form);
      }else{
        this.reset(form);
      }
    },
    submitForm(form) {
      this.$refs[form].validate((valid,con) => {
        if (valid) {
          this.$emit("submit", this.formData)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    reset(form) {
      this.$refs[form].resetFields();
    },
    setDefaultValue() {
      Object.assign(this.config, this.formConfig);
      Object.keys(this.dataSource.data).map((key) => {
        this.dataSource.data[key].map((item) => {
          this.$set(this.formData, item.key, item.value)
        })
      })
    }
  },
  created(){
    this.setDefaultValue()
  },
  watch:{

  },
  computed: {
    // config () {
    //   return Object.assign({}, this.initConfig, this.formConfig);
    // },
    // formData () {
    //   let obj = {};
    //   Object.keys(this.dataSource.data).map((key) => {
    //     this.dataSource.data[key].map((item) => {
    //       obj[item.key] = item.value;
    //     })
    //   })
    //   return obj;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
