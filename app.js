const people = [
    {
        img: "https://lh3.googleusercontent.com/proxy/NXKEkTw-aKbLX5tt4y8AMO-E8oNysAu3Yi0bFLncisO61Gcs-4nDCocAS7_dFg3X9R3_-OvM4ve7o4pUevAKbKfOGvdk7SSSlBI8RtNXhDaCyk9YSNEbCKGCnkmNoH6U1YIkOmf5",
        name: "Sammy",
        title: "Lead Engineer",
        about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. "
    },
    {
        img: "https://www.generatorslist.com/public/img/people/billionaires/tadashi-yanai-thumb.jpg",
        name: "Adam",
        title: "HR Manager",
        about: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui"
},
    {
        img: "https://data.whicdn.com/images/326594994/original.jpg",
        name: "Larisa",
        title: "Front-end Designer",
        about: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one"
},
    {
        img: "https://i1.sndcdn.com/avatars-000062524911-k1a5hn-t500x500.jpg",
        name: "Supa Hot Fire",
        title: "Firing Manager",
        about: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa"
}
]

const image = document.getElementById("img");
const pname = document.querySelector(".name");
const title = document.querySelector(".title");
const about = document.querySelector(".about");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

var index = 0;

console.log(people.length)

image.src = people[index].img; 
pname.textContent = people[index].name;
title.textContent = people[index].title;
about.textContent = people[index].about;
prev.disabled = true;

next.addEventListener("click", function(){
    if(index < people.length-1){
        index++;
        console.log(index)
        prev.disabled = false;
    }

    if(index === people.length-1){
        next.disabled = true;
    }

    image.src = people[index].img; 
    pname.textContent = people[index].name;
    title.textContent = people[index].title;
    about.textContent = people[index].about;
})

prev.addEventListener("click", function(){

    if(index > 0){
        index--;
        next.disabled = false;
    }

    if(index === 0){
        prev.disabled = true;
    }

    image.src = people[index].img; 
    pname.textContent = people[index].name;
    title.textContent = people[index].title;
    about.textContent = people[index].about;
})