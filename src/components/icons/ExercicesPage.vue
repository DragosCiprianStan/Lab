<script>
export default {
    data() {
        return {
            keys: [],
            getId: null,
            getJson: null,
            getLink: null,
            getJsonVerify: null,
            getName: [],
            getCorectExercices: [],
            getCorectExercicesInput: [],
            saveIndex: null,
            splitArray: [],
            isFine: null,
            getInput: [],
            getOutput: [],
            getUrlFromVerify: [],
            getLinkForVerify: [],
            saveDataVerify: [],
            debuggIsOk: null
        };
    },
    methods: {
        async getDebug() {
            /*
            let url = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
            let CLIENT_SECRET = '00cd6a25a9c47c0d21634f559db985a66c26b66e';
            let textBox = document.getElementById("textBox").value;

            let language = document.getElementById("language").value;
            let inputValue = document.getElementById("textBoxInput").value;

            var data = {
                "lang": `${language}`,
                "source": `${textBox}`,
                "input": `${inputValue}`,
                "memory_limit": 243232,
                "time_limit": 3000,
                "callback": "https://client.com/callback/",
                "id": "client-001"
            };
            console.log(data.source);
            await fetch(url, {
                method: 'POST',
                headers: {
                    'client-secret': CLIENT_SECRET,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then((result) => {
                    this.getJson = result;
                    console.log(result)
                });*/
            let url = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
            let CLIENT_SECRET = '00cd6a25a9c47c0d21634f559db985a66c26b66e';
            let textBox = document.getElementById("textBox").value;
            let language = document.getElementById("language").value;
            let inputValue = document.getElementById("textBoxInput").value;

            var data = {
                "lang": `${language}`,
                "source": `${textBox}`,
                "input": `${inputValue}`,
                "memory_limit": 243232,
                "time_limit": 3000,
                "callback": "https://client.com/callback/",
                "id": "client-001"
            };
            await fetch(url, {
                method: 'POST',
                headers: {
                    'client-secret': CLIENT_SECRET,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then((result) => {
                    this.getUrlFromVerify[0] = result.status_update_url;
                    this.getJson = result;
                    console.log(result)
                });
            for (let index = 1; index < this.getInput.length; index++) {
                var data = {
                    "lang": `${language}`,
                    "source": `${textBox}`,
                    "input": `${this.getInput[index]}`,
                    "memory_limit": 243232,
                    "time_limit": 3000,
                    "callback": "https://client.com/callback/",
                    "id": "client-001"
                };
                await fetch(url, {
                    method: 'POST',
                    headers: {
                        'client-secret': CLIENT_SECRET,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((response) => response.json())
                    .then((result) => {
              
                        this.getUrlFromVerify[index] = result.status_update_url;
                        console.log(result);
                    });


            }

            for (let index = 0; index < this.getUrlFromVerify.length; index++) {
                let saveUrl = this.getUrlFromVerify[index];
                await fetch(saveUrl, {
                    method: 'GET',
                    headers: {
                        'client-secret': CLIENT_SECRET,
                    }

                }).then((response) => response.json())
                    .then((response) => {
                        console.log(response)

                        this.getLinkForVerify[index] = response.result.run_status.output
                    });
            }
            console.log();
            for (let index = 0; index < this.getLinkForVerify.length; index++) {
                await fetch(this.getLinkForVerify[index])
                    .then((response) => response.text())
                    .then((data) => {
                        this.saveDataVerify[index] = data;
                    });

            }

            console.log(this.saveDataVerify[0]);
            console.log(this.getOutput[0]);
            if ((this.saveDataVerify[0].trim() === this.getOutput[0].trim()) && (this.saveDataVerify[1].trim() === this.getOutput[0].trim()) && (this.saveDataVerify[2].trim() === this.getOutput[1].trim()) && (this.saveDataVerify[3].trim() === this.getOutput[2].trim())) {
                this.debuggIsOk = true;
            } else {
                this.debuggIsOk = false;
            }

        },


        async getApi() {
            let CLIENT_SECRET = '00cd6a25a9c47c0d21634f559db985a66c26b66e';

            await fetch(this.getJson.status_update_url, {
                method: 'GET',
                headers: {
                    'client-secret': CLIENT_SECRET,
                }

            }).then((response) => response.json())
                .then((response) => {
                    console.log(response)
                    this.getLink = response.result.run_status.output;


                });

            await fetch(this.getLink)
                .then((response) => response.text())
                .then((data) => {
                    document.getElementById("textBoxOutput").value = data;
                });
            //response

        },

        async getChallange() {
            await fetch('https://webproject-f4fe7-default-rtdb.firebaseio.com/Challange.json',
                {
                    method: "GET"
                }).
                then((resp) => resp.json())
                .then(data => {
                    this.keys = Object.keys(data);
                    console.log(this.keys);


                });
            for (let index = 0; index < this.keys.length; index++) {


                await fetch(`https://webproject-f4fe7-default-rtdb.firebaseio.com/Challange/${this.keys[index]}.json`,
                    {
                        method: "GET"
                    }).
                    then((resp) => resp.json())
                    .then(data => {
                        console.log();
                        this.getName[index] = data.Name;
                        this.getCorectExercices[index] = data.Corect;
                        this.getInput[1] = data.CorectInput1;
                        this.getInput[2] = data.CorectInput2;
                        this.getInput[3] = data.CorectInput3;
                        this.getOutput[0] = data.CorectOutput1;
                        this.getOutput[1] = data.CorectOutput2;
                        this.getOutput[2] = data.CorectOutput3;

                    });

            }
            for (let index = 0; index < this.getInput.length; index++) {
                console.log(this.getInput[index])

            }

        },
        getButton(getButt, index) {
            this.saveIndex = index
            this.getId = getButt;
        },




    },
};
</script>

<template>
    <v-main>
        <component :is="getChallange"></component>
        <div v-if="!getId">
            <li v-for="(item, index) in keys">
                <v-btn variant="flat" color="secondary" class="testbutt" @click="getButton(item, index)">{{
                        this.getName[index]
                }}</v-btn>
            </li>
        </div>
        <div v-else>
            <select id="language" @change="onChangeSite">

                <option value="C">c</option>
                <option value="CPP">c++</option>
                <option value="CSHARP">c#</option>
                <option value="JAVA8">java</option>
                <option value="JAVASCRIPT">javascript</option>
                <option value="JAVASCRIPT_NODE">javascript_node</option>
                <option value="KOTLIN">kotlin</option>
                <option value="PHP">php</option>
                <option value="PYTHON">python</option>
                <option value="R">r</option>
                <option value="RUBY">ruby</option>

            </select>
            <div>
                <div>
                    <v-btn variant="flat" color="secondary" @click="getDebug">Debug</v-btn>
                </div>
                <v-textarea bg-color="black" color="black" label="Code" placeholder="ceva" id="textBox"></v-textarea>
                <v-textarea bg-color="black" color="black" label="Input" placeholder="ceva" id="textBoxInput">
                </v-textarea>

                <textarea rows="4" cols="50" placeholder="ceva" id="textBoxOutput"></textarea>

                <p id="p"></p>
                <div v-if="this.debuggIsOk">
                    <v-btn variant="flat" color="secondary" @click="getApi">Run</v-btn>

                    "
                </div>
            </div>
        </div>


    </v-main>


</template>

<style scoped>

</style>