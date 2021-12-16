// Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.
// 1 - al click su uno dei pallini mostrare l’immagine in posizione corrispondente
// 2 - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        images: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg',
        ]
    },
    methods: {
        next: function () {
            this.counter += 1;
            if (this.counter > this.images.length - 1) {
                this.counter = 0;
            }
        },
        back: function () {
            this.counter -= 1;
            if (this.counter < 0) {
                this.counter = this.images.length - 1;
            }
        }, 
        timer: function () {
            setInterval(this.next, 3000);
        },
        stopped: function () {
            clearInterval(this.timer);
        }
    },
    created() {
        this.timer()
    }
});

