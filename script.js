
    constructor(r, phi, fx, fy) {
        this.radius = r || 200;
        this._phi = phi || 0;
        this._frequencyX = fx || 1;
        this._frequencyY = fy || 1;
        this.pointNum = 360 * 3;
    }

    get phi() {
        return this._phi;
    }

    get frequencyX() {
        return this._frequencyX;
    }

    get frequencyY() {
        return this._frequencyY;
    }

    set phi(value) {
        this._phi = value;
    }

    set frequencyX(value) {
        this._frequencyX = value;
    }

    set frequencyY(value) {
        this._frequencyY = value;
    }

    show() {
        stroke(255, 255, 255);
        strokeWeight(2);
        noFill();
        beginShape();
        for (let i = 0; i < this.pointNum; i++) {
            let angle = map(i, 0, this.pointNum, 0, TWO_PI);
            let x = cos(angle * this.frequencyX + radians(this.phi)) * this.radius;
            let y = sin(angle * this.frequencyY) * this.radius;
            vertex(x, y);
        }
        endShape();
    }

}
