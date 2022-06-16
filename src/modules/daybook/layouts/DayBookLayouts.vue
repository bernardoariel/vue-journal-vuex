<template>
  <NavBar />
  <div class="d-flex">
      <div cass="col-4">
          <EntryList />
      </div>
      <div cass="col">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from "vue";
export default {
   components:{
       NavBar: defineAsyncComponent(()=>import('../components/NavBar.vue')),
       EntryList: defineAsyncComponent(()=>import('../components/EntryList.vue')),
       
   }
}

</script>