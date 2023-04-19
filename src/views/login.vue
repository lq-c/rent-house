<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter();
const route = useRoute();


const model = ref({
    age: '',
    password: ''
})

const login = () =>{
    router.push({ path: '/home' })
    // if(model.value.age == 'admin' && model.value.password == '123456'){
    //     router.push({ path: '/home' })
    // }
}

</script>

<template>
    <div class="login-back">
        <div class="form">
            <n-form-item path="age" label="账号">
                <n-input style="opacity: 0.7;width: 400px;" v-model:value="model.age" @keydown.enter.prevent placeholder="请输入账号" />
            </n-form-item>
            <n-form-item path="password" label="密码">
                <n-input style="opacity: 0.7;width: 400px;" v-model:value="model.password" type="password" placeholder="请输入密码"
                    @keydown.enter.prevent />
            </n-form-item>
            <n-button style="width: 400px;margin-top: 50px;" type="primary" @click="login">
                Primary
            </n-button>
        </div>
    </div>
</template>

<style scoped>
.login-back {
    width: 100%;
    height: 100%;
    background-image: url('../assets/login-back.jpg');
    background-position: 100% 100%;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form {
    width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>