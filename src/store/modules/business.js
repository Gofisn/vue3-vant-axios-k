export const HOME_ACTIVE = 'HOME_ACTIVE';


export default {
    state: {
        homeActive: 0, //交易首页标签页位置
        
    },
    mutations: {
        [HOME_ACTIVE](state, num) {
            state.homeActive = num;
        }
      
    },
    actions: {
        changeBusinessActive({
            commit
        }, num) {
            commit(HOME_ACTIVE, num);
        },
       
    }
}