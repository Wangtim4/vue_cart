<template>
    <div class="container mt-5">
        <table class="table border align-middle">
            <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
                <th>小計</th>
            </thead>
            <tbody>
                <template>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
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
            // pagination: {},
            product: {},
            status: {
                // 2對應品項id
                loadingItem: '',
            },
            cart: {},
            messages: '',
            coupon_code: '',
        };
    },
    methods: {
        getCart() {
            // [API]: /api/:api_path/cart[方法]: get
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            console.log(url);
            this.$http.get(url)
                .then((res) => {
                    console.log(res.data);
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