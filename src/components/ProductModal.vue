<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
ref="modal">
<!-- ref="modal" 存取-->
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    // 載入node_modules\bootstrap\js\src\modal 使用
    import Modal from "bootstrap/js/dist/modal";

    export default {
        data () {
            return {
                modal: {},
            }
        },
        methods: {
          showModal () {
            this.modal.show();
          },
          hideModal () {
            this.modal.hide();
          }
        },
        // 元件載入完成才會運作
        mounted () {
            // this.$refs.modal指向外部html的ref="modal" 動元素
            // this.modal指向內部data的modal:{}
            this.modal = new Modal(this.$refs.modal);
        }
    }
</script>