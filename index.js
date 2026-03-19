//stage 1//


let artistName = "Stan Walker";
let birthYear = "1990";
let birthCity = "Hamilton";
let nationality = "New Zealand";
let genre = "R&B / Soul / Pop";
let isActive = "true";
let numberOfAlbums = "7";
let debutAlbum = "Introducing Stan Walker";
let debutYear = "2009"
let australianIdolWinner = true;

console.log(artistName);
console.log(birthYear);
console.log(birthCity);
console.log(nationality);
console.log(genre);
console.log(isActive);
console.log(numberOfAlbums);
console.log(debutAlbum);
console.log(debutYear);
console.log(australianIdolWinner);

//stage 2//

console.log(artistName + " is a " + nationality + " " + genre + " artist born in " + birthYear + ".");
console.log(`Debut album: "${debutAlbum}" - released in ${debutYear}.`);
console.log(`Australian Idol Winner: ${australianIdolWinner}`);

//stage 3//

let album1 = "Introductin Stan Walker";
let album1Year = 2009;

let album2 = "From Inside Out"
let album2Year = 2010;

let album3 = "Let the Music Play";
let album3Year = 2011;

let album4 = "Inventing Myself";
let album4Year = 2013;

let album5 = "Truth and Soul";
let album5Year = 2015;

let album6 = "Te Arohanui";
let album6Year = 2021

let album7 = "All In";
let album7Year = 2022;

console.log("---- Discography ----");
console.log(`1. ${album1} (${album1Year})`);

console.log(`2. ${album2} (${album2Year})`);

console.log(`3. ${album3} (${album3Year})`);

console.log(`4. ${album4} (${album4Year})`);

console.log(`5. ${album5} (${album5Year})`);

console.log(`6. ${album6} (${album6Year})`);

console.log(`7. ${album7} (${album7Year})`);

//stage 4 

let nzMusicAwards = 8;
let goldSinglesNZ = 6;
let platinumSinglesNZ = 4;
let topSingleNZ = "Black Box";
let waiataAwardWins = 5;
let openedForArtist = "Beyonce";

console.log(`${artistName} has won ${nzMusicAwards} New Zealand Music Awards and earned ${goldSinglesNZ}
    gold and ${platinumSinglesNZ} platinum singles in NZ. His debut single "${topSingleNZ}" topped the charts.
    He has won the Waiata Award ${waiataAwardWins} times and has opened for ${openedForArtist}.`);


//stage 5

//Undefined (declared byut no value)
let nextAlbum;
console.log(nextAlbum); //undefined

//Null (intentionality empty)
let nextAlbumReleaseDate = null;
console.log(nextAlbumReleaseDate); //nul

//difference: 
//undefined = no value has been assigned yet
// null = value is intentionally set to "nothing"

//Announcing comeback
nextAlbum = "All In";
nextAlbumReleaseDate = 2022;

console.log(nextAlbum);
console.log(nextAlbumReleaseDate);

//stage 6

//calculate years active
let currentYear = 2026;
let yearsActive = currentYear - debutYear;

//extra fact
let topFact = "Stan Walker was the first person of New Zealand decent to win Australian Idol";

console.log(`
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    ${artistName.toUpperCase()} - Artist Profile
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    Nationality             :${nationality}
    Born                    :${birthYear}
    Birthplace              :${birthCity}
    Genre                   :${genre}
    Active                  :${isActive}

    Years Active            :${yearsActive}
    Albums                  :${numberOfAlbums}
    Top Single              :${topSingleNZ}
    NZ Music Awards         :${nzMusicAwards}

    Fun Fact                :${topFact}
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    `);




