Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            emailArray:[],
            temp: null
        },
        methods:{
            arrayCreation: function(){
                for (i = 0; i < 10 ; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                    this.temp = response.data.response
                    this.emailArray.push(this.temp)
                    });
                };
                
                
            },
                  
            

               
            
        },
        created: function(){
            this.arrayCreation();
            
        }
    }
);

         