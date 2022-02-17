import Band from "./band";


export default class BandList{
    private bands: Band[];

    constructor(){
        this.bands =[
            new Band('Metallica'),
            new Band('Crumb'),
            new Band('Los Tigres del norte')
        ]
    }

    addBand(name){
        const newBand = new Band(name)
        this.bands.push(newBand)
        return this.bands
    }

    removedBand( id ){
        this.bands = this.bands.filter(band => band.id !== id)

    }

    getBandList(){
        return this.bands
    }

    incrementVotes(id){
        this.bands = this.bands.map(band=>{

           if(band.id === id ){
               band.votes += 1
           }
           return band

        })
    }

}