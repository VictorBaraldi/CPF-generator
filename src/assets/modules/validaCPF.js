export default class ValidaCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable:true,
            get: function() {
                return cpf.replace(/\D+/g, '');
            }
        })
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // repete o primeiro caracter 11 vezes
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.sequencia()) return false;
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
        const novoCpf = cpfParcial + digito1 +digito2;
        if (novoCpf === this.cpfLimpo) {
            console.log('CPF correto');
        }else {console.log('CPF incorreto');}
    }
    
    static criaDigito(cpf){
        const cpfArray = Array.from(cpf);

        let contador = cpfArray.length + 1;
        const soma = cpfArray.reduce(function(acumulador,valor){
            acumulador += contador * Number(valor);
            contador--;
            return acumulador;
        },0)
        const digito = 11 - (soma % 11);
        return digito >9 ? '0' : String(digito);

    }
}

