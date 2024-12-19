/**
 * !জাভাস্ক্রিপ্ট অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং পার্ট ০১
 * 
 */

// 1. OOP hocce program korer akta style.
// 2. Amra chaile onno style follow kore o programming korte pari jemon functional programming. R ekta ace structure programming.
// 3. Code korer style bolte ami bujteci: Suppose tomer website a akjon user registration korbe.Registration korle user akta account create hoi. Oi account er through te apni email pass diye aber login korte paren.Akn j notun user create holo sheta k ashole kivabe rakben apni ba kivabe apni program a use korben shetai hocce muloto style. Apni chaile ata k object akhare rakhte paren. Object akhare rakhle apni akta user k object ba bostu hishebe kolpona korte paren. Tahole object a ki ki thakbe user er name,user email,userer phone no., tar por o kicu kaj korte parbe jemon: o ai porjonoto kotota movie subscribe korce. Tar mane object hocce software er amon akta ongsho jekhane onkgula variabel thake jake property boli and oi variable gula niye kaj korer jonno onk function thakte pare jeta k method bola hoi.Orthad amn akta style jekhane ami j topic er upor kaj korteci oi topic related property and method eksathe takhe. Ai style takei ami bolteci OOP.
// 4. Tahole OOP in a single line ata hocce programme korer style jekhane ami j bishoy niye code korci like: user er account khola, user er movie dekhar code korteci. J kajta korci korer time a oi kaj related j j variable gula amr dorkar and j j function amer dorkar sobgula k eksathe akata object er moddhe dukiye rakci. Ai style takei bola hoi OOP.

//5. OOP style a kaj korer jonno amader OOP er 4ta piller sommondhe jante hobe: 1. Abstraction, 2. Inheritance, 3. Polymorphism, 4. Encapsulation.

//6. Abstruction: J complex jinishgula behind the scene hobe ami shegula user k dekhabo na. User jokon "register btn" a click korbe register hoye jabe,but register j hocce kivabe hocce,kon variable ki data jacce shetar process ta amra user k dekhabo na. Atai hocce abstruction.

//7.Encapsulation: Encapsulation and Abstruction akta r ektar stahe related. Dorun registration korle j object create hobe shekhane user er name ace,email ace,and user koita movie te subscribe korce sheta dekhar jonno akta function ace. Tar mane 2tar variable and 1ta function. Akn oi function ta oi variable gula use korte pare. Tahole aikhane property and function ta binde kore ace. Ai j bind kore thakar j beparta shetai hocce encapsulation. Taile abstruction hocce jotil jinish kivabe data rakteci,data kivabe calcuate hocce ata user teke hide korbo.R encapsulation hocce data and function ekstahe bind kore rakci jtar jonno abstraction achieve korte parci. Tahole Abstraction and encapsulation hocce onkta similar. Mot kothai  abstraction hocce akta darona : jotil jinish user teke lukhano. Lukabo kisher maddhome ultimately encapsulation er maddhome. Ami variable and function eksathe rakle tar mane ata encapsulate hoye gece. Akat capsule er moddhe data o ace , function o ace. Er fole user complex jinish teke dhure shore jacce.Tahole abstraction o hoye jacce.

//8.Inheritance: mane hocce uttoradhikar shutre akta object r akta object er onk kicu use korte parbe. Jta porobortite details a janbo.

//9.Polymorphism: akta jinisher onkgula rup k bujai. Mane akta object j function k use korbe r ekta object o oi function k differnt rup a use korte pare. agula code korer somoy bujbo.

// 10. Akn amra obj kivabe banai sheta dekhbo:
let cars ={
    brand: "Toyota"
}
// 11. ai obj ta access kori:
console.log(cars);
let arr = new Array([1,3,4,5]);
console.log(arr);
//12. akn object k to amra js a cars likhe curly braces ba new Array() use kore banacci. kinu aigula ashole "new" use korle bar {} use korle kno hocce? -> nishcoy ai kno howar reason er pichone nishchoy akta structure ace. apni jodi new Array() er jaigai new Arr likhen taile to notun array obj create hobe na. Tar mane atar akta blueprint ba structure ace jta follow kore ai object gula  create hocce. tar mane apni akta specific rule follow korle akta object banaite parben. J specific rule ba structure a apnake object banaite hobe shei object blueprint ta k bola hoi class.

//13. Taile class hocce akta object bananor blueprint.Orthad oi class er object create korle oi object ki ki property and method thakbe sheta bole dewa takhe. Jemonta Array object a ki ki thabe shetar jonno aghe teke Array er akta class define kora ace.

//14. Now lets create a class:

