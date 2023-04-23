<template>
    <div class="container mt-5">
        <div class="row justify-content-center">

            <form class="col-5" @submit.prevent="signIn">
                <h2>請先登入</h2>
                <div class="mb-3">
                    <label for="inputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="inputEmail1" placeholder="Email address" required autofocus
                        aria-describedby="emailHelp" v-model="user.username">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="inputPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" required autofocus
                        v-model="user.password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: {
                username: '',
                password: ''
            }

        };
    },
    methods: {
        signIn () {
            // console.log('login');
            const api = `${process.env.VUE_APP_API}admin/signin`;
            console.log(api);
            this.$http.post(api, this.user)
                .then((res) => {
                // 假設登入成功轉入dash
                if (res.data.success) {
                    // console.log(res);
                    const { token, expired } = res.data;
                    // console.log(token, expired);
                    document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;
                    // 跳轉入dash
                    this.$router.push('/dashboard/products');
                }
                });
        },
    },
};
</script>