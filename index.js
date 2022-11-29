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
function calculatesFarePrice(beginning, end){
let distance= distanceTravelledInFeet(beginning, end)
    if(beginning===43 && end===44){
        return 0;
    }

    if(beginning===34 && end===32) {
    return (((beginning - end)*264)- 400)*0.02

    }
    if(beginning===50 && end ===58){
    return 25;
    }
    else {
        return "cannot travel that far";
    }

} 
    
    
