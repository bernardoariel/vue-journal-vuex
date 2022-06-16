// import { createStore } from 'vue'
// import journal from '../modules/daybook/store/journal';
// // Create a new store instance.
// const store = createStore({
//    modules:{
//     journal
//    }
// })
// export default store

import { createStore } from 'vuex'
import journal from '../modules/daybook/store/journal';
const store = createStore({
    modules:{
        journal:journal   
    }
})

export default store
