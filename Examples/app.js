//CLASS

class Kisi{
    constructor(ad,  dogumYili){
        this.ad = ad;
        this.dogumYili = dogumYili;
    }
    yasHesabla(){
        let tarih = new Date().getFullYear()
        return tarih-this.dogumYili; 
    }

}

class Ogrenci extends Kisi{
    constructor(ad,dogumYili,okulNumarasi){
        super(ad,dogumYili);
        this.okulNumarasi=okulNumarasi
    }

}