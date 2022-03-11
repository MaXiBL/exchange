let baseUrl = ''
let hostArr = [
  "http://192.168.5.244:9770", //生产环境
  "http://192.168.5.244:9770"  //线上环境
]
switch(process.env.VUE_APP_CURENV){
  case 'dev':
    baseUrl = hostArr[0]
    break;
  case 'pro':
    baseUrl = hostArr[1]
    break;
}

export { baseUrl }
