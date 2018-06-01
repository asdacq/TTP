class Photo{
    constructor(fileName, location){
        this.fileName = fileName;
        this.location = location;
    }
}

class Album{
    constructor(){
        this.photos = [];
    }
    print(){
        for(var i = 0; i < this.photos.length; i++){
            console.log(this.photos[i].fileName + " " + this.photos[i].location);
        }
    }

    add(Photo){
        this.photos.push(Photo);    
    }
    
    access(number){
        return this.photos[number];
    }
}

a =  new Album();
p1 = new Photo("number1", "location1");
p2 = new Photo("number2", "location2");
p3 = new Photo("number3", "location3");
p4 = new Photo("number4", "location4");
p5 = new Photo("number5", "location5");

a.add(p1);
a.add(p2);
a.add(p3);
a.add(p4);
a.add(p5);

a.print();
console.log(a.access(1));

