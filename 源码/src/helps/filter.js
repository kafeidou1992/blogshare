export default {
    fixtime(val){
        if(!val){
          return ''
        }
        let replay = new Date(val)
        let t= Date.now() - replay.getTime()
        if(t<1000*30){
          return '刚刚'
        }else if(t<1000*60){
          return Math.floor(t/1000)+'秒前'
        }else if(t<1000*60*60){
          return Math.floor(t/(1000*60))+'分钟前'  
        }else if(t<1000*60*60*24){
          return Math.floor(t/(1000*60*60))+'小时前'
        }else if(t<1000*60*60*24*30){
          return Math.floor(t/(1000*60*60*24))+'天前'
        }else if(t<1000*60*60*24*365){
          return Math.floor(t/(1000*60*60*24*30))+'月前'
        }else{
          return Math.floor(t/(1000*60*60*24*365))+'年前'
        }
    }
}
