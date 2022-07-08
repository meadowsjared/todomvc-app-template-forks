<template>
	<a
		:class="{ selected: filter === activeValue }"
		@click="$emit('click', activeValue)"
		href="#/"
		>{{ label }}</a
	>
</template>

<script setup lang="ts">
defineProps<{
	filter: string;
	label: string;
	activeValue: string;
}>();

defineEmits<{
	(event: "click", value: string): void;
}>();
</script>
