// Constructor
Vec3 = function( x,y,z )
{
    this.x = x;
    this.y = y;
    this.z = z;
}

// Add method
Vec3.prototype.add = function( v )
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

// Mid methodVec3.prototype.mid = function()
Vec3.prototype.mid = function()
{
    var min;
    var mindata;
    min = this.x;
    mindata = 1;
    if(min>this.y){
        min = this.y;
	mindata = 2;
    }
    if(min>this.z){
        min = this.z;
	mindata = 3;
    }
    
    var max;
    var maxdata;
    max = this.z;
    maxdata = 3;
    if(max<this.y){
        max = this.y;
	maxdata = 2;
    }
    if(max<this.x){
        max = this.x;
	maxdata = 1;
    }
    
    switch ( mindata )
	{
	case 1:
	    switch ( maxdata )
		{
		case 2:
		    return this.z;
		    break;
		case 3:
		    return this.y;
		    break;
		}
	    break;
	case 2:
            switch ( maxdata )
                {
                case 1:
                    return this.z;
                    break;
                case 3:
                    return this.x;
                    break;
                }
            break;
	case 3:
            switch ( maxdata )
                {
                case 1:
                    return this.y;
                    break;
                case 2:
                    return this.x;
                    break;
                }
            break;
	}
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
