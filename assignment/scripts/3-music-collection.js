console.log("***** Music Collection *****");
collection = [];

function addToCollection(title, artist, yearPublished) {
  let tempCollection = {
    title: `${title}`,
    artist: `${artist}`,
    yearPublished: `${yearPublished}`,
  };
  collection.push(tempCollection);
  console.log(collection);
}
console.log(collection);

addToCollection("Little Sunshine", "Ghost", 2022);
addToCollection("Holy Roller", "Spirit Box", 2020);
addToCollection("Pices", "Jinjer", 2016);
addToCollection("Cold Like War", "We Came As Romans", 2017);
addToCollection("Voices in My Head", "Falling in Reverse", 2022);
addToCollection("Toxic", "Lauren Babic", 2019);

function showCollection(arrayParam) {
  console.log(arrayParam.length);
  for (let songs of arrayParam) {
    console.log(
      `${songs.title} by ${songs.artist} published in ${songs.yearPublished}`
    );
  }
}
showCollection(collection);

//
function findByArtist(artistString) {
  artistArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artistString) {
      artistArray.push(collection[i]);
      console.log(artistArray);
    }
  }
}
findByArtist("Lauren Babic");
findByArtist("Jimmy Buffett");
