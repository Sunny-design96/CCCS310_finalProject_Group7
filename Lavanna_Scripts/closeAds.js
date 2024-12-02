//Close Ads
//Get ad elements by their class "closeAds" and add them to a constant
document.getElementById("closeAds").addEventListener("click", () => {
  const ads = document.querySelectorAll(".ads");
  console.log(ads);
  //loop through constant and close each ad
  ads.forEach((ad) => {
    ad.style.display = "none";
  });

  console.log("All ads have been hidden.");
});
