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
            let level = document.getElementById("Level").value;
            let name = document.getElementById("Name").value;
            let corectInput1 = document.getElementById("CorectInput1").value;
            let corectInput2=document.getElementById("CorectInput2").value;
            let corectInput3=document.getElementById("CorectInput3").value;
            let corectOutput1 = document.getElementById("CorectOutput1").value;
            let corectOutput2=document.getElementById("CorectOutput2").value;
            let corectOutput3=document.getElementById("CorectOutput3").value;
            let bodyJson = {
                "Problem": `${problem}`,
                "Input": `${input}`,
                "Output": `${output}`,
                "Example": `${example}`,
                "Level": `${level}`,
                "Name": `${name}`,
                "CorectInput1": `${corectInput1}`,
                "CorectInput2":`${corectInput2}`,
                "CorectInput3":`${corectInput3}`,
                "CorectOutput1": `${corectOutput1}`,
                "CorectOutput2":`${corectOutput2}`,
                "CorectOutput3":`${corectOutput3}`
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
            <v-textarea label="Name" variant="outlined" id="Name"></v-textarea>
            <v-textarea label="Problem" variant="outlined" id="Problem"></v-textarea>
            <v-textarea label="Input" variant="outlined" id="Input"></v-textarea>
            <v-textarea label="Output" variant="outlined" id="Output"></v-textarea>
            <v-textarea label="Example" variant="outlined" id="Example"></v-textarea>
            <v-textarea label="Level" variant="outlined" id="Level"></v-textarea>
            <v-textarea label="CorectInput1" variant="outlined" id="CorectInput1"></v-textarea>
            <v-textarea label="CorectInput2" variant="outlined" id="CorectInput2"></v-textarea>
            <v-textarea label="CorectInput3" variant="outlined" id="CorectInput3"></v-textarea>
            <v-textarea label="CorectOutput1" variant="outlined" id="CorectOutput1"></v-textarea>
            <v-textarea label="CorectOutput2" variant="outlined" id="CorectOutput2"></v-textarea>
            <v-textarea label="CorectOutput3" variant="outlined" id="CorectOutput3"></v-textarea>
        </v-container>
        <v-btn variant="flat" color="secondary" @click="setNewChallange">
            Send
        </v-btn>
    </v-main>
</template>

<style scoped>

</style>