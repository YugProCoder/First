var reason=["Trees provide shade" , "Trees give oxygen" , "Trees provide fruits" , "Trees provide natural medcine"]
var images=["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.architectureanddesign.com.au%2Fnews%2Fsydney-set-to-branch-out-with-5-million-new-trees&psig=AOvVaw0ZmhBPnTnl8ad46ST3_Vbn&ust=1628990797779000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD-tOCtr_ICFQAAAAAdAAAAABAI" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruce.com%2Fthe-difference-between-trees-and-shrubs-3269804&psig=AOvVaw0ZmhBPnTnl8ad46ST3_Vbn&ust=1628990797779000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD-tOCtr_ICFQAAAAAdAAAAABAO" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gardeningknowhow.com%2Fornamental%2Ftrees%2Ftgen%2Fhardwood-tree-information.htm&psig=AOvVaw0ZmhBPnTnl8ad46ST3_Vbn&ust=1628990797779000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD-tOCtr_ICFQAAAAAdAAAAABAU" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fextension.unh.edu%2Fblog%2Ffall-good-time-plant-trees-and-shrubs&psig=AOvVaw0ZmhBPnTnl8ad46ST3_Vbn&ust=1628990797779000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD-tOCtr_ICFQAAAAAdAAAAABAa"]
var i=0
function Pia() {
  document.getElementById("Dad").innerHTML=reasons[i];
  document.getElementById("Ko").src=images[i];
  i++;
  document.getElementById("Aud").play();
}