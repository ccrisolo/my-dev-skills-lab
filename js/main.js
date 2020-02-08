let skill;
let template;
let rmvButton;


$('.submit').on('click', function(e) {
    e.preventDefault();
    skill = $('#new-skill').val();
    console.log(skill);
    template =
    `<div class="skill">
        <button class="delete">X</button>
        <p>${skill}</p>
    </div>`
    $('section').append(template);
});

rmvButton = $('.skills').on('click', 'button', function (){
    $(this).closest('.skill').remove();
    console.log($(rmvButton));
    // $('div.skill').remove();
})