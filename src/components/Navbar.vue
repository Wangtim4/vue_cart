<template>
  <!-- 11-3.加入讀取效果頁面 -->
  <!-- 11-3-2用props傳入狀態isLoading -->
  <LoadIng :active="isLoading"></LoadIng>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">產品</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        // <!-- 11-3-2用props傳入狀態isLoading -->
        isLoading: false,
      }
    },
    methods: {
      logout () {
            const api = `${process.env.VUE_APP_API}logout`;
            // console.log(api);
            // 11-4 資料尚未讀取完成
            this.isLoading = true;
            this.$http.post(api, this.user)
            .then((res) => {
              // 11-4 資料讀取完成
              this.isLoading = false;
              if (res.data.success) {
                this.$router.push('/login');
              }
            })
      }
    }
  }
</script>