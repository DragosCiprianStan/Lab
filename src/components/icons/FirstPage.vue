<template>
    <header class="cap">
        <p class="intro">Cea mai buna cale,</p>
        <p class="intro">sa inveti programare</p>
    </header>
    <div class="testbutt"></div>

    <main>
        <div class="testbutt"></div>
        <v-row>
            <v-col>

                <p class="mainIntro">Invata simplu,</p>
                <p class="mainIntro">Invata Rapid,</p>
                <p class="mainIntro">Invata oriunde,</p>
                <p class="mainIntro">Doar cu Cod Remote.</p>

            </v-col>
            <v-col>

            </v-col>
        </v-row>
        <div class="testbutt"></div>
        <v-row>
            <v-col>



            </v-col>
            <v-col>
                <p class="notMainIntro">Cod remote este o cale rapida si usoara</p>
                <p class="notMainIntro">de-a invata programare,oferind o sumedenie</p>
                <p class="notMainIntro">de exerciti,testate,care pot fii applicate in cele</p>
                <p class="notMainIntro">mai cunoscute limbaje de probramare.</p>
            </v-col>
        </v-row>
    </main>

</template>
<style>
.notMainIntro {}

.intro {

    font-family: 'Jokerman', sans-serif;
    text-align: center;
    font-size: 6.2vw;

}

.cap {
    position: relative;

    margin-top: 200px;
    margin-bottom: 250px;
}

.testbutt {
    border-bottom-style: solid;
    width: 90%;
    position: relative;
    left: 5%;
}

.mainIntro {
    font-family: 'Ink Free', sans-serif;
    font-size: 5.0vw;
    margin-bottom: 30px;
    margin-left: 50px;
    margin-top: 30px;

}

.NormalCharacterStyle {
    font-family: Juice ITC;
    font-size: 350px;
    color: rgb(0, 0, 0);
    transform: rotate(90deg);
    margin-top: 20%;

}
.notMainIntro{
 font-size: 2.5vw;
    margin-bottom: 20px;

    margin-top: 30px;

}
</style>