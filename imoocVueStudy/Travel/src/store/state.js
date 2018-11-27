let defaultCity = '上海'
// 如果浏览器被设置了隐身模式或者屏蔽了localStorage使用localStorage会报错，避免报错导致不能正常执行，使用try catch
try {
  defaultCity = localStorage.city || defaultCity
} catch (e) {}

export default {
  city: defaultCity
}
