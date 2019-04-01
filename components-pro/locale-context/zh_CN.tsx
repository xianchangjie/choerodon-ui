import { Lang } from './enum';

export default {
  lang: Lang.zh_CN,
  Table: {
    show_cached_seletion: '显示所有已选记录',
    hide_cached_seletion: '隐藏所有已选记录',
    create_button: '新增',
    save_button: '保存',
    delete_button: '删除',
    remove_button: '移除',
    reset_button: '重置',
    query_button: '查询',
    expand_button: '展开',
    collapse_button: '合并',
    export_button: '导出',
    advanced_search: '高级搜索',
    dirty_info: '显示条件已更改',
    restore: '还原',
    empty_data: '暂无数据',
    choose_export_columns: '请选择要导出的列',
    column_name: '列名',
  },
  Pagination: {
    records_per_page: '每页行数：',
  },
  Upload: {
    file_selection: '选择文件',
    click_to_upload: '点击上传',
    upload_success: '上传成功',
    upload_failure: '上传失败',
    no_file: '没有文件',
    upload_path_unset: '未设置上传路径',
    not_acceptable_prompt: '含有上传类型不匹配的文件，期待：',
    file_list_max_length: '文件数量超过最大限制',
  },
  Modal: {
    ok: '确定',
    cancel: '取消',
    confirm_modal_title: '提示',
    success_modal_title: '成功',
    error_modal_title: '错误',
    warning_modal_title: '警告',
  },
  DataSet: {
    unsaved_data_confirm: '有未保存的数据，是否继续？',
    invalid_query_dataset: '查询条件数集不通过',
    delete_selected_row_confirm: '确认删除选中行？',
    query_failure: '查询失败',
    submit_success: '提交成功',
    submit_failure: '提交失败',
  },
  Utils: {
    no_new_row_when_head_unselected: '头未选中记录，不能新建行记录',
  },
  DatePicker: {
    value_missing: '请选择日期',
  },
  EmailField: {
    value_missing: '请输入邮箱地址',
    type_mismatch: '请输入有效的邮箱地址',
  },
  IntlField: {
    modal_title: '输入多语言信息',
  },
  NumberField: {
    value_missing: '请输入数字',
  },
  Radio: {
    value_missing: '请选择',
  },
  SelectBox: {
    value_missing: '请选择',
  },
  Select: {
    value_missing: '请选择',
  },
  UrlField: {
    value_missing: '请输入地址',
    type_mismatch: '请输入有效的地址',
  },
  Validator: {
    bad_input: '请输入一个数字。',
    pattern_mismatch: '请与所请求的格式保持一致。',
    range_overflow: '值必须小于或等于{max}。',
    range_underflow: '值必须大于或等于{min}。',
    step_mismatch: '请输入有效值。{near}',
    too_long: '请将该内容减少到{maxLength}个或更少字符（目前您使用了{length}个字符）。',
    too_short: '请将该内容增加到{minLength}个或更多字符（目前您使用了{length}个字符）。',
    type_mismatch: '请输入与类型匹配的有效值。',
    value_missing: '请填写此字段。',
    unique: '该字段值不唯一，请重新填写。',
    unknown: '未知错误。',
  },
  Icon: {
    icons: '图标',
    whatsNew: '新增',
    direction: '方向性',
    suggestion: '提示建议性',
    edit: '编辑类',
    data: '数据类',
    other: '网站通用',
    series: '套系类',
  },
};
