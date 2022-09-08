import geraCPF from './assets/modules/geraCPF'

import './assets/css/modelo.css'
import GeraCPF from './assets/modules/geraCPF';

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovo();
})()