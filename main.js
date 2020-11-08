// Collapsible elements ***TRAINING page***
var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    var content= this.nextElementSibling;/*pokazivac na trenutnui elemenr, pa njegov sledeci rodjak uzimam*/
    /*toggle - ako nije aktivirana klasa, aktivira je i obrnuto*/
    this.classList.toggle('active');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
  });
}
////////////////////////////////////////////////////////////////////////////////
//***********************************PREVOD************************************
function prevodIndex() {
    document.getElementById('pocetna-nav').innerHTML = "Home";
    document.getElementById('onama-nav').innerHTML = "About us";
    document.getElementById('treninzi-nav').innerHTML = "Training";
    document.getElementById('karate-nav').innerHTML = "Karate";
    document.getElementById('kontakt-nav').innerHTML = "Contact";
    document.getElementById('author-nav').innerHTML = "About author";
    document.getElementById('karate-jaca').innerHTML = "Karate strengthens both mind and body";
    document.getElementById('karate-zivot').innerHTML = "Everything in life is part of karate, discover this wonderful truth";
    document.getElementById('kursevi').innerHTML = "Courses";
    document.getElementById('dobrodosli').innerHTML = "Welcome to Karate Club Tutin";
    document.getElementById('legende').innerHTML = "Train with legends";
    document.getElementById('legende-p').innerHTML = "Karate Club Tutin was founded in 1995 out of great love for children and karate skills on the one hand and the irresistible need to transfer knowledge to young people and thus leave a mark in the development of their personality and the history of karate in our country.";
    document.getElementById('misija').innerHTML = "Mission of Karate Club Tutin";
    document.getElementById('misija-p').innerHTML = "The mission of KKT is to develop motor, functional and psychological abilities of children, as well as to improve karate skills in technical and tactical terms with its members. Through the system of karate training and budo education, self-discipline, concentration, responsibility, self-confidence are developed.";
    document.getElementById('procitaj').innerHTML = "Read more &rarr;";
    document.getElementById('ponude').innerHTML = "What we offer";
    document.getElementById('izreka-o-ribi').innerHTML = "If you give a man a fish, you will feed him in one day." + "<br> If you teach him to catch a fish, you will feed him for life.";
    document.getElementById('karate-obav').innerHTML = "We would like to inform you that Karate Club Tutin will organize a karate course in September. All those interested can apply until the end of September.";
    document.getElementById('aerobik').innerHTML = "Aerobics";
    document.getElementById('aerobik-o').innerHTML = "We would like to inform you that Karate Club Tutin will organize an aerobics course for women in September. <br> Those interested can apply until the end of September.";
    document.getElementById('teretana').innerHTML = "Gym";
    document.getElementById('teretana-o').innerHTML = "The gym at the Karate Club Tutin is enrolling new members. <br> Those interested over the age of 15 can apply until the end of September.";
    document.getElementById('teretana').innerHTML = "Gym";
    document.getElementById('pers-trening').innerHTML = "Personal training";
    document.getElementById('pers-trening-p').innerHTML = "Karate club Tutin is organizing the enrollment of new members who want to have personal trainings at inst. martial arts of Samir Bačevac.";
    document.getElementById('kick-p').innerHTML = "During September, Karate Club Tutin will organize enrollment in the Kick-box for interested children under 10 years of age.";
    document.getElementById('box-p').innerHTML = "We would like to inform you that Karate Club Tutin will organize enrollment in the box course during September. <br> All those interested can apply until the end of September.";


    document.getElementById('samo').innerHTML = "Only";
    document.getElementById('kupi').innerHTML = "Buy now";
    document.getElementById('samo1').innerHTML = "Only";
    document.getElementById('kupi1').innerHTML = "Buy now";
    document.getElementById('samo2').innerHTML = "Only";
    document.getElementById('kupi2').innerHTML = "Buy now";
    document.getElementById('samo3').innerHTML = "Only";
    document.getElementById('kupi3').innerHTML = "Buy now";
    document.getElementById('samo4').innerHTML = "Only";
    document.getElementById('kupi4').innerHTML = "Buy now";
    document.getElementById('samo5').innerHTML = "Only";
    document.getElementById('kupi5').innerHTML = "Buy now";
    document.getElementById('posaljiDugme').innerHTML = "Send";
    document.getElementById('meet').innerHTML = "Meet our team";
    document.getElementById('treneri-dugme').innerHTML = "All coaches";
    document.getElementById('mitko-p').innerHTML = "Club president and WSKF instructor. Black Belt DAY 2.";
    document.getElementById('samko-p').innerHTML = "Martial arts coach and WSKF instructor. Black Belt DAY 3.";
    document.getElementById('nane-p').innerHTML = "Professional club advisor and WSKF instructor. Black belt DAY 7.";

    document.getElementById('utisci').innerHTML = "WHAT PEOPLE SAY";
    document.getElementById('utisci-p').innerHTML = "We always take into account people's motivational words and their thoughts on creating a better world.";
    document.getElementById('buba-p').innerHTML = "The essence of karate and the main goal of the training is to improve ourselves and we work hard on it. <br> <br> Karate taught me what discipline, respect, responsibility and self-control are, and thus guided me on how to become a better person. "+"Karate for me is not a sport, but a way of life.";
    document.getElementById('buba-pp').innerHTML = "<span>Fazila F. Berovic </a> </span> <br> <i> Security Manager </i>";
    document.getElementById('naki-p').innerHTML = "Practicing karate teaches us not only the skill of fighting, self-defense, competition, etc. <br> It teaches us to respect ourselves, but also everything around us. <br>Proverb says: <br> ' The ultimate goal is neither victory nor defeat, but the perfection of character in practice.'";
    document.getElementById('naki-pp').innerHTML = "<span>Naser Dazdarević</span><br><i>Lawyer</i>";
    document.getElementById('nera-p').innerHTML = "Karate club Tutin is a club that has a soul, which, in addition to karate, also teaches the true values of life. I trained karate for a full ten years. This noble sport has given me many opportunities, among which I would single out explosiveness and calmness as the main ones. <br>Karate literally means empty hand and full heart, I would add.";
    document.getElementById('nera-pp').innerHTML = "<span> Nermina Balić </span> <br> <i> Psychologist </i>";

    //Footer
    document.getElementById('kontakt-f').innerHTML = "Contact";
    document.getElementById('linkovi-f').innerHTML = "Useful links";
    document.getElementById('onama-f').innerHTML = "About us";
    document.getElementById('kontakt-f').innerHTML = "Contact";
    document.getElementById('treneri-f').innerHTML = "Coaches";
    document.getElementById('treninzi-f').innerHTML = "Training";
    document.getElementById('radno-f').innerHTML = "Working hours";
    document.getElementById('radno-f1').innerHTML = "Mon - Wed:";
    document.getElementById('radno-f2').innerHTML = "Thu - Fri:";
    document.getElementById('radno-f3').innerHTML = "Sat:";
    document.getElementById('radno-f4').innerHTML = "Sun:";
    document.getElementById('prava-f').innerHTML = "& copy 2020 Karate Club Tutin. All rights reserved.";

    //Popup
    document.getElementById('prijavise').innerHTML = "Sign up now";
    document.getElementById('prijavise-p').innerHTML = "The deadline for payment of enrolled courses is only 24 hours, or 48 hours if the course is enrolled during the weekend. <br> All information you provide to us is protected and will not be shared with another person.";
    document.getElementById('placanje').innerHTML = "Cash payment in the premises of the Karate Club Tutin.";
    document.getElementById('pozdrav').innerHTML = "Sports greetings!";
    document.getElementById('ime').innerHTML = "Name";
    document.getElementById('prezime').innerHTML = "Last name";
    document.getElementById('telefon').innerHTML = "Phone";
    document.getElementById('izaberite').innerHTML = "Choose a course:";
    document.getElementById('aerobik1').innerHTML = "Aerobics";
    document.getElementById('teretana2').innerHTML = "Gym";
    document.getElementById('personalni-trenizni2').innerHTML = "Personal training";
    document.getElementById('godine').innerHTML = "Age:";
    document.getElementById('pol').innerHTML = "Gender:";
    document.getElementById('musko').innerHTML = "Male";
    document.getElementById('zensko').innerHTML = "Female";
    document.getElementById('posalji').innerHTML = "Send";
}
function prevodOnama() {
    //Header
    document.getElementById('pocetna-nav1').innerHTML = "Home";
    document.getElementById('onama-nav1').innerHTML = "About us";
    document.getElementById('treninzi-nav1').innerHTML = "Training";
    document.getElementById('karate-nav1').innerHTML = "Karate";
    document.getElementById('kontakt-nav1').innerHTML = "Contact";
    document.getElementById('author-nav1').innerHTML = "About author";
    document.getElementById('heading-2').innerHTML = "About us";
    document.getElementById('home2').innerHTML = "Home";
    document.getElementById('onama2').innerHTML = "About us";
    document.getElementById('vizija').innerHTML = "Vision";
    document.getElementById('misija1').innerHTML = "Mision";
    document.getElementById('misija-p').innerHTML = "The mission of the Karate Club Tutin is to develop the motor, functional and psychological abilities of children, as well as to improve the karate skill in technical and tactical terms with its members. Through the system of karate training and budo education, self-discipline, concentration, responsibility, self-confidence are developed.";
    document.getElementById('naslov1').innerHTML = "About Karate Club Tutin";
    document.getElementById('vizija-p').innerHTML = "Our vision is that through the systematic learning of karate skills, moral and ethical codes, we positively influence the development of the child's overall personality and the creation of top results.";
    document.getElementById('cilj').innerHTML = "Purpose";
    document.getElementById('cilj-p').innerHTML = "The goal of Karate Club Tutin is to train its members in karate skills through the training process. Designing their free time, distracting from negative influences, providing opportunities for personal expression and social development of children and youth through socializing and competitions, as well as other forms of creativity.";
    document.getElementById('wskf').innerHTML = "Karate club Tutin is a member of the World Shotokan Karate Federation, the most massive karate federation in the world. The club employs educated and professional coaches, former members of the national team.";
    document.getElementById('treneri').innerHTML = "qualified coaches";
    document.getElementById('sportisti').innerHTML = "karate and boxer";
    document.getElementById('pojasevi').innerHTML = "black belts";
    document.getElementById('medalje').innerHTML = "international medals";

    document.getElementById('naslov2').innerHTML = "Meet our dedicated team";
    document.getElementById('tim-2').innerHTML = "Practicing for a thousand days is a discipline, <br> and practicing for ten thousand days is grooming.";
    document.getElementById('mitko1').innerHTML = "Club president and WSKF instructor. Black Belt DAY 2.";
    document.getElementById('samko1').innerHTML = "Martial arts coach and WSKF instructor. Black Belt DAY 3.";
    document.getElementById('nane1').innerHTML = "Professional club advisor and WSKF instructor. Black belt DAY 7.";
    document.getElementById('nera').innerHTML = "Deputy Head Coach. <br> Black Belt DAY 1.";
    document.getElementById('fakica1').innerHTML = "Club marketing manager and deputy head coach. Brown belt 1. KYU.";
    document.getElementById('miki').innerHTML = "Deputy Head Coach. <br> Black Belt DAY 1.";

    document.getElementById('nasov3').innerHTML = "Karate club Tutin - karate federation";
    document.getElementById('naslov-galerija').innerHTML = "Our gallery";
    document.getElementById('slika1').innerHTML = "Juniors/seniors/cadets";
    document.getElementById('slika2').innerHTML = "Competitors";
    document.getElementById('slika3').innerHTML = "Bronze medal";
    document.getElementById('slika4').innerHTML = "Examination Board";
    document.getElementById('slika5').innerHTML = "Competition in Pristina";
    document.getElementById('slika6').innerHTML = "Competition group";
    document.getElementById('slika7').innerHTML = "State championship";
    document.getElementById('slika8').innerHTML = "Ulcinj - Ulqini open 2017ć";
    document.getElementById('slika9').innerHTML = "Seminar in Skopje <br> Nazim Kurtović";
    document.getElementById('slika10').innerHTML = "Sandzak games";
    document.getElementById('slika11').innerHTML = "Competition - Macedonia";
    document.getElementById('slika12').innerHTML = "European Vice Champions <br> Zurich 1982. Nazim Kurtović";
    document.getElementById('slika13').innerHTML = "Kick-Box training";
    document.getElementById('slika14').innerHTML = "Tournament 'Siniša Podvinski - Niš'";
    document.getElementById('slika15').innerHTML = "Martial arts rally";
    //MAIN
    document.getElementById('naslov1').innerHTML = "About Karate Club Tutin";
    document.getElementById('misija1').innerHTML = "Mission";
    document.getElementById('misija-p').innerHTML = "The mission of the Karate Club Tutin is to develop the motor, functional and psychological abilities of children, as well as to improve the karate skill in technical and tactical terms with its members. Through the system of karate training and budo education, self-discipline, concentration, responsibility, self-confidence are developed.";
    document.getElementById('misija1').innerHTML = "Mission";
    //Footer
    document.getElementById('kontakt-f1').innerHTML = "Contact";
    document.getElementById('linkovi-f1').innerHTML = "Useful links";
    document.getElementById('onama-f1').innerHTML = "About us";
    document.getElementById('kontakt-f1').innerHTML = "Contact";
    document.getElementById('treneri-f1').innerHTML = "Coaches";
    document.getElementById('treninzi-f1').innerHTML = "Training";
    document.getElementById('radno-f1').innerHTML = "Working hours";
    document.getElementById('radno-f11').innerHTML = "Mon - Wed:";
    document.getElementById('radno-f21').innerHTML = "Thu - Fri:";
    document.getElementById('radno-f31').innerHTML = "Sat:";
    document.getElementById('radno-f41').innerHTML = "Sun:";
    document.getElementById('prava-f1').innerHTML = "& copy 2020 Karate Club Tutin. All rights reserved.";
}
function prevodTreninzi() {
    //Header
    document.getElementById('pocetna-nav2').innerHTML = "Home";
    document.getElementById('onama-nav2').innerHTML = "About us";
    document.getElementById('treninzi-nav2').innerHTML = "Training";
    document.getElementById('karate-nav2').innerHTML = "Karate";
    document.getElementById('kontakt-nav2').innerHTML = "Contact";
    document.getElementById('author-nav2').innerHTML = "About author";
    document.getElementById('heading-2').innerHTML = "Training";
    document.getElementById('home2').innerHTML = "Home";
    document.getElementById('onama2').innerHTML = "Training";

    document.getElementById('pon').innerHTML = "Mon";
    document.getElementById('uto').innerHTML = "Tue";
    document.getElementById('sre').innerHTML = "Wed";
    document.getElementById('cet').innerHTML = "Thu";
    document.getElementById('pet').innerHTML = "Fri";
    document.getElementById('sub').innerHTML = "Sat";
    document.getElementById('ned').innerHTML = "Sun";

    document.getElementById('teretana1').innerHTML = "Gym:<br>8.00 - 16.00";
    document.getElementById('teretana2').innerHTML = "Gym:<br>8.00 - 16.00";
    document.getElementById('teretana3').innerHTML = "Gym:<br>8.00 - 16.00";
    document.getElementById('teretana4').innerHTML = "Gym:<br>9.00 - 16.00";
    document.getElementById('teretana5').innerHTML = "Gym:<br>9.00 - 16.00";
    document.getElementById('teretana6').innerHTML = "Gym:<br>8.00 - 12.00";
    document.getElementById('teretana7').innerHTML = "Gym:<br>8.00 - 12.00";

    document.getElementById('aeorbik1').innerHTML = "Aerobics:<br>18.00 - 19.30";
    document.getElementById('aeorbik2').innerHTML = "Aerobics:<br>18.00 - 19.30";
    document.getElementById('aeorbik3').innerHTML = "Aerobics:<br>18.00 - 19.30";
    document.getElementById('naslov2').innerHTML = "TRAINING DATES"
    document.getElementById('ptrening1').innerHTML = "Personalni trening:<br>19.30 - 21.00";
    document.getElementById('ptrening2').innerHTML = "Personalni trening:<br>19.30 - 21.30";
    document.getElementById('ptrening3').innerHTML = "Personalni trening:<br>19.30 - 21.00";
    document.getElementById('ptrening4').innerHTML = "Personalni trening:<br>19.30 - 21.30";

    document.getElementById('citat').innerHTML = "I'm not afraid of a man who has practiced 10,000 strokes once, <br> but I'm afraid of a man who has practiced one stroke 10,000 times.";

    document.getElementById('naslov22').innerHTML = "<span>?</span>Frequently asked questions";
    document.getElementById('prvenstvo-p').innerHTML = "Serbian Championship for starters, pioneers and hopes 2013" + "<br> Nermina Balić and Velid Hajrović - 3rd place in kumite ";

    document.getElementById('collapse1').innerHTML = "Can I get hurt in training?";
    document.getElementById('collapse2').innerHTML = "Can I watch your workouts even though I don’t train?";
    document.getElementById('collapse3').innerHTML = "Can I miss karate training?";
    document.getElementById('collapse4').innerHTML = "Can I be expelled from the club and why?";
    document.getElementById('collapse5').innerHTML = "When are new students enrolled in the Karate Club Tutin?";
    document.getElementById('collapse6').innerHTML = "Do I need to be fit to start training karate?";
    document.getElementById('collapse7').innerHTML = "What are exams and how are they organized?";
    document.getElementById('collapse8').innerHTML = "What should I do when I have to miss training?";
    document.getElementById('collapse9').innerHTML = "Is there a discount for children?";
    document.getElementById('collapse10').innerHTML = "Is it necessary to procure training equipment immediately?";
    document.getElementById('collapse11').innerHTML = "Da li mogu da se takmičim na karate turnirima?";

    document.getElementById('a1').innerHTML = "Injuries are possible as in any other martial art. With the help of protective equipment and controlled kicks in karate, the chances of that are very small.";
    document.getElementById('a2').innerHTML = "Yes, you can if you keep quiet. Come with your friend and see for yourself the quality of the training";
    document.getElementById('a3').innerHTML = "For a justified reason, you can miss classes, and you need to inform the responsible coach the day before the scheduled training.";
    document.getElementById('a4').innerHTML = "Yes, you can be expelled from the club for one of the following reasons: due to unjustified ten absences from training, inappropriate behavior ..";
    document.getElementById('a5').innerHTML = "Admission of new karatekas is usually twice a year: in mid-January and early September. Enrollment information is published through our web portal.";
    document.getElementById('a6').innerHTML = "No. With regular training and strong will, you will gain the necessary fitness.";
    document.getElementById('a7').innerHTML = "Passing for the belts is a demonstration of knowledge in front of an expert commission, which based on that makes its decision whether someone has really mastered and adopted the given program.";
    document.getElementById('a8').innerHTML = "You should inform the responsible coach the day before the scheduled training.";
    document.getElementById('a9').innerHTML = "Yes, there is a discount for children with the same parents. The price for the first child is standard, for the second child a 25% discount on the monthly membership fee, and for each subsequent child the karate course is free.";
    document.getElementById('a10').innerHTML = "For starters, it is enough to have a tracksuit or kimono. You do not need to have competition equipment if you are a beginner.";
    document.getElementById('a11').innerHTML = "Yes, if you deserve to go to the competition with your hard work, regular training and good behavior in the dojo (hall).";

    //Footer
    document.getElementById('kontakt-f2').innerHTML = "Contact";
    document.getElementById('linkovi-f2').innerHTML = "Useful links";
    document.getElementById('onama-f2').innerHTML = "About us";
    document.getElementById('kontakt-f22').innerHTML = "Contact";
    document.getElementById('treneri-f2').innerHTML = "Coaches";
    document.getElementById('treninzi-f2').innerHTML = "Training";
    document.getElementById('radno-f2').innerHTML = "Working hours";
    document.getElementById('radno-f12').innerHTML = "Mon - Wed:";
    document.getElementById('radno-f22').innerHTML = "Thu - Fri:";
    document.getElementById('radno-f32').innerHTML = "Sat:";
    document.getElementById('radno-f42').innerHTML = "Sun:";
    document.getElementById('prava-f3').innerHTML = "& copy 2020 Karate Club Tutin. All rights reserved.";
}
function prevodKarate() {
    //Footer
    document.getElementById('linkovi-karate').innerHTML = "Useful links";
    document.getElementById('onama-karate').innerHTML = "About us";
    document.getElementById('kontakt-karate').innerHTML = "Contact";
    document.getElementById('treneri-karate').innerHTML = "Coaches";
    document.getElementById('treninzi-karate').innerHTML = "Training";
    document.getElementById('radno-karate').innerHTML = "Working hours";
    document.getElementById('radno-karate1').innerHTML = "Mon - Wed:";
    document.getElementById('radno-karate2').innerHTML = "Thu - Fri:";
    document.getElementById('radno-karate3').innerHTML = "Sat:";
    document.getElementById('radno-karate4').innerHTML = "Sun:";
    document.getElementById('prava-karate').innerHTML = "& copy 2020 Karate Club Tutin. All rights reserved.";
    //Main
    document.getElementById('naslov-s').innerHTML = "Karate and its specifics";
    document.getElementById('naslov3').innerHTML = "Karate as a way of life";
    document.getElementById('karate-par').innerHTML = "The art of the empty hand, originating from India and transmitted through China, Okinawa and the whole of Japan, has acquired the dimensions of a modern, contemporary sports competition. However, the basic principles of karate, which were nurtured by the ancient Japanese warriors - samurai, have not lost their force. Much more important than the kicks and punches, defense and attack, blocks and captures are the values that every modern society tries to nurture. The creator of modern karate is Okinawan karate master Gichin Funakoshi.";
    document.getElementById('naslov33').innerHTML = "In a healthy body, a healthy spirit";
    document.getElementById('karate-para').innerHTML = "Regular karate exercise not only develops healthy bones, joints and muscles, but also reduces obesity, develops and improves cognitive abilities. Practitioners learn new skills and realistically assess their capabilities, trying to be their own original, and by no means someone else's copy. <br><br>Karate fighters strive for constant improvement, constant search for new knowledge and harmony of mind and body. Starting from the fact that most of the problems are in the person himself, they are constantly looking at how far they have come and what should be corrected. Overcoming weakness of one's own volition is the ultimate goal of exercise.";
    document.getElementById('nazim-citat').innerHTML = "'Practice martial arts and be in the faith, <br> in time you will become a confident and unwavering person <br> who will stand firm on the ground.'";
    document.getElementById('podela').innerHTML = "Modern karate is divided into three parts";
    document.getElementById('kihon').innerHTML = "Kihon - technique";
    document.getElementById('kihon-p').innerHTML = "Kihon is a Japanese term meaning 'basics - basics'. The term KIHON is used to denote the basic techniques that are learned and practiced as the foundation of karate. <br> <br> The practice and mastery of KIHON is essential for all advanced training and includes exercises of proper body shape and breathing, while practicing the basics attitudes, punches, blocks, blocks and punches and includes the floor through which these basic principles of karate are applied.";
    document.getElementById('kata').innerHTML = "Kata - a fight with an imaginary opponent";
    document.getElementById('kata-p').innerHTML = "Kata translated means 'form', also 'fight with an imaginary opponent'. It is a set of predetermined movements that consists of defensive and offensive techniques. Such a set of strokes has its specific shape and the order in which the techniques are performed. <br> <br> There are student and master kata.";
    document.getElementById('kumite').innerHTML = "Kumite - fight";
    document.getElementById('kumite-p').innerHTML = "Kumite literally means 'fight with hands' and is one of the three main parts of karate training, together with KIHON and KATA. <br> <br> Kumite in sports karate is a separate competitive discipline, where two competitors compete on the battlefield. against each other, according to the rules of sports karate wrestling.";
    //Pravila
    document.getElementById('funakosi').innerHTML = "Twenty Principles of Funakoshi Gichi";
    document.getElementById('p1').innerHTML = "1. Karate begins and ends with respect.";
    document.getElementById('p2').innerHTML = "2. There is no first attack in karate.";
    document.getElementById('p3').innerHTML = "3. Karate helps the right one.";
    document.getElementById('p4').innerHTML = "4. Get to know yourself before you meet others.";
    document.getElementById('p5').innerHTML = "5. Spirit before technique.";
    document.getElementById('p6').innerHTML = "6. Free the mind.";
    document.getElementById('p7').innerHTML = "7. Accidents happen out of carelessness.";
    document.getElementById('p8').innerHTML = "8. Karate is not only practiced in the dojo (gym).";
    document.getElementById('p9').innerHTML = "9. You will never stop learning karate.";
    document.getElementById('p10').innerHTML = "10. Everything in life is part of karate, discover this wonderful truth";
    document.getElementById('p11').innerHTML = "11. Karate is like hot water, if you don't heat it, it will cool down quickly.";
    document.getElementById('p12').innerHTML = "12. Don't think you have to win, think how not to lose.";
    document.getElementById('p13').innerHTML = "13. Let your answer be in accordance with the opponent.";
    document.getElementById('p14').innerHTML = "14. Lead the battle with natural strategy.";
    document.getElementById('p15').innerHTML = "15. Imagine that your hands and feet are natural swords.";
    document.getElementById('p16').innerHTML = "16. Go out the door and face a thousand enemies.";
    document.getElementById('p17').innerHTML = "17. First master low, and then natural attitudes.";
    document.getElementById('p18').innerHTML = "18. Always practice Kata correctly, fighting is another matter.";
    document.getElementById('p19').innerHTML = "19. Never forget your strengths and weaknesses, the limitations of the body and the relative quality of your techniques.";
    document.getElementById('p20').innerHTML = "20. Constantly improve your mind.";

    document.getElementById('pojasevi').innerHTML = "Belts in karate";
    document.getElementById('zvanja').innerHTML = "Student and master titles";
    document.getElementById('zvanja-p').innerHTML = "Karate titles are divided into student and master. Student vocations are also called KYU titles. Master titles are called DAY.";
    document.getElementById('b0').innerHTML = "White belt"
    document.getElementById('b1').innerHTML = "Yellow belt"
    document.getElementById('b2').innerHTML = "Red belt"
    document.getElementById('b3').innerHTML = "Green belt";
    document.getElementById('b4').innerHTML = "Green belt";
    document.getElementById('b5').innerHTML = "Blue belt";
    document.getElementById('b6').innerHTML = "Blue belt";
    document.getElementById('b7').innerHTML = "Brown belt";
    document.getElementById('b8').innerHTML = "Brown belt";
    document.getElementById('b9').innerHTML = "Brown belt"
    document.getElementById('b10').innerHTML = "Black belt"

    //Header
    document.getElementById('pocetna-nav3').innerHTML = "Home";
    document.getElementById('onama-nav3').innerHTML = "About us";
    document.getElementById('treninzi-nav3').innerHTML = "Training";
    document.getElementById('karate-nav3').innerHTML = "Karate";
    document.getElementById('kontakt-nav3').innerHTML = "Contact";
    document.getElementById('author-nav3').innerHTML = "About author";
    document.getElementById('heading-3').innerHTML = "Karate";
    document.getElementById('home3').innerHTML = "Home";
    document.getElementById('onama3').innerHTML = "Karate";
    //Main

}
function prevodKontakt() {

}
function prevodAutor() {
    //Header
    document.getElementById('pocetna-nava').innerHTML = "Home";
    document.getElementById('onama-nava').innerHTML = "About us";
    document.getElementById('treninzi-nava').innerHTML = "Training";
    document.getElementById('karate-nava').innerHTML = "Karate";
    document.getElementById('kontakt-nava').innerHTML = "Contact";
    document.getElementById('author-nava').innerHTML = "About author";
    document.getElementById('heading-a').innerHTML = "About author";
    document.getElementById('homea').innerHTML = "Home";
    document.getElementById('onamaa').innerHTML = "About author";
    //Main
    document.getElementById('biografija').innerHTML = "I am a second year student of software engineering at the State University in Novi Pazar.<br><br> Karate club Tutin is a club where I trained karate for almost ten years. I am a black belt I DAY.<br><br> Inspired by the skills of karate and coaches in the club, I designed and programmed my first site for the club where I used to train and which was in this composition.<br><br><i>At the time when I started coding this site, I informed my coach and one of my life role models, Samir Bačevac. I should have shown him the site when I finished it. In the meantime, he died. The site remains to testify at least in part about our club.</i><br><br>If you have any constructive criticism regarding the site, write me an email:";

    document.getElementById('naslov-mygalerija').innerHTML = "My gallery";
    document.getElementById('obavestenje-p').innerHTML = "Diplomas from favorite competitions";
    //Footer
    document.getElementById('kontakt-a').innerHTML = "Contact";
    document.getElementById('linkovi-a').innerHTML = "Useful links";
    document.getElementById('onama-a').innerHTML = "About us";
    document.getElementById('kontakt-aa').innerHTML = "Contact";
    document.getElementById('treneri-a').innerHTML = "Coaches";
    document.getElementById('treninzi-a').innerHTML = "Training";
    document.getElementById('radno-a').innerHTML = "Working hours";
    document.getElementById('radno-a1').innerHTML = "Mon - Wed:";
    document.getElementById('radno-a2').innerHTML = "Thu - Fri:";
    document.getElementById('radno-a3').innerHTML = "Sat:";
    document.getElementById('radno-a4').innerHTML = "Sun:";
    document.getElementById('prava-a').innerHTML = "& copy 2020 Karate Club Tutin. All rights reserved.";
}
/******************************************************************************
                                  VALIDACIJA
******************************************************************************/
var provera1 = 1;
var provera2 = 1;
var provera3 = 1;

