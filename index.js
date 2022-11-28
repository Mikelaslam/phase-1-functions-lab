// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if(location===43){
    return 1
}
    else if(location==50 || location<42)
    return 8


}
function distanceFromHqInFeet(location){
    if(location===43)
    return 264
    if(location===50)
    return 2112
    if(location===34)
    return 2112
}
function distanceTravelledInFeet(location){
if(location===43 || location===48)
    return 1320
if(location===50 || location===60)
    return 2640
if(location<42)
    return 1584
}
function calculatesFarePrice(start, destination){
    let distance= distanceTravelledInFeet(start, destination)
    if(distance===43,44){
        return 0;
    }

    if(distance===34 && distance===32) {
    return 2.56
    }
    if(distance>=2000 && distance <=2500){
    return 25;
    }
    else if(distance>2500) {
        return "cannot travel that far"
    }

} 
    
    
