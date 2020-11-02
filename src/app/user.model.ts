
export class User {

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public created_at: Date
    ) { }

    /**
     * Total days as logged user
     */
    public getDaysAsUser() {
      let today = new Date();
      let signUpDate = new Date(this.created_at);
      let diffDays = this.dateDiffInDays(signUpDate,today);
      console.log('DIFF DAYS = '+diffDays);
      return diffDays;
    }

    public dateDiffInDays(a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    /**
     * greeting
     */
    public greeting() {
      return 'Bienvenido '+this.name;
    }
}
