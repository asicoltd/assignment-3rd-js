// https://github.com/asicoltd/assignment-3rd-js

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        let meter = kilometer * 1000; // 1000 meters = 1 KM
        return meter;
    }
    else {

        return "Lentgh can't be negative";
    }

}

function budgetCalculator(Clock, Mobile, Laptop) {
    if (Clock >= 0 && Mobile >= 0 && Laptop >= 0) {
        let sum = Clock * 50 + Mobile * 100 + Laptop * 500; // Price of clock, mobile and desktop are 50, 100 , 500;
        return sum;
    }
    else {
        return "Metarial amounts can't be negative";
    }
}

function hotelCost(Days) {
    if (Days > 0 && Days <= 10) {
        let fare = Days * 100;
        return fare;
    }
    else if (Days > 10 && Days <= 20) {
        let first10DayFare = 10 * 100; // First 10 day cost is fixed
        let remainingDays = Days - 10;
        let fare = remainingDays * 80 + first10DayFare;
        return fare;
    }
    else if (Days > 20) {
        let first10DayFare = 10 * 100; // First 10 days cost is fixed
        let second10DayFare = 10 * 80; // Second 20 days cost is fixed
        let remainingDays = Days - 20;
        let fare = remainingDays * 50 + first10DayFare + second10DayFare;
        return fare;
    }
    else {
        return "Days can't be negative.";
    }
}
function megaFriend(friends) {       // friends = array of string 
    let maxLenth = 0;               // string size of maximum string will be added here
    let maxName;                   // maximum char will be added here
    if (friends == null) {
        return "Array not found";
    }
    else {
        for (var i = 0; i < friends.length; i++) { 
            if (friends[i].length > maxLenth) {
                maxLenth = friends[i].length;
                maxName = friends[i];// if friends[i] have maximum char maxName will be added here
            }
        }
        return maxName;
    }
}