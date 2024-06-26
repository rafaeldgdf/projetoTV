import { Televisao } from './Televisao';
import * as readlineSync from 'readline-sync';

class ControleRemoto {
    private televisao: Televisao;

    constructor() {
        this.televisao = new Televisao();
    }

    public exibirMenu(): void {
        let opcao: number;

        do {
            console.log("\nControle Remoto - Menu:");
            console.log("1. Ligar/Desligar TV");
            console.log("2. Alterar Canal");
            console.log("3. Aumentar Volume");
            console.log("4. Diminuir Volume");
            console.log("5. Ligar/Desligar Internet");
            console.log("6. Silenciar TV (Mudo)");
            console.log("7. Mostrar Status da TV");
            console.log("8. Sair");
            opcao = readlineSync.questionInt("Escolha uma opcao: ");

            switch (opcao) {
                case 1:
                    this.alterarLigar();
                    break;
                case 2:
                    this.alterarCanal();
                    break;
                case 3:
                    this.aumentarVolume();
                    break;
                case 4:
                    this.diminuirVolume();
                    break;
                case 5:
                    this.alterarLigarInternet();
                    break;
                case 6:
                    this.silenciarTv();
                    break;
                case 7:
                    this.mostrarStatus();
                    break;
                case 8:
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opcao invalida! Tente novamente.");
            }
        } while (opcao !== 8);
    }

    private alterarLigar(): void {
        this.televisao.setLigar(!this.televisao.isLigar());
        console.log(`A TV foi ${this.televisao.isLigar() ? 'ligada' : 'desligada'}.`);
    }

    private alterarCanal(): void {
        if (this.televisao.isLigar()) {
            const canal = readlineSync.questionInt("Digite o numero do canal: ");
            this.televisao.setCanal(canal);
            this.televisao.mostrarCanal();
        } else {
            console.log("A TV está desligada.");
        }
    }

    private aumentarVolume(): void {
        this.televisao.aumentarVolume();
        this.televisao.mostrarVolume();
    }

    private diminuirVolume(): void {
        this.televisao.diminuirVolume();
        this.televisao.mostrarVolume();
    }

    private alterarLigarInternet(): void {
        if (this.televisao.isLigar()) {
            this.televisao.setLigarInternet(!this.televisao.isLigarInternet());
            console.log(`A Internet da TV foi ${this.televisao.isLigarInternet() ? 'ligada' : 'desligada'}.`);
        } else {
            console.log("A TV está desligada.");
        }
    }

    private mostrarStatus(): void {
        this.televisao.statusTv();
        this.televisao.statusInternet();
        this.televisao.mostrarCanal();
        this.televisao.mostrarVolume();
    }

    private silenciarTv(): void {
        this.televisao.mudo();
        this.televisao.mostrarVolume();
    }
}

const controleRemoto = new ControleRemoto();
controleRemoto.exibirMenu();
