var products = [{
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 25,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
}, {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
}, {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8,
    picture_url: "http://htmlgiant.com/wp-content/uploads/2013/11/HowtoWinFriendsandInfluencePeopleCover.jpg"
}, {
    name: "Dark Side of the Moon",
    category: "music",
    selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
    price: 100,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
}, {
    name: "Thriller",
    category: "music",
    selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
    price: 19,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
}, {
    name: "Ella & Luis",
    category: "music",
    selling_points: ["How could you not?", "Seriously, though..."],
    price: 110,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
}]

function featured(){
    var firstProduct = _.first(products);
    var imageUrl = firstProduct["picture_url"];
    $("#featuredPic").attr("src", imageUrl);
};

featured();

function clearance(){
    var lastProduct = _.last(products);
    var imageUrl = lastProduct["picture_url"];
    $("#clearancePic").attr("src", imageUrl);
};

clearance();


/* _.filter working

var filterBooks = _.filter(products, function(index) {
    return index.category === "books";
});

var printBookName = _.each(filterBooks, function(index) {
    $("#filter").append("<br>" + index.name);
}); */


/* _.reject

var filterBooks = _.filter(products, function(index) {
    return index.category === "books";
});

var rejectPrice = _.reject(filterBooks, function(index) {
    return index.price > 20;
});

var printBookName = _.each(rejectPrice, function(index) {
    $("#filter").append("<br>" + index.name);
}); */


/* _.uniq */

var filterBooks = _.filter(products, function(index) {
    return index.category === "books";
});

var rejectPrice = _.reject(filterBooks, function(index) {
    return index.price > 20;
});

var printBookName = _.each(rejectPrice, function(index) {
    $("#filter").append("<br>" + index.name);
});

var printSellingPoints = _.each(rejectPrice, function(index) {
    $("#uniq").append("<br>" + _.uniq(index.selling_points));
});


