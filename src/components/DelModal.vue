<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <!-- 加入ref="modal" -->
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <span>刪除 {{ item.title }}</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    是否刪除<strong class="text-danger">{{ item.title }}</strong>(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">確認刪除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 載入node_modules\bootstrap\js\src\modal 使用
import Modal from "bootstrap/js/dist/modal";

export default {
    props: {
        item: {},
    },
    data () {
        return {
            modal: '',
        };
    },
    methods: {
        showModal () {
            this.modal.show();
        },
        hideModal () {
            this.modal.hide();
        },
    },
    mounted () {
        this.modal = new Modal(this.$refs.modal);
    }
}
</script>