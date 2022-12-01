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
            getInput1: [],
            getInput2: [],
            getInput3: [],
            getOutput1: [],
            getOutput2: [],
            getOutput3: [],
            getUrlFromVerify: [],
            getLinkForVerify: [],
            saveDataVerify: [],
            debuggIsOk: null,
            getProblem: [],
            getInputProblem: [],
            getOutputPorblem: [],
            getExempleProblem: [],
            getLevelProblem: [],
            radios: null,
            ex11: [],

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
                "time_limit": 5,
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
                let saveGetInput=this.getInput[this.saveIndex];
                console.log(saveGetInput);

            for (let index = 1; index < this.getInput.length; index++) {
                var data = {
                    "lang": `${language}`,
                    "source": `${textBox}`,
                    "input": `${this.getInput[index]}`,
                    "memory_limit": 243232,
                    "time_limit": 5000,
                    "callback": "https://client.com/callback/",
                    "id": "client-001"
                };
                console.log(this.getInput[index])
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
            for (let index = 0; index < this.getLinkForVerify.length; index++) {
                await fetch(this.getLinkForVerify[index])
                    .then((response) => response.text())
                    .then((data) => {
                        this.saveDataVerify[index] = data;
                        console.log(this.saveDataVerify[index]);
                    });

            }

            console.log(this.saveDataVerify[0]);
            console.log(this.saveDataVerify[1]);
            console.log(this.saveDataVerify[2]);
            console.log(this.saveDataVerify[3]);
            console.log(this.getOutput1[this.saveIndex]);
            console.log(this.getOutput2[this.saveIndex]);
            console.log(this.getOutput3[this.saveIndex]);
            
            if ((this.saveDataVerify[0].trim() === this.getOutput1[this.saveIndex].trim()) && (this.saveDataVerify[1].trim() === this.getOutput1[this.saveIndex].trim()) && (this.saveDataVerify[2].trim() === this.getOutput2[this.saveIndex].trim()) && (this.saveDataVerify[3].trim() === this.getOutput3[this.saveIndex].trim())) {
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
                        this.getInput1[index] = data.CorectInput1;
                        this.getInput2[index] = data.CorectInput2;
                        this.getInput3[index] = data.CorectInput3;
                        console.log(data.CorectInput1);
                        console.log(data.CorectInput2);
                        console.log(data.CorectInput3);
                        this.getOutput1[index] = data.CorectOutput1;
                        this.getOutput2[index] = data.CorectOutput2;
                        this.getOutput3[index] = data.CorectOutput3;
                        this.getProblem[index] = data.Problem;
                        this.getInputProblem[index] = data.Input;
                        this.getOutputPorblem[index] = data.Output;
                        this.getExempleProblem[index] = data.Example;
                        this.getLevelProblem[index] = data.Level;


                    });

            }
            for (let index = 0; index < this.getInput1.length; index++) {
                console.log(this.getInput1[index])

            }
            for (let index = 0; index < this.getInput2.length; index++) {
                console.log(this.getInput2[index])

            }
            for (let index = 0; index < this.getInput3.length; index++) {
                console.log(this.getInput3[index])

            }
         

        },
        getButton(getButt, index) {
            this.saveIndex = index
            this.getId = getButt;
        },
        radioCanger(any) {
            this.radios = any;
        }



    },
};
</script>

<template>

    <div class="divInvisible">{{ this.getChallange() }}</div>

    <v-main>
        <div v-if="!getId">
            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3">
                        <v-sheet class="ma-2 pa-2">
                            <div class="LevelArea">
                                <li>
                                    <ul>
                                        <input type="radio" id="Eazy" name="Eazy" value="Eazy"
                                            @click="radioCanger('Easy')">
                                        <label for="Eazy">Eazy</label>
                                    </ul>
                                    <ul>
                                        <input type="radio" id="Mediu" name="Eazy" value="Mediu"
                                            @click="radioCanger('Mediu')">
                                        <label for="Mediu">Mediu</label>
                                    </ul>
                                    <ul>
                                        <input type="radio" id="Hard" name="Eazy" value="Hard"
                                            @click="radioCanger('Hard')">
                                        <label for="Hard">Hard</label>
                                    </ul>
                                </li>
                            </div>
                        </v-sheet>
                    </v-col>


                    <v-col>
                        <v-sheet class="ma-2 pa-2">
                            <li v-for="(item, index) in keys">
                                <div v-if="this.radios === null">
                                    <div class="testbutt" @click="getButton(item, index)">
                                        <p>{{
                                                this.getName[index]
                                        }} </p>
                                    </div>

                                </div>
                                <div v-else-if="this.radios === this.getLevelProblem[index]" class="testbutt"
                                    @click="getButton(item, index)">
                                    <p>{{
                                            this.getName[index]
                                    }} </p>

                                </div>
                            </li>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div v-else>
            <v-container>
                <v-row no-gutters>
                    <v-col>
                        <v-sheet class="ma-2 pa-2">
                            <div>
                                <h1>Cerinta</h1>
                                <p>{{ this.getProblem[this.saveIndex] }}</p>



                                <h1>Input</h1>
                                <p>{{ this.getInputProblem[this.saveIndex] }}</p>

                                <h1>Output</h1>
                                <p>{{ this.getOutputPorblem[this.saveIndex] }}</p>

                                <h1>Exemple</h1>
                                <p>{{ this.getExempleProblem[this.saveIndex] }}</p>
                            </div>
                        </v-sheet>
                    </v-col>


                    <v-col>
                        <v-sheet class="ma-2 pa-2">
                            <select id="language" @change="onChangeSite">

                                <v-option value="C">c</v-option>
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
                            <div class="borderZero">

                                <v-textarea bg-color="white" color="white" label="Code" placeholder="ceva" id="textBox"
                                    variant="solo">
                                </v-textarea>
                                <div>
                                    <v-container fluid>
                                        <v-row no-gutters>
                                            <v-col class="mr-0">
                                                <v-sheet class="ma-0 pa-0">
                                                    <div v-if="this.debuggIsOk" class="borderZero">
                                                        <v-btn variant="flat" color="secondary" @click="getApi">Run
                                                        </v-btn>
                                                    </div>
                                                </v-sheet>
                                            </v-col>
                                            <v-col class="mr-10">
                                                <v-sheet class="ma-0 pa-0">
                                                    <div class="borderZero">
                                                        <v-btn variant="flat" color="secondary" @click="getDebug">Debug
                                                        </v-btn>
                                                    </div>
                                                </v-sheet>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </div>
                                <v-text-field bg-color="white" color="white" label="Input" placeholder="ceva"
                                    variant="solo" id="textBoxInput">
                                </v-text-field>

                                <textarea  label="Code" placeholder="ceva" id="textBoxOutput" variant="solo"></textarea>



                            </div>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </div>


    </v-main>


</template>

<style scoped>
.testbutt {
    cursor: pointer;
    border-bottom-style: groove;

}

li {
    list-style-type: none;
}

.divInvisible {
    display: none;
    visibility: hidden;
}

.LevelArea {

    border: 1px solid;
    padding: 10px;
    bottom: 50px;
}

.borderZero {
    border: 0px;
}
.mr-10{
    margin-right: 183px !important;
}
.testbutt{
margin-bottom: 50px;
}
</style>