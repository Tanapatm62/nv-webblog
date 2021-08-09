<template>
<div>
    <h1>Get All Users</h1>
    <div v-if="users.length">
         <div> จำนวนผู้ใช้งาน{{users.length}}</div>
         <div>id: {{users.length}}</div>
         <div>ชื่อ-นามสกุล: {{user[0].name}} - {{user[0].lastname}}</div>
         <div>Email: {{user[0].email}}</div>
         <div>Password: {{user[0].password}}</div>
    </div>
 </div>         
</template>
<srcipt>
import UserService from '@/services/UserService'

export default {
    data(){
        return {
            users:[]
        }
    },  
    async created(){
        this.users = (await UsersService.index()).data
    }
}
</srcipt>
<style scoped>


</style>