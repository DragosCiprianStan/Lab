<script>
export default {
    data() {
        return {
            keys: [],
            getId: null,
            getJson: null,
            getLink: null
        };
    },
    methods: {
        async fetchApi() {
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
                "time_limit": 99999,
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
            }).then(response => response.json())
                .then(result => this.getJson = result);

        },

        async getApi() {
            let CLIENT_SECRET = '00cd6a25a9c47c0d21634f559db985a66c26b66e';

            await fetch(this.getJson.status_update_url, {
                method: 'GET',
                headers: {
                    'client-secret': CLIENT_SECRET,
                }

            }).then(response => response.json())
                .then(response => {
                    console.log(response)

                    fetch(response.result.run_status.output)
                        .then((response) => response.text())
                        .then((data) => {
                            document.getElementById("textBoxOutput").value = data;
                        });

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
                        console.log(data);

                    });

            }

        },
        getButton(getButt) {

            this.getId = getButt;
        }

    },
};
</script>

<template>
    <v-main>
        <component :is="getChallange"></component>
        <div v-if="!getId">
            <li v-for="item in keys">
                <v-btn variant="flat" color="secondary" class="testbutt" @click="getButton(item)">{{ item }}</v-btn>
            </li>
        </div>
        <div v-else>
            <select id="language" @change="onChangeSite">

                <option value="C">c</option>
                <option value="CPP">c++</option>
                <option value="CSHARP">c#</option>
                <option value="JAVA">java</option>
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
                    <v-btn variant="flat" color="secondary" @click="fetchApi">Post my Api</v-btn>
                </div>
                <v-textarea bg-color="black" color="black" label="Code" placeholder="ceva" id="textBox"></v-textarea>
                <v-textarea bg-color="black" color="black" label="Input" placeholder="ceva" id="textBoxInput">
                </v-textarea>

                <textarea rows="4" cols="50" placeholder="ceva" id="textBoxOutput"></textarea>

                <p id="p"></p>
                <div v-if="getJson">
                    <button @click="getApi">Get my Api</button>

                    "
                </div>
            </div>
        </div>


    </v-main>


</template>

<style scoped>

</style>