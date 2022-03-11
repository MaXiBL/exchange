import { ElMessage } from 'element-plus'
export const showTip = (msg='success', type='success') => {
  ElMessage({
    // showClose: true,
    message: msg,
    type: type,
    duration: 1000
  })
}
