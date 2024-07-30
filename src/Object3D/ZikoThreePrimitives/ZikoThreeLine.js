import { 
    Line,
    BufferGeometry,
    LineBasicMaterial,
    LineDashedMaterial
 } from "three";
import { __ZikoThreeMLP__ } from "./__ZikoThreeMLP__";
class ZikoThreeLine extends __ZikoThreeMLP__{
    constructor(X,Y,Z){
        super();
        let points = [X,Y,Z].map(pts=>new THREE.Vector3(...pts));
        let geometry = BufferGeometry().setFromPoints(points);
        this.element = Line(geometry);
    }
    useLineBasicMaterial(){
        this.element.material=new LineBasicMaterial(this.cache.materialAttributes);
        return this;
    }
    useLineDashedMaterial(){
        this.element.material=new LineDashedMaterial(this.cache.materialAttributes);
        return this;
    }
}
const line3=(X,Y,Z=new Array(X.length).fill(0))=>new ZikoThreeLine(X,Y,Z)
export{
    ZikoThreeLine,
    line3
}