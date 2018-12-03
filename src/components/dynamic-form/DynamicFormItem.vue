<template>
  <el-form-item :label="item.label" :prop="item.key" :class="{'block':item.block}">

    <el-input v-if="item.type==='input'"  :type="item.subtype" :placeholder="item.placeholder" :disabled="item.disable" :readonly="item.readonly" :autosize="item.autosize" v-bind="$attrs" v-on="$listeners"></el-input>

    <el-checkbox v-else-if="item.type==='switch' && item.appearance==='checkbox'" :disabled="item.disabled" v-bind="$attrs" v-on="$listeners"></el-checkbox>
    <el-switch v-else-if="item.type==='switch'" :disabled="item.disabled" v-bind="$attrs" v-on="$listeners"></el-switch>

    <!-- <el-rate v-else-if="item.type==='rate'" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" text-color="#ff9900" v-bind="$attrs" v-on="$listeners"></el-rate> -->

    <!-- <el-color-picker v-else-if="item.type==='color'" :show-alpha="item.showAlpha" :color-format="item.format" v-bind="$attrs" v-on="$listeners"></el-color-picker> -->

    <el-slider v-else-if="item.type==='slider'" :range="item.isRange" :show-stops="item.showStops" :step="item.step" :min="item.min" :max="item.max" v-bind="$attrs" v-on="$listeners"></el-slider>

    <el-radio-group v-else-if="item.type==='radio'" v-bind="$attrs" v-on="$listeners">
      <component :is="item.button?'el-radio-button':'el-radio'" v-for="o in item.options" :key='o.value' :label="o.value"  :disabled="o.disabled" :border="item.border">{{o.label}}</component>
    </el-radio-group>

    <el-checkbox-group v-else-if="item.type==='checkbox'" :min="item.min" :max="item.max" v-bind="$attrs" v-on="$listeners">
      <component
        :is="item.button?'el-checkbox-button':'el-checkbox'"
        v-for="o in item.options"
        :key='o.value'
        :disabled="o.disabled"
        :label="o.value" :border="item.border">{{o.label}}</component>
    </el-checkbox-group>

    <el-select v-else-if="item.type==='select'" :multiple="item.multiple" :disabled="item.disabled" :multiple-limit="item.multipleLimit" v-bind="$attrs" v-on="$listeners">
      <el-option v-for="o in item.options" :key="o.value" :label="o.label" :value="o.value" :disabled="o.disabled">
      </el-option>
    </el-select>

    <!-- <el-time-picker v-else-if="item.type==='time'" :is-range="item.isRange" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" :value-format="item.valueFormat" :format="item.valueFormat" :placeholder="item.placeholder" v-bind="$attrs" v-on="$listeners"></el-time-picker> -->

    <el-date-picker v-else-if="item.type==='date'" :type="item.subtype" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" :value-format="item.valueFormat" :format="item.viewFormat||item.valueFormat" :placeholder="item.placeholder" :disabled="item.disabled" v-bind="$attrs" v-on="$listeners"></el-date-picker>

    <el-date-picker v-else-if="item.type==='datetime'" :type="item.subtype" :size="item.size" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" :default-time="item.defaultTime" :value-format="item.valueFormat" :format="item.viewFormat||item.valueFormat" :placeholder="item.placeholder" :disabled="item.disabled" :editable="item.editable" v-bind="$attrs" v-on="$listeners"></el-date-picker>

    <span v-else>未知控件类型</span>

  </el-form-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    selBox(o,i,q){
      debugger;
    }
  }
}
</script>
