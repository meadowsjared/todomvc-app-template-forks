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
      <button class="destroy" @click="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type Todo from "../domain/Todo";
const props = defineProps({
  modelValue: { type: Object as PropType<Todo>, required: true },
});
const emit = defineEmits(["update:modelValue", "destroyTodo"]);
const checked = ref(props.modelValue.checked);
function toggleChecked() {
  console.log("toggleChecked", props.modelValue.checked);
  const newValue = props.modelValue;
  newValue.checked = props.modelValue.checked;
  checked.value = props.modelValue.checked;
  emit("update:modelValue", newValue);
}

function destroy() {
	console.log("destroy", props.modelValue.id)
	emit("destroyTodo")
}
</script>
