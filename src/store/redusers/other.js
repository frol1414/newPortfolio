const initialState = {
  photos: [
    {img: '/images/photo/1.jpg', class: "blue"},
    {img: '/images/photo/2.jpg', class: "pink"},
    {img: '/images/photo/3.jpg', class: "yellow"},
    {img: '/images/photo/4.jpg', class: "yellow"},
    {img: '/images/photo/5.jpg', class: "pink"},
    {img: '/images/photo/6.jpg', class: "blue"},
  ],
  facts: [
    {title: 'Люблю кодить, если я не пишу, значит я ем', desc: "или сплю, или путешествую", class: 'blue'},
    {title: 'Я постоянно что-то читаю или смотрю, чтобы узнать новое', desc: "рецепты по еде не учитываю", class: 'pink'},
    {title: 'я умный парень', desc: "ну так говорит моя мама", class: 'yellow'},
    {title: 'я слушая музыку, всегда везде', desc: "правда остальным тоже приходится слушать", class: 'blue'},
    {title: 'У меня нет вредных привычек', desc: " ну кроме компьютерных игр", class: 'pink'},
    {title: 'Никогда не давайте мне играть в Факторио', desc: "никогда, слышите, никогда", class: 'yellow'},
  ]
}
//frontfas.com/frontfas.dev/frontfa.com/frontfa.dev/fullstacker.ru/fafront.dev

//Это мое небольшое портфолио с описанием моих навыков и списком моих работ. Если будет необходимо в конце есть мои контакты.

/* факты
- Люблю кодить, если я не пишу, значит я ем...или сплю, или путешествую
- Я постоянно что-то читаю или смотрю, чтобы узнать новое...рецепты по еде не учитываю
- я умный парень...честно...ну так говорит моя мама
- я слушая музыку, всегда везде...правда остальным тоже приходится слушать
- У меня нет вредных привычек, ну кроме компьютерных игр
- Никогда не давайте мне играть в Факторио...никогда, слышите, никогда

* */
export default function skillsReducer(state = initialState, action) {
  return state
}