class Car{
    constructor(brand){//15. amn akta function jta Car er instance create howar somoy call a parameter nite pare.
        this.brand = brand;// just for knowladge: arrow function a this keyword kaj kore na.
    }
    drive(){
        console.log('Driving'); 
    }
}
const car1=new Car("Toyota");
console.log(car1); 

//16. Akta class er object banano chara apni oi class er property ba method k access korte parben an.

class Car2{
    constructor(brand){
        this.brand = brand;
    }
    static drive(){
        console.log("Driving");  
    }
}

//17.akn jodi amra Car.drive() k call kore tahole drive function k access korte parbo. cause amra static koreci function ta k. Tahole without creating an object amra jodi kono Class er property ba method k access korte chai tahole amader k oi property ba method k static banate hobe.
Car2.drive();

//18. Tahole akn question hocce ai static er use case ki ba jibone ki kaje lagbe amer ata? -> Jemon doren apni akta class banailen. And object banabe kara?-> end user ra. Jei user ra amr customer tarai to account create er somoy oi class take use kore kore object banabe. Oi object then database a store hobe. Ba oi object ami onno jaigai o use korte parbo. Jehetu static method/propeties er kaj amra object na baniye dekte pari. Real lifer j class er method/properties gula hobe shegulato onk boro boro kaj korbe. Tahole object banano charai amra jodi method/property gula k test korte chai shekhetre amra static use korte pari. [R o use case janar jonno Prerecorded video repo er static topic er commit ta dekhe naw.]

const car3 = new Car2("Range Rover"); //19. ami j aikhane new likhe Car2() k call korle j notun object create hocee, kivabe ki hocce, kothai ki taktece, sheta amk chinta korte hocce na. Tahole aikhaner user complexity teke dhure ace.Taile aikhane amader Abstraction er uddesho fullfill hoyce. eki sathe Car2 class a kicu property and method ace. and method ta oi property gula k use korbe. And propety r method eksathe {} er moddhe bind kora ace tar mane ata encapsulation er concept k achieve kore.

//20. Now lets learn inheritance:

/*
class Animal{
    constructor(name){
        this.name = name;
    }
}

class Dog {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
}

const cow = new Animal("Tom");
const dog = new Dog("Jerry");*/ //21. Dog and Animal class er moddhe similarity ace.But Dog er akta porperty beshi ace. Ami chacchi Dog class Animal er j name property ace ota inherit kore niye ashuk. Jate Dog a amr aber name property set korte na hoi,and redundant na hoi. tahole amader k ai j inherit korbe shetar jonno syntax hobe : class child extends parent{}

/*
class Animal{
    constructor(name){
        this.name = name;
    }
}

class Dog extends Animal { //22. akn Dog Animal class er children.
    constructor(name, breed){
        //23. Akn Animal class a amra j propertyta likhci sheta use korer jonno super keyword use korte hobe.
        super(name)
        this.breed = breed;
    }
}

const ani = new Animal("hello");
const tom = new Dog("Jerry","Golden");
console.log(ani);
console.log(tom)

*/

/*24: output:
Animal { name: 'hello' }
Dog { name: 'Jerry', breed: 'Golden' } aikhane amra 2ta property pacci. Amra kintu Dog class this.name = name likhi nai. Automatic ata  or Parent Animal teke inherit korlo. Akivabe function k o inherit korte pare.

*/


/*
class Animal{
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log("meu meu");   
    }
}

class Dog extends Animal { 
    constructor(name, breed){
        super(name)
        this.breed = breed;
    }
   
}

const ani = new Animal("hello");
const tom = new Dog("Jerry","Golden");
console.log(ani);
console.log(tom)
tom.sound(); */ //25: as you can see amra inherit korle paren class er method o access peye jai.

class Animal{

    sound(){
        console.log("meu meu");   
    }
}

class Dog extends Animal { 
    sound(){
        console.log("gehu gehu");   
    }
   
}

const tom = new Dog();

//26. akn jodi amra tom.sound() k call kori tahole child er sound() call hobe.
tom.sound();//27. o/p: gehu gehu . Tahole aikhane jta hocce same name er function parent and child 2tatei ace jgula aber different kaj kore. Jokon amra child er obj create kore oi obj teke sound() k call korci tokon childer sound() call hocce. Tahole akhane jta hocce sheta holo dog to animal er sound() k first a inherit korce korer por abr dog class sound() k notun kore define korce. tai jokoni amra child er obj create kore sound k call korci tokon childer sound() e call hocce. and atakei bolteci amra function overriding. kar khetre ? -> inheritance er khetre method overriding. and atai polymorphisom cause sound() er 2ta binno rup dekhte pacci.Parent class a ekrokom and child class a r ekrokom.