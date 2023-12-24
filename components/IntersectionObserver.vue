<template>
    <div class="loader">
        <div ref="intersectionElement" />
        <loader v-if="isLoading" />
    </div>
</template>

<script lang="ts">
import Loader from '@/components/Loader.vue'
import { ref, onMounted, onUnmounted } from 'vue';
export default {
    name: 'IntersectionObserverComponent',
    emits: ['intersected'],
    components: {
        Loader
    },
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
        isLoading: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, { emit }) {
        const intersectionElement = ref(null);
        let intersectionObserver = null as any;

        const handleIntersection = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    // Element is intersecting, emit the "intersected" event
                    emit('intersected');
                }
            });
        };

        onMounted(() => {
            // Create Intersection Observer
            intersectionObserver = new IntersectionObserver(handleIntersection, props.options);

            // Start observing the element
            intersectionObserver.observe(intersectionElement.value);
        });

        onUnmounted(() => {
            // Stop observing when the component is unmounted
            if (intersectionObserver) {
                intersectionObserver.disconnect();
            }
        });

        return {
            intersectionElement,
        };
    },
};
</script>

<style scoped>
.loader {
    display: flex;
    justify-content: center;
}
</style>