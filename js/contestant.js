class Contestant{
    constructor() {}
    

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          contestantCount: count
        });
      }
    
      update(){
        var contestantIndex = "contestants/contestants" + this.index;
        database.ref(contestantIndex).set({
        });
      }
    
      static getcontestantInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
          allContestants = data.val();
        });
      }
      
    
    
}