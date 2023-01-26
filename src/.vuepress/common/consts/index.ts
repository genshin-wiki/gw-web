const env = process.env.NODE_ENV

let dataRoot
if (env && env == 'development') {
  dataRoot = "http://localhost:6481"
} else {
  dataRoot = "https://gw-data.armoe.cn"
}
export { dataRoot }
