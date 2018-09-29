const mutations = {
    _getMallNav(state,data){
        state.mallNav = data
    },
    _getMemberPayRes(state,data){
        state.memberPayRes = data
    },
    _cleanMemberPayRes(state,data){
        console.log(data);
        state.memberPayRes = ''
    }
}
export default mutations;