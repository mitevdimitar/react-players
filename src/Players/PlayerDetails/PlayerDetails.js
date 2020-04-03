import React from './node_modules/react';



/* {{#if isMyPet}}
<section class="detailsMyPet">
    <h3>{{name}}</h3>
    <p>Pet counter: <i class="fas fa-heart"></i>{{likes}}</p>
    <p class="img"><img src="{{imageURL}}"></p>
    <form action="#" method="POST">
        <textarea type="text" name="description">{{description}}</textarea>
        <button class="button"> Save</button>
    </form>
</section>
{{else}} */
<section className="detailsOtherPet">
    <h3>{{name}}</h3>
    <p>Pet counter: {{likes}} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                Pet</button></a>
    </p>
    <p className="img"><img src="{{imageURL}}"></p>
    <p className="description">{{description}}</p>
</section>