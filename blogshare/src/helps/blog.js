import require from './require'

const url = {
    getlist: '/blog',
    detail: '/blog/:blogId',
    create: '/blog',
    edit: '/blog/:blogId',
    delete: '/blog/:blogId'
}

export default {
    getlist({page=1,userId,atIndex}={page: 1}){
        return require(url.getlist,'get',{page,userId,atIndex})
    },
    detail(blogid){
        return require(url.detail.replace(':blogId',blogid))
    },
    create({title,content,description,atIndex}){
        return require(url.create,'post',{title,content,description,atIndex})
    },
    edit({blogid,title,content,description,atIndex}){
        return require(url.edit.replace(':blogId',blogid),'patch',{title,content,description,atIndex})
    },
    delete(blogid){
        return require(url.delete.replace(':blogId',blogid),'delete')
    }
}