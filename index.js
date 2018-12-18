
function BoardMember(name,homestate,training){
  this.name = name
  this.homeState = homestate
  this.training = training
  this.veto = () => "No, I must disagree"
  this.approve = () => "You can do that!"
  this.doCharity = () =>"I like to help people."
  this.releasePressStatement=function(){
    return "You will see great things from Scuber."
  }
  this.sayHi= function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}
