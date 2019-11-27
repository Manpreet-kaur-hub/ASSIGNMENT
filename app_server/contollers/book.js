const homelist = function(req,res){
    res.render('index',{title:'WELCOME TO MY BOOKSTORE'});
    
};

const listdisplay = function(req,res){
    res.render('listdisplay',{book:bookArray});
    
};

var bookArray=[
    {
        title:"Unstoppable",
        author:"Dave Anderson"
    },
        {
        title:"Motivate Youself",
        author:"Andro Donovan"
    },
    
        {
        title:"The dip",
        author:"Seth Godin"
    },
    
];
module.exports={
    listdisplay,
    homelist
    
};