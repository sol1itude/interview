<template>
    <div>
        <h1>asda</h1>
        <input type="text" :value="value" @input="change($event)">
    </div>
</template>

<script>
export default {
    name: 'Vmodel',
    props: {
        value: String
    },
    methods: {
        change(event){
            if(event.inputType === "insertText"){
                console.log(2);
              this.$emit("input",this.value + event.data);
            }else{
                console.log(1);
              this.$emit("input",this.value.substring(0,this.value.length-1));
            }

        }
    },
}
</script>

<style>

</style>