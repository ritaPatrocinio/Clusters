import {LinearClusterDetector, LinearClusterDetectorFactory} from "./LinearClusterDetector";


export class MyLinearClusterDetectorFactory implements LinearClusterDetectorFactory {
    create(spacing: number): LinearClusterDetector {
        return new MyLinearClusterDetector(spacing);
    }
}


class MyLinearClusterDetector implements LinearClusterDetector {
    constructor(readonly spacing: number) {
        if(typeof this.spacing !== "number" || 
        this.spacing<0 || 
        !isFinite(this.spacing)
        ){
            throw new Error('spacing must be a non-negative, finite, valid number')
        }
    }
    data: Array<Array<number>> = [];

    accept = (value: number): void => {
        if(typeof value !== "number" || !isFinite(value)){
            throw new Error('value is not a number')
        }
        
        const distances = this.data.map(d => Math.min(...d.map(item => Math.abs(item - value))));
        const distLen = distances.length;
        const numOfNotBelong = distances.filter(i => i > this.spacing).length;

        if (this.data.length === 0 || numOfNotBelong === distLen) {  
            // check if it's the first value to be provided or if distance between value and closest item of a cluster is bigger than spacing for all clusters (value doesn't belong to any cluster)
            this.data.push([value]);
            }
        else if (numOfNotBelong === distLen-1) {  // check if only blongs to one cluster
            for(let i=0; i<distLen; i++){
                if(distances[i] > this.spacing){
                    this.data[i].push(value);
                    }
                }
            }
        else {  // blongs to two clusters
            let a=null;
            let b=null;
            for(let i=0; i<distLen; i++){
                if(distances[i] <= this.spacing && a===null){
                    a=i;
                    }
                if(distances[i] <= this.spacing && a!==null && i!==a){
                    b=i;
                    }
                }
            if(a!==null && b!==null){
                this.data[a].push(...this.data[b]);
                this.data[a].push(value);
                this.data.splice(b,1);
                }
            }
        }

    clusterCount = (): number => {
        return this.data.length;
    }
    // to test the structure cluster data
    cluster = (): Array<Array<number>> => {
        return this.data;
    }
}


