function Base(name) {
    this.name = name;
}

Base.prototype.displayName = function () {
    console.log(this.name);
}

function Derived(name, label) {

    Base.call(this, name);
    this.label = label;
}

Derived.prototype = Object.create(Base.prototype);

Derived.prototype.diplayLabel = function () {
    console.log(this.label);
}

var obj = new Derived("lucky", "luckyyadav-label");
obj.displayName();
obj.diplayLabel();

console.log(obj instanceof Derived);
console.log(obj instanceof Base);

