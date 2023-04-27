<template>
    <div class="container mt-5">
        <table class="table border align-middle">
            <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
                <th></th>
            </thead>
            <tbody>
                <template>
                    <tr v-for="item in cart.carts" :key="item.id">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.item.qty }}</td>
                        <td>{{ item.final_total}}</td>
                        <td>{{ item.total }}</td>
                    </tr>
                </template>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">總數</td>
                    <td>共 NT$</td>
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
        }
    },
    created () {
        this.getCart()
    }
}
</script>