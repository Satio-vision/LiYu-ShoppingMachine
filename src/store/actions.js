import axios from 'axios'
const actions = {
    getMallNav({commit,state}){
        axios.get('/static/data.json')
        .then((res)=>{
              console.log('res.data',res.data.goods)
              commit('_getMallNav',res.data.goods)
          })
    },
    getMemberPayRes({commit,state}){
        axios.get('/static/memberPayRes.json')
        .then((res) => {
            console.log('getMemberPayRes',res.data.memberPayRes)
            commit('_getMemberPayRes',res.data.memberPayRes)
        })
    }
}
export default actions