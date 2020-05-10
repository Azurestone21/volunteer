function serializeArrayToJson(form) {
  var result = {};
  // [{name: 'email', value: '用户输入信息'}]
  // serializeArray获取表单用户输入内容
  let data = form.serializeArray();
  data.forEach(function (item) {
    // [email:'xxx']
    result[item.name] = item.value;
  });
  return result;
}