<script>

export default {
    data() {
        return {
            keys:null,

        };
    },
    methods: {
        async verifyAdmin() {
            let email=document.getElementById("email").value;
            let password=document.getElementById("password").value;
            await fetch('https://webproject-f4fe7-default-rtdb.firebaseio.com/Sefu.json',
                {
                    method: "GET"
                }).
                then((resp) => resp.json())
                .then(data => {
                    this.keys = Object.keys(data);
                    console.log(this.keys);
                });
                await fetch(`https://webproject-f4fe7-default-rtdb.firebaseio.com/Sefu/${this.keys}.json`,
                {
                    method: "GET"
                }).
                then((resp) => resp.json())
                .then(data => {
                console.log(data);
                    if((email===data.Email)&&(password===data.Password)){

                    }
                });
                
               

        }
    },
};
</script>

<template>
    <v-main>
        <v-responsive class="mx-auto" max-width="344">
            <v-text-field label="E-mail" hide-details="auto" id="email"></v-text-field>
        </v-responsive>
        <v-responsive class="mx-auto" max-width="344">
            <v-text-field label="Password" hide-details="auto" id="password"></v-text-field>
        </v-responsive>

        <v-btn variant="flat" color="secondary" @click="verifyAdmin">
            Secondary
        </v-btn>
        
    </v-main>


</template>

<style scoped>
#textBoxOutPut {
    left: 10px;
}
</style>