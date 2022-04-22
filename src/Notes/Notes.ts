/*
{} = Object

"" = Sting (Generally on property, many times with actual words inside)

[] = Array

<component to import />

{{}} = Display variable/text as text in on web page.

//<script setup lang="ts">
place for code
</script>//

Example for index/key of part (for loop):
<Todo v-for="(todo,index) of todoArray" :key="index" :todo="todo"/>
*/
/* Commands-
ctrl+p = search bar
pnpm dev = Run
alt+shift+down arrow = copy to next line (just select end of line)
ctrl+a > ctrl+shift+p > Wrap with abbreviation > Type whatever to add tot op and bottom line

let checked = true;
if (checked) {
	checked = false;
} else {
	//otherwise
}

todos.forEach(item => {
	console.log("item", item);
})

console.log(hi from App.vue", asdf);
</script>

interface = class = you define the properties "thing" has(in programming terms)

v-for = repeats an element based on an array
IE: "<Todo v-for="(todo,index) of todoArray" :key="index" :todo="todo"/>"

If/Else/For loop:
let asdf = [1, 2, 3];
console.log("Hey hey! You bastage", todoArray);
if (asdf.length == 2){
	console.log("Five is right out!")
}else {
	console.log("Three Sir!")
}
asdf.forEach((flip) => {
	console.log("output", flip)
})



Bandayd code stuffs:
for future reference the 4 pieces you need for a good v-model is:
on the instance of the component set the param ofc:
v-model="myVariable"
optionally you can use
@update:modelValue="handleModelValue"
to trigger when the value updates from the parent
then in the component add the prop
const props = defineProps({
    modelValue: { type: Array as PropType<string[]>, default: [] as Array<string> },
});

then in the component that uses v-model
const emit = defineEmits(["update:modelValue"]);
then in that same component, you need to fire the update with:
emit("update:modelValue", newVmodelValue)

Simple Example of text box variable interaction:
<input type="text" v-model="name"/>
	Hello, my name is {{name}}
const name = ref("Cory")

:class="{ completed: checked }" == Add completed property to class based on checked value
CSS = how you define how everything looks/"acts"

const numbers: number[] = [1, 6, 4, 3, 23, 45, 76]; ==
const numbers: Array<number> = [1, 6, 4, 3, 23, 45, 76];

*/
