<script>

export default {
    data() {
        return {

        };
    },
    methods: {
        async setNewChallange(){
            let bodyJson={
                "Problem":`${document.getElementById("Problem").value}`,
                "Input":`${document.getElementById("Input").value}`,
                "Output":`${document.getElementById("Output").value}`,
                "Example":`${document.getElementById("Example").value}`
            }
            await fetch('https://webproject-f4fe7-default-rtdb.firebaseio.com/Challange.json',
                {
                    method: "POST",
                    body:bodyJson
                }).
                then((resp) => resp.json())
                .then(data => console.log(data));
        }
    },

};
</script>

<template>
<v-main>
<v-textarea label="Problem" variant="outlined" id="Problem"></v-textarea>
<v-textarea label="Input" variant="outlined" id="Input"></v-textarea>
<v-textarea label="Output" variant="outlined" id="Output"></v-textarea>
<v-textarea label="Example" variant="outlined" id="Example"></v-textarea>
</v-main>
</template>

<style scoped>

</style>