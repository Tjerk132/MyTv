<template>
    <span 
       v-text='duration'
       class="time-status rounded-sm ma-1" 
    />
</template>

<script>
export default {
    name: "ThumbnailOverlayTimeStatus",
    props: {
        durationMillis: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            duration: {
                type: String,
                default: '00:00'
            }
        }
    },
    mounted() {
        this.duration = this.msToTime(this.durationMillis);
    },
    methods: {
        msToTime(duration) {
            let 
                hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((duration / (1000 * 60)) % 60),
                seconds = Math.floor((duration / 1000) % 60);
                // milliseconds = parseInt((duration % 1000) / 100),

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
       
            return ((hours > 0) ? `${hours}:` : '') +
                   ((minutes > 0) ? `${minutes}:` : '') +
                     seconds; // + `.${milliseconds}`;
        }
    }

}
</script>

<style scoped>
    .time-status {
        background-color: black;
        color: white;
        font-size: 1.1rem;
        letter-spacing: 0.5px;
        padding: 0px 2px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    @media screen and (max-width: 420px) {
        .time-status {
            font-size: 0.9rem;
            padding: 0px 3px;
        }
    }
</style>