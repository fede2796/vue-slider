// Ciao ragazzi,
// Esercizio di oggi: Vue Slider
// nome repo: vue-slider
// Descrizione:
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.

var app = new Vue(
    {
        el: '#app',
        data: {
            attivelement : 0,

             slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
        },
        
        methods: {
            NextImage(){
                if(this.attivelement > 0){
                    //decremento l'elemento
                    this.attivelement--;
                }else{
                    this.attivelement = this.slides.length - 1;
                }
            },
            Previousimage(){
                if(this.attivelement < this.slides.length - 1){
                    //aumento di uno l'elemento
                    this.attivelement++;
                }else{
                    this.attivelement = 0;
                }
            },
            clickSlides(index){
                this.currentActiveElement = index;  
            }
        }
    }
) 


