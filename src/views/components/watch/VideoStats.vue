<template>
    <v-card
        outlined color="transparent"
        class="ma-0"
    >
        <p :style='`font-size:${fontSize}px`' class="video-stats-info ma-0">
            {{views}} views
            <span v-if="$vuetify.breakpoint.mdAndUp">
                <v-icon>mdi-circle-medium</v-icon>
                {{date}}
            </span>
        </p>
    </v-card>
</template>

<script>
export default {
    props: {
        views: {
            type: Number,
            required: true,
        },
        date: {
            type: String,
            required: true
        },
        fontSize: {
            type: Number,
            required: false,
            default: 15
        }
    }

}
</script>

<style scoped>
    @media screen and (max-width: 420px) {
        .video-stats-info {
            font-size: 14px;
            color: lightgray;
        }
    }
</style>