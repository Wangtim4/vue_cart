<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="row mt-4 ">
      <div class="col-lg-2 mt-5 d-flex flex-column ">
        <div class="d-none d-lg-block">
          <a href="#" class="btn btn-primary mb-2 d-block">分類1</a>
          <a href="#" class="btn btn-primary mb-2 d-block">分類1</a>
          <a href="#" class="btn btn-primary mb-2 d-block">分類1</a>
        </div>
      </div>
      <div class="col-lg-10 col-md-12">
      <div class="row d-flex justify-content-between">
      <template v-for="item in products" :key="item.id">
        <div class="col-lg-4 col-md-4">
          <div class="card m-5" style="width: 15rem;">
            <div style="height: 200px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
            <div class="card-body">
              <a href="#" class="fs-4" @click.prevent="getProduct(item.id)"> {{ item.title }}</a>
              <div class="d-flex justify-content-between align-items-center my-2">
                <span class="fs-6 text-secondary text-decoration-line-through">原價 : {{ item.origin_price }} </span>
                <span class="fs-5 text-danger text-end">特價 : {{ item.price }} </span>
              </div>
              <div class="d-grid  mx-auto">
                <button class="btn btn-outline-success"
                @click="addCart(item.id)"
                :disabled="this.status.loadingItem === item.id">
                <div v-if="this.status.loadingItem === item.id" class="spinner-grow spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車</button>
                <!-- :disabled="this.status.loadingItem === item.id"避免重複點選 當id=loadingItem不能點 -->
              </div>
            </div>
          </div>
          </div>
        </template>
      </div>
      <!-- 購物車列表 --></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      // pagination: {},
      product: {},
      status: {
        // 2對應品項id
        loadingItem: '',
      },
    };
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      // console.log(url);
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        // console.log(response);
        this.products = response.data.products;
        // console.log('products:', response);
        this.isLoading = false;
      });
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`);
    },
    addCart (id) {
      console.log(id);
      // [API]: /api/:api_path/cart [方法]: post [說明]: product_id(String)、qty(Number) 為必填欄位 [參數]: { "data": { "product_id":"-L9tH8jxVb2Ka_DYPwng","qty":1 } }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      console.log(url);
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart })
      .then((res) => {
        this.status.loadingItem = '';
        console.log(res);
      })
    }
  },
  created () {
    this.getProducts();
  },
};
</script>