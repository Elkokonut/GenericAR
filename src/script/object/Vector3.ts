export default class Vector3 {
    private x: number;
    private y: number;
    private z: number;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static fromJSON({ x, y, z }: { x: number, y: number, z: number }): Vector3 {
        return new Vector3(x, y, z);
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getZ(): number {
        return this.z;
    }

    setX(x): Vector3 {
        this.x = x;
        return this;
    }

    setY(y): Vector3 {
        this.y = y;
        return this;
    }

    setZ(z): Vector3 {
        this.z = z;
        return this;
    }

    toString() {
        return `${this.x}m ${this.y}m ${this.z}m`
    }
}