
/* GET homepage */
const foodlist = function(req,res){
    res.render('foodlist',{foods:foodArray});
    };
const favouritefood=function (req, res) {
res.render('favouritefood', { title:myfavfood});
};
var foodArray =[ 
    {name:"Oatmeal", 
     type:"Breakfast"
},
    
   {
    name:"rice", 
    type:"Lunch"
    },
{
    name:"salad",
   type:"Dinner"
    }];



const myfavfood="rice";

module.exports ={
favouritefood,
    foodlist
};
                
                
                


