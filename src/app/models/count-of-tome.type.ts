export class CountOfTime {
    total: number = 0;
    days: number = 0;
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    constructor(total: number = 0) {
        if (total > 0) {
            this.total = total
            this.seconds = Math.floor((total / 1000) % 60);
            this.minutes = Math.floor((total / 1000 / 60) % 60);
            this.hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            this.days = Math.floor(total / (1000 * 60 * 60 * 24));
        }
    }

    toString(): string {
        return `${this.days} days, ${this.hours} hours, ${this.minutes} minutes, ${this.seconds} seconds`
    }

    valueOf(): number {
        return this.total.valueOf();
    }
}