<template>
    <div class="list-group list-group-flush">
        <b-list-group-item
            v-bind:key="l"
            v-for="l in Object.keys(files)"
            class="list-group-item list-group-item-action bg-light border-0 align-items-center p-2 pl-3"
            :to="{ name: 'Details', params: { id: l }}">
            <font-awesome-icon icon="file" />
            {{ files[l].name }}
        </b-list-group-item>
    </div>
</template>

<script>
export default {
    name: "FilesList",
    props: ["files"]
}
</script>