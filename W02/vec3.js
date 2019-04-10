// Constructor
Vec3 = function( x,y,z )
{
    this.x = x;
    this.y = y;
    this.z = z;
}

// Add method
Vec3.prototype.add = fnction( v )
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}


// Sum method
Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

// Min method
Vec3.prototype.min = function()
{
    var min;
    min = this.x;
    if(min>this.y)
	min = this.y;
    if(min>this.z)
	min = this.z;
    return min;
}

// Mid method
Vec3.prototype.mid = function()
{
    var min;
    min = this.x;
    if(min>this.y)
	min = this.y;
    if(min>this.z)
	min = this.z;
    var max;
    max = this.x;
    if(max<this.y)
	max = this.y;
    if(max<this.z)
	max = this.z;
    return max;
    if(this.x >= min && this.x <= max)
	return this.x;
    else if(this.y >= min && this.y <= max)
	return this.y;
    else
	return this.z;
    
}

// Max method
Vec3.prototype.max = function()
{
    var max;
    max = this.x;
    if(max<this.y)
	max = this.y;
    if(max<this.z)
	max = this.z;
    return max;
}
