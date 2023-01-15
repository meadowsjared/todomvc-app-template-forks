<template>
	<div class="background">
		<p class="message" @click="loadOnboardingTodos">Load Onboarding Todos?</p>
	</div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/todo-store";
const TodoStore = useTodoStore();
function loadOnboardingTodos() {
	console.log("Load Onboarding Todos");
	TodoStore.loadOnboardingTodos();
}
</script>

<style scoped>
.background {
	background-color: #f5f5f5;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.message {
	font-size: 20px;
	color: #999;
	cursor: pointer;
	user-select: none;
}
</style>
