<script setup>
    import Input from './components/Input.vue';
    import DatePicker from './components/DatePicker.vue';
</script>

<template>
    <div class="flex flex-col w-full gap-6 p-4">
        <h1 class="text-3xl text-white border-b-2 font-title border-b-accPink w-fit">Settings</h1>
        <form class="flex flex-col gap-7">
            <Input title="Username" placeholder="R0kkxSynetique" :label="true"/>
            <Input title="Lastname" placeholder="Fontana" :label="true"/>
            <Input title="Firstname" placeholder="Benjamin" :label="true"/>
            <DatePicker title="Birthdate" placeholder="19-08-2003" :label="true"/>
        </form>
    </div>
</template>