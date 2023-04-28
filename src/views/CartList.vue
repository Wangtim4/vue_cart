<template>
    <div class="container mt-5 ">
        <table class="table border text-center">
            <thead>
            <tr>
                <th >品名</th>
                <th style="width: 200px;">數量</th>
                <th >單價</th>
                <th ></th>
            </tr>
            </thead>
            <tbody>
                <template v-if="cart.carts">
                    <tr v-for="item in cart.carts" :key="item.id">
                        <td>{{ item.product.title }}</td>
                        <td>
                        <div class="input-group">
                            <input type="number" class="form-control"
                            min="1"
                            :disabled="item.id === status.loadingItem"
                            v-model.number="item.qty"
                            @change="updateCart(item)">
                            <div class="input-group-text">/{{ item.product.unit }}
                            </div>
                        </div>
                        </td>
                        <td>{{ item.product.price }}</td>
                        <td><button type="button" class="btn btn-outline-danger"
                            :disabled="status.loadingItem === item.id"
                            @click="removeCartItem(item.id)">刪除</button></td>
                    </tr>
                </template>
            </tbody>
            <tfoot>
                <tr>
                    <td>總計</td>
                    <td class="text-end">共 NT$ {{ cart.final_total}}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
export default {
    data () {
        return {
            products: [],
            product: {},
            status: {
                loadingItem: '', // 對應品項 id
            },
            cart: {},
            messages: '',
            coupon_code: '',
        };
    },
    methods: {
        getCart () {
            // [API]: /api/:api_path/cart[方法]: get
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            console.log(url);
            this.$http.get(url)
                .then((res) => {
                    console.log(res.data.data);
                    this.cart = res.data.data;
                    this.messages = res.messages;
                })
        },
        removeCartItem (id) {
            // console.log(id);
            this.status.loadingItem = id;
            // [API]: /api/:api_path/cart/:id[方法]: delete
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
            console.log(url);
            this.$http.delete(url)
            .then((response) => {
                // console.log(res);
                this.$httpMessageState(response, '移除購物車品項');
                this.status.loadingItem = '';
                this.getCart();
            })
        },
        updateCart (item) {
            console.log(item);
            // [API]: /api/:api_path/cart/:id[方法]: put[說明]: product_id(String)、qty(Number) 為必填欄位、[參數]: { "data": { "product_id":"-L9tH8jxVb2Ka_DYPwng","qty":1 } }
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
            const cart = {
                product_id: item.product_id,
                qty: item.qty,
            };
            this.$http.put(url, { data: cart })
            .then((res) => {
                console.log(res);
                this.status.loadingItem = '';
                this.getCart();
            })
        },
    },
    created () {
        this.getCart()
    },
}
</script>