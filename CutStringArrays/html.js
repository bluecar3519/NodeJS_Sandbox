class Html{

    constructor(prefix, infix){

        this.prefix = prefix;
        this.infix = infix;
    }

    getPrefix(){return this.prefix;}
    setPrefix(val){this.prefix = val;}

    getInfix(){return this.infix;}
    setInfix(val){this.infix = val;}


    toArray(data){

        var table = new Array();
        table.push(this.prefix);

        for (var element of data) {

            table.push(this.infix + element + this.createBackTag(this.infix) );
        }
        table.push(this.createBackTag(this.prefix));

        return table;

    }

    createBackTag(frontTag){

        var backTag = frontTag.split('');
        backTag.splice(1,0,'/');

        var result = '';

        backTag.forEach( element => result = result + element);

        return result;

    }
    
}

module.exports = Html;