function proveriEmail() {
    var email = document.getElementById("UserEmail").value;
    var ispis2 = document.getElementById("ispis2");
    var regex = /^\w[a-z.!@#$%^&*()_+-=\d]+[\d|\w]@\w+(\.\w+)*$/gim;
    if(regex.test(email)===true) {
            ispis2.innerHTML = "";
            provera2 = 1;
        } else {
            text = "Email adresa treba biti napisana malim slovima i pre znaka @ mora da sadrži malo slovo ili broj";
            ispis2.innerHTML = text;
            ispis2.style.color = "red";
            provera2 = 0;
        }
}
function proveriPoruku() {
    //PORUKA
    var poruka = document.getElementById("UserMessage").value;
    var ispis3 = document.getElementById("ispis3");
    var regex = /^[[a-zA-Z\.\,\?\!\;\s]+\d{3}\/\d{3}-\d{2}-\d{2}(\s)?]{0,500}$/gim;
    if(regex.test(poruka)===true) {
            ispis3.innerHTML = "";
            provera3 = 1;
            ispis3.style.padding = "20px";
        } else {
            text = "Poruka mora da sadrži broj telefona na kraju XXX/XXX-XX-XX";
            ispis3.innerHTML = text;
            ispis3.style.color = "red";
            provera3 = 0;
        }
}
function proveriImeiPrezime() {
    var ime = document.getElementById("UserName").value;
    var ispis1 = document.getElementById("ispis1");
    // var regex = /^[A-Z]+\_[A-Z]+(\s+[A-Z]+)*(\s)*$/g;
    var regex = /^[A-Z][a-z]{5,}\_[A-Z][a-z]{5,}$/g;
    if(regex.test(ime)==true) {
            ispis1.innerHTML = "";
            provera1 = 1;

        } else {
            text = "Ime i prezime moraju biti napisani velikim slovima i razdvojeni znakom _";
            ispis1.innerHTML = text;
            ispis1.style.color = "red";
            provera1 = 0;
        }
}
function proveraForme() {
    proveriImeiPrezime();
    proveriEmail();
    proveriPoruku();
    if(provera1 && provera2 && provera3) {
        window.location.href = "uspesnaporuka.html";
    }
}
var ispisJedan = document.getElementById("UserName");
var pom1 = document.getElementById("ispis1");
ispisJedan.addEventListener("click", function() {
    pom1.innerHTML="Ime i prezime moraju biti napisani velikim slovima i razdvojeni znakom _";
    pom1.style.color = "blue";
});
var ispisDva = document.getElementById("UserEmail");
var pom2 = document.getElementById("ispis2");
ispisDva.addEventListener("click", function() {
    pom2.innerHTML="Email adresa treba biti napisana malim slovima i pre znaka @ mora da sadrži malo slovo ili broj";
    pom2.style.color = "blue";
});
var ispisTri = document.getElementById("UserMessage");
var pom3 = document.getElementById("ispis3");
ispisTri.addEventListener("click", function() {
    pom3.innerHTML="Poruka mora da sadrži broj telefona na kraju XXX/XXX-XX-XX";
    pom3.style.color = "blue";
});
