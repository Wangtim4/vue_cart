<template>
    <table class="table mt-4">
        <thead>
            <tr>
                <th>訂購時間</th>
                <th>Email</th>
                <th>購買資料</th>
                <th>應附金額</th>
                <th>是否付款</th>
                <th>編輯</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, key) in orders" :key="key">
                <tr>
                   <td>{{item.create_at}}</td>
                   <td>Email</td>
                   <td>購買資料</td>
                   <td>應附金額</td>
                   <td>是否付款</td>
                   <td>編輯</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
<script>
export default {
    data () {
        return {
            order: {},
            pagination: {},
            tempOrder: {},
            currentPage: 1,
        };
    },
    components: {},
    methods: {
        getOrder (currentPage = 1) {
            this.currentPage = currentPage;
             // [API]: /api/:api_path/admin/orders?page=:page[方法]: get
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
            this.$http.get(url, this.tempOrder).then((res) => {
                console.log(res);
                this.orders = res.data.orders;
                this.pagination = res.data.pagination;
                console.log(this.orders, this.pagination);
            })
        }
    },
    created () {
        this.getOrder();
    },
}
</script>