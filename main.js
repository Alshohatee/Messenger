//user needs to be able to send mesagess
// messages need to be stored somewhere
// need to be able to read individual messages

// classes starts with capital letter
// 95% of the times are singular in names
/*
let inbox = []
class Message {
  constructor (content){ // gives ys the keyword new (new kwy word and tis are tight together)
    this.content = content
    console.log('new message created!');
    inbox.push(this)
  }
}

let msg1 = new Message('This is the first message');
let msg2 = new Message('This is the second message');




// any object based on a class is called an instance
// an instance represents one objcet based on the class names
*/

//user needs to be able to send mesagess
// messages need to be stored wither user they belong
// need to be able to read individual messages
//user.inbox --> that person's message
//user.sendMessage
var d = new Date();
class User {
  constructor(name){
    this.name= name
    this.blockList = []
    this.inbox = []



  }
  sendMessage (receiver, content){
    if (receiver.blockList.includes(this)) return "you are blocked"
    for(let blc of this.blockList){
    let msg = new Message(receiver, content)
      if (blc == receiver)
      receiver.inbox.push(msg)

    }

    return `Your message to ${receiver} has been sent`

  }
 readMessage(i) {
   // this.readMessageArr[i] = true
   this.inbox[i].seen = true
    this.inbox[i].timeRead = new Date()
   return this.inbox[i];


   // this.isRead = 1;
 }
 // isReadMessage(i){
 //   if (this.readMessageArr[i] == true){
 //     return true;
 //   }else {
 //   return false;
 //   }
 // }
 //  timeReadfunc(i){
 //    if(this.readMessageArr[i] == true){
 //      return timeRead[i]
 //    }else {
 //      return "has not been read"
 //    }


  // }

  viewUnread(){
    let unread = []
    for(msg of this.indox){
      if(mes.seen === false){
        unread.push(msg)
        console.log(msg.content);
      }
    }
    return unread
  }


  viewRead(){
    let read = []
    for(msg of this.indox){
      if(mes.seen === true){
        read.push(msg)
        console.log(msg.content);
      }
    }
    return read
  }

  blocking(user){
      this.blockList.push(user);

  }
}

class Message {
  constructor( receiver, content){
    this.receiver = receiver
    this.content = content
    this.seen = false;
    this.timeRead = new Date()
  }
}

let user1 = new User('Michael')
let user2 = new User('Aseel')





// classes starts with capital letter
// 95% of the times are singular in names
