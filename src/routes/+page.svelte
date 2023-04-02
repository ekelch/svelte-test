<script>

    let cats = [
        {name: 'Ossi',
        age: 5},
        {name: 'Liefje',
        age: 7},
        {name: 'Silja',
        age: 0.6}]

    /** @type {Date} */
    let date = new Date();

    /** @type {import('$lib/types').testType} */
    let t = {
        name: 'evan',
        age: 55
    }

</script>

{#each cats as {name, age}, i}
    <p>{name} is {age} years old, and is cat #{i+1}</p>
{/each}

<p>{date}</p>

<p>Name is {t.name} and age is {t.age}</p>