class Model {
  //write your code here
//   constructor(senderName, recieverName, emailTitle) {
//     this.senderName = senderName;
//     this.recieverName = recieverName;
//     this.emailTitle = emailTitle;
//   }
  getSenderName() {
    return this.senderName;
  }
  getRecieverName() {
    return this.recieverName;
  }
  getEmailTitle() {
    return this.emailTitle;
  }
  setSenderName(senderName) {
    this.senderName = senderName;
  }
  setRecieverName(recieverName) {
    this.recieverName = recieverName;
  }
  setEmailTitle(emailTitle) {
    this.emailTitle = emailTitle;
  }
}

class View {
  constructor() {
    this.presenter = null;
  }

  registerWith(presenter) {
    this.presenter = presenter;
  }

  sendEmail(to, fromWhom, emailTitle) {
    //write code here
    this.presenter.sendEmail(to, fromWhom, emailTitle);
  }

  displayEmailInfo(senderName, recieverName, emailTitle) {
    console.log(
      "Email From: " +
        senderName +
        " To: " +
        recieverName +
        " Title: " +
        emailTitle
    );
  }
}

class Presenter {
  constructor(view) {
    this.view = view;
    this.model = null;
  }

  setModel(model) {
    //write code here
    this.model = model;
  }

  getView() {
    //write code here
    return this.view;
  }

  sendEmail(to, fromWhom, emailTitle) {
    //write your code here
    this.setModel(new Model(to, fromWhom, emailTitle));
    this.updateView();
  }

  updateView() {
    this.view.displayEmailInfo(
      this.model.getSenderName(),
      this.model.getRecieverName(),
      this.model.getEmailTitle()
    );
  }
}
