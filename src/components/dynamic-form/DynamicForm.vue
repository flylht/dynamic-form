<template>
<div class="form">
    <el-form :model="formData" :ref="config.name" :label-width="config.labelWidth" :label-position="config.labelPosition" :size="config.size || 'medium'" :inline="config.inline || false" :rules="dataSource.rules" :hide-required-asterisk="config.asterisk">
      <el-row v-for="(formitem,index) in dataSource.data" :key="index">
        <el-col v-for="(item,itemindex) in formitem" :key="itemindex" :span="item.span">
          <dynamic-form-item :item="item" :value="formData[item.key]" @input="handleInput($event,item)"/>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm(config.name)">提交</el-button>
        <el-button @click="reset(config.name)">取消</el-button>
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
    config: {
     type: Object,
     required: true
    },
    dataSource: {
     type: Object,
     required: true
    }
  },
  data () {
    return{
      formData : {}
    }
  },
  methods: {
    handleInput(val, item) {
      this.formData[item.key] = val
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
      Object.keys(this.dataSource.data).map((key) => {
        this.dataSource.data[key].map((item) => {
          this.$set(this.formData, item.key, item.value)
        })
      })
    }
  },
  created(){
    this.setDefaultValue()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
