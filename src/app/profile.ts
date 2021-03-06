export class ProfileBase {
    constructor(
        public units: string,
        public weight: number,
        public weightfinal: number,
        public heightfeet: number,
        public heightinches: number,
        public height: number,
        public abdomen: number,
        public abdomenfinal: number,
        public waist: number,
        public waistfinal: number,
        public neck: number,
        public neckfinal: number,
        public gender: string,
        public fatperbase: number,
        public fatmod1: number,
        public fatmod2: number,
        public mencirc: number,
        public menheight: number,
        public womencirc: number,
        public womenheight: number,
        public finalfatper: number,
        public finalfatmass: number,
        public finalleanmass: number,
        public actmod: number,
        public goalmod: number,
        public goaltype: string,
        public acttype: string,
        public weightcal: number,
        public cardiocal: number,
        public weightmin: number,
        public cardiomin: number,
        public proteincal: number,
        public carbcal: number,
        public fatcal: number,
        public proteingram: number,
        public carbgram: number,
        public fatgram: number,
        public proteinratio: number,
        public proteinratiom: number,
        public proteinratiofinal: number,
        public bmr: number,
        public tef: number,
        public tdee: number,
        public weightcaltotal: number,
        public cardiocaltotal: number,
        public calgoalbase: number,
        public calgoalex: number,
        public proteincaltotal: number,
        public proteinper: number,
        public proteinperex: number,
        public carbcaltotal: number,
        public carbper: number,
        public carbperex: number,
        public fatcaltotal: number,
        public fatcalextotal: number,
        public fatgramex: number,
        public fatper: number,
        public fatperex: number,
        public proteinratiotemp: number,
        public tdeetemp: number,
        public proteinpertemp: number,
        public carbpertemp: number,
        public fatpertemp,
        public initialcalc, ) {}
}