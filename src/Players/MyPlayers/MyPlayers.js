{{> header}}
<section class="my-players">
    <h1>My Pets</h1>
    <ul class="my-players-list">
        {{#each myPets}}
        {{> myPetInfo}}
        {{/each}}
    </ul>
</section>
{{> footer}}