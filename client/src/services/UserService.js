import Api from '@/service/Api'

export default {
    index() {
        return Api().get('users')
    },
    show(userId){
        return Api().get('user/'+userId)    
    },
    post(user){
        return Api().post('user', user)
    },
    put(user){
        return Api().put('user/'+user.id, user)
    },
    delete(user){
        return Api().delete('user/'+user.id, user)
    },
}