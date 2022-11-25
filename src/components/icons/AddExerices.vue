<script>

export default {
    data() {
        return {

        };
    },
    methods: {
        async setNewChallange() {
            let problem = document.getElementById("Problem").value;
            let input = document.getElementById("Input").value;
            let output = document.getElementById("Output").value;
            let example = document.getElementById("Example").value;
            let bodyJson = {
                "Problem": `${problem}`,
                "Input": `${input}`,
                "Output": `${output}`,
                "Example": `${example}`
            };
            await fetch('https://webproject-f4fe7-default-rtdb.firebaseio.com/Challange.json',
                {
                    method: "POST",
                    body: JSON.stringify(bodyJson)
                }).
                then((resp) => resp.json())
                .then(data => console.log(data));
        }
    },

};
</script>

<template>
    <v-main>

        <v-container fluid>
            <v-textarea label="Problem" variant="outlined" id="Problem"></v-textarea>
            <v-textarea label="Input" variant="outlined" id="Input" height="50%"></v-textarea>
            <v-textarea label="Output" variant="outlined" id="Output" height="50%"></v-textarea>
            <v-textarea label="Example" variant="outlined" id="Example" height="50%"></v-textarea>
        </v-container>
        <v-btn variant="flat" color="secondary" @click="setNewChallange">
            Send
        </v-btn>
    </v-main>
</template>

<style scoped>

</style>