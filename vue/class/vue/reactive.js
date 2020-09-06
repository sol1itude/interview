function defineReactiveData(data, key, value){
    Object.defineProperty(data, key, {
        get(){
            return value
        },

        set(newVal){
            if(newVal === value) return;
            value = newVal;
        }
    })
}

export default defineReactiveData