export class Televisao {
    private ligar: boolean;
    private canal: number;
    private volume: number;
    private ligarInternet: boolean;

    constructor(ligar: boolean = false, canal: number = 0, volume: number = 0, ligarInternet: boolean = false) {
        this.ligar = ligar;
        this.canal = canal;
        this.volume = volume;
        this.ligarInternet = ligarInternet;
    }

    public isLigar(): boolean {
        return this.ligar;
    }

    public setLigar(ligar: boolean): void {
        this.ligar = ligar;
    }

    public getCanal(): number {
        return this.canal;
    }

    public setCanal(canal: number): void {
        if (this.ligar) {
            this.canal = canal;
        } else {
            console.log("Não é possível mudar o canal. A TV está desligada.");
        }
    }

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(volume: number): void {
        if (this.ligar) {
            this.volume = volume;
        } else {
            console.log("Não é possível alterar o volume. A TV está desligada.");
        }

        if (this.volume > 100) {
            console.log("A TV está no volume máximo!");
            this.volume = 100;
        }
    }

    public isLigarInternet(): boolean {
        return this.ligarInternet;
    }

    public setLigarInternet(ligarInternet: boolean): void {
        if (this.ligar) {
            this.ligarInternet = ligarInternet;
        } else {
            console.log("Não é possível alterar a internet. A TV está desligada.");
        }
    }

    public statusTv(): void {
        if (this.ligar) {
            console.log("Televisão ligada.");
        } else {
            console.log("Televisão desligada.");
        }
    }

    public statusInternet(): void {
        if (this.ligarInternet) {
            console.log("Internet ligada.");
        } else {
            console.log("Internet desligada.");
        }
    }

    public aumentarVolume(): void {
        if (this.ligar) {
            if (this.volume + 5 > 100) {
                this.volume = 100;
                console.log("A TV está no volume máximo!");
            } else {
                this.volume += 5;
            }
        } else {
            console.log("Não é possível aumentar o volume. A TV está desligada.");
        }
    }

    public diminuirVolume(): void {
        if (this.ligar) {
            if (this.volume - 5 < 0) {
                this.volume = 0;
                console.log("A TV já está no mudo!");
            } else {
                this.volume -= 5;
            }
        } else {
            console.log("Não é possível diminuir o volume. A TV está desligada.");
        }
    }

    public mudo(): void {
        if (this.ligar) {
            this.volume = 0;
            console.log("A TV foi silenciada.");
        } else {
            console.log("Não é possível silenciar a TV. A TV está desligada.");
        }
    }

    public mostrarVolume(): void {
        console.log("Volume: " + this.getVolume());
    }

    public mostrarCanal(): void {
        console.log("Canal: " + this.getCanal());
    }
}
