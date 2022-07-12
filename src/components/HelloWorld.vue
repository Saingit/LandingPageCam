<template>
<div>
  <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="modal.hide()">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    
  </div>
    <button type="button" class="btn btn-primary" @click="modal.show()">
    Launch demo modal
  </button>
</div>

</template>
<script>
import { Modal } from 'bootstrap'
export default {
  name: "App",
  data: () => ({
    modal: null
  }),
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal)
  }
};
</script>
