<script>

export default {
  data() {
    return {
      getJson: null,
      getLink: null,
      ceva: null,
      saveLanguage: "#include <stdio.h>" + "\n" + "int main()" + "\n" + "{" + "\n" + "printf(\"Hello World\");" + "\n" + "return 0;" + "\n" + "}"
    };
  },
  methods: {
    async fetchApi() {
      let url = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
      let CLIENT_SECRET = '1a80e1a9dace5d8646d8638f34add000202f94bb';
      let textBox = document.getElementById("textBox").value;
      let inputValue = document.getElementById("textBoxInput").value;
      let language = document.getElementById("language").value;


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
      let CLIENT_SECRET = '1a80e1a9dace5d8646d8638f34add000202f94bb';

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
    fillWithText(lang) {
      this.saveLanguage = lang.target.value;
      switch (lang.target.value) {
        case "CPP":
          this.saveLanguage = "#include <iostream>" + "\n" +
            "using namespace std;" + "\n" +
            "int main()" + "\n" +
            "{" + "\n" +
            " cout<<'Hello World';" + "\n" +
            "return 0;" + "\n" +
            "}"
          break;
        case "PYTHON":
          this.saveLanguage = "print ('Hello World')";
          break;
        case "C":
          this.saveLanguage = "#include <stdio.h>" + "\n" +
            "int main()" + "\n" +
            "{" + "\n" +
            "printf(\"Hello World\");" + "\n" +
            "return 0;" + "\n" +
            "}"
          break;
        case "JAVA":
          this.saveLanguage = "public class Main" + "\n" +
            "{" + "\n" +
            "public static void main(String[] args) {" + "\n" +
            "System.out.println('Hello World');" + "\n" +
            "}" + "\n" +
            "}";
          break;
        case "PHP":
          this.saveLanguage = "<?php" + "\n" +
            "echo 'Hello World';";
          break;
        case "CSHARP":
          this.saveLanguage = "using System;" + "\n" +
            "class HelloWorld {" + "\n" +
            "static void Main() {" + "\n" +
            "Console.WriteLine('Hello World');" + "\n" +
            "}" + "\n" +
            "}";
          break;
        case "JAVASCRIPT":
          this.saveLanguage = "print('Hello World');"
          break;
        case "R":
          this.saveLanguage = "print('Hello World')";
          break;
        case "RUBY":
          this.saveLanguage = "puts 'Hello World'";
          break;
      }
    }


  },
};
</script>

<template>

  <v-container fluid>
    <v-col>
      <v-row>
        <v-sheet>
          <div>
            <select id="language" @change="fillWithText($event)">

              <option value="C">c</option>
              <option value="CPP">c++</option>
              <option value="CSHARP">c#</option>
              <option value="JAVA">java</option>
              <option value="JAVASCRIPT">javascript</option>
              <!-- <option value="KOTLIN">kotlin</option> -->
              <option value="PHP">php</option>
              <option value="PYTHON">python</option>
              <option value="R">r</option>
              <option value="RUBY">ruby</option>

            </select>
          </div>
          <div>

            <v-textarea bg-color="white" color="white" label="Code" placeholder="ceva" id="textBox" variant="solo"
              style="width: 225%;" :model-value="this.saveLanguage"></v-textarea>

          </div>
        </v-sheet>
      </v-row>
      <v-row>
        <v-sheet>
          <v-container fluid>
            <v-row no-gutters>
              <v-col class="mr-0">
                <v-sheet class="ma-0 pa-0">
                  <div v-if="getJson">
                    <v-btn variant="flat" color="secondary" @click="getApi">Get my Api</v-btn>
                  </div>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet>
                  <div>
                    <v-btn variant="flat" color="secondary" @click="fetchApi">Post my Api</v-btn>
                  </div>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>

        </v-sheet>
      </v-row>

      <v-row>
        <v-sheet>
          <div>


            <v-text-field bg-color="white" color="white" label="Input" placeholder="ceva" variant="solo"
              id="textBoxInput"></v-text-field>

            <textarea rows="4" cols="50" placeholder="ceva" id="textBoxOutput"></textarea>


          </div>
        </v-sheet>
      </v-row>
    </v-col>
  </v-container>

</template>

<style scoped>
#textBoxOutput {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 16px;
  resize: none;
}
</style>