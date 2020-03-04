/*<div id="myID">
<div v-for = "(x,index) in menu">
<h4>
{{ x.name }}
</h4>
<ul>
<li> {{ x.kCal }} </li>
</ul>
</div>
</div>  */ 


const box = new Vue ({
    el: '#site',
    data: {
        food:food,
        name: '',
        email: '',
        street: '',
        house: '',
        pay: '',
        picked: '',
        gender: '',
        orderBurger: [],
        showOrder: false,
        
    },
    methods: {
        markDone: function() {
            this.showOrder = true;
        }
    }
});
/*
const vm = new Vue ({
    el: '#contact',
    methods: {
        markDone: function(recipient, ) {
            this.output = this.Name + this.Email + this.Street + this.House + this.Recipient + this.Gender;
        }
    }
})
*/

   /* <div>
    <script src="https://vuejs.org/js/vue.js"></script>
    <div id="myID">
       {{ b1 }}<br>
        {{ b2 }}<br>
        {{ b3 }}<br>
        {{ b4 }}<br>
        {{ b5 }}
    <div> 
    <p id="b1"> 
    </p>
    <p id="b2">
    </p>
    <p id="b3">
    </p> 
    <p id="b4">  
    </p>
    <p id="b5">
    </p>
    </div>        
    </div>
    </div>*/
