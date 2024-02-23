<template>
	<li :class="{ completed: checked }">
		<div class="view">
			<input
				class="toggle"
				type="checkbox"
				v-model="props.modelValue.checked"
				@update:modelValue="toggleChecked"
			/>
			<label>{{ props.modelValue.message }}</label>
			<button @click="destroy" class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template" />
	</li>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Todo } from "../domain/Todo";

const emit = defineEmits(["update:modelValue", "destroyTodo"]);

const props = defineProps({
	modelValue: { type: Object as PropType<Todo>, required: true },
});

const checked = ref(props.modelValue.checked);

function toggleChecked() {
	console.log("function toggleChecked()");
	const newValue = props.modelValue;

	checked.value = props.modelValue.checked;

	emit("update:modelValue", newValue);
}

function destroy() {
	console.log("BURNINATE!");

	emit("destroyTodo");
}
</script>

<style scoped>
.toggle .destroy {
	cursor: pointer;
}

.completed {
	color: #949494;
	text-decoration: line-through;
}

@media screen and (max-width: 700px) {
	button.destroy {
		display: flex;
	}
}
</style>
