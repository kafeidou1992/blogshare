import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default function (url,method='get',data={}){
    return new Promise((resolve,reject)=>{
        let option={
            url,
            method: method.toLowerCase()
        }
        if(method.toLowerCase()==='get'){
            option.params = data
        }else{
            option.data = data
        }
        axios(option)
        .then(res=>{
            if(res.data.status==='ok'){
                resolve(res.data)
            }else{
                reject(res.data)
                Message.error(res.data.msg)
            }
        })
        .catch(err=>{
            Message.error('网络异常')
            reject({msg: '网络异常'})
        })
    })
}