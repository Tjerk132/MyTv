<template>
    <a v-on:click='toChannel(channelName)'
    >
        <v-img class="rounded-circle"
            lazy-src="https://picsum.photos/id/11/10/6"
            :min-height='size'
            :min-width='size'
            :height='size'
            :width='size'
            :src='randomImg()'
            :aria-label='channelName'
            :title='channelName'
        >
        </v-img>
    </a>
</template>

<script>
export default {
    props: {
        channelName: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 30,
        }
    },
    methods: {
        toChannel(channelName) {
            this.$router.push({
                name: 'Channel',
                params: { c: channelName }
            });
        },
        randomImg() {
            let width = Math.floor(Math.random() * 300) + 200;  
            let height = Math.floor(Math.random() * 300) + 200;
            return `https://picsum.photos/${width}/${height}/`;
        }
    }

}
</script>

<style>
</style>