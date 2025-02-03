let katrori = { 
    emri: katror,
    gjatesia:4,
    perimetri: ()  {
        console.log(`perimetri i katrorit eshte ${ katrori.gjatesia * 4}cm`)
    },
    syprina: function () {
        console.log(`syprina e katrorit eshte ${this.gjatesia * this.gjatesia}`)
    }
};

katrori.perimetri();
katrori.syprina();