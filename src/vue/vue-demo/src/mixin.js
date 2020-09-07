export default {
    data(){
        return{
            num: 1
        }
    },
    created() {
        this.hello()
    },

    methods: {
        fn1(){
            console.log('fn1 from mixin')
        },
        fn2(){
            console.log('fn2 from mixin')
        }
    },
}